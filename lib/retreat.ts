// Content for /retreat-corporate. Kept out of the JSX so the copy can be edited
// without touching layout. Photos live in /public; entries without a `photo`
// render as clearly-marked placeholders (see the shot list at the bottom of
// app/(site)/retreat-corporate/page.tsx).

// A se activa doar după emiterea avizelor DSP/ANSVSA pentru CAEN 5611/5630.
//
// NOTE: this is intentionally page-scoped and independent of SHOW_FB_AND_EVENTS
// in lib/site.ts, which is currently true and drives F&B copy on the rest of the
// site. The two disagree on purpose; see the handover note about reconciling them.
export const SHOW_FNB = false;

/** Pre-filled WhatsApp message for every CTA on this page. */
export const RETREAT_WHATSAPP_MESSAGE =
  "Bună! Aș vrea o ofertă de retreat pentru echipa noastră.";

/** Distinguishes B2B conversions from leisure ones in GA4. */
export const RETREAT_PAGE_SOURCE = "retreat-corporate";

// ── 2. Trust bar ─────────────────────────────────────────────────────────────

export const TRUST_POINTS = [
  { icon: "🔒", label: "Exclusivitate totală" },
  { icon: "👥", label: "Până la 24 de persoane" },
  { icon: "📊", label: "Sală de meeting" },
  { icon: "✈️", label: "40 min de aeroportul Sibiu" },
] as const;

// ── 3. Positioning ───────────────────────────────────────────────────────────

export type Pillar = {
  title: string;
  body: string;
  photo?: string;
  photoLabel: string;
  alt: string;
};

export const PILLARS: Pillar[] = [
  {
    title: "Nimeni altcineva în curte",
    body: "Nu împărțiți pensiunea cu alți oaspeți. Nu există recepție comună, program de liniște sau alt grup la firepit. De la check-in la check-out, proprietatea funcționează doar pentru voi.",
    photo: "/servicii-facilitati/rezervare-integrala.jpeg",
    photoLabel: "[ FOTO: proprietatea văzută integral, fără alți oaspeți ]",
    alt: "Pensiunea Amonte închiriată integral pentru un singur grup",
  },
  {
    title: "Loc de lucru, nu improvizație",
    body: "Sala de meeting are lumină naturală, wifi stabil și loc pentru toată echipa la aceeași masă. Nu mutăm mobila din restaurant ca să încapă un proiector.",
    photoLabel:
      "[ FOTO: echipă în sesiune de lucru, sala aranjată boardroom, lumină naturală ]",
    alt: "Sesiune de lucru în sala de meeting a Pensiunii Amonte",
  },
  {
    title: "Seara contează cât ziua",
    body: "Saună, jacuzzi, șemineu și foc afară. Discuțiile care schimbă ceva rar se întâmplă în slide 40, mai des la focul de după cină.",
    photo: "/semineu.jpeg",
    photoLabel: "[ FOTO: living cu șemineu, seara ]",
    alt: "Living cu șemineu la Pensiunea Amonte",
  },
];

// ── 4. Spaces ────────────────────────────────────────────────────────────────

export type Space = {
  title: string;
  body: string;
  photo?: string;
  photoLabel: string;
  alt: string;
  /** Renders taller in the grid. */
  wide?: boolean;
};

export const SPACES: Space[] = [
  {
    title: "Sala de meeting",
    body: "Încape toată echipa la o masă. Lumină naturală, wifi, liniște.",
    photo: "/servicii-facilitati/sala-pentru-grupuri.jpg",
    photoLabel: "[ FOTO: sala aranjată în format boardroom sau U ]",
    alt: "Sala de meeting de la Pensiunea Amonte",
    wide: true,
  },
  {
    title: "Lounge cu șemineu",
    body: "Aici se mută discuția după ultima sesiune. Fotolii, foc, fără proiector.",
    photo: "/servicii-facilitati/living-semineu.jpeg",
    photoLabel: "[ FOTO: șemineu aprins, fotolii, seara ]",
    alt: "Lounge cu șemineu la Pensiunea Amonte",
  },
  {
    title: "Terasa panoramică",
    body: "Vedere direct spre Făgăraș. Funcționează la fel de bine pentru cafeaua de dimineață și pentru o sesiune în aer liber.",
    photo: "/priveliste-fagaras.jpg",
    photoLabel: "[ FOTO: terasa cu vedere spre munți ]",
    alt: "Terasa panoramică cu vedere spre Munții Făgăraș",
  },
  {
    title: "Jacuzzi și saună",
    body: "Zona de wellness e inclusă în închiriere, nu se plătește separat și nu se împarte cu nimeni.",
    photo: "/jacuzzi-sauna.jpeg",
    photoLabel: "[ FOTO: zona de wellness ]",
    alt: "Jacuzzi și saună la Pensiunea Amonte",
  },
  {
    title: "Firepit",
    body: "Serile lungi se întâmplă aici. Singurul punct de pe agendă fără agendă.",
    photo: "/firepit.jpeg",
    photoLabel: "[ FOTO: foc de tabără seara, grup relaxat ]",
    alt: "Firepit exterior la Pensiunea Amonte",
  },
  {
    title: "Mini fotbal și ping-pong",
    body: "Pauza de 30 de minute care resetează o zi întreagă de lucru.",
    photo: "/servicii-facilitati/teren-fotbal.jpeg",
    photoLabel: "[ FOTO: teren cu munții în spate ]",
    alt: "Teren de mini fotbal la Pensiunea Amonte",
  },
];

// ── 5. Sample agenda ─────────────────────────────────────────────────────────

type AgendaItem = {
  time: string;
  title: string;
  body: string;
  /** Meal items. Filtered out entirely while SHOW_FNB is false. */
  fnb?: true;
};

