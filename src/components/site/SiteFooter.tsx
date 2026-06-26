import { EntypoRss } from "@/components/icon";

/**
 * Shared site footer used by the home page and the blog layout.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-base-300">
      <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-3.5 px-7 py-6">
        <p className="text-sm text-base-content/60">
          © {new Date().getFullYear()} Adrian Teh. All rights reserved.
        </p>
        <a
          href="/feed.xml"
          className="flex items-center gap-1.5 text-sm text-base-content/60 transition-colors hover:text-primary"
          aria-label="Subscribe via RSS"
        >
          <EntypoRss className="text-base" />
          RSS
        </a>
      </div>
    </footer>
  );
}
