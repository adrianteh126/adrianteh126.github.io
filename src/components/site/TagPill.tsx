interface TagPillProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Filled accent pill that inverts to an outline on hover. Replaces the old
 * daisyUI `badge badge-primary`. Colour transition is pure CSS (daisyUI
 * tokens) so it works inside server components too.
 */
export function TagPill({ children, className = "" }: TagPillProps) {
  return (
    <span
      className={`inline-block rounded-full border border-primary bg-primary px-3 py-1 text-xs font-normal uppercase text-primary-content transition-colors hover:bg-transparent hover:text-primary ${className}`}
    >
      {children}
    </span>
  );
}
