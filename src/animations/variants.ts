import { TargetAndTransition, VariantLabels, Variants } from "framer-motion";

/**
 * Variants for fade in and fade out animation with a slight upward movement.
 */
const fadeInOutVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Variants for a hover effect that scales up the element and moves it slightly upwards.
 */
const hoverVariants: VariantLabels | TargetAndTransition = {
  scale: 1.02,
  y: -4,
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
  },
};

export { fadeInOutVariant, hoverVariants };
