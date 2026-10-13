import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Eyebrow from "@/components/Eyebrow";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { CONTACT, whatsappUrl } from "@/lib/content";
import { getContent, getCopy, href, type Lang } from "@/lib/i18n";
import { btnTerracotta, btnOutlineDark } from "@/lib/ui";

export function eventsMetadata(lang: Lang): Metadata {
  return pageMeta({
    lang,
    ...getCopy(lang).events.meta,
    path: href(lang, "events"),
    image: "/exterior-pensiune.jpeg",
  });
}

// Same in both languages: GA4 reports one funnel per page, not per language.
const EVENTS_PAGE_SOURCE = "evenimente";

// Secțiunea video rămâne ascunsă cât timp materialul lipsește: un placeholder
// vizibil pe o pagină indexată arată a lucrare neterminată. Ca s-o pornești,
// pune /public/video/evenimente.mp4 și /public/video/evenimente-poster.jpg,
// apoi treci asta pe true.
const SHOW_VIDEO = false;


const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";
const sectionPad = "py-[clamp(56px,7vw,96px)]";

export default function EventsPage({ lang }: { lang: Lang }) {
  const copy = getCopy(lang);
  const t = copy.events;
  const { GROUP_REVIEWS, RATING_SUMMARY, EVENT_CARDS } = getContent(lang);
  return (
    <>
      {/* ── INTRO ── */}
      <section className={`${container} pt-[clamp(28px,4vw,44px)] pb-[clamp(40px,5vw,64px)]`}>
        <Breadcrumbs
          lang={lang}
          id="schema-evenimente-breadcrumb"
          items={[{ label: copy.common.home, href: href(lang, "home") }, { label: t.crumb }]}
        />

        <div className="mt-7 max-w-[62ch]">
          <Eyebrow className="mb-4">{t.eyebrow}</Eyebrow>
          <h1 className="m-0 font-serif text-[clamp(36px,5.4vw,64px)] font-semibold leading-[1.05] text-pine">
            {t.title}
          </h1>
          <p className="mt-6 mb-0 text-[clamp(16px,2vw,19px)] leading-relaxed text-muted">
            {t.lead}
          </p>
          <p className="mt-5 mb-0 text-[14px] text-muted-2">
            {t.rating(RATING_SUMMARY.value, RATING_SUMMARY.count)}
          </p>
        </div>
      </section>

      {/* ── CELE DOUĂ DIRECȚII ── */}
      <section className={`${container} pb-[clamp(48px,6vw,80px)]`}>
        <div className="grid gap-7 md:grid-cols-2">
          {EVENT_CARDS.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card"
            >
              <PlaceholderImage
                src={c.photo}
                alt={c.alt}
                label={c.photoLabel}
                className="aspect-[16/10] w-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="flex flex-1 flex-col p-[clamp(22px,4vw,34px)]">
                <Eyebrow className="mb-3">{c.eyebrow}</Eyebrow>
                <h2 className="m-0 font-serif text-[clamp(24px,3vw,32px)] font-semibold leading-tight text-pine">
                  {c.title}
                </h2>
                <p className="mt-3 mb-0 text-[15px] leading-relaxed text-muted">
                  {c.body}
                </p>
                <ul className="mt-5 mb-0 flex-1 space-y-2.5 pl-0 list-none">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-[#33392f]">
                      <span className="mt-1 text-[11px] text-forest" aria-hidden="true">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  {c.whatsapp ? (
                    // /evenimente-private nu există încă; până atunci intenția
                    // merge direct pe WhatsApp, cu sursă proprie în GA4.
                    <WhatsAppButton
                      href={c.href}
                      pageSource="evenimente-private-cta"
                      className={`${btnTerracotta} block w-full text-center`}
                    >
                      {c.cta}
                    </WhatsAppButton>
                  ) : (
                    <Link href={c.href} className={`${btnOutlineDark} block w-full text-center`}>
                      {c.cta}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── VIDEO ── */}
      {SHOW_VIDEO && (
        <section className={`${sectionPad} bg-sand`}>
          <div className={container}>
            <SectionHeading
              eyebrow={t.video.eyebrow}
              title={t.video.title}
              center
              className="mb-[clamp(28px,4vw,44px)]"
            />
            <div className="mx-auto max-w-[900px] overflow-hidden rounded-2xl border border-line bg-card">
              {/* Player nativ, fără autoplay: sunetul pornit din senin alungă
                  vizitatorul. `poster` previne saltul de layout cât se încarcă. */}
              <video
                controls
                preload="metadata"
                playsInline
                poster="/video/evenimente-poster.jpg"
                className="aspect-video w-full bg-pine"
              >
                <source src="/video/evenimente.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="mx-auto mt-4 mb-0 max-w-[900px] text-[13.5px] text-muted-2">
              {t.video.note}
            </p>
          </div>
        </section>
      )}

      {/* ── RECENZII ── */}
      {GROUP_REVIEWS.length > 0 && (
        <section className={sectionPad}>
          <div className={container}>
            <SectionHeading
              eyebrow={t.reviews.eyebrow}
              title={t.reviews.title}
              center
              className="mb-[clamp(28px,4vw,44px)]"
            />
          </div>
          <ReviewsCarousel reviews={GROUP_REVIEWS} />
        </section>
      )}

      {/* ── CTA ── */}
      <section className={`${sectionPad} border-t border-line bg-card-2`}>
        <div className={`${container} text-center`}>
          <Eyebrow className="mb-4">{t.cta.eyebrow}</Eyebrow>
          <h2 className="mx-auto m-0 max-w-[22ch] font-serif text-[clamp(30px,4.2vw,48px)] font-semibold leading-[1.06] text-pine">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-relaxed text-muted">
            {t.cta.lead}
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              href={whatsappUrl(t.cta.message)}
              pageSource={EVENTS_PAGE_SOURCE}
              ctaPosition="final"
              className={`${btnTerracotta} px-8 py-4`}
            >
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
