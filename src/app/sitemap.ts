import type { MetadataRoute } from "next";
import { firm } from "@/lib/firm";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://www.${firm.domain}`;
  const routes = ["", "/about", "/services", "/contact"];
  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
