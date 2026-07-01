// Real, validated content for Pensiunea Amonte (extracted from the approved
// design prototype). Conversion is WhatsApp-only - there is no custom form.

// The single tracked conversion: WhatsApp click. Used by every WhatsApp CTA.
export const WHATSAPP_URL =
  "https://wa.me/40747342280?text=Salut!%20A%C8%99%20dori%20s%C4%83%20verific%20disponibilitatea%20pentru%20o%20rezervare%20la%20Pensiunea%20Amonte.";

// Fallback when WhatsApp is unavailable.
export const GOOGLE_FORM_URL = "https://forms.gle/Ft4iFEuRJUfbyAPV6";

// Canonical visitor-facing domain (production). SITE_URL in site.ts is the
// staging deployment; this is used in footer, JSON-LD, and all public links.
export const WEBSITE = "https://pensiunea-amonte.ro";

// GPS coordinates - single source for JSON-LD geo across all pages.
export const GPS_LAT = "45.66351517785169";
export const GPS_LNG = "24.45150864765203";

// Used in structured data PostalAddress.
export const POSTAL_CODE = "555200";

// Check-in / check-out times (24 h format, kit-confirmed).
export const CHECK_IN = "15:00";
export const CHECK_OUT = "12:00";

export const CONTACT = {
  phoneMobile: "+40 747 342 280", // mobil / WhatsApp - format internațional (kit NAP)
  phoneLandline: "0369 420 619", // fix
  email: "contact@pensiunea-amonte.ro",
  // NAP canonic - format identic pe toate directoarele (fără „Avrig" ca localitate separată)
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
    photo: "/camera-dubla.jpeg",
    photoLabel: "[ cameră dublă ]",
  },
  {
    slug: "studio-de-familie",
    name: "Studio de familie",
    spec: "4 persoane · pat matrimonial + canapea extensibilă",
    desc: "Spațios și confortabil, potrivit pentru familii și grupuri mici.",
    longDesc:
      "Studio spațios și confortabil, cu pat matrimonial și canapea extensibilă - potrivit pentru familii și grupuri mici de până la 4 persoane. Acces la zona de wellness și la living-ul cu șemineu.",
    price: "de la 800",
    features: [
      "4 persoane",
      "Pat matrimonial + canapea extensibilă",
      "Potrivit pentru familii",
      "Încălzire în pardoseală",
    ],
    photo: "/studio-familie.jpeg",
    photoLabel: "[ studio familie ]",
  },
];

export function getRoom(slug: string): Room | undefined {
  return ROOMS.find((r) => r.slug === slug);
}

export type Amenity = { icon: string; label: string };

// Facilități confirmate - afișate pe home și pe pagina de servicii.
// Mic dejun și bar active pe staging (SHOW_FB_AND_EVENTS = true în site.ts).
// Migrarea la producție (pensiunea-amonte.ro) necesită CAEN 5611/5621/5630 + DSP/ANSVSA.
export const AMENITIES: Amenity[] = [
  { icon: "🧖", label: "Jacuzzi & saună" },
  { icon: "🔥", label: "Living cu șemineu" },
  { icon: "🏔️", label: "Terasă panoramică" },
  { icon: "🪵", label: "Firepit exterior" },
  { icon: "🍳", label: "Mic dejun inclus" },
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
  /** Single photo - file in /public. Omit to show the striped placeholder. */
  photo?: string;
  /** When set (exactly 2 photos), the card renders a side-by-side split image instead of one photo. */
  photos?: [string, string];
};

