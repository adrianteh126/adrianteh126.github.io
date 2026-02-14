import type { NextConfig } from "next";
import createMDX from "@next/mdx";

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
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-gfm"],
  },
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
