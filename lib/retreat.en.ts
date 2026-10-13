// English content for /en/corporate-retreat, the counterpart of lib/retreat.ts
// and typed against it. Language-neutral values (RETREAT_PAGE_SOURCE,
// ROOM_CONFIG_TOTAL, NIGHT_OPTIONS) are not repeated here: pages import them
// from lib/retreat.ts in both languages.
//
// Times follow American usage (4:00 PM, 3 p.m.); distances stay in km.

import {
  gateAgenda,
  gateFaq,
  type AgendaDay,
  type FaqItem,
  type PricingLine,
  type RoomConfig,
  type Space,
} from "./retreat";

/** Pre-filled WhatsApp message for the plain CTAs (the form builds its own). */
export const RETREAT_WHATSAPP_MESSAGE =
  "Hello! I'd like an offer for a team retreat at Pensiunea Amonte.";

/** Drive times, the same figures as the Romanian ones (confirmed by Flo). */
export const DRIVE_SIBIU = "40 minutes";
export const DRIVE_AIRPORT = "50 minutes";
export const DRIVE_BRASOV = "2 hours";

// ── S6. Room configuration ───────────────────────────────────────────────────

export const ROOM_CONFIG: RoomConfig[] = [
  {
    unit: "double rooms with a balcony",
    count: "8",
    perUnit: "2",
    beds: "a double bed",
    total: "16",
    photo: "/camera-dubla-folder/poza-pat-si-camera.jpeg",
    photoLabel: "[ PHOTO: double room, bed and desk with a view ]",
    alt: "Double room with a desk and a mountain view",
  },
  {
    unit: "family studios",
    count: "2",
    perUnit: "4",
    beds: "a double bed and a sofa bed",
    total: "8",
    photo: "/apartament/canapea_extensibila_living.jpg",
    photoLabel: "[ PHOTO: family studio, set up for 4 guests ]",
    alt: "Family studio with a sofa bed",
  },
];

export const ROOM_NOTES: string[] = [
  "Every unit has its own balcony and private bathroom.",
];

// ── S3. Work spaces ──────────────────────────────────────────────────────────

export const WORKSPACES: Space[] = [
  {
    title: "Group meeting room",
    body: "The whole team fits around one table, with natural light and Wi-Fi. A dedicated space, not a dining room rearranged for the day.",
    photo: "/retreat/sala-evenimente.jpg",
    photoLabel: "[ PHOTO: meeting room set up boardroom or U-style, with the team at the table ]",
    // No capacity figure, as in Romanian: it has not been confirmed.
    alt: "The group meeting room at Pensiunea Amonte, with chairs set up for a presentation",
  },
  {
    title: "Living room with fireplace",
    body: "Where the conversation moves after the last session. Armchairs, a fire, no projector.",
    photo: "/semineu.jpeg",
    photoLabel: "[ PHOTO: lit fireplace, armchairs, evening ]",
    alt: "Living room with fireplace, an informal space for groups at Pensiunea Amonte",
  },
  {
    title: "Panoramic terrace",
    body: "A direct view of the Făgăraș Mountains. Works for breaks and, in good weather, for sessions outdoors.",
    photo: "/priveliste-fagaras.jpg",
    photoLabel: "[ PHOTO: terrace facing the mountains, a group on a break ]",
    alt: "Panoramic terrace overlooking the Făgăraș Mountains",
  },
];

// ── S4. Between sessions ─────────────────────────────────────────────────────

