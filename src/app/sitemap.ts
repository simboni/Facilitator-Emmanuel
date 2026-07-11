import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

const base = `https://${site.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];
}
