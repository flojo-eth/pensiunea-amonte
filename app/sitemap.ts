import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ROOMS } from "@/lib/content";
import { hreflangPaths, LANGS, pagePaths, roomPaths, type RouteId } from "@/lib/i18n/config";

// The indexable pages, in the order they have always been listed. The legal
// pages are noindex and stay out, in both languages.
const PAGES: RouteId[] = ["home", "rooms", "rates"];
const PAGES_AFTER_ROOMS: RouteId[] = [
  "services",
  "activities",
  "about",
  "gallery",
  "book",
  "events",
  "privateEvents",
  "corporate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...PAGES.map(pagePaths),
    ...ROOMS.map((r) => roomPaths(r.slug)),
    ...PAGES_AFTER_ROOMS.map(pagePaths),
  ];

  // Romanian URLs first, as before, then the English ones. Every entry lists
  // both versions as hreflang alternates, which is how Google pairs them.
  // No lastModified: the build time changed on every deploy for every URL,
  // and Google ignores a lastmod that never reflects a real content change.
  return LANGS.flatMap((lang) =>
    pages.map((paths) => {
      const alternates = hreflangPaths(paths[lang]);
      return {
        url: `${SITE_URL}${paths[lang]}`,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(alternates).map(([k, p]) => [k, `${SITE_URL}${p}`]),
          ),
        },
      };
    }),
  );
}
