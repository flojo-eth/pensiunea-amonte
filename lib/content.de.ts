// German content: the counterpart of every language-dependent export in
// lib/content.ts, typed against the Romanian one so a missing field fails the
// build (lib/i18n/index.ts checks that none is missing).
//
// Translated for meaning, not word for word, with the formal "Sie". Every
// content rule in CLAUDE.md applies here as well: no dashes as punctuation, no
// invented numbers, the riverside is "auf der anderen Straßenseite", never
// ours. The hot tub is always "Jacuzzi", as in Romanian. Place names and the
// address stay in Romanian (Valea Avrigului).
//
// Reviews: the ones written in English are quoted as written; the Romanian
// ones are translated faithfully and carry `translated: true`, which shows
// "Aus dem Rumänischen übersetzt" under them.

import type {
  ABOUT_FEATURES as RO_ABOUT_FEATURES,
  CANCELLATION as RO_CANCELLATION,
  HOSTS as RO_HOSTS,
} from "./content";
import {
  CONTACT,
  groupReviews,
  whatsappUrl,
  type Activity,
  type Amenity,
  type Audience,
  type EventCard,
  type Faq,
  type GalleryItem,
  type NavLink,
  type PrivateEvents,
  type Review,
  type Room,
  type ServiceDetail,
  type Stat,
} from "./content";
import { href, roomHref } from "./i18n/config";

export const WHATSAPP_URL = whatsappUrl(
  "Hallo! Ich möchte die Verfügbarkeit für einen Aufenthalt in der Pensiunea Amonte anfragen.",
);


export const STATS: Stat[] = [
  { value: "10", label: "Zimmer und Studios" },
  { value: "24", label: "Gäste" },
  { value: "40 Min.", label: "Bis Sibiu" },
];

export const ROOMS: Room[] = [
  {
    slug: "camera-dubla-deluxe",
    name: "Deluxe-Doppelzimmer",
    spec: "2 Personen · geräumig · Bergblick",
    metaDesc: "Deluxe-Doppelzimmer der Pensiunea Amonte in Valea Avrigului bei Sibiu: geräumig, mit eigenem Balkon, Bergblick und Frühstück inklusive.",
    desc: "Ein geräumiges, elegantes Zimmer mit Bergblick und hochwertiger Ausstattung. Ideal für einen Kurzurlaub zu zweit.",
    longDesc:
      "Ein Premium-Zimmer mit deutlich mehr Platz, einem großen Kleiderschrank und eleganten Möbeln. Der Blick auf das Făgăraș-Gebirge rundet den Aufenthalt ab.",
    price: "650",
    features: [
      "2 Personen", "2 Zimmer dieser Art",
      "Frühstück inklusive", "Eigener Balkon",
      "Geräumiges Zimmer",
      "Großer Kleiderschrank",
      "Bergblick",
      "Fußbodenheizung",
    ],
    photo: "/camera-deluxe/pat-tip-1.jpeg",
    cardPhotos: ["/camera-deluxe/1-din-2.jpg", "/camera-deluxe/2-din-2.jpeg"],
    photos: [
      "/camera-deluxe/1-din-2.jpg",
      "/camera-deluxe/2-din-2.jpeg",
      "/camera-deluxe/pat-tip-1.jpeg",
      "/camera-deluxe/baie.jpeg",
    ],
    photoLabel: "[ Deluxe-Doppelzimmer ]",
  },
  {
    slug: "camera-dubla-vedere-munte",
    name: "Doppelzimmer mit Bergblick",
    spec: "2 Personen · eigener Balkon · Bergblick",
    metaDesc: "Doppelzimmer mit Blick auf das Făgăraș-Gebirge in der Pensiunea Amonte bei Sibiu: eigener Balkon, Fußbodenheizung, Frühstück inklusive.",
    desc: "Ein modernes Zimmer mit eigenem Balkon, Bergblick und Frühstück inklusive. Ideal für erholsame Tage zu zweit.",
    longDesc:
      "Ein helles, modernes Zimmer mit eigenem Balkon und freiem Blick auf das Făgăraș-Gebirge. Gedacht für Paare, die abschalten möchten, mit Frühstück inklusive und Zugang zu allen Gemeinschaftsräumen.",
    price: "600",
    features: [
      "2 Personen", "4 Zimmer dieser Art",
      "Frühstück inklusive",
      "Eigener Balkon",
      "Bergblick",
      "Fußbodenheizung",
    ],
    photo: "/camera-dubla-folder/poza-pat-si-camera.jpeg",
    cardPhotos: ["/camera-dubla-folder/poza-pat-si-camera.jpeg", "/camera-dubla-folder/birou-cu-priveliste.jpeg"],
    photos: [
      "/camera-dubla-folder/poza-pat-si-camera.jpeg",
      "/camera-dubla-folder/birou-cu-priveliste.jpeg",
      "/camera-dubla-folder/pat-tip-2.jpeg",
      "/camera-dubla-folder/raft_haine.jpg",
      "/camera-dubla-folder/baie.jpeg",
    ],
    photoLabel: "[ Doppelzimmer ]",
  },
  {
    slug: "studio-de-familie",
    name: "Familienstudio",
    spec: "4 Personen · Doppelbett + Schlafsofa",
    metaDesc: "Familienstudio für 4 Personen in der Pensiunea Amonte bei Sibiu: Doppelbett, Schlafsofa, eigener Balkon und Frühstück inklusive.",
    desc: "Geräumig und komfortabel, passend für Familien und kleine Gruppen.",
    longDesc:
      "Ein geräumiges, komfortables Studio mit Doppelbett und Schlafsofa, passend für Familien und kleine Gruppen bis 4 Personen. Zugang zu allen Gemeinschaftsräumen.",
    price: "ab 800",
    features: [
      "4 Personen", "2 Studios dieser Art", "Frühstück inklusive", "Eigener Balkon",
      "Doppelbett + Schlafsofa",
      "Familienfreundlich",
      "Fußbodenheizung",
    ],
    photo: "/apartament/pat_dormitor.JPG",
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
    photoLabel: "[ Familienstudio ]",
  },
  {
    // "Cameră cu Balcon" in Romanian, "Double Room with Balcony" in English.
    slug: "camera-cu-balcon",
    name: "Doppelzimmer mit Balkon",
    spec: "2 Personen · eigener Balkon · Waldblick",
    metaDesc: "Doppelzimmer mit Balkon und Waldblick in der Pensiunea Amonte, Valea Avrigului, bei Sibiu: ruhig, Fußbodenheizung, Frühstück inklusive.",
    desc: "Ein helles Zimmer mit eigenem Balkon zum Wald hin. Ideal für einen ruhigen Aufenthalt mitten in der Natur.",
    longDesc:
      "Dieses moderne Zimmer hat einen eigenen Balkon mit beruhigendem Blick auf den Wald. Es ist ganz auf Komfort ausgelegt, mit Frühstück inklusive und Zugang zu allen Einrichtungen der Pension.",
    price: "550",
    features: [
      "2 Personen", "2 Zimmer dieser Art",
      "Frühstück inklusive",
      "Eigener Balkon",
      "Waldblick",
      "Fußbodenheizung",
    ],
    photo: "/camera-balcon/poza-pat.jpeg",
    cardPhotos: ["/camera-balcon/poza-din-pat-catre-birou.jpeg", "/camera-balcon/priveliste.jpeg"],
    photos: [
      "/camera-balcon/poza-jumate-pat-si-bec-noptiera.jpeg",
      "/camera-balcon/poza-din-pat-catre-birou.jpeg",
      "/camera-balcon/poza-pat.jpeg",
      "/camera-balcon/balcon1.jpeg",
      "/camera-balcon/priveliste.jpeg",
      "/camera-balcon/balcon2.jpeg",
      "/camera-balcon/baie.jpeg",
      "/camera-balcon/detalii.jpeg",
    ],
    photoLabel: "[ Doppelzimmer mit Balkon ]",
  },
];

