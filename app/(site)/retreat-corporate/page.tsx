import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Eyebrow from "@/components/Eyebrow";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import ConsentMap from "@/components/ConsentMap";
import FnbSection from "@/components/FnbSection";
import RetreatTestimonials from "@/components/RetreatTestimonials";
import { pageMeta } from "@/lib/seo";
import { CONTACT, whatsappUrl } from "@/lib/content";
import { btnPaper, btnOutlineLight, btnTerracotta } from "@/lib/ui";
import {
  SHOW_FNB,
  RETREAT_WHATSAPP_MESSAGE,
  RETREAT_PAGE_SOURCE,
  TRUST_POINTS,
  PILLARS,
  SPACES,
  AGENDA,
  ROOM_SHOTS,
  ACCESS_POINTS,
  BOOKING_STEPS,
  FAQ,
} from "@/lib/retreat";

export const metadata: Metadata = pageMeta({
  // The root layout template appends " | Pensiunea Amonte".
  title: "Retreat corporate și leadership offsite lângă Sibiu",
  description:
    "Leadership retreat și team building lângă Sibiu. Închiriezi integral pensiunea, până la 24 de persoane, sală de meeting și wellness la poalele Făgărașului.",
  path: "/retreat-corporate",
  image: "/exterior-pensiune.jpeg",
});

// LodgingBusiness with the canonical NAP and GPS is already emitted for every
// page in this route group by app/(site)/layout.tsx, so it is deliberately not
// repeated here. Only the page-specific FAQPage is added.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const RETREAT_WA_URL = whatsappUrl(RETREAT_WHATSAPP_MESSAGE);

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";
const sectionPad = "py-[clamp(56px,7vw,96px)]";

