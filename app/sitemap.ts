import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://obraksa.es",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}