// Feeds amenityFeature in the German JSON-LD, like its Romanian counterpart.
export const AMENITIES: Amenity[] = [
  { icon: "🧖", label: "Jacuzzi & Sauna", photo: "/jacuzzi-sauna.jpeg", photoLabel: "[ Jacuzzi & Sauna ]" },
  { icon: "🔥", label: "Wohnzimmer mit Kamin", photo: "/semineu.jpeg", photoLabel: "[ Wohnzimmer / Kamin ]" },
  { icon: "🏔️", label: "Panoramaterrasse", photo: "/priveliste-fagaras.jpg", photoLabel: "[ Panoramaterrasse ]" },
  { icon: "🪵", label: "Lagerfeuer", photo: "/firepit.jpeg", photoLabel: "[ Lagerfeuer ]" },
  { icon: "🍳", label: "Frühstück", photo: "/servicii-facilitati/mic-dejun.jpg", photoLabel: "[ Frühstück ]" },
  { icon: "🍽️", label: "Abendessen auf Anfrage", photo: "/servicii-facilitati/mancare-coaste-porc-iberic.jpeg", photoLabel: "[ Abendessen auf Anfrage ]" },
  { icon: "🍸", label: "Bar & Lounge", photo: "/servicii-facilitati/bar-lounge.jpeg", photoLabel: "[ Bar & Lounge ]" },
  { icon: "🎯", label: "Seminarraum für Gruppen", photo: "/servicii-facilitati/sala-pentru-grupuri.jpg", photoLabel: "[ Seminarraum ]" },
  { icon: "⚽", label: "Kleinfeld-Fußballplatz", photo: "/servicii-facilitati/teren-fotbal.jpeg", photoLabel: "[ Fußballplatz ]" },
  { icon: "🏓", label: "Tischtennisplatte", photo: "/servicii-facilitati/ping-pong.jpeg", photoLabel: "[ Tischtennis ]" },
  { icon: "🏔️", label: "Exklusivmiete des ganzen Hauses möglich", photo: "/servicii-facilitati/rezervare-integrala.jpeg", photoLabel: "[ Exklusivmiete ]" },
];

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "inclus",
    icon: "✓",
    title: "Was ein Aufenthalt bei Amonte umfasst",
    items: [
      "Unterkunft in Doppelzimmern und Familienstudios",
      "Frühstück inklusive, täglich serviert",
      "Zugang zu allen Gemeinschaftsräumen",
      "Ein gemütliches Wohnzimmer mit Kamin",
      "Panoramaterrasse",
      "Kostenloses WLAN",
      "Kostenlose Parkplätze, innen und außen",
      "Bergblick und natürliche Ruhe",
    ],
    note: null,
  },
  {
    id: "spa",
    icon: "🧖",
    title: "Spa-Bereich: Jacuzzi & Sauna",
    items: [
      "Sauna: 2-3 Gänge pro Tag, nach Terminvereinbarung",
      "Jacuzzi: nutzbar bis 22:00 Uhr",
      "Gemeinsame Nutzung, in entspannter und geordneter Atmosphäre",
    ],
    note: "Der Spa-Bereich ist kostenpflichtig und je nach Verfügbarkeit nutzbar. Die Reservierung erfolgt an der Rezeption.",
  },
  {
    id: "masa",
    icon: "🍳",
    title: "Mahlzeiten & Frühstück",
    items: [
      "Frühstück inklusive, täglich serviert",
      "Abendessen auf Anfrage, am Wochenende, mit einer kleinen Karte von 2-3 Gerichten pro Tag",
    ],
    note: "Das Abendessen ist als entspanntes Beisammensein gedacht, nicht als klassisches Restaurant.",
  },
  {
    id: "bar",
    icon: "🍸",
    title: "Bar & Gemeinschaftsräume",
    items: [
      "Bar täglich bis Mitternacht geöffnet",
      "Gemeinschaftsräume für ruhige Abende, Gespräche und Entspannung",
    ],
    note: null,
  },
  {
    id: "exterior",
    icon: "🪵",
    title: "Außenbereiche",
    items: [
      "Panoramaterrasse mit Blick auf das Făgăraș-Gebirge",
      "Ein großzügiger Hof",
      "Ein Platz für ein Lagerfeuer im Freien",
    ],
    note: null,
  },
  {
    id: "ebike",
    icon: "🚲",
    title: "E-Bikes",
    items: [
      "5 E-Bikes zum Mieten",
      "Ideal für Ausflüge in der Umgebung und leichte Touren",
    ],
    note: "Verfügbarkeit und Details werden an der Rezeption oder auf Anfrage bestätigt.",
  },
];

