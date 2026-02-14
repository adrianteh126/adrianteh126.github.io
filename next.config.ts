import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // No basePath needed for user GitHub Pages site (username.github.io)
  // basePath is only needed for project sites (username.github.io/project-name)
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
