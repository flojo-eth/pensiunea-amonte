/**
 * How far ahead the booking calendar shows availability, in months.
 *
 * Shared by /api/calendar (how far it reads Google Calendar) and by
 * BookingCalendar (how far a visitor can browse), so the two cannot drift:
 * a month the API never read would show every booked day as free.
 */
export const AVAILABILITY_MONTHS = 12;