export const ACTIVITIES: Activity[] = [
  {
    name: "Wandern im Făgăraș-Gebirge",
    desc: "Bergwege zur Cabana Bârcaciu, auf den Negoiu und den Suru, mit Start direkt in Valea Avrigului.",
    dist: "in der Nähe",
    photoLabel: "[ Wege im Făgăraș ]",
    photo: "/trasee-fagaras.jpg",
  },
  {
    name: "Brambura Park",
    desc: "Ein Abenteuerpark mit Aktivitäten für die ganze Familie.",
    dist: "~10 Min.",
    photoLabel: "[ Brambura Park ]",
    photo: "/brambura.jpeg",
  },
  {
    name: "Brukenthal-Palais",
    desc: "Die Sommerresidenz Brukenthal und ihre Gärten in Avrig.",
    dist: "in der Nähe",
    photoLabel: "[ Brukenthal-Palais ]",
    photo: "/palatul-bruk.jpg",
  },
  {
    name: "E-Bike-Verleih",
    desc: "E-Bikes für Bergtouren und Ausflüge in der Umgebung.",
    dist: "in der Nähe",
    photoLabel: "[ E-Bike-Verleih ]",
    photo: "/ebike.jpeg",
  },
  {
    name: "Reiten & Quad",
    desc: "Erlebnisse im Freien, je nach Saison.",
    dist: "saisonal",
    photoLabel: "[ Quad / Reiten ]",
    photos: ["/calarie.jpeg", "/atv.jpeg"],
  },
  {
    name: "Hirschfarm",
    desc: "Eine Hirschfarm in Poiana Neamțului, ein Ausflug für die ganze Familie.",
    dist: "~10 Min.",
    photoLabel: "[ Hirschfarm ]",
    photo: "/ferma-de-cerbi.jpeg",
  },
  {
    name: "Casa Vikingilor",
    desc: "Das Wikingerhaus, eine einzigartige Attraktion, inspiriert von der nordischen Kultur.",
    dist: "in der Nähe",
    photoLabel: "[ Casa Vikingilor ]",
    photo: "/casa-vikingilor.jpeg",
  },
  {
    name: "Povestea Calendarului",
    desc: "Ein Kultur- und Kunstort, der dem traditionellen Kalender gewidmet ist.",
    dist: "in der Nähe",
    photoLabel: "[ Povestea Calendarului ]",
    photo: "/povestea-calendarului.jpeg",
  },
  {
    name: "Corabia Piraților",
    desc: "Ein Beach Club in Avrig mit Strand und Piratenschiff, für Kinder und Familien.",
    dist: "in der Nähe",
    photoLabel: "[ Corabia Piraților ]",
    photo: "/Corabia-piratilor.jpeg",
  },
];

export const GALLERY: GalleryItem[] = [
  { photo: "/poza_hero.jpg", label: "Pensiunea Amonte", span: 2 },
  { photo: "/exterior-pensiune.jpeg", label: "Die Pension von außen", span: 2 },
  { photo: "/jacuzzi-sauna.jpeg", label: "Jacuzzi & Sauna", span: 1 },
  { photo: "/camera-deluxe/pat-tip-1.jpeg", label: "Deluxe-Zimmer, Schlafbereich", span: 2 },
  { photo: "/camera-dubla-folder/poza-pat-si-camera.jpeg", label: "Doppelzimmer, Schlafbereich", span: 1 },
  { photo: "/camera-dubla-folder/birou-cu-priveliste.jpeg", label: "Schreibtisch mit Aussicht", span: 1 },
  { photo: "/camera-dubla-folder/baie.jpeg", label: "Doppelzimmer, Bad", span: 1 },
  { photo: "/camera-balcon/poza-pat.jpeg", label: "Zimmer mit Balkon, Schlafbereich", span: 1 },
  { photo: "/camera-balcon/balcon1.jpeg", label: "Zimmer mit Balkon, eigener Balkon", span: 1 },
  { photo: "/camera-balcon/priveliste.jpeg", label: "Blick auf den Wald", span: 1 },
  { photo: "/camera-deluxe/1-din-2.jpg", label: "Deluxe-Zimmer, Details", span: 1 },
  { photo: "/apartament/pat_dormitor.JPG", label: "Familienstudio, Schlafbereich", span: 1 },
  { photo: "/apartament/canapea_extensibila_living.jpg", label: "Familienstudio, Wohnbereich", span: 2 },
  { photo: "/apartament/chicineta_living.jpg", label: "Familienstudio, Küchenzeile", span: 1 },
  { photo: "/apartament/balcon_apartament.JPG", label: "Familienstudio, eigener Balkon", span: 1 },
  { photo: "/apartament/detalii_baie_rituals.jpg", label: "Rituals-Pflegeprodukte im Bad", span: 1 },
  { photo: "/interior-living.jpeg", label: "Wohnzimmer", span: 2 },
  { photo: "/salon.jpeg", label: "Der Salon der Pension", span: 2 },
  { photo: "/semineu.jpeg", label: "Wärmender Kamin", span: 1 },
  { photo: "/detaliu-lemn.jpeg", label: "Rustikales Holzdetail", span: 1 },
  { photo: "/priveliste-fagaras.jpg", label: "Blick auf das Făgăraș-Gebirge", span: 2 },
  { photo: "/firepit.jpeg", label: "Lagerfeuer auf der Terrasse, am Abend", span: 1 },
  { photo: "/bruno.jpeg", label: "Bruno", span: 1 },
  { photo: "/ebike.jpeg", label: "Touren mit dem E-Bike", span: 1 },
  { photo: "/trasee-fagaras.jpg", label: "Wege im Făgăraș-Gebirge", span: 1 },
];

