"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/blogs";
import type { Project } from "@/data/projects";
import { TagPill } from "@/components/site/TagPill";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { BlogCard } from "@/components/blogs/BlogCard";
import {
  EntypoMail,
  EntypoSocialGithub,
  EntypoSocialLinkedin,
} from "@/components/icon";
import {
  cardHoverVariant,
  fadeInOutVariant,
  linkHoverVariant,
} from "@/animations/variants";
import { useHoverEnabled } from "@/hooks/useHoverEnabled";

export type RecentPost = BlogPost & { cover: string | null };

interface HomePageProps {
  recentPosts: RecentPost[];
  projects: Project[];
}

const EXPERIENCE = [
  {
    role: "Backend Engineer",
    org: "Rytbank",
    period: "Mac 2025 - Present",
    current: true,
  },
  {
    role: "Software Developer",
    org: "AppFuxion Consulting",
    period: "Sep 2024 - Dec 2024 · Contract",
  },
  {
    role: "Software Engineer Intern",
    org: "Fuxionex Group",
    period: "Aug 2023 - Jan 2024",
  },
];

const SKILLS = [
  { group: "Languages", items: ["TypeScript", "Java", "Python"] },
  { group: "Frameworks", items: ["React.js", "Vue.js", "Spring Boot"] },
];

const CONTACTS = [
  {
    Icon: EntypoMail,
    label: "adrianteh02@hotmail.com",
    href: "mailto:adrianteh02@hotmail.com",
    external: false,
  },
  {
    Icon: EntypoSocialLinkedin,
    label: "Adrian Teh",
    href: "https://www.linkedin.com/in/adrian-teh-kuan-kiat",
    external: true,
  },
  {
    Icon: EntypoSocialGithub,
    label: "adrianteh126",
    href: "https://github.com/adrianteh126",
    external: true,
  },
];

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 border-b border-base-300 pb-3 text-xs font-bold uppercase tracking-[0.16em] text-base-content/50">
      {children}
    </p>
  );
}

/** Internal "→" link with a Framer Motion nudge + pink hover. */
function ViewAllLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isHoverEnabled = useHoverEnabled();
  return (
    <Link
      href={href}
      className="whitespace-nowrap text-sm font-normal text-primary transition-colors hover:text-secondary"
    >
      <motion.span
        className="inline-block"
        whileHover={isHoverEnabled ? linkHoverVariant : undefined}
      >
        {children}
      </motion.span>
    </Link>
  );
}

