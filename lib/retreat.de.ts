// German content for /de/firmen-retreat, the counterpart of lib/retreat.ts and
// typed against it. Language-neutral values (RETREAT_PAGE_SOURCE,
// ROOM_CONFIG_TOTAL, NIGHT_OPTIONS) are not repeated here.
//
// Formal address (Sie), as usual for a guesthouse in German. Times in the
// 24-hour format with "Uhr"; distances in km.

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
  "Hallo! Ich möchte ein Angebot für ein Team-Retreat in der Pensiunea Amonte anfragen.";

/** Drive times, the same figures as the Romanian ones (confirmed by Flo). */
export const DRIVE_SIBIU = "40 Minuten";
export const DRIVE_AIRPORT = "50 Minuten";
export const DRIVE_BRASOV = "2 Stunden";

// ── S6. Room configuration ───────────────────────────────────────────────────

export const ROOM_CONFIG: RoomConfig[] = [
  {
    unit: "Doppelzimmer mit Balkon",
    count: "8",
    perUnit: "2",
    beds: "einem Doppelbett",
    total: "16",
    photo: "/camera-dubla-folder/poza-pat-si-camera.jpeg",
    photoLabel: "[ FOTO: Doppelzimmer, Bett und Schreibtisch mit Aussicht ]",
    alt: "Doppelzimmer mit Schreibtisch und Bergblick",
  },
  {
    unit: "Familienstudios",
    count: "2",
    perUnit: "4",
    beds: "einem Doppelbett und einem Schlafsofa",
    total: "8",
    photo: "/apartament/canapea_extensibila_living.jpg",
    photoLabel: "[ FOTO: Familienstudio, eingerichtet für 4 Personen ]",
    alt: "Familienstudio mit Schlafsofa",
  },
];

export const ROOM_NOTES: string[] = [
  "Jede Einheit hat einen eigenen Balkon und ein eigenes Bad.",
];

// ── S3. Work spaces ──────────────────────────────────────────────────────────

export const WORKSPACES: Space[] = [
  {
    title: "Seminarraum für Gruppen",
    body: "Das ganze Team sitzt an einem Tisch, mit Tageslicht und WLAN. Ein eigener Raum, kein für einen Tag umgestellter Speisesaal.",
    photo: "/retreat/sala-evenimente.jpg",
    photoLabel: "[ FOTO: Raum in Boardroom- oder U-Form, das Team am Tisch ]",
    // Keine Kapazitätsangabe, wie im Rumänischen: nicht bestätigt.
    alt: "Der Seminarraum der Pensiunea Amonte, bestuhlt für eine Präsentation",
  },
  {
    title: "Wohnzimmer mit Kamin",
    body: "Hierher zieht das Gespräch nach der letzten Sitzung. Sessel, Feuer, kein Beamer.",
    photo: "/semineu.jpeg",
    photoLabel: "[ FOTO: brennender Kamin, Sessel, abends ]",
    alt: "Wohnzimmer mit Kamin, ein informeller Raum für Gruppen in der Pensiunea Amonte",
  },
  {
    title: "Panoramaterrasse",
    body: "Direkter Blick auf das Făgăraș-Gebirge. Gut für Pausen und, bei schönem Wetter, für Sitzungen im Freien.",
    photo: "/priveliste-fagaras.jpg",
    photoLabel: "[ FOTO: Terrasse mit Bergblick, Gruppe in der Pause ]",
    alt: "Panoramaterrasse mit Blick auf das Făgăraș-Gebirge",
  },
];

// ── S4. Between sessions ─────────────────────────────────────────────────────

export const LEISURE: Space[] = [
  {
    title: "Jacuzzi und Sauna",
    body: "Exklusiv für Ihre Gruppe, gegen Aufpreis.",
    photo: "/jacuzzi-sauna.jpeg",
    photoLabel: "[ FOTO: Spa-Bereich bei Sonnenuntergang ]",
    alt: "Jacuzzi und Sauna, exklusiv für die Gruppe im Haus",
  },
  {
    title: "Lagerfeuer",
    body: "Hier finden die langen Abende statt. Der einzige Programmpunkt ohne Programm.",
    photo: "/firepit.jpeg",
    photoLabel: "[ FOTO: Lagerfeuer am Abend, entspannte Gruppe ]",
    alt: "Lagerfeuer, ein Gruppenabend in der Pensiunea Amonte",
  },
  {
    title: "Kleinfeldfußball und Tischtennis",
    body: "Die 30-minütige Pause, die einen ganzen Arbeitstag neu startet.",
    photo: "/servicii-facilitati/teren-fotbal.jpeg",
    photoLabel: "[ FOTO: Kleinfeld mit den Bergen im Hintergrund ]",
    alt: "Kleinfeld-Fußballplatz der Pensiunea Amonte",
  },
  {
    title: "Wanderungen ab dem Tal",
    body: "Wege direkt von hier zur Cabana Bârcaciu, auf den Negoiu und den Suru, für jedes Niveau.",
    photo: "/trasee-fagaras.jpg",
    photoLabel: "[ FOTO: Bergweg ab Valea Avrigului ]",
    alt: "Wanderwege im Făgăraș-Gebirge mit Start in Valea Avrigului",
  },
  {
    title: "Der Bereich am Flussufer",
    body: "Auf der anderen Straßenseite, ein Platz zum Entspannen am Flussufer.",
    photoLabel: "[ FOTO: das Flussufer gegenüber ]",
    alt: "Ein Platz zum Entspannen am Flussufer, gegenüber der Pension",
  },
  {
    title: "Brambura Park",
    body: "Etwa 10 Minuten entfernt, für Gruppenaktivitäten im Freien.",
    photo: "/brambura.jpeg",
    photoLabel: "[ FOTO: Brambura Park ]",
    alt: "Brambura Park, Gruppenaktivitäten 10 Minuten von der Pension",
  },
];