export const RATING_SUMMARY = { value: "4,9", count: 114 };

export const REVIEWS: Review[] = [
  {
    stars: "★★★★★",
    text: "Wir hatten einen ausgezeichneten Aufenthalt in der Pensiunea Amonte. Die Lage ist traumhaft, perfekt zum Entspannen und um die Ruhe und die Landschaft zu genießen. Das Personal war unglaublich freundlich.",
    name: "Mihaela Marcuț",
    meta: "Google · vor einem Monat",
    initial: "M",
    translated: true,
  },
  {
    stars: "★★★★★",
    text: "It was a pleasant experience. The staff is very kind, respectful, very focused on the customer's needs. They attend to every request and they create a great atmosphere for everyone.",
    name: "Cosmin Voicu",
    meta: "Google · vor 7 Monaten",
    initial: "C",
  },
  {
    stars: "★★★★★",
    text: "This was a true surprise. It exceeded our expectation. It's situated a 4 minutes drive away from Brambura Park. We've spent a night in august and we found a beautiful and modern place. We had a huge studio with the biggest balcony ever.",
    name: "cosminp20",
    meta: "Tripadvisor · vor 10 Monaten",
    initial: "C",
  },
  {
    stars: "★★★★★",
    text: "Ausgezeichnet! Ein richtig toller Ort, an dem alles unsere Erwartungen übertroffen hat. Wir kamen mit einer größeren Gruppe und haben die ganze Pension gemietet, die beste Entscheidung. Alles war erstklassig: die Ausstattung, das Design, die Liebe zum Detail.",
    name: "Adrian Migiu",
    meta: "Google · vor einem Monat",
    initial: "A",
    translated: true,
  },
  {
    stars: "★★★★★",
    text: "Wir haben hier mit unserem Team ein wunderbares Wochenende verbracht. Alles war tadellos, von der Organisation bis zum Personal, das äußerst freundlich und aufmerksam zu uns war. Die Pension selbst ist großartig: alles ist neu, sauber, elegant und durchdacht. Wir haben uns sehr wohlgefühlt und kommen bestimmt gern wieder. Wir empfehlen die Pensiunea Amonte allen, die einen schönen, ruhigen Ort genießen möchten, perfekt zum Entspannen oder für Teamevents.",
    name: "Cristina Sosoi",
    meta: "Google · vor 10 Monaten",
    initial: "C",
    translated: true,
  },
  {
    stars: "★★★★★",
    text: "Excellent accommodation. Stayed there for 3 nights during an exhausting e-bike race and could find the best condition to properly relax and recover. If you leave your balcony door open you will hear the river gently flowing.",
    name: "Reini Stadler",
    meta: "Google · vor 8 Monaten",
    initial: "R",
  },
  {
    stars: "★★★★★",
    text: "Ein zweitägiges Teambuilding, das eher wie ein gut organisierter Urlaub wirkte als wie eine „Teamaktivität“. Die Gastgeber: schnell, engagiert und mit einem Sinn für Gastfreundschaft, den man selten findet. Das Essen sehr gut, die Zimmer tadellos, und jeder Wunsch wurde ohne Stress und ohne Verzögerung erfüllt. Die Lage ist genau richtig: Natur, Ruhe und eine Umgebung, die einen komplett aus dem Alltag holt. Es gibt auch einen kleinen, aber eleganten Spa-Bereich, perfekt zum Entspannen nach der „Anstrengung“, sich mit den Kollegen zu unterhalten. Und Bruno, der Berner Sennenhund der Pension, ist eindeutig die Seele des Ortes: freundlich, ruhig und unmöglich zu übersehen. Alles in allem: der Ort, an den man mit den Kollegen kommt und den man mit der Frage verlässt, warum man nicht schon früher hier war.",
    name: "Dan Velcu",
    meta: "Google · vor einem Monat",
    initial: "D",
    translated: true,
  },
  {
    stars: "★★★★★",
    text: "Great and beautiful new property with a very comfortable stay. Amazing place near the Avrig River, great ambiance. Wonderful views of the mountains.",
    name: "Olga Voskoboinikov",
    meta: "Google · vor einem Jahr",
    initial: "O",
  },
  {
    stars: "★★★★★",
    text: "Eine Oase der Ruhe, in die man allein oder mit den Kindern kommen kann. Ausgezeichneter Service, neue Zimmer, leckeres Essen, und die Sauna lässt einen den Stress der Woche komplett vergessen. Wir kommen gern wieder, vor allem wegen Brunooo!",
    name: "Simona-Isabela Hritac",
    meta: "Google · vor einem Monat",
    initial: "S",
    translated: true,
  },
  {
    stars: "★★★★★",
    text: "We had a wonderful stay at this beautiful guesthouse. The surrounding nature is absolutely amazing, and the peaceful atmosphere made it the perfect place to relax. The staff were very kind and attentive, and we felt truly welcomed as a family with one child. We will definitely come back!",
    name: "Jinga Arnold",
    meta: "Google · vor einem Monat",
    initial: "J",
  },
  {
    stars: "★★★★★",
    text: "Eine glatte Eins! Der ideale Ort für ein gelungenes Teambuilding: Ich kann sagen, es war von Anfang bis Ende ein tadelloses Erlebnis! Das Personal: absolut großartig! Äußerst freundliche, aufmerksame Menschen, die auf alle Bedürfnisse unserer Gruppe eingegangen sind. Sie haben dafür gesorgt, dass es uns an nichts fehlt. Das Essen: köstlich, abwechslungsreich und frisch. Ein Kompliment an die Köche, das ganze Team war begeistert! Die Atmosphäre: Gute Musik hat unsere Abende voller Entspannung und Spaß perfekt abgerundet. Die Unterkunft: Die Zimmer sind sehr sauber, gepflegt und gut gelüftet, genau das, was man nach einem Tag voller Aktivitäten braucht. Das Highlight? Der herrliche Blick auf die Berge, der einem den Atem raubt und die Batterien sofort wieder auflädt. Ich empfehle diesen Ort uneingeschränkt für jedes Firmenevent oder jeden Teamausflug! Wir kommen sicher wieder.",
    name: "Filip Mihaela",
    meta: "Google · vor einem Monat",
    initial: "F",
    translated: true,
  },
  {
    stars: "★★★★★",
    text: "Ein traumhafter Kurzurlaub am Fuß der Berge! Zehn-Sterne-Gastgeber, Zehn-Sterne-Service, Zehn-Sterne-Sauberkeit! Wir kommen auf jeden Fall wieder!",
    name: "Mariana Cordoș",
    meta: "Google · vor einem Monat",
    initial: "M",
    translated: true,
  },
];

