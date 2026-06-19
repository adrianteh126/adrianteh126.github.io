import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },

  // No basePath needed for user GitHub Pages site (username.github.io)
  // basePath is only needed for project sites (username.github.io/project-name)

  // Use "export" output to enable static export of the site
  output: "export",

  // Add trailing slash to generate index.html in subdirectories for GitHub Pages compatibility
  trailingSlash: true,

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
      ["remark-frontmatter", ["yaml"]],
      ["remark-mdx-frontmatter", { name: "metadata" }],
    ],
  },
});

export default withMDX(nextConfig);