export default function RetreatCorporatePage() {
  return (
    <>
      <Script
        id="schema-retreat-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── 1. HERO ── */}
      <section className="relative flex min-h-[calc(100vh-140px)] items-end px-[clamp(20px,5vw,64px)] pb-[clamp(48px,6vw,80px)] pt-[clamp(40px,6vw,90px)]">
        <div className="absolute inset-0">
          {/* FOTO: exterior pensiune la ora aurie sau terasa panoramică cu munții în fundal */}
          <PlaceholderImage
            src="/exterior-pensiune.jpeg"
            alt="Pensiunea Amonte văzută din exterior, la poalele Munților Făgăraș"
            label="[ FOTO: exterior pensiune la ora aurie sau terasa panoramică cu munții în fundal ]"
            tone="dark"
            className="h-full w-full"
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(18,26,20,0.55) 0%,rgba(18,26,20,0.32) 42%,rgba(15,22,17,0.94) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1280px]">
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#ECE0C0] [text-shadow:0_2px_10px_rgba(0,0,0,0.65)]">
            Retreat corporate
          </span>
          <h1 className="m-0 max-w-[18ch] font-serif text-[clamp(40px,7vw,88px)] font-semibold leading-[1.03] text-card-2 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
            Retreat de leadership în inima Țării Făgărașului
          </h1>
          <p className="mb-9 mt-[22px] max-w-[56ch] text-[clamp(16px,2vw,20px)] leading-relaxed text-paper [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]">
            Închiriați întreaga pensiune, în exclusivitate totală, pentru echipa
            voastră de conducere. Zero alți oaspeți, la 40 de minute de Sibiu.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <WhatsAppButton
              href={RETREAT_WA_URL}
              pageSource={RETREAT_PAGE_SOURCE}
              className={btnPaper}
            >
              Cere oferta pentru echipa ta
            </WhatsAppButton>
            <Link href="#spatii" className={btnOutlineLight}>
              Vezi spațiile
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ── */}
      <section className="border-b border-line bg-sand">
        <ul className={`${container} grid list-none grid-cols-2 gap-x-6 gap-y-4 py-6 pl-0 lg:grid-cols-4`}>
          {TRUST_POINTS.map((p) => (
            <li key={p.label} className="flex items-center gap-2.5">
              <span className="text-[18px] leading-none" aria-hidden="true">
                {p.icon}
              </span>
              <span className="text-[14px] font-medium text-[#33392f]">
                {p.label}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── 3. POZIȚIONARE ── */}
      <section className={`${container} ${sectionPad}`}>
        <SectionHeading
          eyebrow="De ce Amonte"
          title="Spațiu pentru deciziile care nu se iau la birou"
          className="mb-[clamp(36px,5vw,56px)] max-w-[24ch]"
        >
          Un offsite de management are nevoie de trei lucruri: liniște, un loc
          serios de lucru și un motiv real de a rămâne împreună după ce se
          închide laptopul.
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className="flex flex-col overflow-hidden rounded-xl border border-line bg-card"
            >
              <PlaceholderImage
                src={p.photo}
                alt={p.alt}
                label={p.photoLabel}
                className="aspect-[4/3] w-full"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="flex flex-1 flex-col p-[clamp(20px,3vw,26px)]">
                <h3 className="m-0 font-serif text-[22px] font-semibold text-pine">
                  {p.title}
                </h3>
                <p className="mt-3 mb-0 text-[15px] leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 4. SPAȚIILE ── */}
      <section id="spatii" className={`${sectionPad} scroll-mt-24 bg-sand`}>
        <div className={container}>
          <SectionHeading
            eyebrow="Spațiile"
            title="Unde se întâmplă"
            center
            className="mb-[clamp(36px,5vw,56px)]"
          >
            Tot ce urmează este al vostru pe durata sejurului, fără program
            comun cu alte grupuri.
          </SectionHeading>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SPACES.map((s) => (
              <article
                key={s.title}
                className={`flex flex-col overflow-hidden rounded-xl border border-line bg-card ${
                  s.wide ? "sm:col-span-2" : ""
                }`}
              >
                <PlaceholderImage
                  src={s.photo}
                  alt={s.alt}
                  label={s.photoLabel}
                  className={s.wide ? "aspect-[16/9] w-full" : "aspect-[4/3] w-full"}
                  sizes={
                    s.wide
                      ? "(max-width: 640px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, 33vw"
                  }
                />
                <div className="flex flex-1 flex-col p-[clamp(18px,3vw,24px)]">
                  <h3 className="m-0 font-serif text-[20px] font-semibold text-pine">
                    {s.title}
                  </h3>
                  <p className="mt-2 mb-0 text-[14.5px] leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. AGENDĂ EXEMPLU ── */}
      <section className={`${container} ${sectionPad}`}>
        <SectionHeading
          eyebrow="Exemplu"
          title="Cum arată un retreat de două zile"
          className="mb-[clamp(36px,5vw,56px)]"
        />

        <div className="grid gap-[clamp(28px,4vw,56px)] md:grid-cols-2">
          {AGENDA.map((day) => (
            <div key={day.day}>
              <div className="mb-6">
                <Eyebrow>{day.day}</Eyebrow>
                <h3 className="mt-2 mb-0 font-serif text-[24px] font-semibold text-pine">
                  {day.label}
                </h3>
              </div>
              <ol className="m-0 list-none border-l border-line-2 pl-0">
                {day.items.map((item) => (
                  <li key={item.title} className="relative pb-7 pl-7 last:pb-0">
                    <span
                      className="absolute left-[-4.5px] top-[7px] h-2 w-2 rounded-full bg-terracotta"
                      aria-hidden="true"
                    />
                    <span className="block text-[12.5px] font-semibold uppercase tracking-[1px] text-muted-2">
                      {item.time}
                    </span>
                    <span className="mt-1 block text-[16px] font-semibold text-pine">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[14.5px] leading-relaxed text-muted">
                      {item.body}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[52ch] rounded-xl border-l-4 border-forest bg-pine/5 p-[clamp(16px,3vw,22px)] text-[15px] leading-relaxed text-[#33392f]">
          Agenda e a voastră. Noi asigurăm cadrul, ritmul îl setați voi.
        </p>
      </section>

      {/* ── 6. F&B (doar când SHOW_FNB === true) ── */}
      <FnbSection />

      {/* ── 7. CAZAREA ── */}
      <section className={`${sectionPad} bg-sand`}>
        <div className={container}>
          <SectionHeading
            eyebrow="Cazarea"
            title="Toată lumea doarme în aceeași curte"
            className="mb-[clamp(32px,4vw,48px)]"
          >
            8 camere duble și 2 studiouri de familie, până la 24 de persoane,
            fiecare cameră cu baie proprie.
          </SectionHeading>

          <div className="grid gap-4 sm:grid-cols-3">
            {ROOM_SHOTS.map((r) => (
              <PlaceholderImage
                key={r.photo}
                src={r.photo}
                alt={r.alt}
                label={r.photoLabel}
                className="aspect-[4/3] w-full rounded-xl"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 rounded-xl border border-line bg-card p-[clamp(20px,4vw,28px)]">
            <PlaceholderImage
              src="/bruno.jpeg"
              alt="Bruno, câinele Bernese Mountain al pensiunii"
              label="[ FOTO: Bruno, mascota casei ]"
              className="h-20 w-20 shrink-0 rounded-full"
              sizes="80px"
            />
            <p className="m-0 max-w-[60ch] text-[15px] leading-relaxed text-muted">
              Gazda pe patru labe este Bruno, un Bernese Mountain Dog care apare
              doar dacă grupul își dorește. Din respect pentru liniștea tuturor,
              pensiunea nu primește animalele de companie ale oaspeților.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. LOCAȚIE ȘI ACCES ── */}
      <section className={`${container} ${sectionPad}`}>
        <div className="flex flex-wrap gap-[clamp(28px,4vw,56px)]">
          <div className="flex-1 basis-[320px]">
            <SectionHeading
              eyebrow="Locație și acces"
              title="La 40 de minute de Sibiu"
              className="mb-7"
            />
            <address className="not-italic text-[16px] leading-relaxed text-[#33392f]">
              {CONTACT.address}
            </address>
            <ul className="mt-6 space-y-3 pl-0 list-none">
              {ACCESS_POINTS.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-muted"
                >
                  <span className="mt-1 text-[11px] text-forest" aria-hidden="true">
                    ✓
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Harta se marchează prin coordonate GPS (GPS_LAT / GPS_LNG din
              lib/content.ts), nu prin adresa text, fiindcă adresa de pe Valea
              Avrigului nu se rezolvă exact în Google Maps. ConsentMap este
              gatat pe consimțământ, vezi lib/consent.ts. */}
          <ConsentMap />
        </div>
      </section>

      {/* ── 9. SOCIAL PROOF (ascuns până există testimoniale reale) ── */}
      <RetreatTestimonials />

      {/* ── 10. PREȚ ȘI PROCES ── */}
      <section className={`${sectionPad} bg-pine`}>
        <div className={container}>
          <SectionHeading
            eyebrow="Proces"
            title="Cum rezervăm"
            tone="dark"
            center
            className="mb-[clamp(36px,5vw,56px)]"
          />

          <ol className="m-0 grid list-none gap-6 pl-0 md:grid-cols-3">
            {BOOKING_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="rounded-xl border border-paper/15 p-[clamp(20px,3vw,28px)]"
              >
                <span className="font-serif text-[34px] font-semibold leading-none text-gold-2">
                  {i + 1}
                </span>
                <h3 className="mt-4 mb-0 font-serif text-[20px] font-semibold text-card-2">
                  {step.title}
                </h3>
                <p className="mt-2 mb-0 text-[14.5px] leading-relaxed text-paper/80">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-10 max-w-[54ch] rounded-xl border border-paper/15 p-[clamp(20px,3vw,26px)] text-center">
            <p className="m-0 text-[15px] leading-relaxed text-paper/90">
              Lucrăm exclusiv în regim de închiriere integrală a pensiunii, cu un
              singur grup odată.
            </p>
            {!SHOW_FNB && (
              <p className="mt-3 mb-0 text-[14px] text-paper/70">
                Opțiuni de masă disponibile la cerere.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ── */}
      <section className={`${container} ${sectionPad}`}>
        <SectionHeading
          eyebrow="Întrebări frecvente"
          title="Ce ne întreabă echipele"
          className="mb-[clamp(32px,4vw,48px)]"
        />
        <div className="mx-auto max-w-[820px]">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group border-b border-line py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold text-pine outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta">
                <h3 className="m-0 text-[17px] font-semibold">{item.q}</h3>
                <span
                  className="shrink-0 text-[20px] leading-none text-terracotta transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 mb-0 max-w-[68ch] text-[15px] leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ── 12. CTA FINAL ── */}
      <section className={`${sectionPad} border-t border-line bg-card-2`}>
        <div className={`${container} text-center`}>
          <Eyebrow className="mb-4">Disponibilitate</Eyebrow>
          <h2 className="mx-auto m-0 max-w-[20ch] font-serif text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] text-pine">
            Blochează perioada pentru echipa ta
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-relaxed text-muted">
            Weekendurile de toamnă se rezervă de obicei cu 4 până la 6 săptămâni
            înainte. Dacă aveți o perioadă în minte, merită verificată devreme.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              href={RETREAT_WA_URL}
              pageSource={RETREAT_PAGE_SOURCE}
              className={`${btnTerracotta} px-9 py-5 text-[16px]`}
            >
              Cere oferta pentru echipa ta
            </WhatsAppButton>
          </div>
          <p className="mt-4 text-[13.5px] text-muted-2">
            Răspundem pe WhatsApp, de obicei în aceeași zi.
          </p>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   LISTA DE FOTOGRAFII

   Poze care lipsesc și trebuie făcute (randează acum ca placeholder vizibil):
   1. Echipă în sesiune de lucru, sala aranjată boardroom, lumină naturală.
      Folosită în secțiunea "De ce Amonte", cardul "Lucru concentrat".
   2. Masă lungă aranjată, cină la lumina caldă.
      Folosită în FnbSection, deci vizibilă abia după activarea SHOW_FNB.

   Poze existente folosite ca substitut, care ar merita reînlocuite cu un cadru
   dedicat publicului corporate:
   3. /servicii-facilitati/sala-pentru-grupuri.jpg, pentru "Sala de conferințe".
      Ideal: sala aranjată efectiv în format boardroom sau U, cu ecran sau
      flipchart. E fotografia cea mai importantă a paginii, fiindcă e singura
      dovadă vizuală că spațiul de lucru există.
   4. /firepit.jpeg, pentru "Firepit". Ideal: grup relaxat seara, nu doar focul.
   5. /exterior-pensiune.jpeg, pentru hero. Ideal: același cadru la ora aurie.

   Poze existente care se potrivesc bine și nu necesită înlocuire:
   /servicii-facilitati/living-semineu.jpeg, /priveliste-fagaras.jpg,
   /jacuzzi-sauna.jpeg, /servicii-facilitati/teren-fotbal.jpeg,
   /servicii-facilitati/rezervare-integrala.jpeg, /semineu.jpeg, /bruno.jpeg,
   plus cele trei cadre de cameră din ROOM_SHOTS (lib/retreat.ts).
   ───────────────────────────────────────────────────────────────────────── */
