import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { STATS, CONTACT } from "@/lib/content";
import { btnTerracotta, btnOutlineLight } from "@/lib/ui";

// COMPLIANCE GATE ─────────────────────────────────────────────────────────────
// Secțiunile „Gastronomie & bar" și „Evenimente corporate" devin publice NUMAI
// după obținerea autorizațiilor CAEN aferente (5621 catering, 8230 evenimente;
// 5630/5611 dacă se servește la bar/restaurant) și a avizelor DSP/ANSVSA.
// Până atunci, lasă acest flag pe `false`.
const SHOW_FB_AND_EVENTS = false;
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Despre noi — Pensiunea Amonte, cazare boutique în Valea Avrigului",
  description:
    "Pensiune boutique de munte în Valea Avrigului, jud. Sibiu, la poalele Făgărașului. 10 spații, 24 locuri, jacuzzi, saună, bar, pet friendly. La 30 min de Sibiu.",
  alternates: { canonical: "/despre-noi" },
};

// ── FAQ data ─── rămasă în sync 1:1 cu FAQPage JSON-LD de mai jos ──────────
const FAQ = [
  {
    q: "Unde este Pensiunea Amonte?",
    a: "Pensiunea Amonte se află în Valea Avrigului nr. 642, județul Sibiu, la poalele Munților Făgăraș, la aproximativ 30 de minute de Sibiu.",
  },
  {
    q: "Câți oaspeți poate găzdui Amonte?",
    a: "Amonte are 10 spații de cazare — 8 camere duble și 2 studiouri de familie — și o capacitate totală de 24 de persoane.",
  },
  {
    q: "Pensiunea Amonte acceptă animale de companie?",
    a: "Da, Amonte este pet friendly. Mascota casei este Bruno, un Bernese Mountain Dog.",
  },
  {
    q: "Ce facilități de relaxare are pensiunea?",
    a: "Amonte oferă jacuzzi, saună, living cu șemineu, terasă panoramică, firepit și bar, într-un cadru montan liniștit.",
  },
  {
    q: "Pot organiza un eveniment privat sau corporate la Amonte?",
    a: "Da. Pensiunea poate fi rezervată integral pentru retreaturi corporate, team building, sesiuni de lucru și evenimente de familie, pentru maximum 24 de persoane.",
  },
  {
    q: "Cât de departe este de Sibiu și de Transfăgărășan?",
    // TODO: confirmă cifrele exacte (km / minute)
    a: "Sibiul este la aproximativ 30–40 de minute cu mașina, iar Transfăgărășanul și zona Bâlea sunt accesibile direct din zonă, în sezon.",
  },
  {
    q: "Cum rezerv?",
    a: "Direct, prin site la pensiunea-amonte.ro sau pe WhatsApp la +40 747 342 280.",
  },
];

// ── JSON-LD ── folosește URL-ul canonic de producție, nu staging-ul ─────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://pensiunea-amonte.ro/despre-noi#webpage",
      url: "https://pensiunea-amonte.ro/despre-noi",
      name: "Despre Pensiunea Amonte — cazare boutique în Valea Avrigului",
      isPartOf: { "@id": "https://pensiunea-amonte.ro/#website" },
      about: { "@id": "https://pensiunea-amonte.ro/#lodging" },
    },
    {
      "@type": "LodgingBusiness",
      "@id": "https://pensiunea-amonte.ro/#lodging",
      name: "Pensiunea Amonte",
      url: "https://pensiunea-amonte.ro",
      telephone: "+40747342280",
      email: "contact@pensiunea-amonte.ro",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Valea Avrigului nr. 642",
        addressLocality: "Avrig",
        addressRegion: "Sibiu",
        postalCode: "CONFIRMA_CODUL_POSTAL", // TODO: confirmă codul poștal exact
        addressCountry: "RO",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "CONFIRMA_LATITUDINE",   // TODO: confirmă din Google Maps (pin pe clădire)
        longitude: "CONFIRMA_LONGITUDINE", // TODO: confirmă din Google Maps (pin pe clădire)
      },
      petsAllowed: true,
      maximumAttendeeCapacity: 24,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Jacuzzi", value: true },
        { "@type": "LocationFeatureSpecification", name: "Saună", value: true },
        { "@type": "LocationFeatureSpecification", name: "Living cu șemineu", value: true },
        { "@type": "LocationFeatureSpecification", name: "Terasă panoramică", value: true },
        { "@type": "LocationFeatureSpecification", name: "Firepit exterior", value: true },
        { "@type": "LocationFeatureSpecification", name: "Bar / lounge", value: true },
        // TODO: confirmă WiFi și parcare, apoi adaugă:
        // { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
        // { "@type": "LocationFeatureSpecification", name: "Parcare", value: true },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

