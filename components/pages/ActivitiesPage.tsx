import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import ActivityCard from "@/components/ActivityCard";
import { getContent, getCopy, href, type Lang } from "@/lib/i18n";
import { btnTerracotta } from "@/lib/ui";

export function activitiesMetadata(lang: Lang): Metadata {
  return pageMeta({ lang, ...getCopy(lang).activities.meta, path: href(lang, "activities") });
}

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

export default function ActivitiesPage({ lang }: { lang: Lang }) {
  const t = getCopy(lang).activities;
  const { ACTIVITIES } = getContent(lang);
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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACTIVITIES.map((a) => (
          <ActivityCard key={a.name} activity={a} />
        ))}
      </div>

      <div className="mt-10">
        <Link href={href(lang, "book")} className={btnTerracotta}>
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
