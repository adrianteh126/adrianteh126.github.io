"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { TagPill } from "@/components/site/TagPill";
import {
  cardHoverVariant,
  fadeInOutVariant,
  projectLinkHoverVariant,
} from "@/animations/variants";
import { useHoverEnabled } from "@/hooks/useHoverEnabled";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const isHoverEnabled = useHoverEnabled();

  return (
    <motion.div
      className="flex flex-col rounded-2xl border border-base-300 bg-base-100 p-6 transition-colors hover:border-base-content/20"
      variants={fadeInOutVariant}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={isHoverEnabled ? cardHoverVariant : undefined}
    >
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagPill key={tag}>{tag}</TagPill>
        ))}
      </div>
      <h3 className="mb-2 text-lg font-bold leading-snug text-base-content">
        {project.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-base-content/60">
        {project.description}
      </p>
      {(project.githubUrl || project.liveUrl) && (
        <div className="flex gap-5 border-t border-base-300 pt-4">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-normal text-primary transition-colors hover:text-secondary"
              whileHover={isHoverEnabled ? projectLinkHoverVariant : undefined}
            >
              GitHub ↗
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-normal text-primary transition-colors hover:text-secondary"
              whileHover={isHoverEnabled ? projectLinkHoverVariant : undefined}
            >
              Live ↗
            </motion.a>
          )}
        </div>
      )}
    </motion.div>
  );
}
