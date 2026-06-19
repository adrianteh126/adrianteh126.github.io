import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BlogLayoutHeader } from "@/components/blogs/BlogLayoutHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SITE_NAME, OG_DEFAULT } from "@/lib/site";

const BLOG_TITLE = "Blog";
const BLOG_DESCRIPTION =
  "Thoughts, tutorials, and insights from a software engineer.";

export const metadata: Metadata = {
  // Templated by the root layout to "Blog | Adrian Teh".
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  alternates: { canonical: "/blogs/" },
  openGraph: {
    type: "website",
    url: "/blogs/",
    title: `${BLOG_TITLE} | ${SITE_NAME}`,
    description: BLOG_DESCRIPTION,
    siteName: SITE_NAME,
    images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BLOG_TITLE} | ${SITE_NAME}`,
    description: BLOG_DESCRIPTION,
    images: [OG_DEFAULT],
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      {/* Header */}
      <BlogLayoutHeader />

      {/* Main Content */}
      <main className="mx-auto w-full max-w-[1140px] flex-1 px-7 py-10">
        {children}
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
