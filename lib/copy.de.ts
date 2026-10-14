// Page copy in German, typed against lib/copy.ts: a missing or extra key fails
// the build. Formal "Sie", translated for meaning rather than word for word,
// under the same content rules as the Romanian copy.

import type { Copy } from "./copy";
import { DRIVE_SIBIU } from "./retreat.de";
import { SITE_NAME } from "./site";

const TAGLINE = "Bergpension";

export const COPY: Copy = {
  site: {
    tagline: TAGLINE,
    description:
      "Die Pensiunea Amonte ist eine Bergpension in Valea Avrigului, am Fuß des Făgăraș-Gebirges, 40 Minuten von Sibiu. 10 Zimmer und Studios, Jacuzzi und Sauna, Panoramaterrasse und ein Seminarraum für Gruppen.",
    defaultTitle: `${SITE_NAME} - ${TAGLINE} in Valea Avrigului`,
    inLanguage: "de-DE",
    paymentAccepted: "Bargeld, Debit- und Kreditkarten",
  },

  common: {
    home: "Startseite",
  },

  home: {
    meta: {
      description:
        "Bergpension in Valea Avrigului, 40 Minuten von Sibiu: 10 Zimmer mit Balkon, Jacuzzi und Sauna, Terrasse mit Blick auf das Făgăraș-Gebirge.",
    },
    hero: {
      alt: "Pensiunea Amonte, Außenansicht",
      label: "[ FOTO - Außenansicht der Pension ]",
      title: "Wo die Ruhe neue Kraft schenkt",
      lead: "Die Pensiunea Amonte empfängt Sie mit Herzlichkeit und frischer Bergluft: ein Rückzugsort am Fuß des Făgăraș-Gebirges, fern vom Lärm und nah an allem, was zählt.",
      primary: "Verfügbarkeit prüfen",
      secondary: "Zimmer ansehen",
    },
    about: {
      eyebrow: "Über uns",
      title: "Ein Rückzugsort in den Bergen, gemacht zum Entspannen.",
      p1: "Am Fuß des Făgăraș-Gebirges in Valea Avrigului verbindet die Pensiunea Amonte ein gepflegtes Ambiente mit echter Gastfreundschaft. Großzügige Zimmer mit Bergblick, ein Wohnzimmer mit Kamin und eine Panoramaterrasse.",
      p2: "Entspannen Sie im Spa-Bereich mit Jacuzzi und Sauna und in der Ruhe, die nur die Berge schenken, nur 40 Minuten von Sibiu entfernt.",
      more: "Mehr über uns",
      salon: { alt: "Der Salon der Pension", label: "[ Innenansicht / Salon ]" },
      fireplace: { alt: "Kamin", label: "[ Kamin ]" },
      bar: { alt: "Bar und Lounge", label: "[ Bar / Lounge ]" },
    },
    audiences: {
      eyebrow: "Für wen Amonte gemacht ist",
      title: "Drei Arten, die Berge zu erleben",
    },
    rooms: {
      eyebrow: "Unterkunft",
      title: "Zimmer & Preise",
      allRooms: "Alle Zimmer ansehen",
      allRates: "Alle Preise ansehen",
    },
    services: {
      eyebrow: "Was Sie bei uns finden",
      title: "Leistungen & Ausstattung",
      lead: "Alles ist darauf ausgelegt, dass Sie sich wie zu Hause fühlen, nur mit besserer Aussicht.",
      all: "Alle Leistungen ansehen",
    },
    gallery: {
      eyebrow: "Galerie",
      title: "Momente bei Amonte",
      all: "Zur ganzen Galerie",
    },
    activities: {
      eyebrow: "Rund um die Pension",
      title: "Umgebung & Aktivitäten",
      lead: "Von Gratwanderungen bis zu Abenden am Feuer: Die Berge haben immer einen Plan für Sie.",
      all: "Alle Aktivitäten ansehen",
    },
    reviews: {
      eyebrow: "Was unsere Gäste sagen",
      title: "Bewertungen",
      summary: (value: string, count: number) =>
        `${value} von 5 ⭐, basierend auf ${count} Google-Bewertungen`,
    },
    booking: {
      eyebrow: "Buchung",
      title: "Verfügbarkeit anfragen",
      lead: "Schreiben Sie uns per WhatsApp, und wir melden uns schnell mit der Verfügbarkeit und den Details für Ihre Daten.",
      note: "Am schnellsten geht es per WhatsApp. Wir antworten so bald wie möglich.",
      cta: "Verfügbarkeit prüfen",
      fallback: "email",
      fallbackLabel: "Oder schreiben Sie uns eine E-Mail →",
    },
    contact: {
      eyebrow: "Anreise",
      title: "Wir erwarten Sie in den Bergen",
      address: "Adresse",
      phone: "Telefon",
      email: "E-Mail",
    },
  },

  about: {
    meta: {
      title: "Über uns, eine Boutique-Pension in Valea Avrigului",
      description:
        "Boutique-Pension in Valea Avrigului am Fuß des Făgăraș-Gebirges: 10 Einheiten für 24 Gäste, Jacuzzi, Sauna und Seminarraum, 40 Minuten von Sibiu.",
    },
    schemaName: "Über die Pensiunea Amonte, Boutique-Unterkunft in Valea Avrigului",
    eyebrow: "Über uns",
    title: "Über die Pensiunea Amonte",
    answer:
      "Die Pensiunea Amonte ist eine Boutique-Bergpension in Valea Avrigului, Kreis Sibiu, am Fuß des Făgăraș-Gebirges und etwa 40 Minuten von Sibiu entfernt. Wir bieten 10 Zimmer und Studios für bis zu 24 Gäste in familiärem Rahmen, mit Jacuzzi, Sauna, Kamin, Panoramaterrasse, Bar und direktem Zugang zur Natur. Das ganze Haus kann für Gruppen, Retreats und private Feiern gebucht werden.",
    operator: {
      eyebrow: "Wer wir sind",
      title: "Ein Rückzugsort in den Bergen, gemacht zum Entspannen.",
      before: "Amonte wird betrieben von der",
      name: "Hostillo SRL",
      after:
        ", einem rumänischen Unternehmen für Hotelmanagement, das Boutique-Pensionen übernimmt und vollständig führt, mit Schwerpunkt auf echter Gastfreundschaft und hochwertigen Erlebnissen. Die Pension ist seit 2024 in Betrieb, Hostillo führt sie seit Mai 2026.",
      p2: "Wir haben uns um eine einfache Idee herum aufgebaut: ein kleiner, gepflegter Ort, an dem jeder Gast wie ein eingeladener Freund behandelt wird, nicht wie eine Zimmernummer.",
    },
    features: {
      eyebrow: "Was wir am besten können",
      title: "Gastfreundschaft im menschlichen Maßstab",
    },
    hostsPhoto: { alt: "Das Team der Pensiunea Amonte", label: "[ das Amonte-Team ]" },
    stay: {
      eyebrow: "Das Erlebnis",
      title: "So sieht ein Aufenthalt bei Amonte aus",
      p1: "Die Ankunft ist ohne Eile. Die 8 Doppelzimmer und 2 Familienstudios sind für Paare und Familien gedacht, die echten Komfort suchen. Die Abende verbringt man im Wohnzimmer am Kamin oder draußen am Lagerfeuer unter dem Sternenhimmel.",
      p2: "Wer sich bewegen möchte, startet in Valea Avrigului zu Wanderungen zur Cabana Bârcaciu, auf den Negoiu und den Suru. Wer sich erholen möchte, findet auf der Terrasse, in der Sauna und im Jacuzzi genug, um gar nicht mehr abreisen zu wollen.",
    },
    food: {
      eyebrow: "Kulinarik",
      title: "Essen und Bar",
      before:
        "Bei Amonte gehören gutes Essen und gute Getränke zum Erlebnis. Das Frühstück ist im Preis inbegriffen. Die Bar bietet Getränke und handgemachte Cocktails, darunter",
      name: "Amonte Spirit",
      after: ", der Signature-Cocktail des Hauses, mit Tannensirup.",
    },
    events: {
      eyebrow: "Veranstaltungen",
      title: "Private Feiern und Firmenevents",
      body: "Amonte kann komplett gebucht werden und wird so zum privaten Rahmen für Firmen-Retreats, Teambuilding, ruhige Arbeitstreffen und Familienfeiern. Platz für 24 Gäste, die Gemeinschaftsräume und die Bergatmosphäre machen die Pension zum passenden Gastgeber für Gruppen, die Privatsphäre und einen Ort ganz für sich suchen.",
    },
    location: {
      eyebrow: "Anreise",
      title: "Lage",
      nearby: [
        { name: "Brambura Park", rest: " und die Hirschfarm (Poiana Neamțului): etwa 10 Minuten" },
        { name: "Brukenthal-Palais", rest: ", Avrig: in der Nähe" },
        { name: "Die Lehmburg Valea Zânelor", rest: ", Porumbacu de Sus: wenige Minuten von Avrig" },
        { name: "Casa Vikingilor", rest: " und Povestea Calendarului: in der Umgebung" },
        { name: "Bergwege im Făgăraș", rest: ": Cabana Bârcaciu, Negoiu und Suru, mit Start in Valea Avrigului" },
        { name: "Aktivitäten im Freien", rest: ": Reiten, Quadtouren, Waldspaziergänge" },
        { name: "Sibiu", rest: " (Altstadt): 40 Minuten mit dem Auto, der Flughafen 50" },
        { name: "Transfăgărășan", rest: "-Hochstraße und Bâlea-Wasserfall: etwa eine Stunde, saisonal" },
      ],
    },
    facilities: {
      eyebrow: "Was Sie bei uns finden",
      title: "Ausstattung",
    },
    faq: {
      eyebrow: "Häufige Fragen",
      title: "Kurze Antworten",
    },
    fireSafety:
      "Die Pensiunea Amonte verfügt über eine Brandschutzgenehmigung, ausgestellt von ISU Sibiu (Nr. 556/25/SU-SB vom 24. September 2025).",
    cta: {
      eyebrow: "Buchung",
      title: "Bereit für Amonte?",
      lead: "Schreiben Sie uns per WhatsApp, und wir melden uns schnell mit der Verfügbarkeit und den Details für Ihre Daten.",
      button: "Verfügbarkeit prüfen",
    },
  },

  rooms: {
    meta: {
      title: "Zimmer",
      description:
        "Zimmer der Pensiunea Amonte bei Sibiu: Deluxe-Doppelzimmer, Doppelzimmer mit Bergblick oder Balkon und Familienstudios, alle mit Frühstück inklusive.",
    },
    eyebrow: "Unterkunft",
    title: "Unsere Zimmer",
    lead: "Großzügige Räume, warmes Holz und Blick auf das Făgăraș-Gebirge. Zugang zu Jacuzzi & Sauna und zur Panoramaterrasse.",
    cta: "Verfügbarkeit prüfen",
    rates: "Alle Preise im Detail →",
  },

  rates: {
    meta: {
      title: "Zimmerpreise",
      description:
        "Preise der Pensiunea Amonte, Valea Avrigului: Doppelzimmer ab 550 RON pro Nacht, Familienstudio ab 800 RON, jeweils mit Frühstück inklusive.",
    },
    eyebrow: "Unterkunft",
    title: "Preise",
    lead: "Fragen Sie die Verfügbarkeit für Ihre Daten per WhatsApp an, und wir senden Ihnen ein persönliches Angebot.",
    note: "Für Gruppen, längere Aufenthalte oder besondere Zeiträume schreiben Sie uns, und wir erstellen Ihnen ein Angebot.",
    cta: "Verfügbarkeit prüfen",
  },

  activities: {
    meta: {
      title: "Ausflugsziele in der Umgebung",
      description:
        "Rund um die Pensiunea Amonte: Wandern im Făgăraș, Brambura Park, Brukenthal-Palais, E-Bikes, Reiten und Quad, eine Hirschfarm, Beach Club Avrig.",
    },
    eyebrow: "Rund um die Pension",
    title: "Ausflugsziele in der Umgebung",
    lead: "Von Gratwanderungen bis zu Abenden am Feuer: Die Berge haben immer einen Plan für Sie.",
    cta: "Ihren Aufenthalt in den Bergen buchen",
  },

  gallery: {
    meta: {
      title: "Galerie",
      description:
        "Fotogalerie der Pensiunea Amonte: Außenansicht, Jacuzzi & Sauna, Zimmer, Blick auf das Făgăraș-Gebirge und Abende am Lagerfeuer.",
    },
    eyebrow: "Galerie",
    title: "Momente bei Amonte",
    cta: "Verfügbarkeit prüfen",
  },

  services: {
    meta: {
      title: "Leistungen & Ausstattung",
      description:
        "Leistungen der Pensiunea Amonte: Frühstück inklusive, Jacuzzi und Sauna, Bar, Wohnzimmer mit Kamin, Panoramaterrasse, Lagerfeuer, WLAN und Parkplatz.",
    },
    eyebrow: "Was Sie bei uns finden",
    title: "Leistungen & Ausstattung",
    lead: "Alles ist darauf ausgelegt, dass Sie sich wie zu Hause fühlen, nur mit besserer Aussicht.",
    groups:
      "Für Teams und Gruppen kann die ganze Pension gemietet werden, mit Seminarraum und allen Räumen exklusiv für Sie.",
    groupsLink: "Bedingungen für Gruppen ansehen",
    detailsEyebrow: "Details",
    detailsTitle: "Alles, was Sie wissen müssen",
    whatsapp: "Schreiben Sie uns für Details",
    rooms: "Zimmer entdecken →",
  },

  events: {
    meta: {
      title: "Veranstaltungen bei Amonte, bei Sibiu",
      description:
        "Die Pensiunea Amonte bei Sibiu wird komplett an eine Gruppe vermietet: 24 Plätze und Mahlzeiten im Haus. Firmen-Retreats und private Feiern.",
    },
    crumb: "Veranstaltungen",
    eyebrow: "Veranstaltungen",
    title: "Veranstaltungen bei Amonte",
    lead: "Die Pension wird komplett vermietet, immer nur an eine Gruppe, ohne andere Gäste im Haus. Es gibt 24 Schlafplätze, und die Mahlzeiten werden vor Ort für die ganze Gruppe zubereitet.",
    rating: (value: string, count: number) => `${value} von 5 auf Google, aus ${count} Bewertungen`,
    video: {
      eyebrow: "Ein erster Eindruck",
      title: "Der Ort in Kürze",
      note: "Das Video startet nur, wenn Sie es abspielen, nie automatisch.",
    },
    reviews: {
      eyebrow: "Bewertungen",
      title: "Was Gruppen sagen, die schon hier waren",
    },
    cta: {
      eyebrow: "Sprechen wir darüber",
      title: "Erzählen Sie uns, welche Veranstaltung Sie planen",
      lead: "Wie viele Sie sind und wann. Den Rest gestalten wir gemeinsam.",
      message: "Guten Tag! Ich hätte gern Informationen zur Ausrichtung einer Veranstaltung in der Pensiunea Amonte.",
      button: "Per WhatsApp schreiben",
    },
  },

  corporate: {
    meta: {
      title: "Location für Teambuilding und Firmen-Retreats bei Sibiu",
      description:
        "Exklusivmiete für Teams bis 24 Personen bei Sibiu, Rumänien. Seminarraum, Mahlzeiten für die Gruppe, Jacuzzi und Sauna. Angebot in 24 Stunden.",
    },
    crumb: "Retreats und Teambuilding",
    hero: {
      alt: "Die Pensiunea Amonte von außen, am Fuß des Făgăraș-Gebirges",
      label: "[ FOTO: Außenansicht zur goldenen Stunde oder Terrasse mit Gruppe, Querformat ]",
      eyebrow: `Valea Avrigului · ${DRIVE_SIBIU} bis Sibiu`,
      title: "Exklusive Location für Teambuilding und Firmen-Retreats bei Sibiu",
      lead: "Mieten Sie die ganze Pension für Ihr Team: 10 Zimmer und Studios, bis zu 24 Personen, Seminarraum, Jacuzzi und Sauna, Terrasse und Lagerfeuer. Sie erhalten das vollständige Angebot innerhalb von 24 Arbeitsstunden.",
      whatsapp: "Angebot per WhatsApp anfordern",
      form: "Angebotsanfrage ausfüllen",
      rating: (value: string, count: number) =>
        `${value} von 5 auf Google, aus ${count} Bewertungen · Bestätigte Buchung garantiert`,
    },
    about: {
      eyebrow: "Über uns",
      title: "Menschen, nicht nur eine Location",
      lead: `Wir sind ein kleines, engagiertes Team, das die Pensiunea Amonte direkt führt, in Valea Avrigului, ${DRIVE_SIBIU} von Sibiu, und wir sind während des ganzen Aufenthalts vor Ort. Sie haben vom ersten Tag bis zur Abreise dasselbe Team als Ansprechpartner.`,
      more: "Mehr über uns →",
    },
    workspaces: {
      eyebrow: "Arbeitsräume",
      title: "Wo Sie arbeiten",
    },
    leisure: {
      eyebrow: "Zwischen den Sitzungen",
      title: "Was Sie zwischen den Sitzungen tun",
      bruno: "Bruno, der Berner Sennenhund des Hauses, ist hier das Maskottchen. Haustiere der Gäste bleiben zu Hause.",
      more: "Alle Ausflugsziele der Umgebung →",
    },
    fnb: {
      eyebrow: "Mahlzeiten",
      title: "Die Mahlzeiten des Teams",
      lead: "Die Mahlzeiten bereiten wir selbst in der Pension zu, aus frischen regionalen Produkten, für die ganze Gruppe, damit alle gemeinsam am Tisch sitzen.",
      note: "Die Preise für die Mahlzeiten finden Sie im Angebot für Ihren Zeitraum.",
      alt: "Der große Tisch im Wohnzimmer der Pensiunea Amonte, an dem die ganze Gruppe Platz nimmt",
    },
    rooms: {
      eyebrow: "Unterkunft",
      title: "So verteilen sich die 24 Plätze",
      lead: "Damit Sie sofort wissen, ob das ganze Team Platz hat.",
      unit: (perUnit: string, beds: string, total: string) =>
        `Für ${perUnit} Personen, mit ${beds}. Insgesamt ${total} Gäste.`,
      total: (count: string, total: string) =>
        `Insgesamt: ${count} Zimmer und Studios, ${total} Gäste.`,
      more: "Alle Zimmer ansehen →",
    },
    agenda: {
      eyebrow: "Beispiel",
      title: "So sehen zwei Tage bei Amonte aus",
      note: "Das Programm gehört Ihnen. Um den Rest kümmern wir uns.",
    },
    pricing: {
      eyebrow: "Preise",
      title: "Was es ungefähr kostet",
      note: "Das endgültige Angebot hängt von der Personenzahl und vom Zeitraum ab. Sie erhalten es aufgeschlüsselt, innerhalb von 24 Arbeitsstunden.",
    },
    process: {
      title: "In 4 einfachen Schritten",
    },
    reviews: {
      eyebrow: "Bewertungen",
      title: "Was Teams sagen, die schon hier waren",
      all: "Alle Bewertungen auf Google →",
    },
    faq: {
      eyebrow: "Häufige Fragen",
      title: "Was Teams uns fragen",
    },
    form: {
      eyebrow: "Angebotsanfrage",
      title: "Vollständiges Angebot anfordern",
      lead: "In zwei Minuten ausgefüllt, das Angebot erhalten Sie innerhalb von 24 Arbeitsstunden.",
    },
    location: {
      eyebrow: "Lage und Anreise",
      title: "So kommen Sie zu uns",
      maps: "In Google Maps öffnen →",
    },
    final: {
      eyebrow: "Verfügbarkeit",
      title: "Sagen Sie uns, wie viele Personen und wann. Den Rest übernehmen wir.",
      whatsapp: "Angebot per WhatsApp anfordern",
      form: "Formular ausfüllen",
    },
  },

  book: {
    meta: {
      title: "Jetzt buchen",
      description:
        "Prüfen Sie die Verfügbarkeit und buchen Sie Ihren Aufenthalt in der Pensiunea Amonte in Valea Avrigului, 40 Minuten von Sibiu. Jacuzzi & Sauna, Terrasse.",
    },
    title: "Buchen Sie Ihre Auszeit in den Bergen",
    lead: "Wählen Sie Ihren Zeitraum, und wir melden uns so bald wie möglich mit der Verfügbarkeit.",
    photos: ["Die Pension von außen", "Ein Zimmer mit Balkon", "Pensiunea Amonte", "Doppelzimmer", "Jacuzzi & Sauna"],
    groups: "Sie buchen für eine Gruppe oder ein Team?",
    groupsLink: "Zur Seite für Gruppen",
    contact: {
      title: "Oder kontaktieren Sie uns direkt",
      lead: "Wenn Sie besondere Wünsche haben oder die Details lieber telefonisch besprechen möchten.",
      fallback: "email",
      formLabel: "Kontaktformular",
    },
  },
};
