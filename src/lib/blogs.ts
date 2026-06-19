import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

const postsDirectory = path.join(process.cwd(), "src/app/blogs");

// Frontmatter schema — validated at build time. A missing or malformed field
// throws instead of silently degrading to an empty string.
const PostMetaSchema = z.object({
  title: z.string().min(1),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "date must be ISO YYYY-MM-DD")
    .refine((d) => !Number.isNaN(Date.parse(d)), "date is not a valid calendar date"),
  description: z.string().min(1),
  tags: z.array(z.string().min(1)).min(1),
  author: z.string().min(1).default("Adrian Teh"),
});

export type PostMeta = z.infer<typeof PostMetaSchema>;

export interface BlogPost extends PostMeta {
  slug: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  const allPostsData = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const slug = entry.name;
      const mdxPath = path.join(postsDirectory, slug, "page.mdx");

      // Check if mdx file exists
      if (!fs.existsSync(mdxPath)) {
        return null;
      }

      const fileContents = fs.readFileSync(mdxPath, "utf8");
      const { data, content } = matter(fileContents);

      const parsed = PostMetaSchema.safeParse(data);
      if (!parsed.success) {
        throw new Error(
          `Invalid frontmatter in ${slug}/page.mdx: ${parsed.error.message}`,
        );
      }

      return { slug, ...parsed.data, content };
    })
    .filter((post): post is BlogPost => post !== null);

  // Sort posts by date, newest first
  return allPostsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  const posts = getAllPosts();
  return posts.slice(0, count);
}
