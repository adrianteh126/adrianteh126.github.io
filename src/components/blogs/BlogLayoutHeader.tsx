"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BlogLayoutHeader() {
  const pathname = usePathname();
  const isOnBlogPost = pathname !== "/blogs" && pathname.startsWith("/blogs/");

  return (
    <header className="sticky top-0 z-30 border-b border-base-300 bg-base-200/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1140px] items-center gap-3 px-7 py-3">
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