export const ACTIVITIES: Activity[] = [
  {
    name: "Drumeții în Făgăraș",
    desc: "Trasee montane spre Cabana Bârcaciu, Negoiu și Suru - plecare direct din Valea Avrigului.",
    dist: "în zonă",
    photoLabel: "[ trasee Făgăraș ]",
    photo: "/trasee-fagaras.jp2",
  },
  {
    name: "Brambura Park",
    desc: "Parc de aventură și activități pentru toată familia.",
    dist: "~10 min",
    photoLabel: "[ Brambura Park ]",
    photo: "/brambura.jpeg",
  },
  {
    name: "Palatul Brukenthal",
    desc: "Reședința de vară și grădinile din Avrig.",
    dist: "în apropiere",
    photoLabel: "[ Palatul Brukenthal ]",
    photo: "/palatul-bruk.jpg",
  },
  {
    name: "Închirieri e-bike",
    desc: "Închiriere e-bike pentru trasee montane și plimbări prin zonă.",
    dist: "în apropiere",
    photoLabel: "[ închirieri e-bike ]",
    photo: "/ebike.jpeg",
  },
  {
    name: "Călărie & ATV",
    desc: "Experiențe în aer liber, în funcție de sezon.",
    dist: "sezonier",
    photoLabel: "[ ATV / călărie ]",
    photos: ["/calarie.jpeg", "/atv.jpeg"],
  },
  {
    name: "Fermă de cerbi",
    desc: "Fermă de cerbi la Poiana Neamțului - vizită pentru toată familia.",
    dist: "~10 min",
    photoLabel: "[ fermă de cerbi ]",
    photo: "/ferma-de-cerbi.jpeg",
  },
  {
    name: "Casa Vikingilor",
    desc: "Atracție locală unică, inspirată din cultura nordică.",
    dist: "în apropiere",
    photoLabel: "[ Casa Vikingilor ]",
    photo: "/casa-vikingilor.jpeg",
  },
  {
    name: "Povestea Calendarului",
    desc: "Spațiu cultural și artistic dedicat calendarului tradițional.",
    dist: "în apropiere",
    photoLabel: "[ Povestea Calendarului ]",
    photo: "/povestea-calendarului.jpeg",
  },
  {
    name: "Corabia Piraților",
    desc: "Piscină tematică pentru copii și familii, în Avrig.",
    dist: "în apropiere",
    photoLabel: "[ Corabia Piraților ]",
    photo: "/Corabia-piratilor.jpeg",
  },
];

export type GalleryItem = { photo: string; label: string; span: 1 | 2 };

export const GALLERY: GalleryItem[] = [
  { photo: "/exterior-pensiune.jpeg", label: "Exterior pensiune", span: 2 },
  { photo: "/jacuzzi-sauna.jpeg", label: "Jacuzzi & saună", span: 1 },
  { photo: "/camera-balcon.jpeg", label: "Cameră cu balcon", span: 1 },
  { photo: "/priveliste-fagaras.jpg", label: "Priveliște spre Făgăraș", span: 2 },
  { photo: "/firepit.jpeg", label: "Firepit pe terasă, seara", span: 1 },
  { photo: "/bruno.jpeg", label: "Bruno", span: 1 },
];

// Recenzii reale, selectate din Google Business Profile și Tripadvisor
// (rating agregat: 4.9/5 din 77 recenzii Google). Recenziile scrise inițial
// în engleză sunt păstrate ca atare; cele traduse din română de Google au
// fost redate în română, păstrând sensul exact. Nu inventa recenzii noi -
// la actualizare, adaugă mereu de la sursă.
export type Review = {
  stars: string;
  text: string;
  name: string;
  meta: string;
  initial: string;
};

export const RATING_SUMMARY = { value: "4.9", count: 77 } as const;

