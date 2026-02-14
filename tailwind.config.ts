import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        base: ["clamp(14px, 2.5vw, 16px)", { lineHeight: "1.6" }],
        lg: ["clamp(16px, 3vw, 18px)", { lineHeight: "1.6" }],
        xl: ["clamp(17px, 3.5vw, 20px)", { lineHeight: "1.5" }],
        "2xl": ["clamp(20px, 4vw, 24px)", { lineHeight: "1.4" }],
        "3xl": ["clamp(24px, 5vw, 30px)", { lineHeight: "1.3" }],
        "4xl": ["clamp(28px, 6vw, 36px)", { lineHeight: "1.2" }],
        "5xl": ["clamp(32px, 7vw, 48px)", { lineHeight: "1.1" }],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.5xl") },
        h2: { fontSize: theme("fontSize.4xl") },
        h3: { fontSize: theme("fontSize.3xl") },
        h4: { fontSize: theme("fontSize.2xl") },
        h5: { fontSize: theme("fontSize.xl") },
        h6: { fontSize: theme("fontSize.lg") },
        p: { fontSize: theme("fontSize.base") },
      });
      addUtilities({
        /* Hide scrollbar for Chrome, Safari and Opera */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        /* Hide scrollbar for IE, Edge and Firefox */
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    }),
    daisyui,
  ],
  daisyui: {
    themes: ["light"], // daisyUI themes
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
} satisfies Config;
