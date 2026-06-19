"use client";

import type { BlogPost } from "@/lib/blogs";
import { BlogCard } from "@/components/blogs/BlogCard";

interface BlogListProps {
  posts: Array<BlogPost & { cover: string | null }>;
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <BlogCard key={post.slug} post={post} cover={post.cover} index={i} />
      ))}
    </div>
  );
}
