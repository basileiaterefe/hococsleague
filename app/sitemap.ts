import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { siteOrigin } from "@/lib/people";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteOrigin();
  return site.navigation.map((item, index) => ({
    url: `${base}${item.href}`,
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
