import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: "/adrianteh126.github.io",
  output: "export",
};

export default nextConfig;
