import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { STATS, CONTACT, WEBSITE, CHECK_IN, CHECK_OUT, HOSTS, CANCELLATION, FIRE_SAFETY_AUTH } from "@/lib/content";
import { SHOW_FB_AND_EVENTS } from "@/lib/site";
import { btnTerracotta, btnOutlineLight } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Despre noi - Pensiunea Amonte, cazare boutique în Valea Avrigului",
  description:
    "Pensiune boutique de munte în Valea Avrigului, jud. Sibiu, la poalele Făgărașului. 10 spații, 24 locuri, jacuzzi, saună, terasă, sală pentru grupuri. La 30 min de Sibiu.",
  alternates: { canonical: "/despre-noi" },
};

// ── FAQ data ─── sync 1:1 cu FAQPage JSON-LD de mai jos ──────────────────────
const FAQ_BASE = [
  {
    q: "Unde este Pensiunea Amonte?",
    a: "În Valea Avrigului nr. 642, județul Sibiu, la poalele Munților Făgăraș, la aproximativ 30 de minute de Sibiu.",
  },
  {
    q: "Câți oaspeți poate găzdui?",
    a: "10 spații de cazare - 8 camere duble și 2 studiouri de familie - cu o capacitate totală de 24 de persoane.",
  },
  {
    q: "Acceptați animale de companie?",
    a: "Nu, nu primim animale de companie din exterior. Singurul rezident pe patru labe este Bruno, mascota casei, un Bernese Mountain Dog.",
  },
  {
    q: "Ce facilități de relaxare aveți?",
    a: "Amonte dispune de jacuzzi, saună, living cu șemineu, terasă panoramică, firepit exterior și bar. Peste drum, pe malul râului, există și o zonă unde oaspeții se pot relaxa în aer liber.",
  },
  {
    q: "Se poate rezerva întreaga pensiune pentru un grup?",
    a: "Da. Amonte se poate rezerva integral, pentru maximum 24 de persoane - potrivit pentru sejururi de familie, retreaturi sau ieșiri corporate, cu sală dedicată pentru grupuri.",
  },
  {
    q: "Ce obiective turistice și activități sunt în apropiere?",
    a: "Plecare directă din Valea Avrigului spre Cabana Bârcaciu, Negoiu și Suru (trasee pentru toate nivelurile). Brambura Park și ferma de cerbi de la Poiana Neamțului sunt la circa 10 minute. Palatul Brukenthal (Avrig), Castelul de Lut (Porumbacu de Sus), Casa Vikingilor și Povestea Calendarului sunt în apropierea pensiunii.",
  },
  {
    q: "Cât de departe sunteți de Sibiu și de Transfăgărășan?",
    a: "Sibiul este la aproximativ 30–40 de minute cu mașina. Transfăgărășanul și cascada Bâlea sunt la circa o oră, accesibile sezonier.",
  },
  {
    q: "La ce oră este check-in / check-out?",
    a: `Check-in: de la ${CHECK_IN}. Check-out: până la ${CHECK_OUT}.`,
  },
  {
    q: "Cum rezerv?",
    a: "Direct, pe WhatsApp la +40 747 342 280.",
  },
  ...CANCELLATION.faqs,
];

// F&B questions - visible when SHOW_FB_AND_EVENTS = true (see lib/site.ts).
const FAQ_FB = [
  {
    q: "Se servește mic dejun?",
    a: "Da, micul dejun este inclus în tarif.",
  },
  {
    q: "Aveți bar?",
    a: "Da. Barul Amonte oferă băuturi și cocktail-uri artizanale, printre care Amonte Spirit - un cocktail semnătură cu sirop de brad.",
  },
  {
    q: "Pot organiza un eveniment privat sau corporate la Amonte?",
    a: "Da. Amonte se poate rezerva integral și oferă un cadru privat pentru retreaturi corporate, team building, sesiuni de lucru și evenimente de familie, pentru maximum 24 de persoane.",
  },
];

const FAQ = SHOW_FB_AND_EVENTS ? [...FAQ_BASE, ...FAQ_FB] : FAQ_BASE;

