import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "@/styles/globals.css";

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
  title: "Adrian Teh | Software Engineering Graduate",
  description:
    "Software Engineer, Web Developer, and Designer. I build things for the web.",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>",
  robots: {
    follow: true,
    index: true,
  },
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
    <html lang="en" className={cn(futura.className)} suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}
