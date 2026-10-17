import { NextResponse } from "next/server";
import { google } from "googleapis";
import { AVAILABILITY_MONTHS } from "@/lib/availability";

/**
 * Cache the response for 5 minutes.
 *
 * Without this, the route is public, unauthenticated and uncached, so every
 * anonymous page view turns into a live Google Calendar API call. That maps
 * ordinary traffic 1:1 onto a quota-limited third-party API and lets anyone
 * exhaust it — and because the route fails open (see the catch below), an
 * exhausted quota would present every booked date as available.
 *
 * Bookings are confirmed over WhatsApp anyway, so 5 minutes of staleness costs
 * nothing next to the protection it buys.
 */
export const revalidate = 300;

/**
 * GET /api/calendar
 *
 * Fetches events from Google Calendar via Service Account and returns
 * only an array of blocked date strings (YYYY-MM-DD). No sensitive
 * guest data ever reaches the browser.
 *
 * `stale: true` means availability could not be determined. The client must
 * surface that instead of treating the empty list as "everything is free".
 */
export async function GET() {
  try {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!clientEmail || !privateKey || !calendarId) {
      // Credentials not configured — availability is unknown, not "all free".
      console.error(
        "Calendar API: missing GOOGLE_CLIENT_EMAIL / GOOGLE_PRIVATE_KEY / GOOGLE_CALENDAR_ID",
      );
      return NextResponse.json({ blockedDates: [], stale: true });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    const now = new Date();
    const horizon = new Date(now);
    horizon.setMonth(horizon.getMonth() + AVAILABILITY_MONTHS);

    // Every page of results, not just the first. The calendar holds room
    // bookings as well as whole-property ones, and only the latter count
    // below; a single capped page could cut off an "integral" booking and
    // show its days as free.
    const events = [];
    let pageToken: string | undefined;
    do {
      const response = await calendar.events.list({
        calendarId,
        timeMin: now.toISOString(),
        timeMax: horizon.toISOString(),
        maxResults: 2500,
        singleEvents: true,
        orderBy: "startTime",
        pageToken,
      });
      events.push(...(response.data.items ?? []));
      pageToken = response.data.nextPageToken ?? undefined;
    } while (pageToken);

    const blocked = new Set<string>();

    for (const event of events) {
      // Filtrăm doar evenimentele care conțin "integral" în titlu
      const summary = event.summary?.toLowerCase() || "";
      if (!summary.includes("integral")) {
        continue;
      }

      const isAllDay = !!event.end?.date;
      const startStr = event.start?.date ?? event.start?.dateTime?.slice(0, 10);
      const endStr = event.end?.date ?? event.end?.dateTime?.slice(0, 10);
      if (!startStr || !endStr) continue;

      // Walk each day in the event range and mark as blocked
      const cursor = new Date(startStr);
      const endDate = new Date(endStr);
      
      // Pentru evenimente cu oră (timed events), ziua de final reprezintă tot
      // o noapte de cazare în convenția pensiunii (ex: 24-25 înseamnă ieșire pe 26).
      // Așadar, adăugăm o zi la endDate pentru a include și ultima zi în blocaj.
      if (!isAllDay) {
        endDate.setDate(endDate.getDate() + 1);
      }

      while (cursor < endDate) {
        blocked.add(cursor.toISOString().slice(0, 10));
        cursor.setDate(cursor.getDate() + 1);
      }
    }

    return NextResponse.json({ blockedDates: [...blocked], stale: false });
  } catch (error) {
    console.error("Calendar API error:", error);
    // Fail open on the data, but flag it: the client shows a "confirm with us"
    // notice rather than presenting booked dates as available.
    return NextResponse.json({ blockedDates: [], stale: true });
  }
}
