import type { ReactNode } from "react";
import { BlogLayoutHeader } from "@/components/blogs/BlogLayoutHeader";

export const metadata = {
  title: "Blog | Adrian Teh",
  description: "Thoughts, tutorials, and insights from a software engineer.",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <BlogLayoutHeader />

      {/* Main Content */}
      <main className="container mx-auto flex-1 px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Adrian Teh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
