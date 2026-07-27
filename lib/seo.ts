import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_TAGLINE } from "./site";

/** Share image (1200x630, the Open Graph aspect ratio). */
export const OG_IMAGE = "/og-amonte.jpg";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const DEFAULT_TITLE = `${SITE_NAME} - ${SITE_TAGLINE} în Valea Avrigului`;

type PageMetaInput = {
  /** Page title, as passed to `metadata.title` (runs through the `%s | …` template). */
  title: string;
  description: string;
  /** Absolute path, e.g. "/camere". Becomes both the canonical and og:url. */
  path: string;
  /** Page-specific share image; falls back to the site-wide one. */
  image?: string;
};

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
 */
export function pageMeta({
  title,
  description,
  path,
  image = OG_IMAGE,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ro_RO",
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

/** Root-level defaults, used by the homepage and inherited where a page adds nothing. */
export const siteOpenGraph = {
  type: "website" as const,
  locale: "ro_RO",
  siteName: SITE_NAME,
  title: DEFAULT_TITLE,
  description: SITE_DESCRIPTION,
  url: "/",
  images: [
    {
      url: OG_IMAGE,
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      alt: `${SITE_NAME} - ${SITE_TAGLINE}`,
    },
  ],
};
