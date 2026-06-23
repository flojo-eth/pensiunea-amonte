// Real, validated content for Pensiunea Amonte (extracted from the approved
// design prototype). Conversion is WhatsApp-only — there is no custom form.

// The single tracked conversion: WhatsApp click. Used by every WhatsApp CTA.
export const WHATSAPP_URL =
  "https://wa.me/40747342280?text=Salut!%20A%C8%99%20dori%20s%C4%83%20verific%20disponibilitatea%20pentru%20o%20rezervare%20la%20Pensiunea%20Amonte.";

// Fallback when WhatsApp is unavailable.
export const GOOGLE_FORM_URL = "https://forms.gle/Ft4iFEuRJUfbyAPV6";

export const CONTACT = {
  phoneMobile: "0747 342 280", // mobil / WhatsApp
  phoneLandline: "0369 420 619", // fix
  email: "contact@pensiunea-amonte.ro",
  // NAP canonic — format identic pe toate directoarele (fără „Avrig" ca localitate separată)
  address: "Valea Avrigului nr. 642, jud. Sibiu, 555200, România",
  social: "@pensiunea.amonte", // Instagram · Facebook · TikTok
} as const;

export const LOCATION = "Valea Avrigului · Munții Făgăraș";

export const STATS = [
  { value: "10", label: "Unități de cazare" },
  { value: "24", label: "Oaspeți" },
  { value: "30'", label: "De Sibiu" },
] as const;

export type Room = {
  slug: string;
  name: string;
  spec: string;
  /** Short description for cards. */
  desc: string;
  /** Longer description for the detail page. */
  longDesc: string;
  price: string; // "de la 500"
  features: string[];
  photo: string; // file in /public
  photoLabel: string; // fallback label if photo is missing
};

export const ROOMS: Room[] = [
  {
    slug: "camera-dubla-vedere-munte",
    name: "Cameră dublă cu vedere la munte",
    spec: "2 persoane · balcon privat · vedere munte",
    desc: "Cameră modernă cu balcon privat și priveliște spre munte. Ideală pentru relaxare în cuplu.",
    longDesc:
      "Cameră modernă, luminoasă, cu balcon privat și priveliște deschisă spre Munții Făgăraș. Gândită pentru relaxare în cuplu, cu acces la zona de wellness (jacuzzi & saună) și living-ul cu șemineu.",
    price: "de la 500",
    features: [
      "2 persoane",
      "Balcon privat",
      "Vedere la munte",
      "Încălzire în pardoseală",
    ],
    photo: "/camera-dubla.jpg",
    photoLabel: "[ cameră dublă ]",
  },
  {
    slug: "studio-de-familie",
    name: "Studio de familie",
    spec: "4 persoane · pat matrimonial + canapea extensibilă",
    desc: "Spațios și confortabil, potrivit pentru familii și grupuri mici.",
    longDesc:
      "Studio spațios și confortabil, cu pat matrimonial și canapea extensibilă — potrivit pentru familii și grupuri mici de până la 4 persoane. Acces la zona de wellness și la living-ul cu șemineu.",
    price: "de la 800",
    features: [
      "4 persoane",
      "Pat matrimonial + canapea extensibilă",
      "Potrivit pentru familii",
      "Încălzire în pardoseală",
    ],
    photo: "/studio-familie.jpg",
    photoLabel: "[ studio familie ]",
  },
];

export function getRoom(slug: string): Room | undefined {
  return ROOMS.find((r) => r.slug === slug);
}

export type Amenity = { icon: string; label: string };

