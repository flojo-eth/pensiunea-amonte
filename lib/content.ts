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
  price: string; // "600"
  features: string[];
  photo: string; // hero photo on the detail page
  cardPhotos?: [string, string]; // optional: 2 photos shown side-by-side on the listing card
  photos: string[]; // full gallery on the detail page
  photoLabel: string; // fallback label if photo is missing
};

export const ROOMS: Room[] = [
  {
    slug: "camera-dubla-deluxe",
    name: "Cameră Dublă Deluxe",
    spec: "2 persoane · spațioasă · vedere la munte",
    desc: "Cameră spațioasă și elegantă, cu vedere la munte și facilități premium. Perfectă pentru o escapadă în doi.",
    longDesc:
      "Bucură-te de o cameră premium, mult mai spațioasă, dotată cu un dulap mare și mobilier elegant. Priveliștea către Munții Făgăraș completează perfect experiența unei vacanțe de vis.",
    price: "650",
    features: [
      "2 persoane",
      "Mic dejun inclus",
      "Cameră spațioasă",
      "Dulap mare",
      "Vedere la munte",
      "Încălzire în pardoseală",
    ],
    photo: "/camera-deluxe/pat-tip-1.jpeg",
    cardPhotos: ["/camera-deluxe/1-din-2.jpg", "/camera-deluxe/2-din-2.jpeg"],
    photos: [
      "/camera-deluxe/1-din-2.jpg",
      "/camera-deluxe/2-din-2.jpeg",
      "/camera-deluxe/pat-tip-1.jpeg",
      "/camera-deluxe/baie.jpeg",
    ],
    photoLabel: "[ cameră dublă deluxe ]",
  },
  {
    slug: "camera-dubla-vedere-munte",
    name: "Cameră dublă cu vedere la munte",
    spec: "2 persoane · balcon privat · vedere munte",
    desc: "Cameră modernă cu balcon privat, priveliște spre munte și mic dejun inclus. Ideală pentru relaxare în cuplu.",
    longDesc:
      "Cameră modernă, luminoasă, cu balcon privat și priveliște deschisă spre Munții Făgăraș. Gândită pentru relaxare în cuplu, cu mic dejun inclus și acces la toate spațiile comune.",
    price: "600",
    features: [
      "2 persoane",
      "Mic dejun inclus",
      "Balcon privat",
      "Vedere la munte",
      "Încălzire în pardoseală",
    ],
    // hero on the detail page
    photo: "/camera-dubla-folder/poza-pat-si-camera.jpeg",
    // card split
    cardPhotos: ["/camera-dubla-folder/poza-pat-si-camera.jpeg", "/camera-dubla-folder/birou-cu-priveliste.jpeg"],
    photos: [
      "/camera-dubla-folder/poza-pat-si-camera.jpeg",
      "/camera-dubla-folder/birou-cu-priveliste.jpeg",
      "/camera-dubla-folder/pat-tip-2.jpeg",
      "/camera-dubla-folder/raft_haine.jpg",
      "/camera-dubla-folder/baie.jpeg",
    ],
    photoLabel: "[ cameră dublă ]",
  },
  {
    slug: "studio-de-familie",
    name: "Studio de familie",
    spec: "4 persoane · pat matrimonial + canapea extensibilă",
    desc: "Spațios și confortabil, potrivit pentru familii și grupuri mici.",
    longDesc:
      "Studio spațios și confortabil, cu pat matrimonial și canapea extensibilă - potrivit pentru familii și grupuri mici de până la 4 persoane. Acces la toate spațiile comune.",
    price: "de la 800",
    features: [
      "4 persoane",
      "Pat matrimonial + canapea extensibilă",
      "Potrivit pentru familii",
      "Încălzire în pardoseală",
    ],
    // hero on the detail page: photo 3/9 (pat_dormitor)
    photo: "/apartament/pat_dormitor.JPG",
    // card split: 4/9 left | 5/9 right
    cardPhotos: ["/apartament/canapea_extensibila_living.jpg", "/apartament/chicineta_living.jpg"],
    photos: [
      "/apartament/1-din-2.jpg",
      "/apartament/2-din-2.jpg",
      "/apartament/pat_dormitor.JPG",
      "/apartament/canapea_extensibila_living.jpg",
      "/apartament/chicineta_living.jpg",
      "/apartament/balcon_apartament.JPG",
      "/apartament/baie.JPG",
      "/apartament/detalii_baie_rituals.jpg",
      "/apartament/detalii_hol_bec.jpg",
    ],
    photoLabel: "[ studio familie ]",
  },
  {
    slug: "camera-cu-balcon",
    name: "Cameră cu Balcon",
    spec: "2 persoane · balcon privat · vedere la pădure",
    desc: "Cameră luminoasă cu balcon privat orientat spre pădure. Ideală pentru un sejur liniștit în mijlocul naturii.",
    longDesc:
      "Această cameră modernă oferă un balcon privat cu o priveliște liniștitoare spre pădure. Spațiul este gândit pentru confort absolut, incluzând micul dejun și acces la toate facilitățile pensiunii.",
    price: "550",
    features: [
      "2 persoane",
      "Mic dejun inclus",
      "Balcon privat",
      "Vedere la pădure",
      "Încălzire în pardoseală",
    ],
    photo: "/camera-balcon/poza-pat.jpeg",
    cardPhotos: ["/camera-balcon/poza-pat.jpeg", "/camera-balcon/balcon1.jpeg"],
    photos: [
      "/camera-balcon/poza-pat.jpeg",
      "/camera-balcon/balcon1.jpeg",
      "/camera-balcon/balcon2.jpeg",
      "/camera-balcon/poza-din-pat-catre-birou.jpeg",
      "/camera-balcon/poza-jumate-pat-si-bec-noptiera.jpeg",
      "/camera-balcon/priveliste.jpeg",
      "/camera-balcon/detalii.jpeg",
      "/camera-balcon/baie.jpeg",
    ],
    photoLabel: "[ cameră cu balcon ]",
  },
];

