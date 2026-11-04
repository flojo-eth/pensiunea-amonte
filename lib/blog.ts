// The blog: Romanian only, by design. Local searches ("cazare lângă Brambura
// Park", "ce faci în Valea Avrigului") are almost all in Romanian; an article
// earns an English or German version only once it brings traffic.
//
// Every first-hand line ("din ce vedem la oaspeții noștri") was confirmed by
// Flo. Facts about third parties (prices, opening hours, attractions) carry
// the date they were read and a link to the source, because they change.
//
// Inline links inside a paragraph use [text](url); RichText renders them.

export const BLOG_PATH = "/blog";

export type Author = { name: string; role: string };

export const AUTHORS = {
  florin: { name: "Florin", role: "Echipa Amonte" },
  adrian: { name: "Adrian", role: "Echipa Amonte" },
} as const satisfies Record<string, Author>;

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "quote"; text: string; cite: string };

export type BlogPost = {
  slug: string;
  /** The h1. */
  title: string;
  /** For <title>; runs through the "%s | Pensiunea Amonte" template. */
  metaTitle: string;
  description: string;
  author: keyof typeof AUTHORS;
  /** ISO dates. `updated` moves only when the content really changes. */
  published: string;
  updated: string;
  image: { src: string; alt: string };
  /** "Pe scurt": plain, quotable, the block AI engines lift. */
  summary: string;
  sections: { title: string; blocks: Block[] }[];
  faq: { q: string; a: string }[];
  sources: { label: string; url: string; note?: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "brambura-park",
    title: "Brambura Park: ce găsești și unde te cazezi aproape",
    metaTitle: "Brambura Park: ce faci și unde te cazezi aproape",
    description:
      "Casa Întoarsă, mini zoo, tubing și locuri de joacă: ce faci la Brambura Park, cât timp îți trebuie și unde te cazezi la 4 minute de parc.",
    author: "florin",
    published: "2026-11-04",
    updated: "2026-11-04",
    image: { src: "/brambura.jpeg", alt: "Brambura Park, în Valea Avrigului" },
    summary:
      "Brambura Park este un parc de distracții pentru familii în Valea Avrigului, județul Sibiu, deschis în 2022 și cunoscut mai ales pentru Casa Întoarsă, o casă cu camerele cu susul în jos. În parc găsești un mini zoo, tubing, tobogane gonflabile, trambuline, mașinuțe electrice, locuri de joacă și un restaurant. Parcul este deschis tot anul, are parcare mare și gratuită și se află la 4 minute cu mașina de Pensiunea Amonte. E potrivit pentru familii cu copii de toate vârstele, dar și pentru adulții care vor o zi relaxată și poze amuzante. Din ce vedem la oaspeții noștri, merită să-i dai o zi întreagă.",
    sections: [
      {
        title: "Ce este Brambura Park",
        blocks: [
          {
            type: "p",
            text: "Brambura Park s-a deschis pe 1 iunie 2022, în Valea Avrigului, la poalele Munților Făgăraș. „Brambura” înseamnă „alandala”, iar ideea parcului e chiar asta: să vezi lumea puțin altfel, pe dos.",
          },
          {
            type: "p",
            text: "Piesa centrală e Casa Întoarsă, o casă de aproximativ 200 m² în care totul e răsturnat: dormitorul are patul pe tavan, bucătăria pare să sfideze gravitația, iar fiecare cameră e un decor pentru poze. În jurul casei s-a construit treptat un parc întreg, cu atracții pentru copii mici, pentru cei mai mari și pentru părinți.",
          },
          {
            type: "p",
            text: "Parcul e un loc de zi: vii dimineața, mergi din atracție în atracție, iei masa acolo și pleci când s-au obosit copiii.",
          },
        ],
      },
      {
        title: "Ce poți face acolo",
        blocks: [
          {
            type: "p",
            text: "Cele mai multe atracții sunt incluse în biletul de intrare. Câteva se plătesc separat, la fața locului.",
          },
          {
            type: "table",
            head: ["Atracție", "Ce e", "Inclusă în bilet"],
            rows: [
              ["Casa Întoarsă", "Camere tematice cu mobila pe tavan, ideale pentru poze", "Da, cu biletul „Parc + Casa Întoarsă”"],
              ["Mini Zoo", "Alpaca, capre pitice, iepurași și cerbi lopătari", "Da"],
              ["Locuri de joacă", "Leagăne, trambuline, zone de cățărat pentru cei mici", "Da"],
              ["Copacul Vorbitor", "Un copac care „vorbește” cu copiii", "Da"],
              ["Tobogane gonflabile", "Tobogane mari, pentru copiii care vor adrenalină", "Nu, se plătesc separat"],
              ["Mașinuțe electrice", "Pentru șoferii mici", "Nu, se plătesc separat"],
              ["Tubing", "Coborâre pe colac, pe pistă, pentru copii și adulți", "Nu, se plătește separat"],
              ["Cinema 5D și VR 360°", "Atracții noi din septembrie 2026, cu efecte și realitate virtuală", "Detalii la parc"],
              ["Food Zone", "Restaurant cu bucătărie caldă și terasă acoperită", "Se plătește separat"],
            ],
          },
          {
            type: "p",
            text: "Pe [harta parcului](https://brambura-park.ro/harta-parcului/) mai găsești: o tiroliană între două turnuri de lemn, Pânza de păianjen (o piramidă de frânghii pentru cățărat), Leagănul Căpitanului Brambura (o corabie-leagăn), trenulețul Brambura Express, Ținutul Alpaca, ateliere creative, Sweet Corner cu înghețată, Summer Bar și un magazin de suveniruri. De pe terasa porții, cu telescopul, vezi tot parcul până la munți.",
          },
          {
            type: "p",
            text: "Cu copiii mici, Mini Zoo-ul și locurile de joacă sunt de obicei primele opriri. Copiii mai mari merg direct la tubing, tobogane și mașinuțe.",
          },
          {
            type: "p",
            text: "Fără copii, Casa Întoarsă merită vizitată pentru pozele amuzante: pozează-te ca și cum ai atârna de tavan, apoi rotește fotografia. Tubingul e și pentru adulți, iar masa la Food Zone închide bine o zi liniștită.",
          },
        ],
      },
      {
        title: "Cât timp îți trebuie și când să mergi",
        blocks: [
          {
            type: "p",
            text: "Planifică o zi întreagă. Din ce vedem la oaspeții noștri, cei care vin pentru câteva ore pleacă de obicei cu jumătate din parc nevăzut. Cu Casa Întoarsă, Mini Zoo-ul, locurile de joacă, câteva ture pe atracții și masa, timpul trece repede.",
          },
          {
            type: "p",
            text: "Greșeala cea mai frecventă e să vii doar „să vezi casa”, pentru o oră: cei mici abia ajung la tubing sau la animale și e deja timpul de plecare.",
          },
          {
            type: "p",
            text: "Parcul e deschis și iarna. Programul se schimbă în funcție de sezon, așa că verifică orele pe [site-ul Brambura Park](https://brambura-park.ro/bilete/) înainte să pleci. Un sfat: parcul are o [cameră live](https://brambura-park.ro/harta-parcului/#webcam), pe care vezi dintr-o privire cum e vremea și cât de plin e parcul.",
          },
          {
            type: "table",
            caption: "Prețurile de pe site-ul oficial, la data de 4 noiembrie 2026",
            head: ["Bilet", "Preț"],
            rows: [
              ["Doar parcul", "15 lei"],
              ["Parc + Casa Întoarsă (include Mini Zoo, locurile de joacă, trambulinele și leagănele)", "40 lei"],
              ["Copii până la 3 ani", "gratuit"],
              ["Tobogane gonflabile", "20 lei / 30 de minute"],
              ["Mașinuțe electrice", "20 lei / tură sau 60 lei / 4 ture"],
              ["Tubing", "10 lei / tură sau 60 lei / 10 ture"],
            ],
          },
          {
            type: "p",
            text: "Prețurile se pot schimba, de aceea pagina lor de [bilete și prețuri](https://brambura-park.ro/bilete/) rămâne sursa sigură. Biletele se pot cumpăra și online.",
          },
        ],
      },
      {
        title: "Cum ajungi",
        blocks: [
          {
            type: "p",
            text: "Din Sibiu, drumul până în Valea Avrigului durează aproximativ 40 de minute cu mașina: mergi pe DN1 spre Brașov până la Avrig, apoi urci pe Valea Avrigului, spre munte. Parcul este pe drumul principal al satului, la Casa Întoarsă.",
          },
          {
            type: "p",
            text: "De la Pensiunea Amonte faci 4 minute cu mașina. Drumul e asfaltat, așa că poți merge și pe jos sau cu bicicleta. Dacă vrei să lași mașina la pensiune, la noi sunt disponibile e-bike-uri, prin partenerul nostru.",
          },
          {
            type: "p",
            text: "Parcul are o parcare mare și gratuită, așa că nu trebuie să cauți loc nici în weekend.",
          },
        ],
      },
      {
        title: "Ce mai vezi în același weekend",
        blocks: [
          {
            type: "p",
            text: "Dacă îi dai parcului o zi întreagă, celelalte opriri din zonă se potrivesc mai bine în a doua zi a weekendului. Singura care încape și în aceeași zi e ferma de cerbi din Poiana Neamțului: vara, vizitele sunt seara, între 17 și 20, deci poți ajunge acolo după ce închei ziua în parc.",
          },
          {
            type: "ul",
            items: [
              "Ferma de cerbi din Poiana Neamțului, tot în Valea Avrigului: cerbi și ciute, cu vizite în weekend, în grupuri cu ghid. Vara, programul e între 17 și 20.",
              "Palatul Brukenthal din Avrig: reședința de vară a baronului Samuel von Brukenthal, cu grădina și parcul din jur.",
              "Castelul de Lut din Valea Zânelor, la Porumbacu de Sus: o construcție de poveste, din materiale naturale, la poalele Făgărașilor.",
            ],
          },
          {
            type: "p",
            text: "Toate acestea și alte idei sunt pe pagina noastră de [activități în zonă](/activitati-in-zona).",
          },
        ],
      },
      {
        title: "Unde te cazezi aproape de Brambura Park",
        blocks: [
          {
            type: "p",
            text: "Pensiunea Amonte este tot în Valea Avrigului, la 4 minute cu mașina de parc. Avem 10 unități și 24 de locuri: 8 camere duble și 2 studiouri de familie, cu pat matrimonial și canapea extensibilă, pentru până la 4 persoane.",
          },
          {
            type: "p",
            text: "Pentru familiile cu copii: într-o cameră dublă pot sta doi adulți și un copil, în patul părinților, fără cost suplimentar, iar micul dejun e inclus și pentru copil. Pentru bebelușii de până la 2 ani avem pătuț, la cerere.",
          },
          {
            type: "p",
            text: "După o zi în parc, seara rămâne liniștită: restaurantul și barul pensiunii, zona de spa cu jacuzzi și saună, șemineul, focul de tabără și terasa panoramică cu vedere spre munte. Pentru cei mici și cei mari avem ping-pong și jocuri de societate: Catan, Monopoly, Activity, Nu te supăra, frate, remi, șah, table și jocuri de cărți.",
          },
          {
            type: "quote",
            text: "It's situated a 4 minutes drive away from Brambura Park.",
            cite: "cosminp20, pe Tripadvisor",
          },
          {
            type: "p",
            text: "Vezi [camerele și studiourile](/camere) sau [verifică disponibilitatea](/rezerva-acum). În weekend, sejurul minim este de 2 nopți.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Ce poți face la Brambura Park?",
        a: "Poți vizita Casa Întoarsă, Mini Zoo-ul cu alpaca, capre pitice, iepurași și cerbi, locurile de joacă și trambulinele. Contra cost sunt tubingul, toboganele gonflabile și mașinuțele electrice. Parcul are și un restaurant, Food Zone.",
      },
      {
        q: "Cât timp îți trebuie pentru Brambura Park?",
        a: "O zi întreagă. Cei care vin doar pentru câteva ore ratează de obicei o bună parte din atracții.",
      },
      {
        q: "Este Brambura Park deschis iarna?",
        a: "Da, parcul e deschis și iarna. Programul se schimbă în funcție de sezon, așa că verifică orele pe site-ul lor înainte să pleci.",
      },
      {
        q: "Cât costă intrarea la Brambura Park?",
        a: "La data de 4 noiembrie 2026, intrarea în parc costă 15 lei, iar biletul „Parc + Casa Întoarsă” costă 40 de lei. Copiii până la 3 ani intră gratuit. Prețurile actuale sunt pe pagina oficială de bilete a parcului.",
      },
      {
        q: "Are Brambura Park parcare?",
        a: "Da, o parcare mare și gratuită.",
      },
      {
        q: "Unde te cazezi aproape de Brambura Park?",
        a: "Pensiunea Amonte este în Valea Avrigului, la 4 minute cu mașina de parc, cu 8 camere duble și 2 studiouri de familie.",
      },
    ],
    sources: [
      { label: "Brambura Park, bilete și prețuri", url: "https://brambura-park.ro/bilete/", note: "citit la data de 4 noiembrie 2026" },
      { label: "Brambura Park, harta parcului și camera live", url: "https://brambura-park.ro/harta-parcului/", note: "citit la data de 4 noiembrie 2026" },
      { label: "Brambura Park, Casa Întoarsă", url: "https://brambura-park.ro/casaintoarsa/" },
      { label: "Brambura Park, Mini Zoo", url: "https://brambura-park.ro/mini-zoo/" },
      { label: "Brambura Park pe Facebook", url: "https://www.facebook.com/BramburaPark", note: "Cinema 5D și VR 360°, 4 septembrie 2026" },
      { label: "Turnul Sfatului, decembrie 2024", url: "https://www.turnulsfatului.ro/2024/12/12/patinoar-seri-de-colinde-si-surprize-de-craciun-la-brambura-park-proiectul-de-pe-valea-avrigului-se-extinde-in-anul-2025-216327", note: "data deschiderii" },
      { label: "BZI, ferma de cerbi din Poiana Neamțului, aprilie 2026", url: "https://www.bzi.ro/ferma-de-cerbi-din-poiana-neamtului-iata-ce-trebuie-sa-stii-despre-destinatia-unde-turistii-pot-interactiona-cu-animale-salbatice-5517295" },
    ],
  },
];

export function blogPostPath(slug: string) {
  return `${BLOG_PATH}/${slug}`;
}

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Strings of the blog's own pages. Here rather than in copy.ts, which must
 *  have an English and a German counterpart for every key. */
export const BLOG_COPY = {
  crumb: "Blog",
  meta: {
    title: "Blog: sugestii pentru Valea Avrigului",
    description:
      "Sugestii pentru Valea Avrigului și împrejurimi, scrise de echipa Pensiunii Amonte: ce faci, cât timp îți trebuie și unde te cazezi.",
  },
  eyebrow: "Blog",
  title: "Sugestii pentru Valea Avrigului",
  lead: "Ce faci în Valea Avrigului și în împrejurimi, din ce știm noi și din ce ne întreabă oaspeții.",
  read: "Citește articolul →",
  summary: "Pe scurt",
  faq: "Întrebări frecvente",
  sources: "Surse",
  published: "Publicat",
  updated: "Actualizat",
  cta: { title: "Vrei să rămâi aproape?", button: "Verifică disponibilitatea" },
};

/** "4 noiembrie 2026", computed on the server at build time. */
export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("ro-RO", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}