// Facilități confirmate — afișate pe home și pe pagina de servicii.
// NU adaugă: mic dejun, bar (serviciu), catering/evenimente — cer CAEN + DSP/ANSVSA.
export const AMENITIES: Amenity[] = [
  { icon: "🧖", label: "Jacuzzi & saună" },
  { icon: "🔥", label: "Living cu șemineu" },
  { icon: "🏔️", label: "Terasă panoramică" },
  { icon: "🪵", label: "Firepit exterior" },
  { icon: "🍸", label: "Bar / lounge" },
  { icon: "🎯", label: "Sală pentru grupuri" },
  { icon: "⚽", label: "Mini teren de fotbal" },
  { icon: "🏓", label: "Masă de ping-pong" },
  { icon: "🌡️", label: "Încălzire în pardoseală" },
  { icon: "🅿️", label: "Parcare gratuită" },
  { icon: "📶", label: "WiFi gratuit" },
  { icon: "🏔️", label: "Rezervare integrală disponibilă" },
];

export type Activity = {
  name: string;
  desc: string;
  dist: string;
  photoLabel: string;
};

export const ACTIVITIES: Activity[] = [
  {
    name: "Drumeții în Făgăraș",
    desc: "Trasee montane și plimbări în natură, în Munții Făgăraș.",
    dist: "în zonă",
    photoLabel: "[ trasee Făgăraș ]",
  },
  {
    name: "Brambura Park",
    desc: "Parc de aventură și activități pentru toată familia.",
    dist: "în apropiere",
    photoLabel: "[ Brambura Park ]",
  },
  {
    name: "Palatul Brukenthal",
    desc: "Reședința de vară și grădinile din Avrig.",
    dist: "în apropiere",
    photoLabel: "[ Palatul Brukenthal ]",
  },
  {
    name: "Castelul de Lut",
    desc: "Atracție unică din Valea Zânelor.",
    dist: "în apropiere",
    photoLabel: "[ Castelul de Lut ]",
  },
  {
    name: "Călărie & ATV",
    desc: "Experiențe în aer liber, în funcție de sezon.",
    dist: "sezonier",
    photoLabel: "[ ATV / călărie ]",
  },
  {
    name: "Fermă de cerbi",
    desc: "Vizită la ferma de cerbi din zonă.",
    dist: "sezonier",
    photoLabel: "[ fermă de cerbi ]",
  },
];

export type GalleryItem = { photo: string; label: string; span: 1 | 2 };

export const GALLERY: GalleryItem[] = [
  { photo: "/exterior-pensiune.jpeg", label: "Exterior pensiune", span: 2 },
  { photo: "/jacuzzi-sauna.jpeg", label: "Jacuzzi & saună", span: 1 },
  { photo: "/camera-balcon.jpg", label: "Cameră cu balcon", span: 1 },
  { photo: "/priveliste-fagaras.jpg", label: "Priveliște spre Făgăraș", span: 2 },
  { photo: "/firepit.jpg", label: "Firepit pe terasă, seara", span: 1 },
  { photo: "/bruno.jpg", label: "Bruno", span: 1 },
];

// Reviews are intentionally left as marked placeholders — the owner fills these
// in with real Google / Booking / Facebook reviews. Do NOT invent reviews.
export type Review = {
  stars: string;
  text: string;
  name: string;
  meta: string;
  initial: string;
};

export const REVIEWS: Review[] = [
  {
    stars: "★★★★★",
    text: "„[Recenzie reală — de adăugat din Google]”",
    name: "[Nume oaspete]",
    meta: "Google · [lună an]",
    initial: "•",
  },
  {
    stars: "★★★★★",
    text: "„[Recenzie reală — de adăugat din Booking]”",
    name: "[Nume oaspete]",
    meta: "Booking · [lună an]",
    initial: "•",
  },
  {
    stars: "★★★★★",
    text: "„[Recenzie reală — de adăugat din Facebook]”",
    name: "[Nume oaspete]",
    meta: "Facebook · [lună an]",
    initial: "•",
  },
];

// Primary site navigation (anchors on the home page).
export const NAV_LINKS = [
  { href: "/despre-noi", label: "Despre" },
  { href: "/camere", label: "Camere" },
  { href: "/galerie", label: "Galerie" },
  { href: "/activitati-in-zona", label: "Împrejurimi" },
  { href: "/servicii", label: "Servicii" },
] as const;