export const LEISURE: Space[] = [
  {
    title: "Hot tub and sauna",
    body: "Exclusive access for your group, for a fee.",
    photo: "/jacuzzi-sauna.jpeg",
    photoLabel: "[ PHOTO: spa area at sunset ]",
    alt: "Hot tub and sauna, with exclusive access for the group staying",
  },
  {
    title: "Campfire",
    body: "Where the long evenings happen. The only item on the agenda with no agenda.",
    photo: "/firepit.jpeg",
    photoLabel: "[ PHOTO: campfire in the evening, a relaxed group around it ]",
    alt: "Campfire, a group evening at Pensiunea Amonte",
  },
  {
    title: "Mini soccer and ping-pong",
    body: "The 30-minute break that resets a whole day of work.",
    photo: "/servicii-facilitati/teren-fotbal.jpeg",
    photoLabel: "[ PHOTO: small soccer field with the mountains behind ]",
    alt: "Small soccer field at Pensiunea Amonte",
  },
  {
    title: "Hikes from the valley",
    body: "Trails start right here toward Cabana Bârcaciu, Negoiu and Suru, for every level.",
    photo: "/trasee-fagaras.jpg",
    photoLabel: "[ PHOTO: mountain trail from Valea Avrigului ]",
    alt: "Hiking trails in the Făgăraș Mountains, starting from Valea Avrigului",
  },
  {
    title: "The riverside area",
    body: "Across the road, a place to relax on the riverbank.",
    photoLabel: "[ PHOTO: the riverbank across the road ]",
    alt: "A place to relax on the riverbank, across the road from the guesthouse",
  },
  {
    title: "Brambura Park",
    body: "About 10 minutes away, for outdoor group activities.",
    photo: "/brambura.jpeg",
    photoLabel: "[ PHOTO: Brambura Park ]",
    alt: "Brambura Park, group activities 10 minutes from the guesthouse",
  },
];

// ── S7. Sample agenda ────────────────────────────────────────────────────────

const AGENDA_SOURCE: AgendaDay[] = [
  {
    day: "Friday",
    label: "Arrival and first session",
    items: [
      { time: "4:00 PM", title: "Arrival and check-in", body: "Settle in at your own pace. The guesthouse is already all yours." },
      { time: "6:00 PM", title: "Opening session", body: "In the group meeting room." },
      { time: "8:00 PM", title: "Dinner", body: "A menu prepared for the whole group, at one shared table.", fnb: true },
      { time: "9:30 PM", title: "Evening at the campfire", body: "The unscripted part of the agenda." },
    ],
  },
  {
    day: "Saturday",
    label: "The working day",
    items: [
      { time: "8:30 AM", title: "Breakfast", body: "Served at the guesthouse.", fnb: true },
      { time: "10:00 AM", title: "Morning session", body: "The long block of work, with no outside interruptions." },
      { time: "1:00 PM", title: "Lunch", body: "Prepared at the guesthouse for the whole group.", fnb: true },
      { time: "3:00 PM", title: "Active break", body: "The valley, mini soccer or ping-pong." },
      { time: "4:30 PM", title: "Second session", body: "For the conversations that usually stay in the hallway." },
      { time: "7:00 PM", title: "Sauna and hot tub", body: "The spa area, reserved for your group." },
      { time: "8:30 PM", title: "Dinner", body: "Second evening, a different menu.", fnb: true },
    ],
  },
  {
    day: "Sunday",
    label: "Wrap-up and departure",
    items: [
      { time: "9:00 AM", title: "Breakfast", body: "At everyone's own pace.", fnb: true },
      { time: "10:30 AM", title: "Closing session", body: "Decisions and next steps, while everyone is still in one place." },
      { time: "12:00 PM", title: "Check-out", body: "Can be extended until 3:00 PM." },
      // Body only, like its Romanian counterpart: a meal note with its own fnb gate.
      { time: "1:00 PM", title: "", body: "Lunch (optional)", fnb: true },
    ],
  },
];

export const AGENDA = gateAgenda(AGENDA_SOURCE);

// ── S8. Pricing (hidden behind SHOW_PRICING, as in Romanian) ─────────────────

export const PRICING_LINES: PricingLine[] = [
  {
    label: "Whole-property rental",
    value: "on request, in the offer we send",
    note: "2-night minimum on weekends.",
  },
  {
    label: "Includes",
    value: "All 10 units, the group meeting room, the living room, the terrace, the campfire, the soccer field and the ping-pong table.",
  },
  {
    label: "Hot tub and sauna",
    value: "on request, in the offer we send",
    note: "Exclusive access for the group.",
  },
];

export const PRICING_FNB_LINES: PricingLine[] = [
  {
    label: "Meals",
    value: "on request, in the offer we send",
    note: "Breakfast, lunch and dinner, quoted separately from accommodation.",
  },
];