export const GROUP_REVIEWS = groupReviews(REVIEWS);

export const PRIVATE_EVENTS_WHATSAPP = whatsappUrl(
  "Hallo, ich hätte gern Informationen zu einer privaten Veranstaltung in der Pensiunea Amonte",
);

export const NAV_LINKS: readonly NavLink[] = [
  { href: href("de", "about"), label: "Über uns" },
  { href: href("de", "rooms"), label: "Zimmer" },
  { href: href("de", "gallery"), label: "Galerie" },
  { href: href("de", "activities"), label: "Ausflugsziele" },
  { href: href("de", "services"), label: "Leistungen" },
  {
    href: href("de", "events"),
    label: "Veranstaltungen",
    children: [
      { href: href("de", "corporate"), label: "Retreats und Teambuilding" },
      { href: href("de", "privateEvents"), label: "Private Feiern" },
    ],
  },
];

export const AUDIENCES: Audience[] = [
  {
    title: "Auszeit zu zweit",
    tagline: "Ruhe, Aussicht und Zeit nur für Sie beide",
    body: "Zimmer mit eigenem Balkon und Bergblick, Jacuzzi und Sauna (gegen Aufpreis), Abende am Kamin. Ein Ort, an dem Sie beide zur Ruhe kommen, fernab vom Lärm.",
    highlights: ["Zimmer mit Bergblick", "Jacuzzi & Sauna (gegen Aufpreis)", "Wohnzimmer mit Kamin"],
    ctaLabel: "Zimmer ansehen",
    ctaHref: roomHref("de", "camera-dubla-deluxe"),
  },
  {
    title: "Familienurlaub",
    tagline: "Platz, Natur und Ruhe für die ganze Familie",
    body: "Geräumige Studios, ein sicherer Hof und Aktivitäten ganz in der Nähe: die Hirschfarm, der Brambura Park, Spaziergänge in der Natur. Eine Oase der Ruhe, in der Sie mit den Kindern wirklich entspannen.",
    highlights: ["Familienstudios", "Aktivitäten für Kinder in der Nähe", "Hof & Natur"],
    ctaLabel: "Ausflugsziele ansehen",
    ctaHref: href("de", "activities"),
  },
  {
    title: "Gruppe oder Team",
    tagline: "Sie mieten die ganze Pension, ein Ort nur für Sie",
    body: "Amonte kann komplett gemietet werden, für bis zu 24 Personen, mit eigenem Seminarraum für Gruppen. Ideal für Teambuilding, Retreats oder Ausflüge mit Freunden: Natur, Spa und Komfort, ohne den Platz mit anderen zu teilen.",
    highlights: ["Exklusivmiete (bis 24 Pers.)", "Seminarraum für Gruppen", "Spa & Terrasse"],
    ctaLabel: "Gruppenangebot anfordern",
    ctaHref: href("de", "corporate"),
    ctaPrimary: true,
  },
];

export const HOSTS: typeof RO_HOSTS = {
  eyebrow: "Ihre Gastgeber",
  title: "Menschen, nicht nur eine Pension",
  photo: null,
  body: [
    "Bei Amonte machen die Menschen den Unterschied. Wir sind ein junges, engagiertes Team, dem jedes Detail wichtig ist, vom tadellosen Zimmer bis zum guten Kaffee am Morgen. Wir sind gern nah bei unseren Gästen und sorgen dafür, dass es ihnen während des ganzen Aufenthalts an nichts fehlt.",
    "Sie finden uns immer, wenn Sie einen Wandertipp, einen Hinweis zur Umgebung oder abends am Feuer einfach eine Geschichte möchten. Und Bruno, unser Berner Sennenhund, begrüßt die Gäste immer als Erster.",
  ],
};

