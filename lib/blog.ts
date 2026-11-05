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
  | { type: "quote"; text: string; cite: string }
  /** No `src` yet: the block is a reminder in the content and renders nothing,
   *  so an indexed page never shows an empty "[poză]" box. */
  | { type: "image"; src?: string; alt: string; caption?: string };

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
    slug: "weekend-valea-avrigului",
    title: "Ce faci un weekend în Valea Avrigului",
    metaTitle: "Ce faci un weekend în Valea Avrigului, lângă Sibiu",
    description:
      "Un weekend în Valea Avrigului, la 40 de minute de Sibiu: Brambura Park, ferma de cerbi, Casa Vikingilor, traseul spre Cabana Bârcaciu și unde te cazezi.",
    author: "florin",
    published: "2026-11-05",
    updated: "2026-11-05",
    image: { src: "/priveliste-fagaras.jpg", alt: "Priveliște spre Munții Făgăraș de pe terasa Pensiunii Amonte" },
    summary:
      "Valea Avrigului este valea râului Avrig, la poalele Munților Făgăraș, în județul Sibiu, la aproximativ 40 de minute cu mașina de Sibiu. Drumul urcă din orașul Avrig spre Poiana Neamțului, de unde pleacă traseele spre Cabana Bârcaciu. Într-un weekend aici poți combina atracțiile pentru familii (Brambura Park, ferma de cerbi din Poiana Neamțului, Casa Vikingilor, Povestea Calendarului) cu o drumeție de dificultate medie spre Cabana Bârcaciu și cu seri liniștite, la spa și la cină. Pensiunea Amonte este în vale, la 4 minute de Brambura Park.",
    sections: [
      {
        title: "Unde e Valea Avrigului și cum ajungi",
        blocks: [
          {
            type: "p",
            text: "Râul Avrig izvorăște din Lacul Avrig, sus în Munții Făgăraș, și se varsă în Olt, în orașul Avrig. Valea lui e drumul cel mai scurt dinspre Valea Oltului spre creasta Făgărașului: urci din Avrig, treci prin vale și ajungi în Poiana Neamțului, unde drumul se oprește și încep traseele montane.",
          },
          {
            type: "ul",
            items: [
              "Din Sibiu: aproximativ 40 de minute cu mașina, pe DN1 spre Brașov până la Avrig, apoi pe Valea Avrigului, spre munte.",
              "De la Aeroportul Sibiu: aproximativ 50 de minute.",
              "Din Brașov: aproximativ 2 ore, pe DN1 spre Sibiu.",
            ],
          },
        ],
      },
      {
        title: "Un weekend, pe zile",
        blocks: [
          {
            type: "p",
            text: "Programul de mai jos e cel pe care îl recomandăm cel mai des oaspeților noștri. Îl poți scurta sau lungi după vreme și după cine vine cu tine.",
          },
          {
            type: "p",
            text: "Vineri seara: nu-ți face planuri mari. Te cazezi, intri la spa, în jacuzzi și saună, și iei cina la restaurantul pensiunii. E seara în care lași orașul în urmă.",
          },
          { type: "image", src: "/jacuzzi-sauna.jpeg", alt: "Zona de spa a pensiunii, cu jacuzzi și saună" },
          {
            type: "p",
            text: "Sâmbătă: ziua mare. Cu copiii, dă-i o zi întreagă lui [Brambura Park](/blog/brambura-park), la 4 minute de pensiune. Dacă vrei munte, urcă spre Cabana Bârcaciu (detalii mai jos). Vara, poți încheia ziua la ferma de cerbi din Poiana Neamțului, unde vizitele sunt seara, între 17 și 20.",
          },
          {
            type: "p",
            text: "Duminică dimineața: o vizită scurtă înainte de drumul spre casă, la ferma de cerbi sau la Palatul Brukenthal din Avrig, care e oricum în drumul spre Sibiu.",
          },
        ],
      },
      {
        title: "Ce recomandăm cel mai des",
        blocks: [
          {
            type: "p",
            text: "Patru opriri pe care le recomandăm aproape oricui vine la noi, mai ales familiilor:",
          },
          {
            type: "ul",
            items: [
              "Brambura Park: parc de distracții pentru familii, cu Casa Întoarsă, mini zoo, tubing și locuri de joacă, la 4 minute de pensiune. Am scris despre el [un articol separat](/blog/brambura-park).",
              "Ferma de cerbi din Poiana Neamțului: cerbi și ciute, cu vizite în grupuri cu ghid, la circa 10 minute de pensiune. Vara, vizitele sunt între 17 și 20.",
              "Casa Vikingilor (Panoramic Park Viking Village): parc tematic pe Valea Avrigului, inspirat din lumea vikingilor, cu o corabie, ateliere de fierărie, tâmplărie și țesut pentru copii, un parc cu dinozauri, loc de joacă, trenuleț, animale și restaurant. Casa e construită complet, iar parcul din jur e încă în dezvoltare.",
              "Povestea Calendarului, la Porumbacu de Sus: parc tematic despre cele 12 luni ale anului și tradițiile lor, cu o căsuță pentru fiecare lună, spectacole pentru copii și locuri de joacă.",
            ],
          },
          { type: "image", src: "/ferma-de-cerbi.jpeg", alt: "Ferma de cerbi din Poiana Neamțului, în Valea Avrigului" },
          {
            type: "table",
            caption: "Program și prețuri, după sursele citite pe 4 noiembrie 2026",
            head: ["Atracție", "Program", "Preț"],
            rows: [
              ["Casa Vikingilor", "Luni - vineri 10 - 18, sâmbătă - duminică 10 - 19", "Detalii la parc"],
              ["Povestea Calendarului", "Luni - vineri 10 - 17, sâmbătă - duminică 10 - 18", "Adulți 40 lei, copii 3 - 10 ani 30 lei"],
              ["Ferma de cerbi", "Vara, între 17 și 20, vizite cu ghid", "Detalii la fermă"],
              ["Brambura Park", "Variază după sezon", "De la 15 lei (vezi [articolul](/blog/brambura-park))"],
            ],
          },
          {
            type: "p",
            text: "Programul se schimbă de la un sezon la altul, așa că verifică înainte pe [site-ul Povestea Calendarului](https://povesteacalendarului.ro/) și pe paginile atracțiilor.",
          },
        ],
      },
      {
        title: "Drumeția spre Cabana Bârcaciu",
        blocks: [
          {
            type: "p",
            text: "Traseul pe care îl recomandăm cel mai des pentru un weekend e cel spre Cabana Bârcaciu, la 1550 m. Poți pleca direct de la pensiune, pe jos, și faci aproximativ 3 ore și jumătate. Dacă urci cu mașina până în Poiana Neamțului, de acolo faci aproximativ 2 ore și jumătate. Sunt duratele noastre, la un ritm obișnuit, cu pauze.",
          },
          {
            type: "p",
            text: "E un traseu de dificultate medie. Prima parte e cea mai grea, o urcare abruptă, iar după ea drumul devine ușor. Marcajul e cruce roșie. Cabana Bârcaciu funcționează, așa că sus ai unde face o pauză.",
          },
          { type: "image", src: "/trasee-fagaras.jpg", alt: "Traseu montan în Munții Făgăraș, deasupra Văii Avrigului" },
          {
            type: "p",
            text: "Cine vrea mai mult poate continua din Bârcaciu spre Lacul Avrig (marcaj punct albastru, aproximativ 3 ore în plus, doar pentru drumeți cu experiență) sau spre Cabana Negoiu, prin Valea Șerbota (marcaj punct roșu, aproximativ 2 ore și 45 de minute).",
          },
          {
            type: "p",
            text: "Iarna, mergi doar până la Cabana Bârcaciu. Traseul spre Lacul Avrig e inaccesibil iarna, iar urcarea în creastă cere echipament de iarnă și experiență. Înainte de orice tură, verifică buletinul de avalanșă și avertizările Salvamont Sibiu.",
          },
        ],
      },
      {
        title: "Alte activități în zonă",
        blocks: [
          {
            type: "ul",
            items: [
              "E-bike: le găsești la pensiune, prin partenerul nostru Haihui. Traseul îl alegem împreună, după experiența ta și după vreme.",
              "Călărie și ATV: sunt mai multe variante în zonă. Ne putem ocupa noi de rezervare sau te punem în legătură cu colaboratorii noștri.",
              "Palatul Brukenthal din Avrig: fosta reședință de vară a baronului Samuel von Brukenthal, cu grădină barocă din 1777, restaurant și cafenea istorică. Accesul în parc se plătește.",
              "Beach Club Avrig (Corabia Piraților): plaja de vară a Palatului Brukenthal, cu apă încălzită, deschisă doar vara, pentru toate vârstele.",
            ],
          },
        ],
      },
      {
        title: "Vara și iarna",
        blocks: [
          {
            type: "p",
            text: "Vara, Valea Avrigului e la cel mai bun moment pentru drumeții și pentru familii: toate atracțiile de mai sus sunt deschise, ferma de cerbi primește vizitatori seara, între 17 și 20, iar în Avrig e deschis Beach Club.",
          },
          {
            type: "p",
            text: "Iarna, aproape totul rămâne deschis, inclusiv Brambura Park, Casa Vikingilor și Povestea Calendarului. Singura excepție e Beach Club Avrig, care e doar de vară. Pe munte, mergi doar până la Cabana Bârcaciu. Serile de iarnă sunt pentru șemineu, jacuzzi și saună.",
          },
        ],
      },
      {
        title: "Unde mănânci",
        blocks: [
          {
            type: "p",
            text: "Noi recomandăm restaurantul pensiunii: după o zi pe munte sau în parc, e mai comod să iei cina la câțiva pași de cameră. Mesele le gătim la pensiune, din produse locale, iar micul dejun e inclus în cazare.",
          },
        ],
      },
      {
        title: "Unde te cazezi",
        blocks: [
          {
            type: "p",
            text: "Pensiunea Amonte este în Valea Avrigului, la 4 minute de Brambura Park și la circa 10 minute de ferma de cerbi. Avem 8 camere duble și 2 studiouri de familie, cu mic dejun inclus, jacuzzi și saună, restaurant, bar, șemineu, foc de tabără și terasă panoramică spre Făgăraș.",
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
        q: "Unde se află Valea Avrigului?",
        a: "În județul Sibiu, la poalele Munților Făgăraș. Drumul urcă din orașul Avrig spre Poiana Neamțului, de unde pleacă traseele montane.",
      },
      {
        q: "Cât durează drumul din Sibiu până în Valea Avrigului?",
        a: "Aproximativ 40 de minute cu mașina, pe DN1 spre Brașov până la Avrig, apoi pe Valea Avrigului.",
      },
      {
        q: "Ce faci în Valea Avrigului cu copiii?",
        a: "Brambura Park, ferma de cerbi din Poiana Neamțului, Casa Vikingilor și Povestea Calendarului sunt cele mai potrivite opriri pentru familii.",
      },
      {
        q: "Ce traseu montan e potrivit pentru un weekend?",
        a: "Traseul spre Cabana Bârcaciu, de dificultate medie: aproximativ 3 ore și jumătate de la Pensiunea Amonte sau 2 ore și jumătate din Poiana Neamțului. Prima parte e o urcare abruptă, apoi drumul devine ușor.",
      },
      {
        q: "Ce poți face iarna în Valea Avrigului?",
        a: "Aproape toate atracțiile rămân deschise, inclusiv Brambura Park și Povestea Calendarului. Doar Beach Club Avrig e de vară. Pe munte, iarna se merge doar până la Cabana Bârcaciu.",
      },
      {
        q: "Unde te cazezi în Valea Avrigului?",
        a: "Pensiunea Amonte este în Valea Avrigului, la 4 minute de Brambura Park, cu 8 camere duble și 2 studiouri de familie, mic dejun inclus, jacuzzi și saună.",
      },
    ],
    sources: [
      { label: "muntii-nostri.ro, traseul Avrig - Cabana Bârcaciu (07MN09)", url: "https://muntii-nostri.ro/trails/download-atlas/avrig-cabana-barcaciu-creasta-principala-2/", note: "atlas din 16.04.2026" },
      { label: "muntii-nostri.ro, Cabana Bârcaciu - Lacul Avrig (07MN10)", url: "https://muntii-nostri.ro/trails/download-atlas/cabana-barcaciu-valea-avrigului-lacul-avrig/" },
      { label: "muntii-nostri.ro, Cabana Bârcaciu - Cabana Negoiu (07MN12)", url: "https://muntii-nostri.ro/trails/download-atlas/cabana-barcaciu-valea-serbota-cabana-negoiu/" },
      { label: "Agerpres, avertizare Salvamont pentru Munții Făgăraș", url: "https://agerpres.ro/social/2025/12/30/sibiu-a-crescut-riscul-de-avalansa-in-muntii-fagaras-turistii---sfatuiti-sa-evite-traseele-expuse--1515640", note: "30.12.2025" },
      { label: "Povestea Calendarului, site oficial", url: "https://povesteacalendarului.ro/", note: "citit la data de 4 noiembrie 2026" },
      { label: "Mesagerul de Sibiu, Casa Vikingilor", url: "https://mesageruldesibiu.ro/vikingii-au-ajuns-pe-valea-avrigului-satul-inspirat-din-lumea-nordica-unde-copiii-invata-mestesuguri-de-acum-1-000-de-ani/", note: "11.09.2026" },
      { label: "Palatul Brukenthal Avrig, site oficial", url: "https://palatulbrukenthalavrig.ro/", note: "citit la data de 4 noiembrie 2026" },
      { label: "Wikipedia, râul Avrig", url: "https://en.wikipedia.org/wiki/Avrig_(river)" },
    ],
  },
  {
    slug: "brambura-park",
    title: "Brambura Park: ce găsești și unde te cazezi aproape",
    metaTitle: "Brambura Park: ce faci și unde te cazezi aproape",
    description:
      "Casa Întoarsă, mini zoo, tubing și locuri de joacă: ce faci la Brambura Park, cât timp îți trebuie și unde te cazezi la 4 minute de parc.",
    author: "florin",
    published: "2026-11-04",
    updated: "2026-11-05",
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
              "Casa Vikingilor, pe Valea Avrigului, și Povestea Calendarului, la Porumbacu de Sus: două parcuri tematice pentru familii. Detalii în articolul nostru despre [un weekend în Valea Avrigului](/blog/weekend-valea-avrigului).",
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
