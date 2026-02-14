"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/blogs";
import { motion } from "framer-motion";
import { fadeInOutVariant, hoverVariants } from "@/animations/variants";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <motion.div
          key={post.slug}
          className="group block rounded-lg bg-white p-6 shadow-md hover:shadow-md"
          variants={fadeInOutVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0 + 0.1 * posts.indexOf(post) }}
          whileHover={hoverVariants}
        >
          <Link key={post.slug} href={`/blogs/${post.slug}`}>
            <div className="mb-2 text-sm text-base-content opacity-60">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <h2 className="mb-3 text-2xl font-bold text-base-content">
              {post.title}
            </h2>
            <p className="mb-4 text-base-content opacity-80">
              {post.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tag.split(",").map((tag) => (
                <span
                  key={tag.trim()}
                  className="badge badge-primary badge-sm uppercase"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
