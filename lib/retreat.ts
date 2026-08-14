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
  { icon: "🔒", label: "Exclusivitate 100%" },
  { icon: "👥", label: "Max. 24 persoane" },
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
    title: "Privat și discret",
    body: "Niciun alt oaspete, nicio recepție comună, nicio suprapunere cu alt grup. Întreaga proprietate este a echipei voastre, de la sosire până la plecare.",
    photo: "/servicii-facilitati/rezervare-integrala.jpeg",
    photoLabel: "[ FOTO: proprietatea văzută integral, fără alți oaspeți ]",
    alt: "Pensiunea Amonte închiriată integral pentru un singur grup",
  },
  {
    title: "Lucru concentrat",
    body: "Sală de conferințe cu lumină naturală, wifi și spațiu pentru sesiuni lungi de strategie. Fără zgomotul biroului și fără drumuri între locații.",
    photoLabel:
      "[ FOTO: echipă în sesiune de lucru, sala aranjată boardroom, lumină naturală ]",
    alt: "Sesiune de lucru în sala de conferințe a Pensiunii Amonte",
  },
  {
    title: "Decompresie reală",
    body: "Jacuzzi, saună, firepit și terasă panoramică. Conversațiile care contează se continuă seara, nu se opresc la ultimul slide.",
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
    title: "Sala de conferințe",
    body: "Spațiu dedicat pentru sesiuni de strategie, cu lumină naturală și loc pentru întreaga echipă.",
    photo: "/servicii-facilitati/sala-pentru-grupuri.jpg",
    photoLabel: "[ FOTO: sala aranjată în format boardroom sau U ]",
    alt: "Sala de conferințe de la Pensiunea Amonte",
    wide: true,
  },
  {
    title: "Lounge cu șemineu",
    body: "Locul unde se mută discuția după sesiunea de lucru, cu fotolii și foc aprins.",
    photo: "/servicii-facilitati/living-semineu.jpeg",
    photoLabel: "[ FOTO: șemineu aprins, fotolii, seara ]",
    alt: "Lounge cu șemineu la Pensiunea Amonte",
  },
  {
    title: "Terasa panoramică",
    body: "Vedere deschisă spre Munții Făgăraș, pentru pauzele scurte și pentru sesiunile în aer liber.",
    photo: "/priveliste-fagaras.jpg",
    photoLabel: "[ FOTO: terasa cu vedere spre munți ]",
    alt: "Terasa panoramică cu vedere spre Munții Făgăraș",
  },
  {
    title: "Jacuzzi și saună",
    body: "Zona de wellness a pensiunii, disponibilă exclusiv grupului vostru.",
    photo: "/jacuzzi-sauna.jpeg",
    photoLabel: "[ FOTO: zona de wellness ]",
    alt: "Jacuzzi și saună la Pensiunea Amonte",
  },
  {
    title: "Firepit",
    body: "Serile lungi se întâmplă aici. Fără agendă, fără proiector.",
    photo: "/firepit.jpeg",
    photoLabel: "[ FOTO: foc de tabără seara, grup relaxat ]",
    alt: "Firepit exterior la Pensiunea Amonte",
  },
  {
    title: "Teren de mini fotbal și ping-pong",
    body: "Pauza activă dintre două sesiuni, cu munții în spate.",
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
        title: "Sosire și cafea de bun venit",
        body: "Vă instalați fără grabă. Pensiunea e deja doar a voastră.",
      },
      {
        time: "12:30",
        title: "Prima sesiune de lucru",
        body: "Sala de conferințe, cu lumină naturală și fără întreruperi din exterior.",
      },
      {
        time: "15:30",
        title: "Pauză activă",
        body: "Plimbare pe vale, mini fotbal sau ping-pong. Peste drum, malul râului oferă un loc de relaxare.",
      },
      {
        time: "16:30",
        title: "Sesiune de after",
        body: "Discuțiile care de obicei rămân pe hol, de data asta cu timp alocat.",
      },
      {
        time: "19:30",
        title: "Cină lungă, cu vin",
        body: "Meniu construit pentru grup, servit la o masă comună.",
        fnb: true,
      },
      {
        time: "21:00",
        title: "Seară la firepit",
        body: "Partea în care echipa se cunoaște altfel decât în call-uri.",
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
        title: "Dimineață liberă sau saună",
        body: "Fără program impus. Unii aleg valea, alții zona de wellness.",
      },
      {
        time: "11:00",
        title: "Sesiune de închidere",
        body: "Concluzii, decizii, next steps, cât toată lumea e încă în același loc.",
      },
      {
        time: "13:00",
        title: "Plecare",
        body: "Check-out relaxat, cu Sibiul la 40 de minute distanță.",
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
    title: "Ne scrii pe WhatsApp",
    body: "Cu perioada dorită și mărimea echipei. Atât ne trebuie ca să începem.",
  },
  {
    title: "Primești oferta în aceeași zi",
    body: "Cu tot ce este inclus, fără costuri care apar mai târziu.",
  },
  {
    title: "Confirmăm cu contract și avans",
    body: "Din acel moment, pensiunea este a voastră pentru toată perioada.",
  },
] as const;

// ── 11. FAQ (also emitted as FAQPage JSON-LD) ────────────────────────────────

export const FAQ = [
  {
    q: "Câte persoane încap?",
    a: "Pensiunea are 10 spații de cazare și o capacitate totală de 24 de persoane. Pentru un retreat de leadership, formatul funcționează cel mai bine la 8 până la 20 de participanți.",
  },
  {
    q: "Putem închiria doar o parte din pensiune?",
    a: "Nu pentru retreaturi. Lucrăm exclusiv în regim de închiriere integrală, cu un singur grup odată, tocmai pentru că exclusivitatea este motivul principal pentru care echipele aleg Amonte.",
  },
  {
    q: "Cât durează drumul de la Sibiu?",
    a: "Aproximativ 40 de minute cu mașina, atât din Sibiu, cât și de la aeroportul Sibiu. Drumul este accesibil cu autoturismul pe tot parcursul anului.",
  },
  {
    q: "Există spațiu de lucru pentru sesiuni de strategie?",
    a: "Da. Pensiunea are o sală de conferințe cu lumină naturală, potrivită pentru sesiuni lungi de lucru, plus wifi gratuit în toată proprietatea.",
  },
  {
    q: "Se poate organiza un offsite și iarna?",
    a: "Da. Livingul cu șemineu, sauna și jacuzzi transformă sezonul rece într-un argument, nu într-un compromis. Peisajul de noiembrie pe Valea Avrigului este unul dintre motivele pentru care echipele revin.",
  },
  {
    q: "Ce poate face echipa în pauze?",
    a: "Plimbări pe vale, mini fotbal, ping-pong, saună și seri la firepit. Peste drum, malul râului oferă un loc de relaxare în aer liber.",
  },
] as const;