export const CANCELLATION: typeof RO_CANCELLATION = {
  eyebrow: "Stornobedingungen",
  promiseTitle: "Ihre bestätigte Buchung ist garantiert.",
  promiseSub: "Eine bestätigte Buchung bei Amonte wird von uns nie storniert. Ihr Platz bleibt Ihrer.",
  details: [
    "Die Buchung wird mit einer Anzahlung von 30 % bestätigt (oder einem gemeinsam vereinbarten Betrag).",
    "Stornierung mindestens 7 Tage vor Anreise: Die Anzahlung wird vollständig erstattet.",
    "Stornierung weniger als 7 Tage vor Anreise: Die Anzahlung wird einbehalten.",
    "Nichterscheinen (No-Show): Die Anzahlung wird einbehalten.",
    "Bei Exklusivmiete der ganzen Pension (Gruppen) ist die Stornierung bis 28 Tage vor Anreise kostenlos, da das gesamte Haus reserviert wird.",
    "Eine Änderung der Daten ist je nach Verfügbarkeit möglich. Schreiben Sie uns per WhatsApp, und wir finden eine Lösung.",
  ],
  note: "Diese Bedingungen gelten für Direktbuchungen (WhatsApp, Telefon, Website). Für Buchungen über Booking.com, Airbnb oder andere Online-Buchungsplattformen gelten die Stornobedingungen der jeweiligen Plattform, wie sie bei der Buchung angezeigt werden.",
  faqs: [
    {
      q: "Welche Stornobedingungen gelten?",
      a: "Eine bestätigte Buchung ist von unserer Seite garantiert. Bei Stornierung mindestens 7 Tage vor Anreise (oder 28 Tage bei Gruppen, die das ganze Haus mieten) wird die Anzahlung von 30 % vollständig erstattet. Danach wird die Anzahlung einbehalten. Die Bedingungen gelten nur für Direktbuchungen (WhatsApp, Telefon, Website).",
    },
    {
      q: "Kann ich meine Buchung ändern?",
      a: "Ja, je nach Verfügbarkeit. Schreiben Sie uns per WhatsApp, und wir finden gemeinsam eine Lösung.",
    },
  ],
};

// ── /de/ueber-uns ── FAQ (1:1 with the FAQPage JSON-LD), features, facilities ──

export const ABOUT_FAQ_BASE: Faq[] = [
  {
    q: "Wo liegt die Pensiunea Amonte?",
    a: "In Valea Avrigului nr. 642, im Kreis Sibiu, am Fuß des Făgăraș-Gebirges, etwa 40 Minuten von Sibiu entfernt.",
  },
  {
    q: "Wie viele Gäste können Sie beherbergen?",
    a: "Wir haben 10 Einheiten, 8 Doppelzimmer und 2 Familienstudios, für insgesamt bis zu 24 Gäste.",
  },
  {
    q: "Sind Haustiere erlaubt?",
    a: "Nein, Haustiere von Gästen sind nicht erlaubt. Der einzige Vierbeiner im Haus ist Bruno, unser Maskottchen, ein Berner Sennenhund.",
  },
  {
    q: "Welche Möglichkeiten zur Entspannung gibt es?",
    a: "Amonte hat einen Jacuzzi, eine Sauna, ein Wohnzimmer mit Kamin, eine Panoramaterrasse, ein Lagerfeuer und eine Bar. Auf der anderen Straßenseite, am Flussufer, gibt es außerdem einen Bereich, in dem sich die Gäste im Freien entspannen können.",
  },
  {
    q: "Kann eine Gruppe die ganze Pension buchen?",
    a: "Ja. Amonte kann für bis zu 24 Personen komplett gebucht werden, passend für Familienaufenthalte, Retreats oder Firmenausflüge, mit eigenem Seminarraum für Gruppen.",
  },
  {
    q: "Welche Sehenswürdigkeiten und Aktivitäten gibt es in der Nähe?",
    a: "Die Wege starten direkt in Valea Avrigului, zur Cabana Bârcaciu, auf den Negoiu und den Suru, mit Routen für jedes Niveau. Der Brambura Park und die Hirschfarm in Poiana Neamțului liegen etwa 10 Minuten entfernt. Das Brukenthal-Palais (Avrig), die Lehmburg (Porumbacu de Sus), Casa Vikingilor und Povestea Calendarului liegen alle in der Nähe der Pension.",
  },
  {
    q: "Wie weit ist es nach Sibiu und zur Transfăgărășan?",
    a: "Sibiu ist mit dem Auto etwa 40 Minuten entfernt, 35 km. Die Transfăgărășan-Hochstraße und der Bâlea-Wasserfall liegen etwa eine Stunde entfernt und sind saisonal geöffnet.",
  },
  {
    q: "Wann sind Check-in und Check-out?",
    a: "Check-in ab 15:00 Uhr. Check-out bis 12:00 Uhr.",
  },
  {
    q: "Wie buche ich?",
    a: `Direkt per WhatsApp unter ${CONTACT.phoneMobile}.`,
  },
  ...CANCELLATION.faqs,
];

// Questions about meals and the bar, shown when SHOW_FB_AND_EVENTS is on.
export const ABOUT_FAQ_FB: Faq[] = [
  {
    q: "Gibt es Frühstück?",
    a: "Ja, das Frühstück ist im Preis inbegriffen.",
  },
  {
    q: "Haben Sie eine Bar?",
    a: "Ja. Die Amonte-Bar bietet Getränke und handgemachte Cocktails, darunter Amonte Spirit, einen Signature-Cocktail mit Tannensirup.",
  },
  {
    q: "Kann ich bei Amonte eine private Feier oder ein Firmenevent ausrichten?",
    a: "Ja. Amonte kann komplett gebucht werden und bietet einen privaten Rahmen für Firmen-Retreats, Teambuilding, Arbeitstreffen und Familienfeiern, für bis zu 24 Personen.",
  },
];

