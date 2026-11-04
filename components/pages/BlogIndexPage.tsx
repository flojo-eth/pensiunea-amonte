import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { getCopy, href } from "@/lib/i18n";
import { AUTHORS, BLOG_COPY, BLOG_PATH, BLOG_POSTS, blogPostPath, formatDate } from "@/lib/blog";

export function blogIndexMetadata(): Metadata {
  return pageMeta({ lang: "ro", ...BLOG_COPY.meta, path: BLOG_PATH, roOnly: true });
}

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

/** The blog's list of articles. Romanian only, like the articles. */
export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.published.localeCompare(a.published));
  return (
    <section className={`${container} py-[clamp(56px,7vw,96px)]`}>
      <div className="mb-6">
        <Breadcrumbs
          lang="ro"
          id="schema-blog-breadcrumb"
          items={[{ label: getCopy("ro").common.home, href: href("ro", "home") }, { label: BLOG_COPY.crumb }]}
        />
      </div>
      <SectionHeading as="h1" eyebrow={BLOG_COPY.eyebrow} title={BLOG_COPY.title} className="mb-[clamp(36px,5vw,56px)]">
        {BLOG_COPY.lead}
      </SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.slug} className="overflow-hidden rounded-xl border border-line bg-card">
            <Link href={blogPostPath(p.slug)} className="block no-underline">
              <div className="relative aspect-[4/3]">
                <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-[clamp(18px,3vw,24px)]">
                <h2 className="m-0 font-serif text-[22px] font-semibold leading-snug text-pine">{p.title}</h2>
                <p className="mt-2 mb-0 text-[14.5px] leading-relaxed text-muted">{p.description}</p>
                <p className="mt-4 mb-0 text-[13px] text-muted-2">
                  {AUTHORS[p.author].name}, {AUTHORS[p.author].role} · {formatDate(p.updated)}
                </p>
                <span className="mt-3 inline-block text-[14px] font-semibold text-terracotta">{BLOG_COPY.read}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
