import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Indexing is on only when the real site address is configured (production).
  const live = process.env.NEXT_PUBLIC_SITE_URL === "https://tvlpartners.com" || process.env.NEXT_PUBLIC_SITE_URL === "https://www.tvlpartners.com";
  return live
    ? { rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }], sitemap: `${SITE_URL}/sitemap.xml` }
    : { rules: [{ userAgent: "*", disallow: "/" }] };
}
