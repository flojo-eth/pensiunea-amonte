import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import { getContent, getCopy, href, type Lang } from "@/lib/i18n";
import { btnPaper } from "@/lib/ui";

export function galleryMetadata(lang: Lang): Metadata {
  return pageMeta({ lang, ...getCopy(lang).gallery.meta, path: href(lang, "gallery") });
}

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

export default function GalleryPage({ lang }: { lang: Lang }) {
  const t = getCopy(lang).gallery;
  return (
    <section className={`bg-pine py-[clamp(56px,7vw,96px)]`}>
      <div className={container}>
        <SectionHeading
          as="h1"
          eyebrow={t.eyebrow}
          title={t.title}
          tone="dark"
          center
          className="mb-[clamp(36px,5vw,56px)]"
        />
        <GalleryGrid items={getContent(lang).GALLERY} />
        <div className="mt-10 text-center">
          <Link href={href(lang, "book")} className={btnPaper}>
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
