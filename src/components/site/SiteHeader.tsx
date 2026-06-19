import Link from "next/link";

const NAV_LINKS = [
  { href: "#home", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
];

/**
 * Sticky, blurred header for the single-page home layout. Right-aligned anchor
 * nav that scrolls to the page sections.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-base-300 bg-base-200/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1140px] items-center justify-end px-7 py-3">
        <nav className="flex items-center gap-1.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3.5 py-2 text-sm font-normal text-base-content transition-colors hover:text-secondary`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