export const REVIEWS: Review[] = [
  {
    stars: "★★★★★",
    text: "Am avut o experiență excelentă la Pensiunea Amonte. Locația este superbă, perfectă pentru relaxare și pentru a te bucura de liniște și peisaj. Personalul a fost incredibil de prietenos.",
    name: "Mihaela Marcuț",
    meta: "Google · acum o lună",
    initial: "M",
  },
  {
    stars: "★★★★★",
    text: "Locația este uimitoare! Piscina și sauna sunt absolut superbe și foarte curate. Mâncarea a fost extrem de delicioasă, toate preparatele au fost excelente și gătite cu mult gust. Băieții au servit impecabil, fiind foarte atenți la fiecare detaliu.",
    name: "Larisa Larisa",
    meta: "Google · acum o lună",
    initial: "L",
  },
  {
    stars: "★★★★★",
    text: "It was a pleasant experience. The staff is very kind, respectful, very focused on the customer's needs. They attend to every request and they create a great atmosphere for everyone.",
    name: "Cosmin Voicu",
    meta: "Google · acum 7 luni",
    initial: "C",
  },
  {
    stars: "★★★★★",
    text: "This was a true surprise. It exceeded our expectation. It's situated a 4 minutes drive away from Brambura Park. We've spent a night in august and we found a beautiful and modern place. We had a huge studio with the biggest balcony ever.",
    name: "cosminp20",
    meta: "Tripadvisor · acum 10 luni",
    initial: "C",
  },
  {
    stars: "★★★★★",
    text: "Excelent! O locație super tare, unde totul a fost peste așteptări. Am venit cu un grup mai mare și am închiriat toată pensiunea - cea mai bună alegere. Totul a fost de top: condițiile, designul, atenția la detalii.",
    name: "Adrian Migiu",
    meta: "Google · acum o lună",
    initial: "A",
  },
  {
    stars: "★★★★★",
    text: "Excellent accommodation. Stayed there for 3 nights during an exhausting e-bike race and could find the best condition to properly relax and recover. If you leave your balcony door open you will hear the river gently flowing.",
    name: "Reini Stadler",
    meta: "Google · acum 8 luni",
    initial: "R",
  },
  {
    stars: "★★★★★",
    text: "Un teambuilding de 2 zile care a semănat mai mult cu o vacanță bine organizată decât cu o „activitate de echipă”. Gazdele - rapide, implicate și cu un simț al ospitalității rar întâlnit. Mâncarea a fost foarte bună, camerele impecabile.",
    name: "Dan Velcu",
    meta: "Google · acum o lună",
    initial: "D",
  },
  {
    stars: "★★★★★",
    text: "Great and beautiful new property with a very comfortable stay. Amazing place near the Avrig River, great ambiance. Wonderful views of the mountains.",
    name: "Olga Voskoboinikov",
    meta: "Google · acum un an",
    initial: "O",
  },
  {
    stars: "★★★★★",
    text: "O oază de liniște unde poți veni singur sau cu copiii. Servicii excelente, camere noi, mâncare gustoasă, iar sauna te deconectează complet de stresul săptămânii. Ne întoarcem cu drag, mai ales pentru Brunooo!",
    name: "Simona-Isabela Hritac",
    meta: "Google · acum o lună",
    initial: "S",
  },
  {
    stars: "★★★★★",
    text: "We had a wonderful stay at this beautiful guesthouse. The surrounding nature is absolutely amazing, and the peaceful atmosphere made it the perfect place to relax. The staff were very kind and attentive, and we felt truly welcomed as a family with one child. We will definitely come back!",
    name: "Jinga Arnold",
    meta: "Google · acum o lună",
    initial: "J",
  },
  {
    stars: "★★★★★",
    text: "10/10 cu felicitări! Locația ideală pentru un teambuilding reușit - pot spune că a fost o experiență impecabilă de la început până la sfârșit!",
    name: "Filip Mihaela",
    meta: "Google · acum o lună",
    initial: "F",
  },
  {
    stars: "★★★★★",
    text: "Camerele erau curate și îngrijite, iar mâncarea a fost foarte bună. Accesul la piscină a fost super plăcut și a făcut totul mult mai relaxant. Designul pensiunii este modern și plăcut, te face să te simți bine din prima clipă.",
    name: "Herta Florina",
    meta: "Google · acum o lună",
    initial: "H",
  },
  {
    stars: "★★★★★",
    text: "O mini-vacanță de vis, la poalele munților! Gazde de zece stele, servicii de zece stele, curățenie de zece stele! Ne întoarcem cu siguranță!",
    name: "Mariana Cordoș",
    meta: "Google · acum o lună",
    initial: "M",
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
