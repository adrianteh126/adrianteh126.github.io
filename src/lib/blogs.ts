import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/app/blogs");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tag: string;
  author: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  const allPostsData = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const slug = entry.name;
      const mdxPath = path.join(postsDirectory, slug, "page.mdx");

      // Check if page.mdx exists
      if (!fs.existsSync(mdxPath)) {
        return null;
      }

      const fileContents = fs.readFileSync(mdxPath, "utf8");

      // Extract metadata from "export const metadata = {...}" pattern
      // Using [\s\S] instead of 's' flag for better compatibility
      const metadataMatch = fileContents.match(
        /export\s+const\s+metadata\s*=\s*\{([\s\S]+?)\};/,
      );

      let metadata: Record<string, string> = {};

      if (metadataMatch) {
        const metadataContent = metadataMatch[1];

        // Parse title
        const titleMatch = metadataContent.match(/title:\s*"([^"]+)"/);
        if (titleMatch) metadata.title = titleMatch[1];

        // Parse date
        const dateMatch = metadataContent.match(/date:\s*"([^"]+)"/);
        if (dateMatch) metadata.date = dateMatch[1];

        // Parse description - handle multiline and apostrophes
        // Match from description: to the next ",
        const descriptionMatch = metadataContent.match(
          /description:\s*"([\s\S]*?)"\s*,/,
        );
        if (descriptionMatch) {
          metadata.description = descriptionMatch[1]
            .replace(/\n\s+/g, " ")
            .trim();
        }

        // Parse tag
        const tagMatch = metadataContent.match(/tag:\s*"([^"]+)"/);
        if (tagMatch) metadata.tag = tagMatch[1];

        // Parse author
        const authorMatch = metadataContent.match(/author:\s*"([^"]+)"/);
        if (authorMatch) metadata.author = authorMatch[1];
      }

      return {
        slug,
        title: metadata.title || "",
        date: metadata.date || "",
        description: metadata.description || "",
        tag: metadata.tag || "",
        author: metadata.author || "",
        content: fileContents,
      };
    })
    .filter((post): post is BlogPost => post !== null);

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  const posts = getAllPosts();
  return posts.slice(0, count);
}
