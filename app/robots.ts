import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/content";

/**
 * The /dashboard, /checklist, /inventory, /recipes, /reservations,
 * /reviews and /more routes are the app-shell UX prototype — placeholder
 * data, not real content, so they're kept out of search results.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/checklist", "/inventory", "/recipes", "/reservations", "/reviews", "/more"],
    },
    sitemap: `${siteMeta.url}/sitemap.xml`,
  };
}
