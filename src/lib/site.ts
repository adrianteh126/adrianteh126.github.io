// Single source of truth for site-wide SEO constants. Imported by the root
// layout, sitemap, robots, RSS feed, and JSON-LD so URLs and identity stay in
// one place. SITE_URL must be the canonical origin (no trailing slash) — it
// backs `metadataBase`, which is what turns relative OG/canonical URLs absolute.
export const SITE_URL = "https://adrianteh126.github.io";

export const SITE_NAME = "Adrian Teh";
export const SITE_TITLE = "Adrian Teh | Software Engineer";
export const SITE_DESCRIPTION =
  "Software Engineer, Web Developer, and Designer. I build things for the web.";

export const AUTHOR_NAME = "Adrian Teh";
export const AUTHOR_JOB_TITLE = "Software Engineer";

// Profile links — also used as schema.org `sameAs` for the Person entity.
export const SOCIAL_LINKS = [
  "https://github.com/adrianteh126",
  "https://www.linkedin.com/in/adrian-teh-kuan-kiat",
];

// Static fallback social-share image (1200×630). Lives in /public, served at
// the site root. Posts override this with their own cover when present.
export const OG_DEFAULT = "/og-default.png";
