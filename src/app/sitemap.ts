import type { MetadataRoute } from "next";
import { solutions } from "@/data/solutions";

export const dynamic = "force-static";

const SITE_URL = "https://alpatechs.pl";

/** Mapa strony dla Google - strony statyczne + podstrony rozwiązań. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/solutions`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];

  const solutionPages: MetadataRoute.Sitemap = solutions.map((solution) => ({
    url: `${SITE_URL}/solutions/${solution.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...solutionPages];
}
