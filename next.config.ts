import type { NextConfig } from "next";

const env = process.env.ENV ?? "production";
console.log("process.env.ENV", process.env.ENV, typeof process.env.ENV);

console.log("env: ", env);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: env === "production" ? "/adrianteh126.github.io" : "",
  output: "export",
};

export default nextConfig;