// ── JSON-LD ── LodgingBusiness e în (site)/layout.tsx; aici: AboutPage + FAQPage ─
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${WEBSITE}/despre-noi#webpage`,
      url: `${WEBSITE}/despre-noi`,
      name: "Despre Pensiunea Amonte - cazare boutique în Valea Avrigului",
      isPartOf: { "@id": `${WEBSITE}/#website` },
      about: { "@id": `${WEBSITE}/#lodging` },
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
    body: "Suntem la poalele celui mai înalt masiv din Carpații românești. De aici poți pleca spre Cabana Bârcaciu, Negoiu și Suru, pe trasee pentru toate nivelurile.",
  },
  {
    icon: "🤝",
    title: "Retreaturi & corporate",
    body: "Fiindcă putem fi rezervați integral, Amonte devine un spațiu privat pentru retreaturi corporate, team building, sesiuni de lucru sau evenimente de familie.",
  },
  {
    icon: "🐾",
    title: "Bruno, gazda pe patru labe",
    body: "Mascota casei este Bruno, un Bernese Mountain Dog care întâmpină oaspeții. Nu primim însă alte animale de companie, pentru liniștea tuturor.",
  },
  {
    icon: "🌄",
    title: "30 minute de Sibiu",
    body: "Brambura Park și ferma de cerbi de la Poiana Neamțului sunt la circa 10 minute, iar centrul medieval al Sibiului, la circa 30–40 de minute cu mașina.",
  },
];

const FACILITIES = [
  "10 spații: 8 camere duble + 2 studiouri de familie",
  "Capacitate 24 persoane",
  "Încălzire în pardoseală",
  "Jacuzzi",
  "Saună",
  "Living cu șemineu",
  "Terasă panoramică",
  "Firepit exterior",
  "Bar / lounge (ambianță)",
  "Sală pentru grupuri / corporate",
  "Mini teren de fotbal",
  "Masă de ping-pong",
  "WiFi gratuit",
  "Parcare gratuită",
  "Rezervare integrală disponibilă",
  ...(SHOW_FB_AND_EVENTS ? ["Mic dejun inclus"] : []),
];

