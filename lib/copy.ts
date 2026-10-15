// Page copy, in Romanian: headings, leads, buttons and metadata for each page.
// The English version is lib/copy.en.ts, typed against this file, so a key
// missing there fails the build.
//
// What does not belong here: content several pages share (rooms, reviews,
// FAQs) stays in lib/content.ts and lib/retreat.ts, and strings owned by a
// component (menu, calendar, form) are in lib/i18n/ui.ts.
//
// Server-only in practice: a few entries are functions, so never pass a whole
// section to a client component.

import { CHECK_IN, CHECK_OUT, FIRE_SAFETY_AUTH, PRICE_FROM, RATING_SUMMARY } from "./content";
import { DRIVE_AIRPORT, DRIVE_SIBIU } from "./retreat";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "./site";

/**
 * "114 recenzii", "120 de recenzii": Romanian puts "de" before the noun when
 * the last two digits of the number are 00 or from 20 up (and never below 20).
 */
function reviews(count: number) {
  const lastTwo = count % 100;
  return `${count} ${count >= 20 && (lastTwo === 0 || lastTwo >= 20) ? "de " : ""}recenzii`;
}

export const COPY = {
  site: {
    tagline: SITE_TAGLINE,
    description: SITE_DESCRIPTION,
    defaultTitle: `${SITE_NAME} - ${SITE_TAGLINE} în Valea Avrigului`,
    /** schema.org `inLanguage` and `paymentAccepted`, in this language. */
    inLanguage: "ro-RO",
    paymentAccepted: "Numerar, card bancar",
  },

  common: {
    home: "Acasă",
  },

  home: {
    meta: {
      description:
        "Pensiune la munte în Valea Avrigului, la 40 de minute de Sibiu: 10 unități cu balcon, jacuzzi și saună, terasă spre Făgăraș. Rezervări pe WhatsApp.",
    },
    hero: {
      /** The page's h1: what and where, in plain words. Sits above the slogan. */
      h1: "Pensiune la munte în Valea Avrigului, lângă Sibiu",
      alt: "Pensiunea Amonte - vedere exterioară",
      label: "[ FOTO - vedere exterioară pensiune ]",
      title: "Locul unde liniștea îți încarcă sufletul",
      lead: "Pensiunea Amonte te primește cu căldură și aer curat - un refugiu la poalele Munților Făgăraș, departe de zgomot, aproape de natură.",
      primary: "Verifică disponibilitatea",
      secondary: "Vezi camerele",
    },
    about: {
      eyebrow: "Despre noi",
      title: "Un refugiu la munte, construit pentru relaxare.",
      p1: "Situată la poalele Munților Făgăraș, în Valea Avrigului, Pensiunea Amonte îmbină rafinamentul cu ospitalitatea autentică. Camere moderne cu vedere spre munte, living cu șemineu și terasă panoramică.",
      p2: "Te răsfățăm cu o zonă de relaxare cu jacuzzi și saună și cu liniștea pe care doar la munte o găsești - la doar 40 de minute de Sibiu.",
      more: "Citește mai mult despre noi",
      salon: { alt: "Salonul pensiunii", label: "[ interior / salon ]" },
      fireplace: { alt: "Șemineu", label: "[ șemineu ]" },
      bar: { alt: "Bar și zonă de relaxare", label: "[ bar / zonă de relaxare ]" },
    },
    facts: {
      eyebrow: "Pe scurt",
      title: "Informații practice",
      /** Only confirmed figures, read from the same constants as the rest of the site. */
      items: [
        { label: "Cazare", value: "10 unități: 8 camere duble și 2 studiouri de familie" },
        { label: "Capacitate", value: "Până la 24 de oaspeți" },
        { label: "Tarife", value: `De la ${PRICE_FROM} lei pe noapte, cu mic dejun inclus` },
        { label: "Check-in / check-out", value: `De la ${CHECK_IN} / până la ${CHECK_OUT}` },
        { label: "Distanțe", value: `Sibiu: ${DRIVE_SIBIU}, 35 km. Aeroportul Sibiu: ${DRIVE_AIRPORT}, 42 km` },
        { label: "Relaxare", value: "Jacuzzi și saună (contra cost), living cu șemineu, terasă panoramică" },
        { label: "Grupuri", value: "Închiriere integrală, cu sală pentru grupuri" },
        { label: "Recenzii", value: `${RATING_SUMMARY.value} din 5, din ${reviews(RATING_SUMMARY.count)} Google` },
      ],
    },
    audiences: {
      eyebrow: "Pentru cine e Amonte",
      title: "Trei moduri de a trăi la munte",
    },
    rooms: {
      eyebrow: "Cazare",
      title: "Camere & tarife",
      allRooms: "Vezi toate camerele",
      allRates: "Vezi toate tarifele",
    },
    services: {
      eyebrow: "Ce găsești la noi",
      title: "Servicii & facilități",
      lead: "Totul gândit ca să te simți ca acasă, doar cu priveliște mai bună.",
      all: "Vezi toate serviciile",
    },
    gallery: {
      eyebrow: "Galerie",
      title: "Momente de la Amonte",
      all: "Vezi galeria completă",
    },
    activities: {
      eyebrow: "În jurul pensiunii",
      title: "Împrejurimi & activități",
      lead: "De la drumeții pe creste la seri lângă foc - muntele are mereu un plan pentru tine.",
      all: "Vezi toate activitățile",
    },
    reviews: {
      eyebrow: "Ce spun oaspeții",
      title: "Recenzii",
      summary: (value: string, count: number) =>
        `${value} din 5 ⭐, pe baza a ${reviews(count)} Google`,
    },
    booking: {
      eyebrow: "Rezervare",
      title: "Cere disponibilitate",
      lead: "Scrie-ne pe WhatsApp și revenim rapid cu disponibilitatea și detaliile pentru datele tale.",
      note: "Cea mai rapidă cale e un mesaj pe WhatsApp - răspundem în cel mai scurt timp.",
      cta: "Verifică disponibilitatea",
      /** The Google Form is in Romanian; the English page links to email instead. */
      fallback: "form" as "form" | "email",
      fallbackLabel: "Sau completează formularul de rezervare →",
    },
    contact: {
      eyebrow: "Cum ajungi",
      title: "Te așteptăm la munte",
      address: "Adresă",
      phone: "Telefon",
      email: "Email",
    },
  },

  about: {
    meta: {
      title: "Despre noi, pensiune boutique în Valea Avrigului",
      description:
        "Pensiune boutique în Valea Avrigului, la poalele Făgărașului: 10 unități, 24 de locuri, jacuzzi, saună și sală pentru grupuri, la 40 de minute de Sibiu.",
    },
    schemaName: "Despre Pensiunea Amonte - cazare boutique în Valea Avrigului",
    eyebrow: "Despre noi",
    title: "Despre Pensiunea Amonte",
    answer:
      "Pensiunea Amonte este o pensiune boutique de munte situată în Valea Avrigului, județul Sibiu, la poalele Munților Făgăraș și la circa 40 de minute de Sibiu. Oferim 10 spații de cazare pentru maximum 24 de oaspeți, într-un cadru intim, cu jacuzzi, saună, șemineu, terasă panoramică, bar și acces direct la natură. Putem fi rezervați integral pentru grupuri, retreaturi și evenimente private.",
    operator: {
      eyebrow: "Cine suntem",
      title: "Un refugiu la munte, construit pentru relaxare.",
      before: "Amonte este operată de",
      name: "Hostillo SRL",
      after:
        ", o companie românească de management hotelier care preia și administrează integral pensiuni boutique, cu accent pe ospitalitate autentică și pe experiențe de calitate. Pensiunea funcționează din 2024, iar Hostillo o administrează din mai 2026.",
      p2: "Ne-am construit în jurul unei idei simple: un loc mic și îngrijit, în care fiecare oaspete e tratat ca un invitat, nu ca un număr de cameră.",
    },
    features: {
      eyebrow: "Ce facem cel mai bine",
      title: "Ospitalitate la scară umană",
    },
    hostsPhoto: { alt: "Echipa Pensiunii Amonte", label: "[ echipa Amonte ]" },
    stay: {
      eyebrow: "Experiența",
      title: "Cum arată un sejur la Amonte",
      p1: "Sosirea e fără grabă. Cele 8 camere duble și 2 studiouri de familie sunt gândite pentru cupluri și familii care vor confort real. Serile se petrec în livingul cu șemineu sau afară, la focul de tabără, sub cerul înstelat.",
      p2: "Pentru cei care vin să se miște, Valea Avrigului e punct de plecare pentru drumeții spre Cabana Bârcaciu, Negoiu și Suru. Pentru cei care vin să se relaxeze, terasa, sauna și jacuzziul sunt suficiente cât să nu mai vrei să pleci.",
    },
    food: {
      eyebrow: "Gastronomie",
      title: "Mâncare și bar",
      before:
        "La Amonte, masa și băutura bună fac parte din experiență. Micul dejun este inclus în tarif. Barul oferă băuturi și cocktail-uri artizanale - printre care",
      name: "Amonte Spirit",
      after: ", cocktail-ul semnătură al casei, cu sirop de brad.",
    },
    events: {
      eyebrow: "Evenimente",
      title: "Evenimente private și corporate",
      body: "Amonte se poate rezerva integral și se transformă într-un cadru privat pentru retreaturi corporate, teambuilding, sesiuni de lucru în liniște și evenimente de familie. Capacitatea de 24 de locuri, spațiile comune și ambianța de munte fac din pensiune o gazdă potrivită pentru grupuri care vor intimitate și un loc doar al lor.",
    },
    location: {
      eyebrow: "Cum ajungi",
      title: "Locația",
      /** `rest` carries its own leading space or comma, as the sentence needs. */
      nearby: [
        { name: "Brambura Park", rest: " și ferma de cerbi (Poiana Neamțului): la circa 10 minute" },
        { name: "Palatul Brukenthal", rest: ", Avrig: în apropiere" },
        { name: "Castelul de Lut „Valea Zânelor”", rest: ", Porumbacu de Sus: la câteva minute de Avrig" },
        { name: "Casa Vikingilor", rest: " și Povestea Calendarului: în zonă" },
        { name: "Trasee montane Făgăraș", rest: " - Cabana Bârcaciu, Negoiu, Suru: plecare din Valea Avrigului" },
        { name: "Activități în aer liber", rest: ": călărie, plimbări cu ATV-ul, plimbări prin pădure" },
        { name: "Sibiu", rest: " (centru istoric): la 40 de minute cu mașina, iar aeroportul la 50" },
        { name: "Transfăgărășan", rest: " și cascada Bâlea: la circa o oră, sezonier" },
      ],
    },
    facilities: {
      eyebrow: "Ce găsești la noi",
      title: "Facilități",
    },
    faq: {
      eyebrow: "Întrebări frecvente",
      title: "Răspunsuri rapide",
    },
    fireSafety: `Pensiunea Amonte deține ${FIRE_SAFETY_AUTH.replace("ISU Sibiu nr.", "emisă de ISU Sibiu (nr.") + ")."}`,
    cta: {
      eyebrow: "Rezervare",
      title: "Gata să vii la Amonte?",
      lead: "Scrie-ne pe WhatsApp și revenim rapid cu disponibilitatea și detaliile pentru datele tale.",
      button: "Verifică disponibilitatea",
    },
  },

  rooms: {
    meta: {
      title: "Camere",
      description:
        "Camerele Pensiunii Amonte, lângă Sibiu: duble Deluxe, cu vedere la munte, cu balcon și studiouri de familie. Toate au balcon și mic dejun inclus.",
    },
    eyebrow: "Cazare",
    title: "Camerele noastre",
    lead: "Spații generoase, lemn cald și vedere spre Munții Făgăraș. Acces la jacuzzi & saună și terasă panoramică.",
    cta: "Verifică disponibilitatea",
    rates: "Vezi tarifele detaliate →",
  },

  rates: {
    meta: {
      title: "Tarife cazare",
      description:
        "Tarife la Pensiunea Amonte, Valea Avrigului: camere duble de la 550 lei pe noapte și studio de familie de la 800 lei, cu mic dejun inclus.",
    },
    eyebrow: "Cazare",
    title: "Tarife",
    lead: "Cere disponibilitatea pentru datele tale pe WhatsApp și îți trimitem o ofertă personalizată.",
    note: "Pentru grupuri, sejururi mai lungi sau perioade speciale, scrie-ne și îți facem o ofertă.",
    cta: "Verifică disponibilitatea",
  },

  activities: {
    meta: {
      title: "Activități în zonă",
      description:
        "Ce faci lângă Pensiunea Amonte: drumeții în Făgăraș, Brambura Park, Palatul Brukenthal, e-bike, călărie și ATV, ferma de cerbi, Beach Club Avrig.",
    },
    eyebrow: "În jurul pensiunii",
    title: "Activități în zonă",
    lead: "De la drumeții pe creste la seri lângă foc - muntele are mereu un plan pentru tine.",
    cta: "Rezervă-ți sejurul la munte",
  },

  gallery: {
    meta: {
      title: "Galerie",
      description:
        "Galerie foto Pensiunea Amonte: exterior, jacuzzi & saună, camere, priveliște spre Munții Făgăraș și serile lângă focul de tabără.",
    },
    eyebrow: "Galerie",
    title: "Momente de la Amonte",
    cta: "Verifică disponibilitatea",
  },

  services: {
    meta: {
      title: "Servicii & facilități",
      description:
        "Servicii la Pensiunea Amonte: mic dejun inclus, jacuzzi și saună, bar, living cu șemineu, terasă panoramică, foc de tabără, WiFi și parcare gratuite.",
    },
    eyebrow: "Ce găsești la noi",
    title: "Servicii & facilități",
    lead: "Totul gândit ca să te simți ca acasă, doar cu priveliște mai bună.",
    groups:
      "Pentru echipe și grupuri, pensiunea se poate închiria integral, cu sală de lucru și toate spațiile rezervate exclusiv vouă.",
    groupsLink: "Vezi condițiile pentru grupuri",
    detailsEyebrow: "Detalii",
    detailsTitle: "Tot ce trebuie să știi",
    whatsapp: "Scrie-ne pentru detalii",
    rooms: "Descoperă camerele →",
  },

  events: {
    meta: {
      title: "Evenimente la Amonte, lângă Sibiu",
      description:
        "Pensiunea Amonte, lângă Sibiu, se închiriază integral pentru un singur grup: 24 de locuri și mese la pensiune. Retreaturi corporate și evenimente private.",
    },
    crumb: "Evenimente",
    eyebrow: "Evenimente",
    title: "Evenimente la Amonte",
    lead: "Pensiunea se închiriază integral, pentru un singur grup odată, fără alți oaspeți în curte. Sunt 24 de locuri de cazare, iar mesele se pregătesc la fața locului, pentru tot grupul.",
    rating: (value: string, count: number) => `${value} din 5 pe Google, din ${reviews(count)}`,
    video: {
      eyebrow: "Cum arată",
      title: "Locul, pe scurt",
      note: "Videoclipul rulează doar la cererea vizitatorului, fără pornire automată.",
    },
    reviews: {
      eyebrow: "Recenzii",
      title: "Ce spun grupurile care au fost",
    },
    cta: {
      eyebrow: "Hai să vorbim",
      title: "Spune-ne ce fel de eveniment ai în minte",
      lead: "Câți sunteți și când. Restul îl construim împreună.",
      message:
        "Bună ziua! Aș dori informații despre organizarea unui eveniment la Pensiunea Amonte.",
      button: "Scrie-ne pe WhatsApp",
    },
  },

  corporate: {
    meta: {
      // The root layout template appends " | Pensiunea Amonte".
      title: "Locație teambuilding și retreat corporate lângă Sibiu",
      // 146 de caractere. "Ofertă în 24 de ore" e păstrat pentru că e diferențiatorul
      // pe care Ioana îl compară între locații.
      description:
        "Închiriere integrală pentru echipe de până la 24 de persoane, lângă Sibiu. Sală de lucru, mese pentru grup, jacuzzi și saună. Ofertă în 24 de ore.",
    },
    crumb: "Retreat și teambuilding",
    hero: {
      alt: "Pensiunea Amonte văzută din exterior, la poalele Munților Făgăraș",
      label: "[ FOTO: exterior la ora aurie sau terasa cu grupul, landscape ]",
      eyebrow: `Valea Avrigului · ${DRIVE_SIBIU} de Sibiu`,
      title: "Locație pentru teambuilding și retreat corporate, în exclusivitate, lângă Sibiu",
      lead: "Închiriezi toată pensiunea pentru echipa ta: 10 unități de cazare, maximum 24 de persoane, sală de lucru, jacuzzi și saună, terasă și foc de tabără. Primești oferta completă în 24 de ore lucrătoare.",
      whatsapp: "Cere oferta pe WhatsApp",
      form: "Completează cererea de ofertă",
      rating: (value: string, count: number) =>
        `${value} din 5 pe Google, din ${reviews(count)} · Rezervare confirmată garantată`,
    },
    about: {
      eyebrow: "Despre noi",
      title: "Oameni, nu doar o locație",
      lead: `Suntem o echipă mică și implicată, care administrează direct Pensiunea Amonte, în Valea Avrigului, la ${DRIVE_SIBIU} de Sibiu, și rămânem prezenți pe toată durata șederii. Comunicarea rămâne cu aceeași echipă, din prima zi până la plecare.`,
    },
    workspaces: {
      eyebrow: "Spații de lucru",
      title: "Unde lucrați",
    },
    leisure: {
      eyebrow: "Între sesiuni",
      title: "Ce faceți între sesiuni",
      bruno:
        "Bruno, ciobănescul de Berna al casei, e mascota locului. Animalele de companie ale oaspeților rămân acasă.",
    },
    fnb: {
      eyebrow: "Mesele",
      title: "Mesele echipei",
      lead: "Mesele le pregătim noi, la pensiune, din produse locale proaspete, pentru tot grupul, ca toată lumea să stea jos în același timp.",
      note: "Tarifele pentru mese se regăsesc în oferta trimisă pentru perioada voastră.",
      alt: "Masa mare din livingul Pensiunii Amonte, unde ia loc tot grupul",
    },
    rooms: {
      eyebrow: "Cazarea",
      title: "Cum se împart cele 24 de locuri",
      lead: "Ca să știi din prima dacă încape toată echipa.",
      unit: (perUnit: string, beds: string, total: string) =>
        `${perUnit} persoane, ${beds}. ${total} locuri în total.`,
      total: (count: string, total: string) =>
        `Total: ${count} unități de cazare, ${total} de locuri.`,
      cta: "Cere oferta pentru echipa ta",
    },
    agenda: {
      eyebrow: "Exemplu",
      title: "Cum arată două zile la Amonte",
      note: "Programul e al vostru. Noi ne ocupăm de restul.",
    },
    pricing: {
      eyebrow: "Prețuri",
      title: "Cât costă, orientativ",
      note: "Oferta finală depinde de numărul de persoane și de perioadă. O primești defalcată, în 24 de ore lucrătoare.",
    },
    process: {
      title: "Proces în 4 pași simpli",
    },
    reviews: {
      eyebrow: "Recenzii",
      title: "Ce spun echipele care au fost",
    },
    faq: {
      eyebrow: "Întrebări frecvente",
      title: "Ce ne întreabă echipele",
    },
    form: {
      eyebrow: "Cerere de ofertă",
      title: "Cere oferta completă",
      lead: "Completezi în două minute, primești oferta în 24 de ore lucrătoare.",
    },
    location: {
      eyebrow: "Locație și acces",
      title: "Cum ajungeți",
      maps: "Deschide în Google Maps →",
    },
    final: {
      eyebrow: "Disponibilitate",
      title: "Spune-ne câte persoane și când. Restul e la noi.",
      whatsapp: "Cere oferta pe WhatsApp",
      form: "Completează formularul",
    },
  },

  book: {
    meta: {
      title: "Rezervă acum",
      description:
        "Verifică disponibilitatea și rezervă-ți sejurul la Pensiunea Amonte, în Valea Avrigului - la 40 de minute de Sibiu. Jacuzzi & saună, terasă panoramică.",
    },
    title: "Rezervă-ți evadarea la munte",
    lead: "Alege perioada dorită și te contactăm în cel mai scurt timp cu disponibilitatea.",
    /** Alt text for the five photos, in grid order. */
    photos: ["Exterior pensiune", "Cameră cu balcon", "Pensiunea Amonte", "Cameră dublă", "Jacuzzi & saună"],
    groups: "Rezervi pentru un grup sau o echipă?",
    groupsLink: "Vezi pagina dedicată",
    contact: {
      title: "Sau contactează-ne direct",
      lead: "Dacă ai întrebări speciale sau preferi să discutăm detaliile telefonic.",
      fallback: "form" as "form" | "email",
      formLabel: "Formular de contact",
    },
  },
};

export type Copy = typeof COPY;