export const ABOUT_FEATURES: typeof RO_ABOUT_FEATURES = [
  {
    icon: "🏠",
    title: "Boutique, kein Hotel",
    body: "Mit nur 10 Einheiten und Platz für 24 Gäste kennen wir unsere Gäste beim Namen, passen jeden Aufenthalt an ihr Tempo an und bewahren die Ruhe, die ein Ort in den Bergen haben sollte.",
  },
  {
    icon: "🛁",
    title: "Erholung und Spa",
    body: "Jacuzzi, Sauna, ein Wohnzimmer mit Kamin und eine Terrasse mit Blick auf das Făgăraș-Gebirge, alles zum Abschalten. Nach einem Tag in den Bergen ist die Rückkehr zu Amonte der ruhige Teil des Tages.",
  },
  {
    icon: "🏔️",
    title: "Natur vor der Tür",
    body: "Wir liegen am Fuß des höchsten Gebirges der rumänischen Karpaten. Von hier aus geht es zur Cabana Bârcaciu, auf den Negoiu und den Suru, auf Wegen für jedes Niveau.",
  },
  {
    icon: "🤝",
    title: "Retreats & Firmen",
    body: "Weil das ganze Haus gebucht werden kann, wird Amonte zum privaten Ort für Firmen-Retreats, Teambuilding, Arbeitstreffen oder Familienfeiern.",
  },
  {
    icon: "🐾",
    title: "Bruno, unser Gastgeber auf vier Pfoten",
    body: "Das Maskottchen des Hauses ist Bruno, ein Berner Sennenhund, der die Gäste begrüßt. Andere Haustiere nehmen wir nicht auf, damit alle die Ruhe genießen können.",
  },
  {
    icon: "🌄",
    title: "40 Minuten bis Sibiu",
    body: "Der Brambura Park und die Hirschfarm in Poiana Neamțului liegen etwa 10 Minuten entfernt, die mittelalterliche Altstadt von Sibiu etwa 40 Minuten mit dem Auto.",
  },
];

export const ABOUT_FACILITIES: string[] = [
  "10 Einheiten: 8 Doppelzimmer + 2 Familienstudios",
  "Kapazität für 24 Gäste",
  "Fußbodenheizung",
  "Jacuzzi",
  "Sauna",
  "Wohnzimmer mit Kamin",
  "Panoramaterrasse",
  "Lagerfeuer",
  "Bar und Lounge",
  "Seminarraum für Gruppen und Firmen",
  "Kleinfeld-Fußballplatz",
  "Tischtennisplatte",
  "Kostenloses WLAN",
  "Kostenlose Parkplätze, innen und außen",
  "Exklusivmiete des ganzen Hauses möglich",
];

// Shown only when SHOW_FB_AND_EVENTS is on (see the page).
export const ABOUT_FACILITIES_FB: string[] = ["Frühstück inklusive"];

// Note on the room pages, under the price.
export const ROOM_SPA_NOTE = "Spa-Bereich (Jacuzzi & Sauna) auf Anfrage.";

// ── /de/veranstaltungen ── the two directions: corporate and private ──
export const EVENT_CARDS: EventCard[] = [
  {
    eyebrow: "Firmen",
    title: "Retreats und Teambuilding",
    body: "Ein exklusiver Teamausflug mit Seminarraum, flexiblem Programm und der gesamten Logistik geklärt, bevor Sie ankommen.",
    points: ["Seminarraum für Gruppen", "Vollständiges Angebot innerhalb von 24 Arbeitsstunden", "Rechnung auf Ihre Firma"],
    photo: "/retreat/sala-evenimente.jpg",
    photoLabel: "[ FOTO: Raum in Boardroom- oder U-Form, das Team am Tisch ]",
    alt: "Der Seminarraum der Pensiunea Amonte, bestuhlt für eine Präsentation",
    href: href("de", "corporate"),
    cta: "Zur Seite für Teams",
    whatsapp: false,
  },
  {
    eyebrow: "Privat",
    title: "Private Feiern",
    body: "Geburtstage, Taufen, Familienfeiern oder Ausflüge mit Freunden, mit dem ganzen Haus nur für Sie reserviert.",
    points: ["Unterkunft für bis zu 24 Gäste", "Mahlzeiten in der Pension zubereitet", "Immer nur eine Gruppe"],
    photo: "/salon.jpeg",
    photoLabel: "[ FOTO: Salon, für eine private Feier hergerichtet ]",
    alt: "Der Salon der Pensiunea Amonte, für eine private Feier hergerichtet",
    href: href("de", "privateEvents"),
    cta: "Details ansehen",
    whatsapp: false,
  },
];

// ── /de/private-feiern ── Taufen, standesamtliche Trauungen, kleine Hochzeiten, Geburtstage ──