export function getRoom(slug: string): Room | undefined {
  return ROOMS.find((r) => r.slug === slug);
}

export type Amenity = {
  icon: string;
  label: string;
  photo?: string;
  photoLabel: string;
};

// Facilități confirmate - afișate pe home și pe pagina de servicii.
// Mic dejun și bar active pe staging (SHOW_FB_AND_EVENTS = true în site.ts).
// Migrarea la producție (pensiunea-amonte.ro) necesită CAEN 5611/5621/5630 + DSP/ANSVSA.
export const AMENITIES: Amenity[] = [
  { icon: "🧖", label: "Jacuzzi & saună", photo: "/jacuzzi-sauna.jpeg", photoLabel: "[ jacuzzi & saună ]" },
  { icon: "🔥", label: "Living cu șemineu", photo: "/servicii-facilitati/living-semineu.jpeg", photoLabel: "[ living / șemineu ]" },
  { icon: "🏔️", label: "Terasă panoramică", photo: "/priveliste-fagaras.jpg", photoLabel: "[ terasă panoramică ]" },
  { icon: "🪵", label: "Firepit exterior", photo: "/firepit.jpeg", photoLabel: "[ firepit exterior ]" },
  { icon: "🍳", label: "Mic dejun", photo: "/servicii-facilitati/mic-dejun.jpg", photoLabel: "[ mic dejun ]" },
  { icon: "🍽️", label: "Cină la cerere", photo: "/servicii-facilitati/mancare-coaste-porc-iberic.jpeg", photoLabel: "[ cină la cerere ]" },
  { icon: "🍸", label: "Bar / lounge", photo: "/servicii-facilitati/bar-lounge.jpeg", photoLabel: "[ bar / lounge ]" },
  { icon: "🎯", label: "Sală pentru grupuri", photo: "/servicii-facilitati/sala-pentru-grupuri.jpg", photoLabel: "[ sală grupuri ]" },
  { icon: "⚽", label: "Mini teren de fotbal", photo: "/servicii-facilitati/teren-fotbal.jpeg", photoLabel: "[ teren fotbal ]" },
  { icon: "🏓", label: "Masă de ping-pong", photo: "/servicii-facilitati/ping-pong.jpeg", photoLabel: "[ ping-pong ]" },
  { icon: "🏔️", label: "Rezervare integrală disponibilă", photo: "/servicii-facilitati/rezervare-integrala.jpeg", photoLabel: "[ rezervare integrală ]" },
];

