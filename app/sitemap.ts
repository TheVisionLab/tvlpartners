import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/how-we-work", "/insights", "/about", "/contact", "/privacy", "/terms"];
  return paths.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