export default function HomePage({ recentPosts, projects }: HomePageProps) {
  const isHoverEnabled = useHoverEnabled();
  const featured = recentPosts[0];
  const rest = recentPosts.slice(1);

  return (
    <main className="mx-auto max-w-[1140px] px-7 pb-16 pt-12">
      {/* Hero */}
      <section
        id="home"
        className="flex flex-wrap items-center gap-12 border-b border-base-300 pb-12"
      >
        <div className="flex h-[150px] w-[150px] items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-[78px]">
          🧑‍💻
        </div>
        <div className="min-w-[300px] flex-1">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Software Engineer
          </p>
          <h1 className="mb-5 text-[clamp(40px,8vw,60px)] font-extrabold leading-[0.96] tracking-tight text-base-content">
            Hi, I&apos;m
            <br />
            Adrian Teh.
          </h1>
          <p className="max-w-[540px] text-lg leading-relaxed text-base-content/70">
            A passionate software engineer graduate who enjoys traveling,
            jogging, and solving real-world problems through code.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <div className="mt-12 grid grid-cols-1 gap-[18px] md:grid-cols-3">
        {/* Experience */}
        <motion.div
          className="rounded-2xl border border-base-300 bg-base-100 p-6 transition-colors hover:border-base-content/20"
          variants={fadeInOutVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0 }}
          whileHover={isHoverEnabled ? cardHoverVariant : undefined}
        >
          <CardLabel>Experience</CardLabel>
          {EXPERIENCE.map((job, i) => (
            <div key={job.org} className="flex gap-3.5">
              <div className="flex flex-col items-center pt-1.5">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    job.current ? "bg-primary" : "bg-base-300"
                  }`}
                />
                {i < EXPERIENCE.length - 1 && (
                  <span className="mt-1.5 w-px flex-1 bg-base-300" />
                )}
              </div>
              <div className="pb-4">
                <p className="text-[15px] font-bold text-base-content">
                  {job.role}
                </p>
                <p className="text-sm text-base-content/60">{job.org}</p>
                <p className="text-xs text-base-content/40">{job.period}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          className="rounded-2xl border border-base-300 bg-base-100 p-6 transition-colors hover:border-base-content/20"
          variants={fadeInOutVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={isHoverEnabled ? cardHoverVariant : undefined}
        >
          <CardLabel>Skills</CardLabel>
          {SKILLS.map((section) => (
            <div key={section.group} className="mb-5 last:mb-0">
              <p className="mb-3 text-[15px] font-bold text-base-content">
                {section.group}
              </p>
              <div className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <p
                    key={item}
                    className="flex items-center gap-3 text-[15px] text-base-content/80"
                  >
                    <span className="text-base leading-none text-primary">
                      •
                    </span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Let's connect */}
        <motion.div
          className="rounded-2xl border border-base-300 bg-base-100 p-6 transition-colors hover:border-base-content/20"
          variants={fadeInOutVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={isHoverEnabled ? cardHoverVariant : undefined}
        >
          <CardLabel>Let&apos;s connect</CardLabel>
          {CONTACTS.map((contact) => {
            const Icon = contact.Icon;
            return (
              <Link
                key={contact.label}
                href={contact.href}
                {...(contact.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="-mx-1.5 flex items-center gap-3.5 rounded-lg px-1.5 py-2.5 transition-colors hover:bg-base-200"
              >
                <span className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-base-300 text-primary">
                  <Icon className="text-[17px]" />
                </span>
                <span className="text-sm font-semibold text-base-content">
                  {contact.label}
                </span>
              </Link>
            );
          })}
        </motion.div>
      </div>

      {/* Projects */}
      <div
        id="projects"
        className="mb-5 mt-14 flex scroll-mt-20 items-end justify-between gap-4"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-base-content">
          Projects
        </h2>
        <ViewAllLink href="/projects">View all →</ViewAllLink>
      </div>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Blog */}
      <div
        id="blog"
        className="mb-5 mt-14 flex scroll-mt-20 items-end justify-between gap-4"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-base-content">
          Blog
        </h2>
        <ViewAllLink href="/blogs">View all →</ViewAllLink>
      </div>

      {featured ? (
        <>
          <FeaturedPost post={featured} isHoverEnabled={isHoverEnabled} />
          {rest.length > 0 && (
            <div className="mt-[18px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  cover={post.cover}
                  index={i}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="text-sm text-base-content/60">
          No posts yet. Check back soon!
        </p>
      )}
    </main>
  );
}

function FeaturedPost({
  post,
  isHoverEnabled,
}: {
  post: RecentPost;
  isHoverEnabled: boolean;
}) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group block">
      <motion.div
        className="flex flex-wrap overflow-hidden rounded-2xl border border-base-300 bg-base-100 transition-colors hover:border-base-content/20"
        variants={fadeInOutVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0 }}
        whileHover={isHoverEnabled ? cardHoverVariant : undefined}
      >
        <div className="min-h-[182px] flex-[1_1_180px] overflow-hidden">
          {post.cover ? (
            // eslint-disable-next-line @next/next/no-img-element -- static export, images.unoptimized
            <img
              src={post.cover}
              alt={`${post.title} cover`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full min-h-[182px] w-full items-center justify-center bg-gradient-to-br from-primary/15 to-primary/5 text-3xl font-extrabold text-primary">
              Blog.
            </div>
          )}
        </div>
        <div className="min-w-[240px] flex-[3_1_260px] p-6">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Latest Post ·{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <h3 className="mb-2 text-2xl font-bold leading-snug text-base-content">
            {post.title}
          </h3>
          <p className="mb-4 leading-relaxed text-base-content/60">
            {post.description}
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagPill key={tag}>{tag}</TagPill>
            ))}
          </div>
          <span className="inline-block text-sm font-normal text-primary transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-secondary">
            Read post →
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
