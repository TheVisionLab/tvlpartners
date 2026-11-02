import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ARTICLES } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...ARTICLES.map((a) => `/insights/${a.slug}`),
    "", "/services", "/how-we-work", "/insights", "/about", "/contact", "/privacy", "/terms"];
  return paths.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