// ── S9. Booking process ──────────────────────────────────────────────────────

export const BOOKING_STEPS: { title: string; body: string }[] = [
  {
    title: "You get in touch",
    body: "On WhatsApp or through the form below. The number of people and the dates are enough to start.",
  },
  {
    title: "You get the complete offer within 24 business hours",
    body: "Availability, the room setup, an itemized total and the terms.",
  },
  {
    title: "You confirm with a deposit and a contract",
    body: "A 30% deposit and a contract with your company. We invoice your company directly.",
  },
  {
    title: "Your dates are locked in",
    body: "We never cancel a confirmed booking. Free cancellation up to 28 days before arrival for whole-property rentals.",
  },
];

// ── S11. FAQ (also emitted as FAQPage JSON-LD) ───────────────────────────────

const FAQ_SOURCE: FaqItem[] = [
  {
    q: "How many people can stay?",
    a: "Up to 24 people, in 8 double rooms and 2 family studios. For a leadership retreat, the format works best with 8 to 20 participants.",
  },
  {
    q: "Can we rent the whole guesthouse just for our team?",
    a: "Yes. A whole-property rental means you don't share the space with any other guests. We host one group at a time, so there is no half-property option.",
  },
  {
    q: "Is there a conference room?",
    a: "Yes. The group meeting room has natural light, Wi-Fi and room for the whole team around one table. It is a dedicated space, available for your entire stay, with no separate booking.",
  },
  {
    q: "How far is it from Sibiu and the airport?",
    a: "About 40 minutes (35 km) from downtown Sibiu and 50 minutes (42 km) from Sibiu Airport. Brașov is about 2 hours away (130 km). The road is open year-round.",
  },
  {
    q: "What are the check-in and check-out times for groups?",
    a: "Check-in from 3 p.m., check-out by noon, with the option to extend until 3 p.m., subject to availability.",
  },
  {
    q: "How does booking work, and what deposit is required?",
    a: "Message us on WhatsApp or use the form, get the complete offer within 24 business hours, then confirm with a 30% deposit and a contract with your company.",
  },
  {
    q: "What is the cancellation policy for groups?",
    a: "For whole-property rentals, cancellation is free up to 28 days before arrival and the deposit is refunded in full. After that, the deposit is kept.",
  },
  {
    q: "Can you invoice our company?",
    a: "Yes, we invoice companies directly, under a contract. Pensiunea Amonte is operated by Hostillo SRL.",
  },
  {
    q: "What activities can be organized on site?",
    a: "Hot tub and sauna with exclusive access for your group, a campfire, a small soccer field, a ping-pong table and hikes from the valley toward Bârcaciu, Negoiu and Suru. Brambura Park is about 10 minutes away.",
  },
  {
    q: "How far in advance should we book?",
    a: "We recommend booking 3 to 6 weeks ahead, especially for weekends in high season.",
  },
  {
    q: "Do you provide meals for the group?",
    a: "Yes. Breakfast, lunch and dinner are prepared at the guesthouse from fresh local produce, for the whole group.",
    fnb: true,
  },
  {
    q: "Do you allow pets?",
    a: "No. Bruno, the house dog, is the only one who lives here.",
  },
];

export const FAQ = gateFaq(FAQ_SOURCE);

// ── S13. Location ────────────────────────────────────────────────────────────

export const ACCESS_POINTS: string[] = [
  `Sibiu city center: ${DRIVE_SIBIU}, 35 km`,
  `Sibiu Airport: ${DRIVE_AIRPORT}, 42 km`,
  `Brașov city center: ${DRIVE_BRASOV}, 130 km`,
  "Free parking, indoor and outdoor",
  "Check-in from 3 p.m., check-out by noon, extendable until 3 p.m.",
];

// ── S5. Meals (components/FnbSection) ────────────────────────────────────────

export const FNB_ITEMS: string[] = [
  "Meals cooked by us, at the guesthouse, from fresh local produce",
  "Lunch and dinner for the whole group",
  "Coffee breaks throughout your stay",
  "One menu with many dishes, from traditional to modern, sent as a PDF with the offer",
  "A bar open to the group throughout the stay",
];
