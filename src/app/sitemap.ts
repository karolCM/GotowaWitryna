import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/industries-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gotowawitryna.pl";
  const lastModified = new Date();

  const industrySlugs = getAllSlugs();

  const industryRoutes: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${baseUrl}/branza/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...industryRoutes,
    {
      url: `${baseUrl}/regulamin`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