// ── S7. Sample agenda ────────────────────────────────────────────────────────

const AGENDA_SOURCE: AgendaDay[] = [
  {
    day: "Freitag",
    label: "Anreise und erste Sitzung",
    items: [
      { time: "16:00", title: "Anreise und Check-in", body: "Ankommen ohne Eile. Die Pension gehört bereits ganz Ihnen." },
      { time: "18:00", title: "Eröffnungssitzung", body: "Im Seminarraum." },
      { time: "20:00", title: "Abendessen", body: "Ein Menü für die ganze Gruppe, an einem gemeinsamen Tisch.", fnb: true },
      { time: "21:30", title: "Abend am Lagerfeuer", body: "Der ungeschriebene Teil des Programms." },
    ],
  },
  {
    day: "Samstag",
    label: "Der Arbeitstag",
    items: [
      { time: "08:30", title: "Frühstück", body: "In der Pension serviert.", fnb: true },
      { time: "10:00", title: "Vormittagssitzung", body: "Der lange Arbeitsblock, ohne Unterbrechungen von außen." },
      { time: "13:00", title: "Mittagessen", body: "In der Pension für die ganze Gruppe zubereitet.", fnb: true },
      { time: "15:00", title: "Aktive Pause", body: "Das Tal, Kleinfeldfußball oder Tischtennis." },
      { time: "16:30", title: "Zweite Sitzung", body: "Für die Gespräche, die sonst auf dem Flur bleiben." },
      { time: "19:00", title: "Sauna und Jacuzzi", body: "Der Spa-Bereich, für Ihre Gruppe reserviert." },
      { time: "20:30", title: "Abendessen", body: "Zweiter Abend, ein anderes Menü.", fnb: true },
    ],
  },
  {
    day: "Sonntag",
    label: "Abschluss und Abreise",
    items: [
      { time: "09:00", title: "Frühstück", body: "Jeder in seinem Tempo.", fnb: true },
      { time: "10:30", title: "Abschlusssitzung", body: "Entscheidungen und nächste Schritte, solange alle an einem Ort sind." },
      { time: "12:00", title: "Check-out", body: "Verlängerung bis 15:00 Uhr möglich." },
      // Nur Text, wie im Rumänischen: ein Hinweis auf eine Mahlzeit mit eigenem fnb-Gate.
      { time: "13:00", title: "", body: "Mittagessen (optional)", fnb: true },
    ],
  },
];

export const AGENDA = gateAgenda(AGENDA_SOURCE);

// ── S8. Pricing (hidden behind SHOW_PRICING, as in Romanian) ─────────────────

export const PRICING_LINES: PricingLine[] = [
  {
    label: "Exklusivmiete des Hauses",
    value: "auf Anfrage, im zugesandten Angebot",
    note: "Mindestens 2 Nächte am Wochenende.",
  },
  {
    label: "Inklusive",
    value: "Alle 10 Einheiten, der Seminarraum, das Wohnzimmer, die Terrasse, das Lagerfeuer, der Fußballplatz und die Tischtennisplatte.",
  },
  {
    label: "Jacuzzi und Sauna",
    value: "auf Anfrage, im zugesandten Angebot",
    note: "Exklusiv für die Gruppe.",
  },
];

export const PRICING_FNB_LINES: PricingLine[] = [
  {
    label: "Mahlzeiten",
    value: "auf Anfrage, im zugesandten Angebot",
    note: "Frühstück, Mittag- und Abendessen, getrennt von der Unterkunft angeboten.",
  },
];

// ── S9. Booking process ──────────────────────────────────────────────────────

export const BOOKING_STEPS: { title: string; body: string }[] = [
  {
    title: "Sie schreiben uns",
    body: "Per WhatsApp oder über das Formular unten. Personenzahl und Zeitraum reichen für den Anfang.",
  },
  {
    title: "Sie erhalten das vollständige Angebot innerhalb von 24 Arbeitsstunden",
    body: "Verfügbarkeit, Zimmeraufteilung, aufgeschlüsselter Gesamtpreis, Bedingungen.",
  },
  {
    title: "Sie bestätigen mit Anzahlung und Vertrag",
    body: "30 % Anzahlung und ein Vertrag mit Ihrer Firma. Wir stellen die Rechnung direkt auf Ihr Unternehmen aus.",
  },
  {
    title: "Ihr Zeitraum ist fest reserviert",
    body: "Eine bestätigte Buchung wird von uns nie storniert. Kostenlose Stornierung bis 28 Tage vor Anreise bei Exklusivmiete.",
  },
];

