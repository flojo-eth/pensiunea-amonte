import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import { getContent, getCopy, href, roomHref, type Lang } from "@/lib/i18n";
import { UI } from "@/lib/i18n/ui";
import { btnTerracotta } from "@/lib/ui";

export function ratesMetadata(lang: Lang): Metadata {
  return pageMeta({ lang, ...getCopy(lang).rates.meta, path: href(lang, "rates") });
}

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

export default function RatesPage({ lang }: { lang: Lang }) {
  const t = getCopy(lang).rates;
  const { ROOMS } = getContent(lang);
  return (
    <section className={`${container} py-[clamp(56px,7vw,96px)]`}>
      <SectionHeading
        as="h1"
        eyebrow={t.eyebrow}
        title={t.title}
        className="mb-[clamp(36px,5vw,56px)]"
      >
        {t.lead}
      </SectionHeading>

      <div className="overflow-hidden rounded-[12px] border border-line bg-card">
        {ROOMS.map((room, i) => (
          <div
            key={room.slug}
            className={`flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8 ${
              i > 0 ? "border-t border-line" : ""
            }`}
          >
            <div className="basis-[260px]">
              <h2 className="font-serif text-[24px] font-semibold text-pine">
                <Link
                  href={roomHref(lang, room.slug)}
                  className="no-underline hover:underline"
                >
                  {room.name}
                </Link>
              </h2>
              <div className="mt-1 text-[13.5px] text-muted-2">{room.spec}</div>
            </div>
            <div className="text-right">
              <span className="font-serif text-[32px] font-semibold text-terracotta">
                {room.price}
              </span>
              <span className="text-[13px] text-muted-2">{UI[lang].room.perNight}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-[14.5px] leading-relaxed text-muted">
        {t.note}
      </p>

      <div className="mt-8">
        <Link href={href(lang, "book")} className={btnTerracotta}>
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