// Detalii structurate afișate pe /servicii — sub grid-ul de facilități.
// Actualizează DOAR aici, pagina le preia automat.
export const SERVICE_DETAILS = [
  {
    id: "inclus",
    icon: "✓",
    title: "Ce include o ședere la Amonte",
    items: [
      "Cazare în camere duble și apartamente",
      "Mic dejun inclus, servit zilnic",
      "Acces la toate spațiile comune",
      "Living primitor, cu șemineu",
      "Terasă panoramică",
      "Wi-Fi & parcare privată",
      "Vedere spre munte și liniște naturală",
    ],
    note: null as string | null,
  },
  {
    id: "spa",
    icon: "🧖",
    title: "Zona SPA — jacuzzi & saună",
    items: [
      "Saună: 2–3 sesiuni pe zi, pe bază de programare",
      "Jacuzzi: acces disponibil până la ora 22:00",
      "Acces comun, într-un cadru relaxat și ordonat",
    ],
    note: "Zona SPA se accesează contra cost, în funcție de disponibilitate. Rezervarea se face la recepție." as string | null,
  },
  {
    id: "masa",
    icon: "🍳",
    title: "Mese & mic dejun",
    items: [
      "Mic dejun inclus, servit zilnic",
      "Cină la cerere — disponibilă în weekend, meniu restrâns de 2–3 preparate zilnice",
    ],
    note: "Cina este gândită pentru o experiență relaxată, nu ca un restaurant clasic." as string | null,
  },
  {
    id: "bar",
    icon: "🍸",
    title: "Bar & spații comune",
    items: [
      "Bar funcțional zilnic, până la miezul nopții",
      "Spații comune gândite pentru seri liniștite, conversații și relaxare",
    ],
    note: null as string | null,
  },
  {
    id: "exterior",
    icon: "🪵",
    title: "Spații exterioare",
    items: [
      "Terasă panoramică cu vedere spre Făgăraș",
      "Curte spațioasă",
      "Foc de tabără — disponibil pentru grupuri, contra cost",
    ],
    note: null as string | null,
  },
  {
    id: "ebike",
    icon: "🚲",
    title: "Biciclete electrice",
    items: [
      "5 biciclete electrice disponibile pentru închiriere",
      "Ideale pentru plimbări în zonă și trasee ușoare",
    ],
    note: "Disponibilitatea și detaliile se confirmă la recepție sau la cerere." as string | null,
  },
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
    photo: "/trasee-fagaras.jpg",
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
  { photo: "/poza_hero.jpg", label: "Pensiunea Amonte", span: 2 },
  { photo: "/exterior-pensiune.jpeg", label: "Exterior pensiune", span: 2 },
  { photo: "/jacuzzi-sauna.jpeg", label: "Jacuzzi & saună", span: 1 },
  { photo: "/camera-dubla-folder/pat-tip-1.jpeg", label: "Dormitor cameră dublă", span: 1 },
  { photo: "/camera-dubla-folder/birou-cu-priveliste.jpeg", label: "Zonă de birou cu priveliște", span: 1 },
  { photo: "/camera-dubla-folder/baie.jpeg", label: "Baie cameră dublă", span: 1 },
  { photo: "/apartament/pat_dormitor.JPG", label: "Dormitor apartament", span: 1 },
  { photo: "/apartament/canapea_extensibila_living.jpg", label: "Living apartament", span: 2 },
  { photo: "/apartament/chicineta_living.jpg", label: "Chicinetă apartament", span: 1 },
  { photo: "/apartament/balcon_apartament.JPG", label: "Balcon privat apartament", span: 1 },
  { photo: "/apartament/detalii_baie_rituals.jpg", label: "Cosmetice Rituals în baie", span: 1 },
  { photo: "/interior-living.jpeg", label: "Interior living", span: 2 },
  { photo: "/salon.jpeg", label: "Salonul pensiunii", span: 2 },
  { photo: "/semineu.jpeg", label: "Șemineu călduros", span: 1 },
  { photo: "/detaliu-lemn.jpeg", label: "Detaliu lemn rustic", span: 1 },
  { photo: "/priveliste-fagaras.jpg", label: "Priveliște spre Făgăraș", span: 2 },
  { photo: "/firepit.jpeg", label: "Firepit pe terasă, seara", span: 1 },
  { photo: "/bruno.jpeg", label: "Bruno", span: 1 },
  { photo: "/ebike.jpeg", label: "Trasee cu e-bike", span: 1 },
  { photo: "/trasee-fagaras.jpg", label: "Trasee în Făgăraș", span: 1 },
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

export const RATING_SUMMARY = { value: "5", count: 80 } as const;

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

export type Audience = {
  title: string;
  tagline: string;
  body: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const AUDIENCES: Audience[] = [
  {
    title: "Escapadă în doi",
    tagline: "Liniște, priveliște și timp doar pentru voi",
    body: "Camere cu balcon privat și vedere la munte, jacuzzi și saună (contra cost), seri lângă șemineu. Locul unde încetiniți amândoi, departe de zgomot.",
    highlights: ["Cameră cu vedere la munte", "Jacuzzi & saună (contra cost)", "Living cu șemineu"],
    ctaLabel: "Vezi camerele",
    ctaHref: "/camere/camera-dubla-deluxe",
  },
  {
    title: "Vacanță în familie",
    tagline: "Spațiu, natură și liniște pentru toată familia",
    body: "Studiouri spațioase, curte sigură și activități la câțiva pași - ferma de cerbi, Brambura Park, plimbări prin natură. O oază de liniște unde vii cu copiii și te relaxezi cu adevărat.",
    highlights: ["Studiouri de familie", "Activități pentru copii în zonă", "Curte & natură"],
    ctaLabel: "Vezi activitățile",
    ctaHref: "/activitati-in-zona",
  },
  {
    title: "Grup sau echipă",
    tagline: "Rezervi toată pensiunea - un loc doar al vostru",
    body: "Amonte se poate închiria integral, pentru până la 24 de persoane, cu sală dedicată pentru grupuri. Ideal pentru teambuilding, retreaturi sau ieșiri cu prietenii - natură, spa și confort, fără să împărțiți spațiul cu nimeni.",
    highlights: ["Închiriere integrală (până la 24 pers.)", "Sală pentru grupuri", "Spa & terasă"],
    ctaLabel: "Cere ofertă pentru grup",
    ctaHref: "whatsapp",
  },
];

export const HOSTS = {
  eyebrow: "Gazdele Amonte",
  title: "Oameni, nu doar o pensiune",
  body: [
    "La Amonte, diferența o fac oamenii. Suntem o echipă tânără, implicată, care ține la fiecare detaliu - de la camere impecabile la o cafea bună dimineața. Ne place să fim aproape de oaspeți și să ne asigurăm că nu le lipsește nimic pe tot parcursul șederii.",
    "Ne vei găsi mereu la îndemână pentru o recomandare de traseu, un pont despre zonă sau pur și simplu o poveste seara, lângă foc. Iar Bruno, ciobănescul nostru de Berna, e mereu primul care întâmpină oaspeții.",
  ],
} as const;

export const CANCELLATION = {
  eyebrow: "Politica de anulare",
  promiseTitle: "Rezervarea ta confirmată este garantată.",
  promiseSub: "O rezervare confirmată la Amonte nu se anulează niciodată din partea noastră. Locul tău rămâne al tău.",
  details: [
    "Rezervarea se confirmă printr-un avans de 30% (sau o sumă stabilită de comun acord).",
    "Anulare cu cel puțin 7 zile înainte de sosire: avansul se restituie integral.",
    "Anulare cu mai puțin de 7 zile înainte de sosire: avansul se reține.",
    "Neprezentare (no-show): se reține avansul.",
    "Pentru închirierea integrală a pensiunii (grupuri), termenul de anulare gratuită este de 28 zile înainte de sosire, având în vedere rezervarea întregului spațiu.",
    "Modificarea datelor este posibilă în funcție de disponibilitate - scrie-ne pe WhatsApp și găsim o soluție.",
  ],
  note: "Politica se aplică rezervărilor directe (WhatsApp, telefon, site). Rezervările făcute prin Booking.com sau Airbnb respectă politica platformei respective.",
  faqs: [
    {
      q: "Care este politica de anulare?",
      a: "O rezervare confirmată este garantată din partea noastră. Pentru anulări efectuate cu cel puțin 7 zile înainte de sosire (sau 28 de zile în cazul grupurilor care închiriază integral), avansul de 30% se restituie integral. Sub acest termen, avansul se reține. Politica se aplică exclusiv rezervărilor directe (WhatsApp, telefon, site).",
    },
    {
      q: "Îmi pot modifica rezervarea?",
      a: "Da, în funcție de disponibilitate. Scrie-ne pe WhatsApp și găsim împreună o soluție.",
    },
  ],
} as const;

export const FIRE_SAFETY_AUTH = "Autorizație de Securitate la Incendiu ISU Sibiu nr. 556/25/SU-SB din 24.09.2025";



