import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { WEBSITE } from "@/lib/content";
import type { Lang } from "@/lib/i18n/config";
import { UI } from "@/lib/i18n/ui";

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
  lang,
  items,
  id,
  tone = "light",
  linked = true,
}: {
  lang: Lang;
  items: Crumb[];
  /**
   * false renders the trail as plain text, for landing pages that keep the
   * visitor on the page. The JSON-LD keeps the item URLs either way.
   */
  linked?: boolean;
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
      <JsonLd id={id} data={jsonLd} />
      <nav aria-label={UI[lang].breadcrumbs}>
        <ol className={`m-0 flex flex-wrap items-center gap-x-2 gap-y-1 p-0 text-[13px] ${text}`}>
          {items.map((c, i) => (
            <li key={c.label} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="opacity-50">
                  ›
                </span>
              )}
              {c.href && linked ? (
                <Link href={c.href} className={`no-underline ${link} hover:underline`}>
                  {c.label}
                </Link>
              ) : (
                <span aria-current={c.href ? undefined : "page"}>{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
