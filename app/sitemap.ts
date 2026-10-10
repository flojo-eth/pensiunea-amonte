import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ROOMS } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/camere",
    "/camere/tarife",
    ...ROOMS.map((r) => `/camere/${r.slug}`),
    "/servicii",
    "/activitati-in-zona",
    "/despre-noi",
    "/galerie",
    "/rezerva-acum",
    "/evenimente",
    "/retreat-corporate",
  ];

  // No lastModified: the build time changed on every deploy for every URL,
  // and Google ignores a lastmod that never reflects a real content change.
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
