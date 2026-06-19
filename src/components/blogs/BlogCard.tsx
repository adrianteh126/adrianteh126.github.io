"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/blogs";
import { TagPill } from "@/components/site/TagPill";
import { cardHoverVariant, fadeInOutVariant } from "@/animations/variants";
import { useHoverEnabled } from "@/hooks/useHoverEnabled";

interface BlogCardProps {
  post: BlogPost;
  cover: string | null;
  index?: number;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogCard({ post, cover, index = 0 }: BlogCardProps) {
  const isHoverEnabled = useHoverEnabled();

  return (
    <Link href={`/blogs/${post.slug}`} className="group block">
      <motion.div
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 transition-colors hover:border-base-content/20"
        variants={fadeInOutVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.1 * index }}
        whileHover={isHoverEnabled ? cardHoverVariant : undefined}
      >
        <div className="aspect-[5/2] w-full overflow-hidden">
          {cover ? (
            // eslint-disable-next-line @next/next/no-img-element -- static export, images.unoptimized
            <img
              src={cover}
              alt={`${post.title} cover`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 to-primary/5 font-bold text-primary">
              {post.title}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagPill key={tag}>{tag}</TagPill>
            ))}
          </div>
          <h3 className="mb-2 text-lg font-bold leading-snug text-base-content">
            {post.title}
          </h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-base-content/60">
            {post.description}
          </p>
          <div className="flex items-center justify-between gap-3 border-t border-base-300 pt-4">
            <span className="inline-block text-sm font-normal text-primary transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-secondary">
              Read post →
            </span>
            <span className="text-xs text-base-content/40">
              {formatDate(post.date)}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
