import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import ConsentMap from "@/components/ConsentMap";
import { CONTACT, WEBSITE } from "@/lib/content";
import { SHOW_FB_AND_EVENTS } from "@/lib/site";
import { getContent, getCopy, href, type Lang } from "@/lib/i18n";
import { btnTerracotta } from "@/lib/ui";

export function aboutMetadata(lang: Lang): Metadata {
  const { meta } = getCopy(lang).about;
  return pageMeta({ lang, ...meta, path: href(lang, "about") });
}

// ── layout helpers ───────────────────────────────────────────────────────────
const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";
const pad = "py-[clamp(56px,7vw,96px)]";

// ── component ────────────────────────────────────────────────────────────────
export default function AboutPage({ lang }: { lang: Lang }) {
  const t = getCopy(lang).about;
  const {
    STATS, HOSTS,
    ABOUT_FAQ_BASE, ABOUT_FAQ_FB, ABOUT_FEATURES, ABOUT_FACILITIES, ABOUT_FACILITIES_FB,
  } = getContent(lang);

  // Conținutul stă în lib/content.ts; aici doar se decide ce se afișează.
  const FAQ = SHOW_FB_AND_EVENTS ? [...ABOUT_FAQ_BASE, ...ABOUT_FAQ_FB] : ABOUT_FAQ_BASE;
  const FACILITIES = SHOW_FB_AND_EVENTS ? [...ABOUT_FACILITIES, ...ABOUT_FACILITIES_FB] : ABOUT_FACILITIES;
  const FEATURES = ABOUT_FEATURES;

  // ── JSON-LD ── LodgingBusiness e în SiteShell; aici: AboutPage + FAQPage ─
  const path = href(lang, "about");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${WEBSITE}${path}#webpage`,
        url: `${WEBSITE}${path}`,
        name: t.schemaName,
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

  return (
    <>
      {/* Structured data — JSON-LD uses production URL regardless of staging */}
      <JsonLd id="schema-despre" data={jsonLd} />

      {/* ── H1 + BLOC RĂSPUNS DIRECT ── */}
      <section className={`${container} pt-[clamp(56px,7vw,96px)] pb-[clamp(36px,5vw,56px)]`}>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
          {t.eyebrow}
        </p>
        <h1 className="m-0 font-serif text-[clamp(40px,6vw,72px)] font-semibold leading-[1.05] text-pine">
          {t.title}
        </h1>
        {/* Bloc de răspuns direct - autonom, 40–60 cuvinte */}
        <p className="mt-6 max-w-[65ch] text-[clamp(17px,2vw,20px)] leading-relaxed text-muted">
          {t.answer}
        </p>
      </section>

      {/* ── OPERATOR ── */}
      <section className={`${container} ${pad} border-t border-line`}>
        <div className="flex flex-wrap gap-[clamp(36px,5vw,72px)]">
          <div className="flex-1 basis-[360px]">
            <SectionHeading
              eyebrow={t.operator.eyebrow}
              title={t.operator.title}
            />
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              {t.operator.before}{" "}
              <strong className="font-semibold text-forest">{t.operator.name}</strong>
              {t.operator.after}
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              {t.operator.p2}
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
            eyebrow={t.features.eyebrow}
            title={t.features.title}
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
            <div className="mt-6 flex flex-col gap-4">
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
                alt={t.hostsPhoto.alt}
                label={t.hostsPhoto.label}
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
            eyebrow={t.stay.eyebrow}
            title={t.stay.title}
          />
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            {t.stay.p1}
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            {t.stay.p2}
          </p>
        </div>
      </section>

      {/* ── GASTRONOMIE ── */}
      {SHOW_FB_AND_EVENTS && (
        <section className={`${pad} bg-sand`}>
          <div className={container}>
            <SectionHeading eyebrow={t.food.eyebrow} title={t.food.title} />
            <div className="mt-6 max-w-[720px]">
              <p className="text-[17px] leading-relaxed text-muted">
                {t.food.before}{" "}
                <strong className="font-semibold text-forest">
                  {t.food.name}
                </strong>
                {t.food.after}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── EVENIMENTE ── */}
      {SHOW_FB_AND_EVENTS && (
        <section className={`${container} ${pad}`}>
          <SectionHeading
            eyebrow={t.events.eyebrow}
            title={t.events.title}
          />
          <div className="mt-6 max-w-[720px]">
            <p className="text-[17px] leading-relaxed text-muted">
              {t.events.body}
            </p>
            {/* TODO: adaugă detalii pachet - durată, ce include, capacitate spațiu comun */}
          </div>
        </section>
      )}

      {/* ── LOCAȚIA ── */}
      <section className={`${pad} bg-pine`}>
        <div className={container}>
          <SectionHeading
            eyebrow={t.location.eyebrow}
            title={t.location.title}
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
                {t.location.nearby.map((n) => (
                  <li key={n.name}>
                    <strong className="font-medium text-paper/90">
                      {n.name}
                    </strong>
                    {n.rest}
                  </li>
                ))}
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
            eyebrow={t.facilities.eyebrow}
            title={t.facilities.title}
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
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
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
          {t.fireSafety}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`${pad} bg-pine`}>
        <div className={`${container} text-center`}>
          <SectionHeading
            eyebrow={t.cta.eyebrow}
            title={t.cta.title}
            tone="dark"
            center
            className="mb-8"
          />
          <p className="mx-auto mb-8 max-w-[52ch] text-[17px] leading-relaxed text-paper/80">
            {t.cta.lead}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={href(lang, "book")} className={btnTerracotta}>
              {t.cta.button}
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
