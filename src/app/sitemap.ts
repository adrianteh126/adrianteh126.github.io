import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blogs";
import { SITE_URL } from "@/lib/site";

// Required for metadata routes under output: "export".
export const dynamic = "force-static";

// Emitted as a static /sitemap.xml at build time (works with output: "export").
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/blogs/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/projects/`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
