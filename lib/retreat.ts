// Content for /retreat-corporate. Kept out of the JSX so the copy can be edited
// without touching layout. Photos live in /public; entries without a `photo`
// render as clearly-marked placeholders (see the shot list at the bottom of
// app/(site)/retreat-corporate/page.tsx).

import { SHOW_FNB } from "./flags";

/** Pre-filled WhatsApp message for the plain CTAs (the form builds its own). */
export const RETREAT_WHATSAPP_MESSAGE =
  "Bună ziua! Aș dori o ofertă pentru un grup la Pensiunea Amonte.";

/** Distinguishes B2B conversions from leisure ones in GA4. */
export const RETREAT_PAGE_SOURCE = "retreat-corporate";

/**
 * Drive times, confirmed by Flo in September 2026 and used as the single figure
 * across the whole site. Google Maps measured 44 min to Sibiu at the time; the
 * 40 here is the owner's own number for a normal run.
 */
export const DRIVE_SIBIU = "40 de minute";
export const DRIVE_AIRPORT = "50 de minute";
export const DRIVE_BRASOV = "2 ore";

// ── S6. Room configuration ───────────────────────────────────────────────────

export const ROOM_CONFIG = [
  {
    unit: "camere duble cu balcon și vedere la munte",
    count: "8",
    perUnit: "2",
    beds: "pat matrimonial",
    total: "16",
    photo: "/camera-dubla-folder/poza-pat-si-camera.jpeg",
    photoLabel: "[ FOTO: cameră dublă, pat și birou cu priveliște ]",
    alt: "Cameră dublă cu birou și vedere la munte",
  },
  {
    unit: "studiouri de familie",
    count: "2",
    perUnit: "4",
    beds: "pat matrimonial și canapea extensibilă",
    total: "8",
    photo: "/apartament/canapea_extensibila_living.jpg",
    photoLabel: "[ FOTO: studio de familie, configurație pentru 4 persoane ]",
    alt: "Studio de familie cu canapea extensibilă",
  },
] as const;

export const ROOM_CONFIG_TOTAL = { count: "10", total: "24" } as const;

export const ROOM_NOTES = [
  "Fiecare unitate are balcon și baie proprie.",
] as const;

// ── S3. Work spaces ──────────────────────────────────────────────────────────

export type Space = {
  title: string;
  body: string;
  photo?: string;
  photoLabel: string;
  alt: string;
};

export const WORKSPACES: Space[] = [
  {
    title: "Sala pentru grupuri",
    body: "Încape toată echipa la aceeași masă, cu lumină naturală și WiFi. Spațiu dedicat, nu o sală de mese reamenajată pentru o zi.",
    photo: "/retreat/sala-evenimente.jpg",
    photoLabel: "[ FOTO: sala aranjată în format boardroom sau U, cu echipa la masă ]",
    // Fara cifra de capacitate: nu a fost confirmata (vezi FAQ "Există sală de
    // conferință?", raspuns fara numere din acelasi motiv).
    alt: "Sala pentru grupuri de la Pensiunea Amonte, cu scaune aranjate pentru o prezentare",
  },
  {
    title: "Living cu șemineu",
    body: "Aici se mută discuția după ultima sesiune. Fotolii, foc, fără proiector.",
    photo: "/semineu.jpeg",
    photoLabel: "[ FOTO: șemineu aprins, fotolii, seara ]",
    alt: "Living cu șemineu, spațiu informal pentru grupuri la Pensiunea Amonte",
  },
  {
    title: "Terasa panoramică",
    body: "Vedere direct spre Făgăraș. Funcționează pentru pauze și pentru sesiuni în aer liber, pe vreme bună.",
    photo: "/priveliste-fagaras.jpg",
    photoLabel: "[ FOTO: terasa cu vedere spre munți, grup la o pauză ]",
    alt: "Terasa panoramică cu vedere spre Munții Făgăraș",
  },
];

// ── S4. Between sessions ─────────────────────────────────────────────────────

export const LEISURE: Space[] = [
  {
    title: "Jacuzzi și saună",
    body: "Acces exclusiv pentru grup, contra cost.",
    photo: "/jacuzzi-sauna.jpeg",
    photoLabel: "[ FOTO: zona de wellness la apus ]",
    alt: "Jacuzzi și saună, acces exclusiv pentru grupul cazat",
  },
  {
    title: "Firepit și foc de tabără",
    body: "Serile lungi se întâmplă aici. Singurul punct de pe agendă fără agendă.",
    photo: "/firepit.jpeg",
    photoLabel: "[ FOTO: foc de tabără seara, grup relaxat în jur ]",
    alt: "Firepit exterior, seară de grup la Pensiunea Amonte",
  },
  {
    title: "Mini fotbal și ping-pong",
    body: "Pauza de 30 de minute care resetează o zi întreagă de lucru.",
    photo: "/servicii-facilitati/teren-fotbal.jpeg",
    photoLabel: "[ FOTO: teren de mini fotbal cu munții în spate ]",
    alt: "Teren de mini fotbal la Pensiunea Amonte",
  },
  {
    title: "Drumeții din vale",
    body: "Plecare directă spre Cabana Bârcaciu, Negoiu și Suru, pe trasee pentru toate nivelurile.",
    photo: "/trasee-fagaras.jpg",
    photoLabel: "[ FOTO: traseu montan din Valea Avrigului ]",
    alt: "Trasee de drumeție în Munții Făgăraș, cu plecare din Valea Avrigului",
  },
  {
    title: "Zona de pe malul râului",
    body: "Peste drum, o zonă de relaxare pe malul râului.",
    photoLabel: "[ FOTO: malul râului de peste drum ]",
    alt: "Zonă de relaxare pe malul râului, peste drum de pensiune",
  },
  {
    title: "Brambura Park",
    body: "La circa 10 minute, pentru activități de grup în aer liber.",
    photo: "/brambura.jpeg",
    photoLabel: "[ FOTO: Brambura Park ]",
    alt: "Brambura Park, activități de grup la 10 minute de pensiune",
  },
];

