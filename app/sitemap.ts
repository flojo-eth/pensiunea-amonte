import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ROOMS } from "@/lib/content";

// Generated for completeness; irrelevant while the site is noindex (staging).
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
    "/retreat-corporate",
  ];

  const now = new Date();
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));
}