export const PRIVATE_EVENTS: PrivateEvents = {
  answer:
    "Die Pensiunea Amonte wird für private Feiern komplett vermietet: Taufen, standesamtliche Trauungen, kleine Hochzeiten und Geburtstage. Bei einer Feier im Freien sind bis zu 60 Gäste möglich, drinnen bis zu 35; 24 von ihnen können in den 10 Einheiten der Pension übernachten. Wir bieten einen Rundum-Service, gemeinsam mit unseren Partnern: Die Mahlzeiten kochen wir selbst im Haus, und um die Organisation kümmern wir uns, damit Sie die Feier sorgenfrei genießen. Jede Feier gestalten wir so, wie Sie sie sich wünschen. Die Mindestbuchung beträgt 2 Nächte, und jede Feier erhält ein eigenes Angebot.",
  organize: [
    "Eine Feier nach Ihren Wünschen: Menü, Dekoration, Musik und Ablauf des Abends planen wir gemeinsam",
    "Das Essen, von uns im Haus aus frischen regionalen Produkten gekocht",
    "Die Dekoration, von uns oder von unseren Partnern gestellt",
    "Unterkunft für bis zu 24 Gäste, am selben Ort wie die Feier",
    "Zuverlässige Partner für alles Weitere, von uns koordiniert",
    "Ein Angebot und dasselbe Team, vom ersten Gespräch bis zur Abreise",
  ],
  types: [
    { title: "Taufen", option: "Taufe", body: "Das Essen nach der Taufe, mit Familie und Paten an einem Tisch, und Zimmer für die Gäste von weiter her." },
    { title: "Standesamtliche Trauungen", option: "Standesamtliche Trauung", body: "Die Feier nach der Zeremonie, in privatem Rahmen, mit Blick auf das Făgăraș-Gebirge." },
    { title: "Kleine Hochzeiten", option: "Kleine Hochzeit", body: "Bis zu 60 Gäste im Freien oder 35 drinnen, mit der ganzen Pension nur für Sie." },
    { title: "Geburtstage", option: "Geburtstag", body: "Geburtstage und Jubiläen, mit Musik, Lagerfeuer und nur einer Gruppe im ganzen Haus." },
  ],
  facts: [
    { label: "Gäste", value: "Bis zu 60 im Freien, bis zu 35 drinnen" },
    { label: "Unterkunft", value: "24 Schlafplätze, in 8 Doppelzimmern und 2 Familienstudios" },
    { label: "Essen", value: "Von uns im Haus gekocht, aus frischen regionalen Produkten" },
    { label: "Musik", value: "Musik und DJ erlaubt" },
    { label: "Dekoration", value: "Von einem externen Dekorateur Ihrer Wahl oder von uns gestellt" },
    { label: "Räume", value: "Salon, Wohnzimmer mit Kamin, Panoramaterrasse, Hof und Lagerfeuer" },
    { label: "Buchung", value: "Exklusivmiete, mindestens 2 Nächte" },
    { label: "Organisation", value: "Rundum-Service, mit unseren Partnern, in einem Angebot" },
  ],
  steps: [
    { title: "Formular ausfüllen", body: "Art der Feier, Datum und ungefähre Zahl der Gäste. Dauert eine Minute." },
    { title: "Besichtigung vereinbaren", body: "Wir vereinbaren ein Treffen in der Pension, damit Sie den Ort sehen und Ihre Wünsche mit uns besprechen." },
    { title: "Individuelles Angebot erhalten", body: "Nach der Besichtigung erstellen wir das Angebot für Ihre Feier: Essen, Unterkunft, Dekoration und Partner." },
    { title: "Mit Anzahlung bestätigen", body: "Mit einer Anzahlung ist die Buchung bestätigt, und der Termin ist nur für Sie reserviert." },
  ],
  faq: [
    {
      q: "Welche privaten Feiern sind in der Pensiunea Amonte möglich?",
      a: "Taufen, standesamtliche Trauungen, kleine Hochzeiten und Geburtstage. Die Pension wird komplett vermietet, während Ihrer Feier gibt es also keine anderen Gäste.",
    },
    {
      q: "Kümmern Sie sich um die Organisation der Feier?",
      a: "Ja. Wir bieten einen Rundum-Service: Die Mahlzeiten kochen wir selbst, und für alles Weitere arbeiten wir mit Partnern, die wir koordinieren. Alles kommt in einem Angebot, und Sie genießen die Feier sorgenfrei.",
    },
    {
      q: "Können wir die Pension besichtigen, bevor wir ein Angebot erhalten?",
      a: "Ja, darum bitten wir sogar. Jede Feier hat ihre eigenen Details, deshalb vereinbaren wir nach dem Formular eine Besichtigung und besprechen vor Ort, was Sie sich wünschen. Das Angebot senden wir nach der Besichtigung.",
    },
    {
      q: "Wie viele Gäste können an einer Feier teilnehmen?",
      a: "Bis zu 60 Gäste bei einer Feier im Freien und bis zu 35 bei einer Feier drinnen. Davon können 24 in der Pension übernachten.",
    },
    {
      q: "Können auch Gäste teilnehmen, die nicht übernachten?",
      a: "Ja. Es gibt 24 Schlafplätze, und an der Feier können bis zu 60 Gäste im Freien oder 35 drinnen teilnehmen.",
    },
    {
      q: "Wer bereitet das Essen zu?",
      a: "Die Mahlzeiten kochen wir selbst in der Pension, aus frischen regionalen Produkten.",
    },
    {
      q: "Ist Musik bei der Feier erlaubt?",
      a: "Ja, auch mit DJ. Den Ablauf des Abends planen wir für jede Feier gemeinsam.",
    },
    {
      q: "Dürfen wir Dekoration mitbringen?",
      a: "Ja. Sie können mit einem externen Dekorateur arbeiten, oder wir stellen die Dekoration.",
    },
    {
      q: "Wie lange muss mindestens gebucht werden?",
      a: "Für eine private Feier wird die Pension komplett vermietet, für mindestens 2 Nächte.",
    },
    {
      q: "Was kostet eine private Feier?",
      a: "Feste Preise gibt es nicht: Das Angebot hängt von der Zahl der Gäste, vom Menü und vom Zeitraum ab. Füllen Sie das Formular aus, besichtigen Sie die Pension, und nach der Besichtigung senden wir Ihnen das Angebot für Ihre Feier.",
    },
    {
      q: "Welche Stornobedingungen gelten?",
      a: "Bei Exklusivmiete ist die Stornierung bis mindestens 28 Tage vor Anreise kostenlos, und die Anzahlung wird vollständig erstattet. Danach wird die Anzahlung einbehalten.",
    },
    {
      q: "Wo liegt die Pension?",
      a: "In Valea Avrigului, im Kreis Sibiu, am Fuß des Făgăraș-Gebirges, etwa 40 Minuten von Sibiu entfernt.",
    },
  ],
  gallery: [
    { photo: "/salon.jpeg", label: "Der Salon der Pension", span: 2 },
    { photo: "/retreat/masa-mare-living.jpg", label: "Der große Tisch im Wohnzimmer", span: 2 },
    { photo: "/priveliste-fagaras.jpg", label: "Die Terrasse mit Blick auf das Făgăraș-Gebirge", span: 1 },
    { photo: "/firepit.jpeg", label: "Lagerfeuer am Abend", span: 1 },
    { photo: "/semineu.jpeg", label: "Wohnzimmer mit Kamin", span: 1 },
    { photo: "/servicii-facilitati/bar-lounge.jpeg", label: "Die Bar der Pension", span: 1 },
    { photo: "/servicii-facilitati/mancare-coaste-porc-iberic.jpeg", label: "Gerichte aus unserer Küche", span: 1 },
    { photo: "/exterior-pensiune.jpeg", label: "Die Pension und der Hof", span: 2 },
    { photo: "/camera-deluxe/pat-tip-1.jpeg", label: "Deluxe-Doppelzimmer", span: 1 },
  ],
};