// ── S7. Sample agenda ────────────────────────────────────────────────────────

type AgendaItem = {
  time: string;
  title: string;
  body: string;
  /** Meal items, gated on SHOW_FNB. */
  fnb?: true;
};

const AGENDA_SOURCE: { day: string; label: string; items: AgendaItem[] }[] = [
  {
    day: "Vineri",
    label: "Sosire și prima sesiune",
    items: [
      { time: "16:00", title: "Sosire și check-in", body: "Vă instalați fără grabă. Pensiunea e deja doar a voastră." },
      { time: "18:00", title: "Sesiune de deschidere", body: "În sala pentru grupuri." },
      { time: "20:00", title: "Cină", body: "Meniu pregătit pentru tot grupul, la o masă comună.", fnb: true },
      { time: "21:30", title: "Seară la firepit", body: "Partea nescrisă a agendei." },
    ],
  },
  {
    day: "Sâmbătă",
    label: "Ziua de lucru",
    items: [
      { time: "08:30", title: "Mic dejun", body: "Inclus, servit la pensiune.", fnb: true },
      { time: "10:00", title: "Sesiune de dimineață", body: "Blocul lung de lucru, fără întreruperi din exterior." },
      { time: "13:00", title: "Prânz", body: "Pregătit la pensiune pentru tot grupul.", fnb: true },
      { time: "15:00", title: "Pauză activă", body: "Vale, mini fotbal sau ping-pong." },
      { time: "16:30", title: "A doua sesiune", body: "Pentru discuțiile care de obicei rămân pe hol." },
      { time: "19:00", title: "Saună și jacuzzi", body: "Zona de relaxare, rezervată grupului." },
      { time: "20:30", title: "Cină", body: "A doua seară, alt meniu.", fnb: true },
    ],
  },
  {
    day: "Duminică",
    label: "Închidere și plecare",
    items: [
      { time: "09:00", title: "Mic dejun", body: "În ritmul fiecăruia.", fnb: true },
      { time: "10:30", title: "Sesiune de închidere", body: "Decizii și next steps, cât sunteți toți în același loc." },
      { time: "12:00", title: "Check-out", body: "Cu posibilitate de prelungire până la 15:00." },
      // No title, just the body line: rendered non-bold, unlike every other
      // item. Own entry rather than folded into Check-out's body, because
      // it's a meal mention and needs its own `fnb` gate — Check-out itself
      // has none and must stay visible even with SHOW_FNB off.
      { time: "13:00", title: "", body: "Prânz (opțional)", fnb: true },
    ],
  },
];

export const AGENDA = AGENDA_SOURCE.map((day) => ({
  ...day,
  items: day.items.filter((item) => SHOW_FNB || !item.fnb),
}));

// ── S8. Pricing ──────────────────────────────────────────────────────────────
//
// Tarifele NU se publica: sunt preferentiale, negociate per grup, iar o cifra
// publica ar ancora gresit discutia. Pagina vinde in schimb promisiunea ofertei
// complete in 24 de ore lucratoare. Datele raman aici, in spatele flag-ului
// SHOW_PRICING (false), in caz ca decizia se schimba.

export const PRICING_LINES = [
  {
    label: "Închiriere integrală",
    value: "la cerere, în oferta trimisă",
    note: "Minimum 2 nopți în weekend.",
  },
  {
    label: "Include",
    value: "Toate cele 10 unități, sala pentru grupuri, livingul, terasa, firepit, teren și ping-pong.",
  },
  {
    label: "Jacuzzi și saună",
    value: "la cerere, în oferta trimisă",
    note: "Acces exclusiv pentru grup.",
  },
] as const;

/** Extra rows shown only when both pricing and F&B are on. */
export const PRICING_FNB_LINES = [
  {
    label: "Mese",
    value: "la cerere, în oferta trimisă",
    note: "Prânz și cină.",
  },
  {
    label: "Mic dejun",
    value: "Inclus în închirierea integrală.",
  },
] as const;

