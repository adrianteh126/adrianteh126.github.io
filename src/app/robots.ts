import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Required for metadata routes under output: "export".
export const dynamic = "force-static";

// Emitted as a static /robots.txt at build time (works with output: "export").
export default function robots(): MetadataRoute.Robots {
  // No `host` — it's a non-standard (deprecated Yandex) directive Google ignores.
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
