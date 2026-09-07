import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Eyebrow from "@/components/Eyebrow";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import ConsentMap from "@/components/ConsentMap";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FnbSection from "@/components/FnbSection";
import OfferRequestForm from "@/components/OfferRequestForm";
import StickyMobileCta from "@/components/StickyMobileCta";
import { pageMeta } from "@/lib/seo";
import { SHOW_FNB, SHOW_PRICING } from "@/lib/flags";
import {
  CONTACT,
  REVIEWS,
  RATING_SUMMARY,
  GOOGLE_MAPS_URL,
  whatsappUrl,
} from "@/lib/content";
import { btnPaper, btnOutlineLight, btnTerracotta } from "@/lib/ui";
import {
  RETREAT_WHATSAPP_MESSAGE,
  RETREAT_PAGE_SOURCE,
  DRIVE_SIBIU,
  FACTS,
  ROOM_CONFIG,
  ROOM_CONFIG_TOTAL,
  ROOM_NOTES,
  WORKSPACES,
  LEISURE,
  AGENDA,
  PRICING_LINES,
  PRICING_FNB_LINES,
  BOOKING_STEPS,
  FAQ,
  ACCESS_POINTS,
} from "@/lib/retreat";

export const metadata: Metadata = pageMeta({
  // The root layout template appends " | Pensiunea Amonte".
  title: "Locație teambuilding și retreat corporate lângă Sibiu",
  // 146 de caractere. "Ofertă în 24 de ore" e păstrat pentru că e diferențiatorul
  // pe care Ioana îl compară între locații.
  description:
    "Închiriere integrală pentru echipe de până la 24 de persoane, lângă Sibiu. Sală de lucru, mese pentru grup, jacuzzi și saună. Ofertă în 24 de ore.",
  path: "/retreat-corporate",
  image: "/exterior-pensiune.jpeg",
});

// Reviews left by groups, quoted verbatim. Filtering happens here rather than in
// ReviewsCarousel, which already takes the list as a prop.
const GROUP_REVIEWERS = ["Adrian Migiu", "Dan Velcu", "Filip Mihaela"];
const GROUP_REVIEWS = REVIEWS.filter((r) => GROUP_REVIEWERS.includes(r.name));