// ── component ────────────────────────────────────────────────────────────────
export default function DesprePage() {
  return (
    <>
      {/* Structured data — JSON-LD uses production URL regardless of staging */}
      <Script
        id="schema-despre"
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
        {/* Bloc de răspuns direct - autonom, 40–60 cuvinte */}
        <p className="mt-6 max-w-[65ch] text-[clamp(17px,2vw,20px)] leading-relaxed text-muted">
          Pensiunea Amonte este o pensiune boutique de munte situată în Valea
          Avrigului, județul Sibiu, la poalele Munților Făgăraș și la circa 30
          de minute de Sibiu. Oferim 10 spații de cazare pentru maximum 24 de
          oaspeți, într-un cadru intim, cu jacuzzi, saună, șemineu, terasă
          panoramică, bar și acces direct la natură. Putem fi rezervați integral
          pentru grupuri, retreaturi și events private.
        </p>
      </section>

      {/* ── OPERATOR ── */}
      <section className={`${container} ${pad} border-t border-line`}>
        <div className="flex flex-wrap gap-[clamp(36px,5vw,72px)]">
          <div className="flex-1 basis-[360px]">
            <SectionHeading
              eyebrow="Cine suntem"
              title="Un refugiu la munte, construit pentru relaxare."
            />
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Amonte este operată de{" "}
              <strong className="font-semibold text-forest">Hostillo SRL</strong>
              , o companie românească de management hotelier care preia și
              administrează integral pensiuni boutique, cu accent pe ospitalitate
              autentică și pe experiențe de calitate.{/* TODO: din ce an operează Hostillo Pensiunea Amonte / de când e deschisă */}
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Ne-am construit în jurul unei idei simple: un loc mic și îngrijit,
              în care fiecare oaspete e tratat ca un invitat, nu ca un număr de
              cameră.
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

      {/* ── GAZDELE ── */}
      <section className={`${container} ${pad}`}>
        <div className="flex flex-wrap gap-[clamp(36px,5vw,72px)] items-center">
          <div className="flex-1 basis-[380px]">
            <SectionHeading eyebrow={HOSTS.eyebrow} title={HOSTS.title} />
            <div className="mt-6 space-y-4">
              {HOSTS.body.map((paragraph, index) => (
                <p key={index} className="text-[17px] leading-relaxed text-muted m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="flex-1 basis-[360px]">
            <PlaceholderImage
              label="[ echipa Amonte ]"
              className="aspect-[4/3] rounded-xl"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
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
            se petrec în livingul cu șemineu sau afară, la firepit, sub cerul
            înstelat.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Pentru cei care vin să se miște, Valea Avrigului e punct de plecare
            pentru drumeții spre Cabana Bârcaciu, Negoiu și Suru. Pentru cei
            care vin să se relaxeze, terasa, sauna și jacuzziul sunt suficiente
            cât să nu mai vrei să pleci.
          </p>
        </div>
      </section>

      {/* ── GASTRONOMIE - PUBLIC NUMAI DUPĂ AUTORIZAȚII CAEN 5621/5630/5611 ── */}
      {SHOW_FB_AND_EVENTS && (
        <section className={`${pad} bg-sand`}>
          <div className={container}>
            <SectionHeading eyebrow="Gastronomie" title="Mâncare și bar" />
            <div className="mt-6 max-w-[720px]">
              <p className="text-[17px] leading-relaxed text-muted">
                La Amonte, masa și băutura bună fac parte din experiență.
                Micul dejun este inclus în tarif. Barul oferă băuturi și
                cocktail-uri artizanale - printre care{" "}
                <strong className="font-semibold text-forest">
                  Amonte Spirit
                </strong>
                , cocktail-ul semnătură al casei, cu sirop de brad.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── EVENIMENTE - PUBLIC NUMAI DUPĂ AUTORIZAȚII CAEN 8230 ── */}
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
            {/* TODO: adaugă detalii pachet - durată, ce include, capacitate spațiu comun */}
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
                  jud. Sibiu, 555200, România
                </p>
              </address>
              <ul className="mt-7 space-y-3 text-[15px] leading-snug text-paper/70">
                <li>
                  <strong className="font-medium text-paper/90">
                    Brambura Park
                  </strong>{" "}
                  și ferma de cerbi (Poiana Neamțului): la circa 10 minute
                </li>
                <li>
                  <strong className="font-medium text-paper/90">
                    Palatul Brukenthal
                  </strong>
                  , Avrig: în apropiere
                </li>
                <li>
                  <strong className="font-medium text-paper/90">
                    Castelul de Lut „Valea Zânelor"
                  </strong>
                  , Porumbacu de Sus: la câteva minute de Avrig
                </li>
                <li>
                  <strong className="font-medium text-paper/90">
                    Casa Vikingilor
                  </strong>{" "}
                  și Povestea Calendarului: în zonă
                </li>
                <li>
                  <strong className="font-medium text-paper/90">
                    Trasee montane Făgăraș
                  </strong>{" "}
                  - Cabana Bârcaciu, Negoiu, Suru: plecare din Valea Avrigului
                </li>
                <li>
                  <strong className="font-medium text-paper/90">
                    Activități în aer liber
                  </strong>
                  : călărie, plimbări cu ATV-ul, plimbări prin pădure
                </li>
                <li>
                  <strong className="font-medium text-paper/90">Sibiu</strong>{" "}
                  (centru istoric și aeroport): la 30–40 de minute cu mașina
                </li>
                <li>
                  <strong className="font-medium text-paper/90">
                    Transfăgărășan
                  </strong>{" "}
                  și cascada Bâlea: la circa o oră, sezonier
                </li>
              </ul>
            </div>
            {/* TODO: înlocuiește div-ul de mai jos cu un <iframe> Google Maps real */}
            <div className="relative min-h-[340px] flex-[1.4] basis-[380px] rounded-xl overflow-hidden bg-[#e9e8e2]">
              <iframe
                src="https://maps.google.com/maps?q=Pensiunea%20Amonte,%20Avrig,%20Romania&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              ></iframe>
            </div>
          </div>
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

      {/* ── FAQ - vizibil + 1:1 cu FAQPage JSON-LD de mai sus ── */}
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
        <div className="mt-12 text-[13px] text-muted-2 leading-relaxed">
          Pensiunea Amonte deține {FIRE_SAFETY_AUTH.replace("ISU Sibiu nr.", "emisă de ISU Sibiu (nr.") + ")."}
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
