import { NextResponse } from "next/server";
import { google } from "googleapis";

/**
 * GET /api/calendar
 *
 * Fetches events from Google Calendar via Service Account and returns
 * only an array of blocked date strings (YYYY-MM-DD). No sensitive
 * guest data ever reaches the browser.
 */
export async function GET() {
  try {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!clientEmail || !privateKey || !calendarId) {
      // Credentials not configured yet — return empty
      return NextResponse.json({ blockedDates: [] });
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
    const sixMonthsLater = new Date(now);
    sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);

    const response = await calendar.events.list({
      calendarId,
      timeMin: now.toISOString(),
      timeMax: sixMonthsLater.toISOString(),
      maxResults: 250,
      singleEvents: true,
      orderBy: "startTime",
    });

    const events = response.data.items ?? [];
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

    return NextResponse.json({ blockedDates: [...blocked] });
  } catch (error) {
    console.error("Calendar API error:", error);
    return NextResponse.json({ blockedDates: [] });
  }
}