// ── S11. FAQ (also emitted as FAQPage JSON-LD) ───────────────────────────────

const FAQ_SOURCE: FaqItem[] = [
  {
    q: "Wie viele Personen können übernachten?",
    a: "Bis zu 24 Personen, in 8 Doppelzimmern und 2 Familienstudios. Für ein Führungsteam-Retreat funktioniert das Format am besten mit 8 bis 20 Teilnehmenden.",
  },
  {
    q: "Können wir die ganze Pension nur für unser Team mieten?",
    a: "Ja. Bei der Exklusivmiete teilen Sie das Haus mit keinen anderen Gästen. Wir beherbergen immer nur eine Gruppe, eine halbe Anmietung gibt es daher nicht.",
  },
  {
    q: "Gibt es einen Konferenzraum?",
    a: "Ja. Der Seminarraum hat Tageslicht, WLAN und Platz für das ganze Team an einem Tisch. Er steht Ihnen während des gesamten Aufenthalts zur Verfügung, ohne gesonderte Reservierung.",
  },
  {
    q: "Wie weit ist es nach Sibiu und zum Flughafen?",
    a: "Etwa 40 Minuten (35 km) ins Zentrum von Sibiu und 50 Minuten (42 km) zum Flughafen Sibiu. Brașov liegt etwa 2 Stunden entfernt (130 km). Die Straße ist ganzjährig befahrbar.",
  },
  {
    q: "Wann sind Check-in und Check-out für Gruppen?",
    a: "Check-in ab 15:00 Uhr, Check-out bis 12:00 Uhr, mit der Möglichkeit, je nach Verfügbarkeit bis 15:00 Uhr zu verlängern.",
  },
  {
    q: "Wie läuft die Buchung ab, und welche Anzahlung ist fällig?",
    a: "Sie schreiben uns per WhatsApp oder über das Formular, erhalten innerhalb von 24 Arbeitsstunden das vollständige Angebot und bestätigen dann mit 30 % Anzahlung und einem Vertrag mit Ihrer Firma.",
  },
  {
    q: "Welche Stornobedingungen gelten für Gruppen?",
    a: "Bei Exklusivmiete ist die Stornierung bis mindestens 28 Tage vor Anreise kostenlos, und die Anzahlung wird vollständig erstattet. Danach wird die Anzahlung einbehalten.",
  },
  {
    q: "Können Sie auf unsere Firma fakturieren?",
    a: "Ja, wir stellen Rechnungen an Unternehmen aus, auf Grundlage eines Vertrags. Die Pensiunea Amonte wird von der Hostillo SRL betrieben.",
  },
  {
    q: "Welche Aktivitäten sind vor Ort möglich?",
    a: "Jacuzzi und Sauna exklusiv für Ihre Gruppe, Lagerfeuer, ein Kleinfeld-Fußballplatz, eine Tischtennisplatte und Wanderungen ab dem Tal zur Cabana Bârcaciu, auf den Negoiu und den Suru. Der Brambura Park ist etwa 10 Minuten entfernt.",
  },
  {
    q: "Wie weit im Voraus sollten wir buchen?",
    a: "Wir empfehlen, 3 bis 6 Wochen im Voraus zu buchen, vor allem für Wochenenden in der Saison.",
  },
  {
    q: "Sorgen Sie für die Verpflegung der Gruppe?",
    a: "Ja. Frühstück, Mittag- und Abendessen werden in der Pension aus frischen regionalen Produkten für die ganze Gruppe zubereitet.",
    fnb: true,
  },
  {
    q: "Sind Haustiere erlaubt?",
    a: "Nein. Bruno, der Hund des Hauses, ist der Einzige, der hier wohnt.",
  },
];

export const FAQ = gateFaq(FAQ_SOURCE);

// ── S13. Location ────────────────────────────────────────────────────────────

export const ACCESS_POINTS: string[] = [
  `Sibiu, Zentrum: ${DRIVE_SIBIU}, 35 km`,
  `Flughafen Sibiu: ${DRIVE_AIRPORT}, 42 km`,
  `Brașov, Zentrum: ${DRIVE_BRASOV}, 130 km`,
  "Kostenlose Parkplätze, innen und außen",
  "Check-in ab 15:00 Uhr, Check-out bis 12:00 Uhr, Verlängerung bis 15:00 Uhr möglich",
];

// ── S5. Meals (components/FnbSection) ────────────────────────────────────────

export const FNB_ITEMS: string[] = [
  "Mahlzeiten, die wir selbst in der Pension aus frischen regionalen Produkten zubereiten",
  "Mittag- und Abendessen für die ganze Gruppe",
  "Kaffeepausen während des gesamten Aufenthalts",
  "Ein Menü mit vielen Gerichten, von traditionell bis modern, als PDF mit dem Angebot",
  "Eine Bar, die der Gruppe während des Aufenthalts offensteht",
];
