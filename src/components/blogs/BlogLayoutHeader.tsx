"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BlogLayoutHeader() {
  const pathname = usePathname();
  const isOnBlogPost = pathname !== "/blogs" && pathname.startsWith("/blogs/");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center gap-3 px-4 py-4">
        <Link href="/" target="_self">
          <p className="transition-transform duration-300 ease-in-out hover:-translate-x-2 hover:text-secondary">
            ← Portfolio
          </p>
        </Link>
        {isOnBlogPost && (
          <>
            <span className="text-sm">/</span>
            <Link
              href="/blogs"
              className="transition-transform duration-300 ease-in-out hover:-translate-x-2 hover:text-secondary"
            >
              All Posts
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
