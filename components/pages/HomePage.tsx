import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import RoomCard from "@/components/RoomCard";
import ActivityCard from "@/components/ActivityCard";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import AudiencesGridClient from "@/components/AudiencesGridClient";
import ConsentMap from "@/components/ConsentMap";
import { CONTACT, GOOGLE_FORM_URL } from "@/lib/content";
import { getContent, getCopy, href, type Lang } from "@/lib/i18n";
import { homeMeta } from "@/lib/seo";
import { btnPaper, btnOutlineLight, btnTerracotta } from "@/lib/ui";

export function homeMetadata(lang: Lang): Metadata {
  return homeMeta(lang, getCopy(lang).home.meta.description);
}

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";
const sectionPad = "py-[clamp(70px,9vw,130px)]";

function SeeAll({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold text-terracotta no-underline hover:underline"
    >
      {children} →
    </Link>
  );
}

export default function HomePage({ lang }: { lang: Lang }) {
  const t = getCopy(lang).home;
  const {
    ROOMS,
    ACTIVITIES,
    AMENITIES,
    GALLERY,
    REVIEWS,
    RATING_SUMMARY,
    STATS,
    LOCATION,
    AUDIENCES,
  } = getContent(lang);

  return (
    <>
      {/* HERO - immersive */}
      <section className="relative flex min-h-[calc(100vh-140px)] items-end px-[clamp(20px,5vw,64px)] pb-[clamp(48px,6vw,80px)] pt-[clamp(40px,6vw,90px)]">
        <div className="absolute inset-0">
          <PlaceholderImage
            src="/poza_hero.jpg"
            alt={t.hero.alt}
            label={t.hero.label}
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
              "linear-gradient(180deg,rgba(18,26,20,0.5) 0%,rgba(18,26,20,0.28) 42%,rgba(15,22,17,0.94) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1280px]">
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#ECE0C0] [text-shadow:0_2px_10px_rgba(0,0,0,0.65)]">
            {LOCATION}
          </span>
          <h1 className="m-0 max-w-[16ch] font-serif text-[clamp(44px,7.5vw,96px)] font-semibold leading-[1.0] text-card-2 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
            {t.hero.title}
          </h1>
          <p className="mb-9 mt-[22px] max-w-[54ch] text-[clamp(16px,2vw,20px)] leading-relaxed text-paper [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]">
            {t.hero.lead}
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link href={href(lang, "book")} className={btnPaper}>
              {t.hero.primary}
            </Link>
            <Link href={href(lang, "rooms")} className={btnOutlineLight}>
              {t.hero.secondary}
            </Link>
          </div>
        </div>
      </section>

      {/* DESPRE */}
      <section className={`${container} ${sectionPad} flex flex-wrap items-center gap-[clamp(36px,5vw,72px)]`}>
        <div className="flex-1 basis-[380px]">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            {t.about.p1}
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            {t.about.p2}
          </p>
          <div className="mt-7 flex flex-wrap gap-9">
            {STATS.slice(0, 2).map((s) => (
              <div key={s.label}>
                <div className="font-serif text-[38px] leading-none text-forest">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[13px] text-muted-2">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <SeeAll href={href(lang, "about")}>{t.about.more}</SeeAll>
          </div>
        </div>
        <div className="flex flex-1 basis-[360px] gap-4">
          <PlaceholderImage
            src="/salon.jpeg"
            alt={t.about.salon.alt}
            label={t.about.salon.label}
            className="aspect-[3/4] flex-[1.3] rounded-md"
            imgClassName="object-right"
            sizes="(max-width: 768px) 60vw, 30vw"
          />
          <div className="flex flex-1 flex-col gap-4">
            <PlaceholderImage src="/semineu.jpeg" alt={t.about.fireplace.alt} label={t.about.fireplace.label} className="flex-1 rounded-md" sizes="30vw" />
            <PlaceholderImage src="/servicii-facilitati/bar-lounge.jpeg" alt={t.about.bar.alt} label={t.about.bar.label} className="flex-1 rounded-md" sizes="30vw" />
          </div>
        </div>
      </section>

      {/* PENTRU CINE E AMONTE */}
      <section className={`${container} ${sectionPad} border-t border-line`}>
        <SectionHeading
          eyebrow={t.audiences.eyebrow}
          title={t.audiences.title}
          center
          className="mb-[clamp(40px,5vw,64px)]"
        />
        <AudiencesGridClient items={AUDIENCES} />
      </section>

      {/* CAMERE */}
      <section className={`${sectionPad} bg-sand`}>
        <div className={container}>
          <SectionHeading
            eyebrow={t.rooms.eyebrow}
            title={t.rooms.title}
            center
            className="mb-[clamp(40px,5vw,64px)]"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {[ROOMS[1], ROOMS[2]].map((room) => (
              <RoomCard key={room.slug} lang={lang} room={room} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-center">
            <SeeAll href={href(lang, "rooms")}>{t.rooms.allRooms}</SeeAll>
            <SeeAll href={href(lang, "rates")}>{t.rooms.allRates}</SeeAll>
          </div>
        </div>
      </section>

      {/* SERVICII / FACILITĂȚI */}
      <section className={`${container} ${sectionPad}`}>
        <div className="mb-[clamp(36px,4vw,52px)] flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} />
          <p className="m-0 max-w-[34ch] text-[16px] leading-relaxed text-muted">
            {t.services.lead}
          </p>
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.slice(0, 4).map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-3.5 rounded-lg border border-sand bg-card-2 p-[22px]"
            >
              <span className="text-[22px] leading-none">{a.icon}</span>
              <span className="text-[15px] font-medium text-[#33392f]">
                {a.label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <SeeAll href={href(lang, "services")}>{t.services.all}</SeeAll>
        </div>
      </section>

      {/* GALERIE */}
      <section className={`${sectionPad} bg-pine`}>
        <div className={container}>
          <SectionHeading
            eyebrow={t.gallery.eyebrow}
            title={t.gallery.title}
            tone="dark"
            center
            className="mb-[clamp(40px,5vw,64px)]"
          />
          <div className="grid auto-rows-[200px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
            {GALLERY.slice(0, 6).map((g) => (
              <PlaceholderImage
                key={g.label}
                src={g.photo}
                alt={g.label}
                label={g.label}
                tone="dark"
                className={`rounded-lg ${g.span === 2 ? "row-span-2" : ""}`}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <SeeAll href={href(lang, "gallery")}>{t.gallery.all}</SeeAll>
          </div>
        </div>
      </section>

      {/* ÎMPREJURIMI */}
      <section className={`${container} ${sectionPad}`}>
        <SectionHeading
          eyebrow={t.activities.eyebrow}
          title={t.activities.title}
          center
          className="mb-[clamp(40px,5vw,64px)]"
        >
          {t.activities.lead}
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.slice(0, 3).map((a) => (
            <ActivityCard key={a.name} activity={a} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <SeeAll href={href(lang, "activities")}>{t.activities.all}</SeeAll>
        </div>
      </section>

      {/* RECENZII */}
      <section className={`${sectionPad} bg-sand`}>
        <div className={container}>
          <SectionHeading
            eyebrow={t.reviews.eyebrow}
            title={t.reviews.title}
            center
            className="mb-3"
          >
            {t.reviews.summary(RATING_SUMMARY.value, RATING_SUMMARY.count)}
          </SectionHeading>
          <div className="mt-[clamp(28px,4vw,44px)]">
            <ReviewsCarousel reviews={REVIEWS} />
          </div>
        </div>
      </section>

      {/* REZERVARE - WhatsApp CTA */}
      <section id="rezervare" className={`${sectionPad} scroll-mt-20 bg-pine`}>
        <div className={`${container} flex flex-wrap gap-[clamp(40px,5vw,72px)]`}>
          <div className="flex-1 basis-[300px]">
            <SectionHeading
              eyebrow={t.booking.eyebrow}
              title={t.booking.title}
              tone="dark"
            >
              {t.booking.lead}
            </SectionHeading>
            <div className="mt-7 flex flex-col gap-3.5 text-[15px] text-paper/90">
              <a
                href={`tel:${CONTACT.phoneMobile.replace(/\s/g, "")}`}
                className="no-underline hover:text-paper"
              >
                ✆ {CONTACT.phoneMobile} · {CONTACT.phoneLandline}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="no-underline hover:text-paper"
              >
                ✉ {CONTACT.email}
              </a>
            </div>
          </div>
          <div className="flex flex-1 basis-[360px] flex-col justify-center gap-4 rounded-xl bg-card-2 p-[clamp(28px,4vw,40px)]">
            <p className="m-0 text-[17px] leading-relaxed text-muted">
              {t.booking.note}
            </p>
            <Link href={href(lang, "book")} className={`${btnTerracotta} w-full flex items-center justify-center`}>
              {t.booking.cta}
            </Link>
            {t.booking.fallback === "form" ? (
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm font-medium text-forest no-underline hover:underline"
              >
                {t.booking.fallbackLabel}
              </a>
            ) : (
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-center text-sm font-medium text-forest no-underline hover:underline"
              >
                {t.booking.fallbackLabel}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT + HARTĂ */}
      <section className={`${container} ${sectionPad} flex flex-wrap gap-[clamp(36px,4vw,56px)]`}>
        <div className="flex-1 basis-[300px]">
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
          />
          <div className="mt-7 flex flex-col gap-[22px]">
            <div>
              <div className="mb-1.5 text-[12.5px] font-semibold uppercase tracking-[1px] text-muted-2">
                {t.contact.address}
              </div>
              <div className="text-[16px] leading-snug text-[#33392f]">
                {CONTACT.address}
              </div>
            </div>
            <div>
              <div className="mb-1.5 text-[12.5px] font-semibold uppercase tracking-[1px] text-muted-2">
                {t.contact.phone}
              </div>
              <div className="text-[16px] text-[#33392f]">
                {CONTACT.phoneMobile} · {CONTACT.phoneLandline}
              </div>
            </div>
            <div>
              <div className="mb-1.5 text-[12.5px] font-semibold uppercase tracking-[1px] text-muted-2">
                {t.contact.email}
              </div>
              <div className="text-[16px] text-[#33392f]">{CONTACT.email}</div>
            </div>
          </div>
        </div>
        <ConsentMap />
      </section>
    </>
  );
}
