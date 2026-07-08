import type { MetadataRoute } from "next";
import { site, projects } from "@/lib/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const staticRoutes = ["", "/work", "/about", "/contact"];
  const projectRoutes = projects.map((p) => `/work/${p.slug}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/work/") ? 0.7 : 0.8,
  }));
}
