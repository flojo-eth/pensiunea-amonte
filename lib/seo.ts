import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, INDEXABLE } from "./site";
import { getCopy, href, hreflangPaths, LANGS, OG_LOCALE, type Lang } from "./i18n";

/** Share image (1200x630, the Open Graph aspect ratio). */
export const OG_IMAGE = "/og-amonte.jpg";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

type PageMetaInput = {
  lang: Lang;
  /** Page title, as passed to `metadata.title` (runs through the `%s | …` template). */
  title: string;
  description: string;
  /** Absolute path, e.g. "/camere". Becomes both the canonical and og:url. */
  path: string;
  /** Page-specific share image; falls back to the site-wide one. */
  image?: string;
};

/** Canonical plus hreflang alternates: every page points at both of its versions. */
function languageAlternates(path: string) {
  return { canonical: path, languages: hreflangPaths(path) };
}

const otherLocales = (lang: Lang) => LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]);

/** Metadata for the homepage, which takes its title and Open Graph from the root layout. */
export function homeMeta(lang: Lang, description: string): Metadata {
  return { description, alternates: languageAlternates(href(lang, "home")) };
}

/**
 * Builds per-page metadata with an explicit canonical and a complete Open Graph block.
 *
 * Both are mandatory per page. Next.js resolves metadata by *shallow* merge, so a
 * page that omits `alternates` inherits `canonical: "/"` from the root layout and
 * tells Google it is a duplicate of the homepage; a page that omits `openGraph`
 * inherits the homepage title and URL, so WhatsApp shares lose their context.
 *
 * Because the merge is shallow, `openGraph` must be emitted in full here — spreading
 * only `title`/`description` would drop `images`, `siteName`, `type` and `locale`.
 *
 * The canonical is always the page's own language version; `languages` adds the
 * hreflang links to both versions, so Google pairs them instead of treating the
 * translation as a duplicate.
 */
export function pageMeta({
  lang,
  title,
  description,
  path,
  image = OG_IMAGE,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: languageAlternates(path),
    openGraph: {
      type: "website",
      locale: OG_LOCALE[lang],
      alternateLocale: otherLocales(lang),
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      images: [
        {
          url: image,
          width: image === OG_IMAGE ? OG_IMAGE_WIDTH : undefined,
          height: image === OG_IMAGE ? OG_IMAGE_HEIGHT : undefined,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}

/** Root-level Open Graph defaults, used by the homepage and inherited where a page adds nothing. */
export function siteOpenGraph(lang: Lang) {
  const site = getCopy(lang).site;
  return {
    type: "website" as const,
    locale: OG_LOCALE[lang],
    alternateLocale: otherLocales(lang),
    siteName: SITE_NAME,
    title: site.defaultTitle,
    description: site.description,
    url: href(lang, "home"),
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: `${SITE_NAME} - ${site.tagline}`,
      },
    ],
  };
}

/** Metadata for a language's root layout. */
export function rootMetadata(lang: Lang): Metadata {
  const site = getCopy(lang).site;
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: site.defaultTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description: site.description,
    applicationName: SITE_NAME,
    // NOTE: no `alternates` here on purpose. Next.js merges metadata shallowly, so a
    // canonical set at the root is inherited by every page that does not override it —
    // which made 8 pages declare themselves duplicates of the homepage. Each page now
    // sets its own canonical via `pageMeta()`.
    // Indexing follows INDEXABLE in lib/site.ts.
    robots: INDEXABLE
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false },
    openGraph: siteOpenGraph(lang),
    twitter: {
      card: "summary_large_image",
      title: site.defaultTitle,
      description: site.description,
      images: [OG_IMAGE],
    },
  };
}
