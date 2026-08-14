import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/content";

/**
 * Only real marketing/content pages are listed — the /dashboard and other
 * app-shell prototype screens (/checklist, /inventory, ...) are excluded;
 * see app/robots.ts, which also disallows crawling them.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteMeta.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteMeta.url}/story`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteMeta.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteMeta.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