// LodgingBusiness with the canonical NAP, geo and amenities is already emitted
// for every page in this route group by app/(site)/layout.tsx, so the entity is
// deliberately not duplicated here. Only the page-specific FAQPage is added.
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
    // Bottom padding clears the sticky mobile bar so it never covers the footer CTA.
    <div className="pb-[76px] md:pb-0">
      <Script
        id="schema-retreat-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── S1. HERO ── */}
      <section className="relative flex min-h-[calc(100vh-140px)] items-end px-[clamp(20px,5vw,64px)] pb-[clamp(48px,6vw,80px)] pt-[clamp(40px,6vw,90px)]">
        <div className="absolute inset-0">
          {/* FOTO: exterior la ora aurie sau terasa cu grupul, landscape, LCP */}
          <PlaceholderImage
            src="/exterior-pensiune.jpeg"
            alt="Pensiunea Amonte văzută din exterior, la poalele Munților Făgăraș"
            label="[ FOTO: exterior la ora aurie sau terasa cu grupul, landscape ]"
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
          {/* Breadcrumb peste hero: URL-ul, canonicalul și sitemap-ul rămân
              neschimbate, se adaugă doar contextul ierarhic. */}
          <div className="mb-6 [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
            <Breadcrumbs
              id="schema-retreat-breadcrumb"
              tone="dark"
              items={[
                { label: "Acasă", href: "/" },
                { label: "Evenimente", href: "/evenimente" },
                { label: "Retreat și teambuilding" },
              ]}
            />
          </div>
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#ECE0C0] [text-shadow:0_2px_10px_rgba(0,0,0,0.65)]">
            Valea Avrigului · {DRIVE_SIBIU} de Sibiu
          </span>
          <h1 className="m-0 max-w-[22ch] font-serif text-[clamp(34px,5.6vw,68px)] font-semibold leading-[1.06] text-card-2 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
            Locație pentru teambuilding și retreat corporate, în exclusivitate,
            lângă Sibiu
          </h1>
          <p className="mb-8 mt-[22px] max-w-[62ch] text-[clamp(16px,2vw,19px)] leading-relaxed text-paper [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]">
            Închiriezi toată pensiunea pentru echipa ta: 10 unități de cazare,
            maximum 24 de persoane, sală de lucru, jacuzzi și saună, terasă și
            foc de tabără. Primești oferta completă în 24 de ore lucrătoare.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <WhatsAppButton
              href={RETREAT_WA_URL}
              pageSource={RETREAT_PAGE_SOURCE}
              ctaPosition="hero"
              className={btnPaper}
            >
              Cere oferta pe WhatsApp
            </WhatsAppButton>
            <Link href="#cere-oferta" className={btnOutlineLight}>
              Completează cererea de ofertă
            </Link>
          </div>
          <p className="mt-6 mb-0 text-[14px] text-paper/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]">
            {RATING_SUMMARY.value} din 5 pe Google, din peste{" "}
            {RATING_SUMMARY.count} de recenzii · Rezervare confirmată garantată
          </p>
        </div>
      </section>

      {/* ── S2. BARA DE FAPTE ── */}
      <section className="border-b border-line bg-sand">
        <ul className={`${container} grid list-none grid-cols-2 gap-x-6 gap-y-5 py-7 pl-0 lg:grid-cols-6`}>
          {FACTS.map((f) => (
            <li key={f.label}>
              <div className="font-serif text-[26px] leading-none text-forest">
                {f.value}
              </div>
              <div className="mt-1.5 text-[13px] leading-snug text-[#33392f]">
                {f.label}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── S3. CONFIGURAȚIA CAZĂRII ── */}
      <section className={`${container} ${sectionPad}`}>
        <SectionHeading
          eyebrow="Cazarea"
          title="Cum se împart cele 24 de locuri"
          className="mb-8"
        >
          Ca să știi din prima dacă încape toată echipa.
        </SectionHeading>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-left text-[14.5px]">
            <thead>
              <tr className="border-b border-line-2 text-[12.5px] uppercase tracking-[1px] text-muted-2">
                <th scope="col" className="py-3 pr-4 font-semibold">Unitate</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Număr</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Persoane</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Paturi</th>
                <th scope="col" className="py-3 font-semibold">Total locuri</th>
              </tr>
            </thead>
            <tbody>
              {ROOM_CONFIG.map((r) => (
                <tr key={r.unit} className="border-b border-line">
                  <td className="py-4 pr-4 font-medium text-pine">{r.unit}</td>
                  <td className="py-4 pr-4 text-muted">{r.count}</td>
                  <td className="py-4 pr-4 text-muted">{r.perUnit}</td>
                  <td className="py-4 pr-4 text-muted">{r.beds}</td>
                  <td className="py-4 text-muted">{r.total}</td>
                </tr>
              ))}
              <tr className="border-b-2 border-pine font-semibold text-pine">
                <td className="py-4 pr-4">Total</td>
                <td className="py-4 pr-4">{ROOM_CONFIG_TOTAL.count}</td>
                <td className="py-4 pr-4" />
                <td className="py-4 pr-4" />
                <td className="py-4">{ROOM_CONFIG_TOTAL.total}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="mt-6 space-y-2 pl-0 list-none">
          {ROOM_NOTES.map((n) => (
            <li key={n} className="text-[14px] leading-relaxed text-muted">
              {n}
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <PlaceholderImage
            src="/camera-dubla-folder/poza-pat-si-camera.jpeg"
            alt="Cameră dublă cu birou și vedere la munte"
            label="[ FOTO: cameră dublă, pat și birou cu priveliște ]"
            className="aspect-[4/3] w-full rounded-xl"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <PlaceholderImage
            src="/apartament/canapea_extensibila_living.jpg"
            alt="Studio de familie cu canapea extensibilă"
            label="[ FOTO: studio de familie, configurație pentru 4 persoane ]"
            className="aspect-[4/3] w-full rounded-xl"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>

        <p className="mt-6 mb-0">
          <Link href="/camere" className="text-[15px] font-semibold text-terracotta no-underline hover:underline">
            Vezi toate camerele →
          </Link>
        </p>
      </section>

      {/* ── S4. SPAȚIILE DE LUCRU ── */}
      <section className={`${sectionPad} bg-sand`}>
        <div className={container}>
          <SectionHeading
            eyebrow="Spații de lucru"
            title="Unde lucrați"
            className="mb-[clamp(32px,4vw,48px)]"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {WORKSPACES.map((s) => (
              <article key={s.title} className="flex flex-col overflow-hidden rounded-xl border border-line bg-card">
                <PlaceholderImage
                  src={s.photo}
                  alt={s.alt}
                  label={s.photoLabel}
                  className="aspect-[4/3] w-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="flex flex-1 flex-col p-[clamp(18px,3vw,24px)]">
                  <h3 className="m-0 font-serif text-[20px] font-semibold text-pine">{s.title}</h3>
                  <p className="mt-2 mb-0 text-[14.5px] leading-relaxed text-muted">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5. TIMPUL LIBER ── */}
      <section className={`${container} ${sectionPad}`}>
        <SectionHeading
          eyebrow="Între sesiuni"
          title="Ce faceți între sesiuni"
          className="mb-[clamp(32px,4vw,48px)]"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEISURE.map((s) => (
            <article key={s.title} className="flex flex-col overflow-hidden rounded-xl border border-line bg-card">
              <PlaceholderImage
                src={s.photo}
                alt={s.alt}
                label={s.photoLabel}
                className="aspect-[4/3] w-full"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="flex flex-1 flex-col p-[clamp(16px,3vw,22px)]">
                <h3 className="m-0 font-serif text-[19px] font-semibold text-pine">{s.title}</h3>
                <p className="mt-2 mb-0 text-[14px] leading-relaxed text-muted">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-7 mb-0 text-[14.5px] leading-relaxed text-muted">
          Bruno, ciobănescul de Berna al casei, e mascota locului. Animalele de
          companie ale oaspeților rămân acasă.
        </p>
      </section>

      {/* ── S6. MESE (gated pe SHOW_FNB) ── */}
      <FnbSection />

      {/* ── S7. AGENDĂ EXEMPLU ── */}
      <section className={`${sectionPad} bg-sand`}>
        <div className={container}>
          <SectionHeading
            eyebrow="Exemplu"
            title="Cum arată două zile la Amonte"
            className="mb-[clamp(32px,4vw,48px)]"
          />
          <div className="grid gap-[clamp(24px,3vw,40px)] md:grid-cols-3">
            {AGENDA.map((day) => (
              <div key={day.day}>
                <div className="mb-5">
                  <Eyebrow>{day.day}</Eyebrow>
                  <h3 className="mt-2 mb-0 font-serif text-[21px] font-semibold text-pine">
                    {day.label}
                  </h3>
                </div>
                <ol className="m-0 list-none border-l border-line-2 pl-0">
                  {day.items.map((item) => (
                    <li key={item.title} className="relative pb-6 pl-6 last:pb-0">
                      <span
                        className="absolute left-[-4.5px] top-[7px] h-2 w-2 rounded-full bg-terracotta"
                        aria-hidden="true"
                      />
                      <span className="block text-[12px] font-semibold uppercase tracking-[1px] text-muted-2">
                        {item.time}
                      </span>
                      <span className="mt-1 block text-[15px] font-semibold text-pine">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[14px] leading-relaxed text-muted">
                        {item.body}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <p className="mt-9 mb-0 max-w-[52ch] rounded-xl border-l-4 border-forest bg-pine/5 p-[clamp(16px,3vw,22px)] text-[15px] leading-relaxed text-[#33392f]">
            Programul e al vostru. Noi ne ocupăm de restul.
          </p>
        </div>
      </section>

      {/* ── S8. PREȚURI ORIENTATIVE (gated pe SHOW_PRICING) ── */}
      {SHOW_PRICING && (
        <section className={`${container} ${sectionPad}`}>
          <SectionHeading
            eyebrow="Prețuri"
            title="Cât costă, orientativ"
            className="mb-8"
          />
          <dl className="m-0 divide-y divide-line border-y border-line">
            {[...PRICING_LINES, ...(SHOW_FNB ? PRICING_FNB_LINES : [])].map((line) => (
              <div key={line.label} className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-5">
                <dt className="text-[15px] font-semibold text-pine">{line.label}</dt>
                <dd className="m-0 max-w-[46ch] text-right text-[15px] leading-relaxed text-muted sm:text-right">
                  {line.value}
                  {"note" in line && line.note ? (
                    <span className="block text-[13px] text-muted-2">{line.note}</span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 mb-0 max-w-[60ch] text-[14.5px] leading-relaxed text-muted">
            Oferta finală depinde de numărul de persoane și de perioadă. O
            primești defalcată, în 24 de ore lucrătoare.
          </p>
        </section>
      )}

      {/* ── S9. PROCES ── */}
      <section className={`${sectionPad} bg-pine`}>
        <div className={container}>
          <SectionHeading
            eyebrow="Proces"
            title="De la cerere la confirmare, în patru pași"
            tone="dark"
            center
            className="mb-[clamp(32px,4vw,48px)]"
          />
          <ol className="m-0 grid list-none gap-5 pl-0 sm:grid-cols-2 lg:grid-cols-4">
            {BOOKING_STEPS.map((step, i) => (
              <li key={step.title} className="rounded-xl border border-paper/15 p-[clamp(18px,3vw,24px)]">
                <span className="font-serif text-[30px] font-semibold leading-none text-gold-2">
                  {i + 1}
                </span>
                <h3 className="mt-3 mb-0 font-serif text-[18px] font-semibold text-card-2">
                  {step.title}
                </h3>
                <p className="mt-2 mb-0 text-[14px] leading-relaxed text-paper/80">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── S10. RECENZII DE LA GRUPURI ── */}
      {GROUP_REVIEWS.length > 0 && (
        <section className={`${sectionPad} border-t border-line`}>
          <div className={container}>
            <SectionHeading
              eyebrow="Social proof"
              title="Ce spun echipele care au fost"
              center
              className="mb-[clamp(28px,4vw,44px)]"
            />
          </div>
          <ReviewsCarousel reviews={GROUP_REVIEWS} />
          <div className={`${container} mt-8 text-center`}>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold text-terracotta no-underline hover:underline"
            >
              Vezi toate recenziile pe Google →
            </a>
          </div>
        </section>
      )}

      {/* ── S11. FAQ ── */}
      <section className={`${container} ${sectionPad} border-t border-line`}>
        <SectionHeading
          eyebrow="Întrebări frecvente"
          title="Ce ne întreabă echipele"
          className="mb-[clamp(28px,4vw,44px)]"
        />
        <div className="mx-auto max-w-[820px]">
          {FAQ.map((item) => (
            <details key={item.q} className="group border-b border-line py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta">
                <h3 className="m-0 text-[17px] font-semibold text-pine">{item.q}</h3>
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

      {/* ── S12. FORMULAR ── */}
      <section id="cere-oferta" className={`${sectionPad} scroll-mt-24 bg-sand`}>
        <div className={`${container} mx-auto max-w-[900px]`}>
          <SectionHeading
            eyebrow="Cerere de ofertă"
            title="Cere oferta completă"
            className="mb-8"
          >
            Completezi în două minute, primești oferta în 24 de ore lucrătoare.
          </SectionHeading>
          {/* SHOW_FNB is read on the server and passed down: lib/flags.ts is
              server-only, see the note in that file. */}
          <OfferRequestForm showFnb={SHOW_FNB} />
        </div>
      </section>

      {/* ── S13. LOCAȚIE ── */}
      <section className={`${container} ${sectionPad}`}>
        <div className="flex flex-wrap gap-[clamp(28px,4vw,56px)]">
          <div className="flex-1 basis-[320px]">
            <SectionHeading eyebrow="Locație și acces" title="Cum ajungeți" className="mb-7" />
            <address className="not-italic text-[16px] leading-relaxed text-[#33392f]">
              {CONTACT.address}
            </address>
            <ul className="mt-6 space-y-3 pl-0 list-none">
              {ACCESS_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted">
                  <span className="mt-1 text-[11px] text-forest" aria-hidden="true">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 mb-0">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-semibold text-terracotta no-underline hover:underline"
              >
                Deschide în Google Maps →
              </a>
            </p>
          </div>
          <ConsentMap />
        </div>
      </section>

      {/* ── S14. CTA FINAL ── */}
      <section className={`${sectionPad} border-t border-line bg-card-2`}>
        <div className={`${container} text-center`}>
          <Eyebrow className="mb-4">Disponibilitate</Eyebrow>
          <h2 className="mx-auto m-0 max-w-[24ch] font-serif text-[clamp(30px,4.2vw,48px)] font-semibold leading-[1.06] text-pine">
            Spune-ne câți sunteți și când. Restul e la noi.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <WhatsAppButton
              href={RETREAT_WA_URL}
              pageSource={RETREAT_PAGE_SOURCE}
              ctaPosition="final"
              className={`${btnTerracotta} px-8 py-4`}
            >
              Cere oferta pe WhatsApp
            </WhatsAppButton>
            <Link href="#cere-oferta" className={`${btnOutlineLight} border-forest text-forest`}>
              Completează formularul
            </Link>
          </div>
          <p className="mt-6 mb-0 text-[14.5px] text-muted">
            <a href={`tel:${CONTACT.phoneMobile.replace(/\s/g, "")}`} className="text-forest no-underline hover:underline">
              {CONTACT.phoneMobile}
            </a>
            {" · "}
            <a href={`tel:${CONTACT.phoneLandline.replace(/\s/g, "")}`} className="text-forest no-underline hover:underline">
              {CONTACT.phoneLandline}
            </a>
            {" · "}
            <a href={`mailto:${CONTACT.email}`} className="text-forest no-underline hover:underline">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </section>

      <StickyMobileCta />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   LISTA DE FOTOGRAFII

   Lipsesc și trebuie făcute (randează acum ca placeholder vizibil):
   1. Zona de relaxare de pe malul râului, de peste drum. S5.
   2. Masă lungă aranjată pentru grup, cină la lumina caldă. S6, FnbSection.

   Există, dar sunt substituenți slabi pentru publicul corporate:
   3. Sala pentru grupuri. Poza actuală e în format PORTRET (1920x2560) și nu
      arată o masă aranjată pentru ședință. E cea mai importantă fotografie a
      paginii, singura dovadă vizuală că spațiul de lucru există. Cadru dorit:
      sala în format U sau boardroom, cu echipa la masă, orientare landscape.
   4. Hero. Exteriorul actual e aproape pătrat (2268x2338) și fără oameni.
      Cadru dorit: landscape, la ora aurie, sau terasa cu un grup.
   5. Firepit. Există focul, lipsesc oamenii în jurul lui.
   6. Studio de familie. Poza actuală arată canapeaua, nu configurația de 4 locuri.

   NICIO fotografie din proiect nu conține oameni. Pentru o pagină pe care
   managerul o parcurge în 60 de secunde uitându-se la poze, o sesiune foto cu
   un grup real este cea mai mare pârghie disponibilă.
   ───────────────────────────────────────────────────────────────────────── */
