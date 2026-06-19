import { TargetAndTransition, Variants } from "framer-motion";

/**
 * Variants for fade in and fade out animation with a slight upward movement.
 */
const fadeInOutVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Hover effect for cards: lift slightly and cast a soft shadow. Border/colour
 * changes are handled by daisyUI `hover:` utility classes so no theme colours
 * are hardcoded here.
 */
const cardHoverVariant: TargetAndTransition = {
  y: -3,
  boxShadow: "0 10px 30px -20px rgba(20,20,30,.4)",
  transition: { duration: 0.2, ease: "easeOut" },
};

/**
 * Hover effect for inline "→" links: nudge horizontally. Pair with a Tailwind
 * `hover:text-secondary` class for the pink colour shift.
 */
const linkHoverVariant: TargetAndTransition = {
  x: 8,
  transition: { duration: 0.3, ease: "easeInOut" },
};

/**
 * Hover effect for project "↗" links: shift up and to the right. Pair with a
 * Tailwind `hover:text-secondary` class for the pink colour shift.
 */
const projectLinkHoverVariant: TargetAndTransition = {
  x: 6,
  y: -6,
  transition: { duration: 0.3, ease: "easeInOut" },
};

export {
  fadeInOutVariant,
  cardHoverVariant,
  linkHoverVariant,
  projectLinkHoverVariant,
};