// ── layout helpers ───────────────────────────────────────────────────────────
const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";
const pad = "py-[clamp(56px,7vw,96px)]";

const FEATURES = [
  {
    icon: "🏠",
    title: "Boutique, nu hotel",
    body: "Cu doar 10 spații și 24 de locuri, cunoaștem oaspeții pe nume, adaptăm fiecare sejur la ritmul lor și păstrăm liniștea pe care un loc de munte trebuie să o aibă.",
  },
  {
    icon: "🛁",
    title: "Relaxare & wellness",
    body: "Jacuzzi, saună, living cu șemineu și o terasă cu vedere spre Făgăraș, gândite pentru deconectare. După o zi pe munte, întoarcerea la Amonte e partea liniștită a zilei.",
  },
  {
    icon: "🏔️",
    title: "Natura la ușă",
    body: "Suntem la poalele celui mai înalt masiv din Carpații românești. De aici pleci spre Transfăgărășan, lacul și cascada Bâlea, traseele Negoiu și Suru.",
  },
  {
    icon: "🤝",
    title: "Retreaturi & corporate",
    body: "Fiindcă putem fi rezervați integral, Amonte devine un spațiu privat pentru retreaturi corporate, team building, sesiuni de lucru sau evenimente de familie.",
  },
  {
    icon: "🐾",
    title: "Pet friendly",
    body: "Suntem primititori cu animalele de companie, iar mascota casei este Bruno, un Bernese Mountain Dog care întâmpină oaspeții.",
  },
  {
    icon: "🌄",
    title: "30 minute de Sibiu",
    body: "Liniște de munte fără distanțe lungi. Centrul medieval al Sibiului și aeroportul sunt la 30–40 de minute cu mașina.",
  },
];

const FACILITIES = [
  "10 spații: 8 camere duble + 2 studiouri de familie",
  "Capacitate 24 persoane",
  "Jacuzzi",
  "Saună",
  "Living cu șemineu",
  "Terasă panoramică",
  "Firepit exterior",
  "Bar / lounge",
  "Politică pet friendly",
  "WiFi", // TODO: confirmă
  "Parcare", // TODO: confirmă
];

