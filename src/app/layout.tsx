import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  OG_DEFAULT,
} from "@/lib/site";

import "@/styles/globals.css";

// Privacy-friendly analytics (Cloudflare Web Analytics). Gated on env so it
// never loads in `pnpm dev` — set NEXT_PUBLIC_CF_ANALYTICS_TOKEN (the beacon
// token from the CF dashboard) in the production build only.
const cfAnalyticsToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

// Google Search Console verification token (optional). Set NEXT_PUBLIC_GSC_TOKEN
// after creating the property; the meta tag is emitted only when present.
const gscToken = process.env.NEXT_PUBLIC_GSC_TOKEN;

const futura = localFont({
  src: [
    {
      path: "../../public/fonts/FuturaCyrillicLight.ttf",
      weight: "300",
    },
    { path: "../../public/fonts/FuturaCyrillicBook.ttf", weight: "400" },
    {
      path: "../../public/fonts/FuturaCyrillicMedium.ttf",
      weight: "500",
    },
    { path: "../../public/fonts/FuturaCyrillicDemi.ttf", weight: "600" },
    {
      path: "../../public/fonts/FuturaCyrillicHeavy.ttf",
      weight: "700",
    },
    { path: "../../public/fonts/FuturaCyrillicBold.ttf", weight: "800" },
    {
      path: "../../public/fonts/FuturaCyrillicExtraBold.ttf",
      weight: "900",
    },
  ],
  variable: "--font-futura",
});

export const metadata: Metadata = {
  // metadataBase makes every relative URL below (OG image, canonical, RSS)
  // resolve to an absolute URL — required for valid social-share previews.
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    // Child routes set `title: "X"` and render as "X | Adrian Teh".
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧑‍💻</text></svg>",
  robots: {
    follow: true,
    index: true,
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: `${SITE_NAME} — Blog` },
      ],
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_DEFAULT],
  },
  ...(gscToken ? { verification: { google: gscToken } } : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(futura.className)}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {cfAnalyticsToken && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${cfAnalyticsToken}"}`}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
