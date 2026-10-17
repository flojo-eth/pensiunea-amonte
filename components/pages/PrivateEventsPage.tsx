import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import Eyebrow from "@/components/Eyebrow";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import GalleryGrid from "@/components/GalleryGrid";
import EventRequestForm from "@/components/EventRequestForm";
import { pageMeta } from "@/lib/seo";
import { CONTACT, PRIVATE_EVENTS_VIDEO } from "@/lib/content";
import { getContent, getCopy, href, type Lang } from "@/lib/i18n";
import { btnTerracotta } from "@/lib/ui";

export function privateEventsMetadata(lang: Lang): Metadata {
  return pageMeta({
    lang,
    ...getCopy(lang).privateEvents.meta,
    path: href(lang, "privateEvents"),
    image: PRIVATE_EVENTS_VIDEO.poster,
  });
}

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";
const sectionPad = "py-[clamp(56px,7vw,96px)]";

/**
 * Private events: christenings, civil weddings, small weddings, birthdays.
 *
 * Minimal on purpose: a video hero, one paragraph that answers the question
 * outright, what "servicii complete" covers (the organizing is ours, the party
 * theirs), the facts as a definition list, photos, the four booking steps
 * (form, visit, offer, deposit: people see the place before any offer), the
 * request form and the FAQ (also emitted as FAQPage JSON-LD). Every figure on the page was confirmed by Flo; WhatsApp
 * clicks report page_source "evenimente-private", derived from the path.
 */