const AGENDA_SOURCE: { day: string; label: string; items: AgendaItem[] }[] = [
  {
    day: "Ziua 1",
    label: "Sosire și lucru",
    items: [
      {
        time: "11:00",
        title: "Sosire",
        body: "Cafea, instalare, fără grabă.",
      },
      {
        time: "12:30",
        title: "Prima sesiune",
        body: "În sala de meeting.",
      },
      {
        time: "15:30",
        title: "Pauză",
        body: "Vale, mini fotbal sau pur și simplu aer.",
      },
      {
        time: "16:30",
        title: "A doua sesiune",
        body: "Pentru discuțiile care de obicei rămân pe hol.",
      },
      {
        time: "19:30",
        title: "Cină",
        body: "Meniu construit pentru grup, la o masă comună.",
        fnb: true,
      },
      {
        time: "21:00",
        title: "Foc afară",
        body: "Partea nescrisă a agendei.",
      },
    ],
  },
  {
    day: "Ziua 2",
    label: "Închidere și plecare",
    items: [
      {
        time: "08:30",
        title: "Mic dejun",
        body: "Servit la pensiune, în ritmul fiecăruia.",
        fnb: true,
      },
      {
        time: "09:00",
        title: "Dimineață liberă",
        body: "Saună, plimbare sau somn.",
      },
      {
        time: "11:00",
        title: "Sesiune de închidere",
        body: "Decizii și next steps, cât sunteți toți în același loc.",
      },
      {
        time: "13:00",
        title: "Plecare",
        body: "Sibiul e la 40 de minute.",
      },
    ],
  },
];

export const AGENDA = AGENDA_SOURCE.map((day) => ({
  ...day,
  items: day.items.filter((item) => SHOW_FNB || !item.fnb),
}));

// ── 7. Rooms ─────────────────────────────────────────────────────────────────

export const ROOM_SHOTS = [
  {
    photo: "/camera-dubla-folder/poza-pat-si-camera.jpeg",
    photoLabel: "[ FOTO: cameră dublă luminoasă ]",
    alt: "Cameră dublă la Pensiunea Amonte",
  },
  {
    photo: "/camera-balcon/poza-pat.jpeg",
    photoLabel: "[ FOTO: detaliu pat ]",
    alt: "Detaliu pat, cameră cu balcon",
  },
  {
    photo: "/camera-balcon/baie.jpeg",
    photoLabel: "[ FOTO: baie proprie ]",
    alt: "Baie proprie într-o cameră de la Pensiunea Amonte",
  },
] as const;

// ── 8. Location ──────────────────────────────────────────────────────────────

export const ACCESS_POINTS = [
  "40 de minute de Sibiu și de aeroportul Sibiu",
  "Drum accesibil cu mașina pe tot parcursul anului",
  "Parcare la proprietate, pentru întregul grup",
] as const;

// ── 9. Social proof ──────────────────────────────────────────────────────────

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  /**
   * TODO: înlocuiește cu testimoniale reale de la grupuri corporate, cu acordul
   * scris al clientului, apoi setează isPlaceholder: false. Secțiunea se
   * randează doar când există cel puțin un item cu isPlaceholder: false.
   */
  isPlaceholder: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "TODO: citat real, cu acordul scris al clientului.",
    author: "TODO: prenume și inițiala numelui",
    role: "TODO: rol, fără numele companiei dacă nu există acord",
    isPlaceholder: true,
  },
  {
    quote: "TODO: citat real, cu acordul scris al clientului.",
    author: "TODO: prenume și inițiala numelui",
    role: "TODO: rol, fără numele companiei dacă nu există acord",
    isPlaceholder: true,
  },
];

/** Only genuine, cleared testimonials reach the page. */
export const PUBLISHABLE_TESTIMONIALS = TESTIMONIALS.filter(
  (t) => !t.isPlaceholder,
);

// ── 10. Booking process ──────────────────────────────────────────────────────

export const BOOKING_STEPS = [
  {
    title: "Ne scrieți pe WhatsApp",
    body: "Perioada și câți sunteți.",
  },
  {
    title: "Primiți oferta în aceeași zi",
    body: "Cu tot ce e inclus. Fără costuri care apar ulterior.",
  },
  {
    title: "Semnăm contractul",
    body: "Plătiți avansul, perioada e blocată pentru voi.",
  },
] as const;

// ── 11. FAQ (also emitted as FAQPage JSON-LD) ────────────────────────────────

export const FAQ = [
  {
    q: "Câte persoane încap?",
    a: "24 de locuri în 10 camere. Pentru un offsite de conducere, formatul funcționează cel mai bine între 8 și 20 de participanți.",
  },
  {
    q: "Putem închiria doar o parte din pensiune?",
    a: "Nu. Lucrăm cu un singur grup odată, în regim de închiriere integrală. Exclusivitatea e motivul principal pentru care echipele aleg locul, deci nu o împărțim.",
  },
  {
    q: "Cât durează drumul de la Sibiu?",
    a: "40 de minute cu mașina, atât din oraș, cât și de la aeroport. Drumul e practicabil tot anul.",
  },
  {
    q: "Există spațiu de lucru pentru sesiuni de strategie?",
    a: "Da. Sală de meeting cu lumină naturală, wifi și loc pentru toată echipa la aceeași masă. Nu e un spațiu improvizat din altceva.",
  },
  {
    q: "Se poate organiza un offsite și iarna?",
    a: "Da. Șemineul, sauna și jacuzzi funcționează tot anul, iar iarna sunt mai puține grupuri, deci alegerea perioadei e mai simplă.",
  },
  {
    q: "Ce poate face echipa în pauze?",
    a: "Vale, mini fotbal, ping-pong, saună, foc afară. Peste drum, malul râului oferă un loc de relaxare.",
  },
] as const;
