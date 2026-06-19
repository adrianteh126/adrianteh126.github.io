import type { ReactNode } from "react";
import { BlogLayoutHeader } from "@/components/blogs/BlogLayoutHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const metadata = {
  title: "Blog | Adrian Teh",
  description: "Thoughts, tutorials, and insights from a software engineer.",
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
