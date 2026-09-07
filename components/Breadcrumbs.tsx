import Link from "next/link";
import Script from "next/script";
import { WEBSITE } from "@/lib/content";

export type Crumb = {
  label: string;
  /** Absolute path. Omitted on the current page, which is not a link. */
  href?: string;
};

/**
 * Visual breadcrumb plus the matching BreadcrumbList JSON-LD.
 *
 * Both come from the same array, so the markup Google reads can never drift
 * from what the visitor sees. The current page is included as the last item
 * without a link, per schema.org guidance.
 */
export default function Breadcrumbs({
  items,
  id,
  tone = "light",
}: {
  items: Crumb[];
  /** Unique script id; two BreadcrumbList blocks on one page would collide. */
  id: string;
  tone?: "light" | "dark";
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${WEBSITE}${c.href}` } : {}),
    })),
  };

  const text = tone === "dark" ? "text-paper/70" : "text-muted-2";
  const link = tone === "dark" ? "hover:text-paper" : "hover:text-forest";

  return (
    <>
      <Script
        id={id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Firimituri">
        <ol className={`m-0 flex flex-wrap items-center gap-x-2 gap-y-1 p-0 text-[13px] ${text}`}>
          {items.map((c, i) => (
            <li key={c.label} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="opacity-50">
                  ›
                </span>
              )}
              {c.href ? (
                <Link href={c.href} className={`no-underline ${link} hover:underline`}>
                  {c.label}
                </Link>
              ) : (
                <span aria-current="page">{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
