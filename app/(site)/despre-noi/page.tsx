import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import ConsentMap from "@/components/ConsentMap";
import {
  STATS, CONTACT, WEBSITE, HOSTS, FIRE_SAFETY_AUTH,
  ABOUT_FAQ_BASE, ABOUT_FAQ_FB, ABOUT_FEATURES, ABOUT_FACILITIES, ABOUT_FACILITIES_FB,
} from "@/lib/content";
import { SHOW_FB_AND_EVENTS } from "@/lib/site";
import { btnTerracotta } from "@/lib/ui";

export const metadata: Metadata = pageMeta({
  title: "Despre noi - Pensiunea Amonte, cazare boutique în Valea Avrigului",
  description:
    "Pensiune boutique de munte în Valea Avrigului, jud. Sibiu, la poalele Făgărașului. 10 spații, 24 locuri, jacuzzi, saună, terasă, sală pentru grupuri. La 40 min de Sibiu.",
  path: "/despre-noi",
});



// Conținutul stă în lib/content.ts; aici doar se decide ce se afișează.
const FAQ = SHOW_FB_AND_EVENTS ? [...ABOUT_FAQ_BASE, ...ABOUT_FAQ_FB] : ABOUT_FAQ_BASE;
const FACILITIES = SHOW_FB_AND_EVENTS ? [...ABOUT_FACILITIES, ...ABOUT_FACILITIES_FB] : ABOUT_FACILITIES;
const FEATURES = ABOUT_FEATURES;

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



// ── component ────────────────────────────────────────────────────────────────
export default function DesprePage() {
  return (
    <>
      {/* Structured data — JSON-LD uses production URL regardless of staging */}
      <JsonLd id="schema-despre" data={jsonLd} />

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
          Avrigului, județul Sibiu, la poalele Munților Făgăraș și la circa 40
          de minute de Sibiu. Oferim 10 spații de cazare pentru maximum 24 de
          oaspeți, într-un cadru intim, cu jacuzzi, saună, șemineu, terasă
          panoramică, bar și acces direct la natură. Putem fi rezervați integral
          pentru grupuri, retreaturi și evenimente private.
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
              autentică și pe experiențe de calitate. Pensiunea funcționează din 2024, iar Hostillo o
              administrează din mai 2026.
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
          {HOSTS.photo && (
            <div className="flex-1 basis-[360px]">
              <PlaceholderImage
                src={HOSTS.photo}
                alt="Echipa Pensiunii Amonte"
                label="[ echipa Amonte ]"
                className="aspect-[4/3] rounded-xl"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          )}
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
            se petrec în livingul cu șemineu sau afară, la focul de tabără, sub cerul
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

      {/* ── GASTRONOMIE ── */}
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

      {/* ── EVENIMENTE ── */}
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
                  {CONTACT.address.split(", ")[0]}
                  <br />
                  {CONTACT.address.split(", ").slice(1).join(", ")}
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
                    Castelul de Lut „Valea Zânelor&rdquo;
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
                  (centru istoric): la 40 de minute cu mașina, iar aeroportul la 50
                </li>
                <li>
                  <strong className="font-medium text-paper/90">
                    Transfăgărășan
                  </strong>{" "}
                  și cascada Bâlea: la circa o oră, sezonier
                </li>
              </ul>
            </div>
            <ConsentMap />
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
            <Link href="/rezerva-acum" className={btnTerracotta}>
              Verifică disponibilitatea
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