// ── component ────────────────────────────────────────────────────────────────
export default function DesprePage() {
  return (
    <>
      {/* Structured data — JSON-LD uses production URL regardless of staging */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── H1 + BLOC RĂSPUNS DIRECT ── */}
      <section className={`${container} pt-[clamp(56px,7vw,96px)] pb-[clamp(36px,5vw,56px)]`}>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
          Despre noi
        </p>
        <h1 className="m-0 font-serif text-[clamp(40px,6vw,72px)] font-semibold leading-[1.05] text-pine">
          Despre Pensiunea Amonte
        </h1>
        {/* Bloc de răspuns direct — autonom, 40–60 cuvinte */}
        <p className="mt-6 max-w-[65ch] text-[clamp(17px,2vw,20px)] leading-relaxed text-muted">
          Pensiunea Amonte este o pensiune boutique de munte situată în Valea
          Avrigului, județul Sibiu, la poalele Munților Făgăraș și la circa 30
          de minute de Sibiu. Oferim 10 spații de cazare pentru maximum 24 de
          oaspeți, într-un cadru intim, cu jacuzzi, saună, șemineu, terasă
          panoramică, bar și acces direct la natură. Suntem o pensiune pet
          friendly.
        </p>
      </section>

      {/* ── OPERATOR ── */}
      <section className={`${container} ${pad} border-t border-line`}>
        <div className="flex flex-wrap gap-[clamp(36px,5vw,72px)]">
          <div className="flex-1 basis-[360px]">
            <SectionHeading
              eyebrow="Cine suntem"
              title="O casă de munte construită pentru tihnă."
            />
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Amonte este operată de{" "}
              <strong className="font-semibold text-forest">Hostillo SRL</strong>
              , o companie românească de management hotelier care preia și
              administrează integral pensiuni boutique, cu accent pe ospitalitate
              atentă și pe experiențe de calitate.{/* TODO: din ce an operează Hostillo Pensiunea Amonte / de când e deschisă */}
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Ne-am construit în jurul unei idei simple: un loc mic, îngrijit
              până la detaliu, în care fiecare oaspete e tratat ca un invitat,
              nu ca un număr de cameră.
            </p>
          </div>
          <div className="flex flex-1 basis-[260px] flex-wrap items-center gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-[52px] leading-none text-forest">
                  {s.value}
                </div>
                <div className="mt-2 text-[13px] text-muted-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE FACEM CEL MAI BINE ── */}
      <section className={`${pad} bg-sand`}>
        <div className={container}>
          <SectionHeading
            eyebrow="Ce facem cel mai bine"
            title="Ospitalitate la scară umană"
            className="mb-[clamp(40px,5vw,60px)]"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl bg-card-2 p-[clamp(22px,3vw,32px)]"
              >
                <div className="mb-3 text-[28px] leading-none">{f.icon}</div>
                <h3 className="mb-2 text-[17px] font-semibold text-pine">
                  {f.title}
                </h3>
                <p className="m-0 text-[15px] leading-relaxed text-muted">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUM ARATĂ UN SEJUR ── */}
      <section className={`${container} ${pad}`}>
        <div className="max-w-[780px]">
          <SectionHeading
            eyebrow="Experiența"
            title="Cum arată un sejur la Amonte"
          />
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            Sosirea e fără grabă. Cele 8 camere duble și 2 studiouri de familie
            sunt gândite pentru cupluri și familii care vor confort real. Serile
            se petrec în livingul cu șemineu sau afară, la firepit, sub cerul de
            munte.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Pentru cei care vin să se miște, Valea Avrigului este punct de
            plecare pentru drumeții spre Negoiu, Suru și Transfăgărășan. Pentru
            cei care vin să stea, terasa, sauna și jacuzziul sunt suficiente.
          </p>
        </div>
      </section>

      {/* ── GASTRONOMIE — PUBLIC NUMAI DUPĂ AUTORIZAȚII CAEN 5621/5630/5611 ── */}
      {SHOW_FB_AND_EVENTS && (
        <section className={`${pad} bg-sand`}>
          <div className={container}>
            <SectionHeading eyebrow="Gastronomie" title="Mâncare și bar" />
            <div className="mt-6 max-w-[720px]">
              <p className="text-[17px] leading-relaxed text-muted">
                {/* TODO: completează după confirmare concept F&B — mic dejun inclus / à la carte,
                    oferta bară, preparate locale. Publică NUMAI ce e acoperit de autorizații. */}
                La Amonte, masa și o băutură bună fac parte din experiență.
                Barul și spațiul de lounge sunt locul în care ziua se încheie
                relaxat, lângă șemineu sau pe terasă.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── EVENIMENTE — PUBLIC NUMAI DUPĂ AUTORIZAȚII CAEN 8230 ── */}
      {SHOW_FB_AND_EVENTS && (
        <section className={`${container} ${pad}`}>
          <SectionHeading
            eyebrow="Evenimente"
            title="Evenimente private și corporate"
          />
          <div className="mt-6 max-w-[720px]">
            <p className="text-[17px] leading-relaxed text-muted">
              Amonte se poate rezerva integral și se transformă într-un cadru
              privat pentru retreaturi corporate, team building, sesiuni de lucru
              în liniște și evenimente de familie. Capacitatea de 24 de locuri,
              spațiile comune și ambianța de munte fac din pensiune o gazdă
              potrivită pentru grupuri care vor intimitate și un loc doar al lor.
            </p>
            {/* TODO: adaugă detalii pachet — durată, ce include, capacitate spațiu comun */}
          </div>
        </section>
      )}

      {/* ── LOCAȚIA ── */}
      <section className={`${pad} bg-pine`}>
        <div className={container}>
          <SectionHeading
            eyebrow="Cum ajungi"
            title="Locația"
            tone="dark"
          />
          <div className="mt-8 flex flex-wrap gap-[clamp(36px,5vw,64px)]">
            <div className="flex-1 basis-[300px]">
              <address className="not-italic">
                <p className="text-[17px] leading-relaxed text-paper/85">
                  <strong className="font-semibold text-paper">
                    Pensiunea Amonte
                  </strong>
                  <br />
                  Valea Avrigului nr. 642
                  <br />
                  Avrig, județul Sibiu, România
                </p>
              </address>
              <ul className="mt-7 space-y-3 text-[15px] leading-snug text-paper/70">
                <li>
                  <strong className="font-medium text-paper/90">Sibiu</strong>{" "}
                  (centru istoric, aeroport): ~30–40 min cu mașina
                </li>
                <li>
                  <strong className="font-medium text-paper/90">
                    Transfăgărășan (DN7C)
                  </strong>
                  , lacul și cascada Bâlea: acces direct din zonă, sezonier
                </li>
                <li>
                  <strong className="font-medium text-paper/90">Avrig</strong>{" "}
                  — Palatul de vară Brukenthal și Brambura Park: în apropiere
                </li>
                <li>
                  <strong className="font-medium text-paper/90">
                    Castelul de Lut „Valea Zânelor"
                  </strong>
                  , Porumbacu de Sus: câteva minute de Avrig
                </li>
                <li>
                  <strong className="font-medium text-paper/90">
                    Trasee montane Făgăraș
                  </strong>{" "}
                  (Negoiu, Suru): plecare din Valea Avrigului
                </li>
              </ul>
            </div>
            {/* TODO: înlocuiește div-ul de mai jos cu un <iframe> Google Maps real */}
            <div className="flex min-h-[340px] flex-[1.4] basis-[380px] items-center justify-center rounded-xl bg-pine-dark/50 text-[13px] text-paper/35">
              [ HARTĂ — embed Google Maps ]
            </div>
          </div>
        </div>
      </section>

      {/* ── GAZDA ── */}
      <section className={`${container} ${pad}`}>
        <SectionHeading eyebrow="Gazda ta" title="Florin Luca & Bruno" />
        <div className="mt-6 max-w-[680px]">
          <p className="text-[17px] leading-relaxed text-muted">
            În spatele Pensiunii Amonte este{" "}
            <strong className="font-semibold text-forest">Florin Luca</strong>,
            administratorul Hostillo SRL și omul care răspunde pentru fiecare
            sejur.{" "}
            {/* TODO: 2–3 fraze reale despre Florin — de ce ospitalitatea de munte, experiența adusă */}
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Și mai e{" "}
            <strong className="font-semibold text-forest">Bruno</strong>,
            Bernese Mountain Dog-ul care crede că pensiunea e a lui.
          </p>
        </div>
      </section>

      {/* ── FACILITĂȚI ── */}
      <section className={`${pad} bg-sand`}>
        <div className={container}>
          <SectionHeading
            eyebrow="Ce găsești la noi"
            title="Facilități"
            className="mb-[clamp(32px,4vw,48px)]"
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-lg border border-line-2 bg-card-2 px-5 py-4 text-[15px] font-medium text-[#33392f]"
              >
                <span className="mt-[2px] shrink-0 text-terracotta" aria-hidden="true">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ — vizibil + 1:1 cu FAQPage JSON-LD de mai sus ── */}
      <section className={`${container} ${pad}`}>
        <SectionHeading
          eyebrow="Întrebări frecvente"
          title="Răspunsuri rapide"
          className="mb-[clamp(36px,4vw,56px)]"
        />
        <div className="max-w-[800px] divide-y divide-line">
          {FAQ.map(({ q, a }) => (
            <div key={q} className="py-6">
              <h3 className="m-0 text-[17px] font-semibold text-pine">{q}</h3>
              <p className="mb-0 mt-2 text-[16px] leading-relaxed text-muted">
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`${pad} bg-pine`}>
        <div className={`${container} text-center`}>
          <SectionHeading
            eyebrow="Rezervare"
            title="Gata să vii la Amonte?"
            tone="dark"
            center
            className="mb-8"
          />
          <p className="mx-auto mb-8 max-w-[52ch] text-[17px] leading-relaxed text-paper/80">
            Scrie-ne pe WhatsApp și revenim rapid cu disponibilitatea și
            detaliile pentru datele tale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton className={btnTerracotta}>
              Verifică disponibilitatea pe WhatsApp
            </WhatsAppButton>
            <Link href="/rezerva-acum" className={btnOutlineLight}>
              Pagina de rezervare →
            </Link>
          </div>
          <p className="mt-6 text-[14px] text-paper/50">
            ✆{" "}
            <a
              href={`tel:${CONTACT.phoneMobile.replace(/\s/g, "")}`}
              className="text-paper/65 no-underline hover:text-paper"
            >
              {CONTACT.phoneMobile}
            </a>
            {" · "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-paper/65 no-underline hover:text-paper"
            >
              {CONTACT.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