// ── S9. Booking process ──────────────────────────────────────────────────────

export const BOOKING_STEPS = [
  {
    title: "Ne scrieți",
    body: "Pe WhatsApp sau prin formularul de mai jos. Numărul de persoane și perioada sunt suficiente pentru început.",
  },
  {
    title: "Primiți oferta completă în 24 de ore lucrătoare",
    body: "Disponibilitate, configurația camerelor, total defalcat, condiții.",
  },
  {
    title: "Confirmați cu avans și contract",
    body: "Avans de 30%, contract pe firmă. Facturăm pe persoană juridică.",
  },
  {
    title: "Perioada e blocată",
    body: "O rezervare confirmată nu se anulează din partea noastră. Anulare gratuită cu 28 de zile înainte de sosire pentru închirierea integrală.",
  },
] as const;

// ── S11. FAQ (also emitted as FAQPage JSON-LD) ───────────────────────────────

type FaqItem = { q: string; a: string; fnb?: true };

const FAQ_SOURCE: FaqItem[] = [
  {
    q: "Câte persoane pot fi cazate?",
    a: "Maximum 24 de persoane, în 8 camere duble și 2 studiouri de familie. Pentru un offsite de conducere, formatul funcționează cel mai bine între 8 și 20 de participanți.",
  },
  {
    q: "Putem închiria toată pensiunea doar pentru echipa noastră?",
    a: "Da, închirierea integrală înseamnă că nu împărțiți spațiul cu niciun alt oaspete. Lucrăm cu un singur grup odată, deci nu există varianta cu jumătate de pensiune.",
  },
  {
    q: "Există sală de conferință?",
    a: "Da. Sala pentru grupuri are lumină naturală, WiFi și loc pentru toată echipa la aceeași masă. Este un spațiu dedicat, disponibil pe toată durata sejurului, fără rezervare separată.",
  },
  {
    q: "La ce distanță e de Sibiu și de aeroport?",
    a: "Aproximativ 40 de minute, 35 km, de centrul Sibiului și 50 de minute, 42 km, de Aeroportul Sibiu. Brașovul este la circa 2 ore, 130 km. Drumul e practicabil tot anul.",
  },
  {
    q: "Care e programul de check-in și check-out pentru grupuri?",
    a: "Check-in de la ora 15:00, check-out până la ora 12:00, cu posibilitate de prelungire până la 15:00, în funcție de disponibilitate.",
  },
  {
    q: "Cum se face rezervarea și ce avans se plătește?",
    a: "Ne scrieți pe WhatsApp sau prin formular, primiți oferta completă în 24 de ore lucrătoare, apoi confirmați cu un avans de 30% și contract pe firmă.",
  },
  {
    q: "Care e politica de anulare pentru grupuri?",
    a: "Pentru închirierea integrală, anularea este gratuită cu cel puțin 28 de zile înainte de sosire, iar avansul se restituie integral. Sub acest termen, avansul se reține.",
  },
  {
    q: "Puteți factura pe firmă?",
    a: "Da, facturăm pe persoană juridică, cu contract. Hostillo SRL operează Pensiunea Amonte.",
  },
  {
    q: "Ce activități se pot organiza la fața locului?",
    a: "Jacuzzi și saună cu acces exclusiv pentru grup, firepit, teren de mini fotbal, masă de ping-pong și drumeții cu plecare din vale spre Bârcaciu, Negoiu și Suru. Brambura Park este la circa 10 minute.",
  },
  {
    q: "Cât timp înainte trebuie să rezervăm?",
    a: "Pentru weekendurile din mai, iunie, septembrie și octombrie recomandăm 6 până la 8 săptămâni înainte. În restul anului, 3 până la 4 săptămâni sunt de obicei suficiente.",
  },
  {
    q: "Asigurați mesele pentru grup?",
    a: "Da. Micul dejun este inclus, iar prânzul și cina se pregătesc la pensiune pentru tot grupul. Primiți două variante de meniu, una tradițională și una modernă, odată cu oferta.",
    fnb: true,
  },
  {
    q: "Acceptați animale de companie?",
    a: "Nu. Bruno, câinele casei, e singurul care locuiește aici.",
  },
];

export const FAQ = FAQ_SOURCE.filter((item) => SHOW_FNB || !item.fnb);

// ── S12. Offer form options ──────────────────────────────────────────────────

export const NIGHT_OPTIONS = ["1", "2", "3+"] as const;
export const MEAL_OPTIONS = ["Mic dejun", "Prânz", "Cină"] as const;

// ── S13. Location ────────────────────────────────────────────────────────────

export const ACCESS_POINTS = [
  `Sibiu, centru: ${DRIVE_SIBIU}, 35 km`,
  `Aeroportul Sibiu: ${DRIVE_AIRPORT}, 42 km`,
  `Brașov, centru: ${DRIVE_BRASOV}, 130 km`,
  "Parcare la proprietate, interioară și exterioară",
  "Check-in de la 15:00, check-out până la 12:00, cu prelungire până la 15:00",
] as const;
