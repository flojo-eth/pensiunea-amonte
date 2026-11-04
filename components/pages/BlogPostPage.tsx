import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import Eyebrow from "@/components/Eyebrow";
import RichText from "@/components/RichText";
import { pageMeta } from "@/lib/seo";
import { CONTACT, WEBSITE } from "@/lib/content";
import { getCopy, href } from "@/lib/i18n";
import { btnTerracotta } from "@/lib/ui";
import { AUTHORS, BLOG_COPY, BLOG_PATH, blogPostPath, formatDate, type BlogPost, type Block } from "@/lib/blog";

export function blogPostMetadata(post: BlogPost): Metadata {
  const author = AUTHORS[post.author];
  return pageMeta({
    lang: "ro",
    title: post.metaTitle,
    description: post.description,
    path: blogPostPath(post.slug),
    image: post.image.src,
    roOnly: true,
    article: { published: post.published, modified: post.updated, author: `${author.name}, ${author.role}` },
  });
}

/** Links in FAQ answers stay out of the JSON-LD text: Google wants plain text. */
const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="m-0 text-[17px] leading-relaxed text-muted">
          <RichText text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="m-0 flex list-disc flex-col gap-2 pl-5 text-[17px] leading-relaxed text-muted">
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <figure className="m-0 border-l-2 border-terracotta pl-5">
          <blockquote className="m-0 font-serif text-[20px] italic leading-snug text-pine">„{block.text}”</blockquote>
          <figcaption className="mt-2 text-[13.5px] text-muted-2">{block.cite}</figcaption>
        </figure>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full border-collapse text-left text-[14.5px]">
            {block.caption && <caption className="px-4 pt-3 pb-1 text-left text-[13px] text-muted-2">{block.caption}</caption>}
            <thead>
              <tr className="bg-sand">
                {block.head.map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 font-semibold text-pine">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")} className="border-t border-line bg-card">
                  {row.map((cell, i) => (
                    <td key={i} className={`px-4 py-3 align-top ${i === 0 ? "font-medium text-[#33392f]" : "text-muted"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

/**
 * One blog article. Order is fixed: "Pe scurt" (the quotable answer), the
 * sections, FAQ (also FAQPage JSON-LD), sources, then the booking CTA.
 * BlogPosting names a real person as author and the guesthouse, by its @id
 * in the site-wide graph, as publisher.
 */
export default function BlogPostPage({ post }: { post: BlogPost }) {
  const author = AUTHORS[post.author];
  const url = `${WEBSITE}${blogPostPath(post.slug)}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    image: `${WEBSITE}${post.image.src}`,
    datePublished: post.published,
    dateModified: post.updated,
    inLanguage: "ro",
    mainEntityOfPage: url,
    author: { "@type": "Person", name: author.name, worksFor: { "@id": `${WEBSITE}/#lodging` } },
    publisher: { "@id": `${WEBSITE}/#lodging` },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: plain(a) },
    })),
  };

  return (
    <article className="mx-auto max-w-[820px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,6vw,80px)]">
      <JsonLd id="schema-blog-article" data={articleJsonLd} />
      <JsonLd id="schema-blog-faq" data={faqJsonLd} />

      <div className="mb-6">
        <Breadcrumbs
          lang="ro"
          id="schema-blog-post-breadcrumb"
          items={[
            { label: getCopy("ro").common.home, href: href("ro", "home") },
            { label: BLOG_COPY.crumb, href: BLOG_PATH },
            { label: post.title },
          ]}
        />
      </div>

      <h1 className="m-0 font-serif text-[clamp(32px,4.5vw,50px)] font-semibold leading-[1.08] text-pine">{post.title}</h1>
      <p className="mt-4 mb-0 text-[14px] text-muted-2">
        {author.name}, {author.role} · {BLOG_COPY.published} <time dateTime={post.published}>{formatDate(post.published)}</time>
        {post.updated !== post.published && (
          <>
            {" "}
            · {BLOG_COPY.updated} <time dateTime={post.updated}>{formatDate(post.updated)}</time>
          </>
        )}
      </p>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
        <Image src={post.image.src} alt={post.image.alt} fill priority sizes="(min-width:820px) 720px, 100vw" className="object-cover" />
      </div>

      <section className="mt-10 rounded-xl border border-line bg-sand p-[clamp(18px,3vw,26px)]">
        <Eyebrow className="mb-3">{BLOG_COPY.summary}</Eyebrow>
        <p className="m-0 text-[16px] leading-relaxed text-[#33392f]">{post.summary}</p>
      </section>

      {post.sections.map((s) => (
        <section key={s.title} className="mt-12">
          <h2 className="m-0 mb-5 font-serif text-[clamp(26px,3.2vw,34px)] font-semibold leading-tight text-pine">{s.title}</h2>
          <div className="flex flex-col gap-5">
            {s.blocks.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </div>
        </section>
      ))}

      <section className="mt-14 border-t border-line pt-10">
        <h2 className="m-0 mb-4 font-serif text-[clamp(26px,3.2vw,34px)] font-semibold text-pine">{BLOG_COPY.faq}</h2>
        {post.faq.map((f) => (
          <div key={f.q} className="border-b border-line py-5">
            <h3 className="m-0 text-[17px] font-semibold text-pine">{f.q}</h3>
            <p className="mt-2 mb-0 text-[15.5px] leading-relaxed text-muted">
              <RichText text={f.a} />
            </p>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="m-0 mb-3 text-[15px] font-semibold uppercase tracking-[1px] text-muted-2">{BLOG_COPY.sources}</h2>
        <ul className="m-0 flex list-none flex-col gap-1.5 pl-0 text-[14px] text-muted">
          {post.sources.map((src) => (
            <li key={src.url}>
              <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-forest underline underline-offset-2">
                {src.label}
              </a>
              {src.note && <span className="text-muted-2"> ({src.note})</span>}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-xl bg-pine p-[clamp(22px,4vw,36px)] text-center">
        <p className="m-0 font-serif text-[clamp(24px,3vw,30px)] font-semibold text-card-2">{BLOG_COPY.cta.title}</p>
        <p className="mx-auto mt-2 mb-6 max-w-[48ch] text-[15px] text-paper/80">Pensiunea Amonte, {CONTACT.address}</p>
        <Link href={href("ro", "book")} className={btnTerracotta}>
          {BLOG_COPY.cta.button}
        </Link>
      </section>
    </article>
  );
}