export default function PrivateEventsPage({ lang }: { lang: Lang }) {
  const t = getCopy(lang).privateEvents;
  const { PRIVATE_EVENTS, PRIVATE_EVENTS_WHATSAPP } = getContent(lang);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PRIVATE_EVENTS.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <JsonLd id="schema-private-events-faq" data={faqJsonLd} />

      {/* ── HERO: video when there is one, the poster photo until then ── */}
      <section className="relative flex min-h-[calc(100vh-140px)] items-center px-[clamp(20px,5vw,64px)] py-[clamp(48px,6vw,80px)]">
        <div className="absolute inset-0">
          <PlaceholderImage
            src={PRIVATE_EVENTS_VIDEO.poster}
            alt={t.hero.alt}
            label={t.hero.alt}
            tone="dark"
            className="h-full w-full"
            priority
            sizes="100vw"
          />
          {PRIVATE_EVENTS_VIDEO.src && (
            // Muted, looping, no controls: a moving backdrop, not content.
            // Hidden for visitors who ask for reduced motion, so the photo
            // underneath shows instead.
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={PRIVATE_EVENTS_VIDEO.poster}
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            >
              <source src={PRIVATE_EVENTS_VIDEO.src} type="video/mp4" />
            </video>
          )}
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(18,26,20,0.55) 0%,rgba(18,26,20,0.45) 50%,rgba(15,22,17,0.7) 100%)",
          }}
        />
        {/* Only the place and the title over the image: when the video plays,
            a visitor should know what it shows at a glance. The description
            and the buttons live further down. */}
        <div className="relative mx-auto w-full max-w-[1280px]">
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#ECE0C0] [text-shadow:0_2px_10px_rgba(0,0,0,0.65)]">
            {t.hero.eyebrow}
          </span>
          <h1 className="m-0 max-w-[20ch] font-serif text-[clamp(36px,6vw,76px)] font-semibold leading-[1.04] text-card-2 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
            {t.hero.title}
          </h1>
        </div>
      </section>

      {/* ── PE SCURT: răspunsul direct, de citat ── */}
      <section className={`${container} ${sectionPad}`}>
        <div className="max-w-[780px]">
          <SectionHeading eyebrow={t.answer.eyebrow} title={t.answer.title}>
            {t.hero.lead}
          </SectionHeading>
          <p className="mt-6 mb-0 text-[clamp(17px,2vw,19px)] leading-relaxed text-muted">
            {PRIVATE_EVENTS.answer}
          </p>
        </div>
      </section>

      {/* ── SERVICII COMPLETE: organizarea e a noastră, petrecerea a lor ── */}
      <section className={`${sectionPad} bg-pine`}>
        <div className={`${container} flex flex-wrap gap-[clamp(32px,5vw,72px)]`}>
          <div className="flex-1 basis-[340px]">
            <SectionHeading eyebrow={t.organize.eyebrow} title={t.organize.title} tone="dark">
              {t.organize.lead}
            </SectionHeading>
          </div>
          <ul className="m-0 flex-1 basis-[340px] list-none space-y-4 self-center pl-0">
            {PRIVATE_EVENTS.organize.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-paper/90">
                <span className="mt-1 text-[12px] text-gold" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TIPURI DE EVENIMENTE ── */}
      <section className={`${container} ${sectionPad}`}>
        <SectionHeading eyebrow={t.types.eyebrow} title={t.types.title} className="mb-[clamp(28px,4vw,44px)]">
          {t.types.lead}
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRIVATE_EVENTS.types.map((type) => (
            <article key={type.title} className="rounded-xl border border-line bg-card p-[clamp(20px,3vw,28px)]">
              <h3 className="m-0 font-serif text-[22px] font-semibold text-pine">{type.title}</h3>
              <p className="mt-2 mb-0 text-[15px] leading-relaxed text-muted">{type.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── DETALII PRACTICE ── */}
      <section id={t.detailsAnchor} className={`${sectionPad} scroll-mt-24 bg-sand`}>
        <div className={container}>
          <SectionHeading eyebrow={t.facts.eyebrow} title={t.facts.title} className="mb-[clamp(32px,4vw,48px)]" />
          <dl className="m-0 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {PRIVATE_EVENTS.facts.map((f) => (
              <div key={f.label} className="rounded-lg border border-line bg-card-2 p-[22px]">
                <dt className="mb-1.5 text-[12.5px] font-semibold uppercase tracking-[1px] text-muted-2">
                  {f.label}
                </dt>
                <dd className="m-0 text-[15px] leading-snug text-[#33392f]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section className={`${sectionPad} bg-pine`}>
        <div className={container}>
          <SectionHeading
            eyebrow={t.gallery.eyebrow}
            title={t.gallery.title}
            tone="dark"
            center
            className="mb-[clamp(36px,5vw,56px)]"
          />
          <GalleryGrid items={PRIVATE_EVENTS.gallery} />
        </div>
      </section>

      {/* ── CUM REZERVAȚI: formular, vizită, ofertă, avans ── */}
      <section className={`${container} ${sectionPad}`}>
        <SectionHeading eyebrow={t.steps.eyebrow} title={t.steps.title} className="mb-[clamp(28px,4vw,44px)]">
          {t.steps.lead}
        </SectionHeading>
        <ol className="m-0 grid list-none gap-5 pl-0 sm:grid-cols-2 lg:grid-cols-4">
          {PRIVATE_EVENTS.steps.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-line bg-card p-[clamp(18px,3vw,24px)]">
              <span className="font-serif text-[30px] font-semibold leading-none text-terracotta">{i + 1}</span>
              <h3 className="mt-3 mb-0 font-serif text-[19px] font-semibold text-pine">{step.title}</h3>
              <p className="mt-2 mb-0 text-[14.5px] leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── FORMULAR: pasul 1 ── */}
      <section id={t.formAnchor} className={`${sectionPad} scroll-mt-24 bg-sand`}>
        <div className={`${container} mx-auto max-w-[900px]`}>
          <SectionHeading eyebrow={t.form.eyebrow} title={t.form.title} className="mb-8">
            {t.form.lead}
          </SectionHeading>
          <EventRequestForm eventTypes={PRIVATE_EVENTS.types.map((type) => type.option)} />
        </div>
      </section>

      {/* ── FAQ, 1:1 cu FAQPage JSON-LD de mai sus ── */}
      <section className={`${container} ${sectionPad} border-t border-line`}>
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} className="mb-[clamp(28px,4vw,44px)]" />
        <div className="max-w-[820px]">
          {PRIVATE_EVENTS.faq.map((item) => (
            <div key={item.q} className="border-b border-line py-5">
              <h3 className="m-0 text-[17px] font-semibold text-pine">{item.q}</h3>
              <p className="mt-3 mb-0 max-w-[68ch] text-[15px] leading-relaxed text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className={`${sectionPad} border-t border-line bg-card-2`}>
        <div className={`${container} text-center`}>
          <Eyebrow className="mb-4">{t.cta.eyebrow}</Eyebrow>
          <h2 className="mx-auto m-0 max-w-[22ch] font-serif text-[clamp(30px,4.2vw,48px)] font-semibold leading-[1.06] text-pine">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-relaxed text-muted">{t.cta.lead}</p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton href={PRIVATE_EVENTS_WHATSAPP} ctaPosition="final" className={`${btnTerracotta} px-8 py-4`}>
              {t.cta.button}
            </WhatsAppButton>
          </div>
          <p className="mt-6 mb-0 text-[14.5px] text-muted">
            <a href={`tel:${CONTACT.phoneMobile.replace(/\s/g, "")}`} className="text-forest no-underline hover:underline">
              {CONTACT.phoneMobile}
            </a>
            {" · "}
            <a href={`mailto:${CONTACT.email}`} className="text-forest no-underline hover:underline">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
