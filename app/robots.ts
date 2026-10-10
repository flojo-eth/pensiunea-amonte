import type { MetadataRoute } from "next";
import { SITE_URL, INDEXABLE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // INDEXABLE in lib/site.ts is the single switch: false blocks every crawler.
  if (!INDEXABLE) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
