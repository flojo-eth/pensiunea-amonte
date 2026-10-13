import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import { getContent, getCopy, href, type Lang } from "@/lib/i18n";
import { btnTerracotta } from "@/lib/ui";

export function roomsMetadata(lang: Lang): Metadata {
  return pageMeta({ lang, ...getCopy(lang).rooms.meta, path: href(lang, "rooms") });
}

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

export default function RoomsPage({ lang }: { lang: Lang }) {
  const t = getCopy(lang).rooms;
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

      <div className="grid gap-6 sm:grid-cols-2">
        {ROOMS.map((room) => (
          <RoomCard key={room.slug} lang={lang} room={room} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Link href={href(lang, "book")} className={btnTerracotta}>
          {t.cta}
        </Link>
        <Link
          href={href(lang, "rates")}
          className="text-sm font-semibold text-terracotta no-underline hover:underline"
        >
          {t.rates}
        </Link>
      </div>
    </section>
  );
}
