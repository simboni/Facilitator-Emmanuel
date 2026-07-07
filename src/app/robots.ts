import type { MetadataRoute } from "next";
import { firm } from "@/lib/firm";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = `https://www.${firm.domain}`;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
