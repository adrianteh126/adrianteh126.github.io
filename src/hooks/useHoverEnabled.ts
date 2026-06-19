import { useState } from "react";

/**
 * Returns true only on devices that support real hover (not touch-only), so
 * Framer Motion `whileHover` effects don't stick after a tap. Initialised
 * lazily and SSR-safe.
 */
export function useHoverEnabled(): boolean {
  const [isHoverEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover)").matches;
  });
  return isHoverEnabled;
}
