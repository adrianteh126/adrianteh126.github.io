"use client";

import {
  EntypoMail,
  EntypoSocialGithub,
  EntypoSocialLinkedin,
  SkillIconsJavaLight,
  SkillIconsPythonLight,
  SkillIconsReactLight,
  SkillIconsSpringLight,
  SkillIconsTypescript,
  SkillIconsVuejsLight,
} from "@/components/icon";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import type { BlogPost } from "@/lib/blogs";
import { fadeInOutVariant, hoverVariants } from "@/animations/variants";

interface HomePageProps {
  recentPosts: BlogPost[];
}

export default function HomePage({ recentPosts }: HomePageProps) {
  // Detect if device supports hover (not touch-only) - initialized lazily
  const [isHoverEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover)").matches;
  });

  return (
    <>
      <div className="grid min-h-screen grid-flow-dense grid-cols-2 grid-rows-12 gap-3 bg-gradient-to-br from-slate-50 to-slate-100 p-4 *:rounded-lg *:px-6 *:py-4 sm:grid-cols-6 sm:gap-3 sm:p-6 lg:grid-cols-12 lg:gap-4 lg:p-8">
        {/* About Me */}
        <motion.div
          className="col-span-2 row-span-4 bg-slate-300/70 shadow-md backdrop-blur-md sm:col-span-6 lg:col-span-4"
          variants={fadeInOutVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0 }}
          whileHover={isHoverEnabled ? hoverVariants : undefined}
        >
          <h2 className="font-bold">Hi , I&apos;m Adrian Teh! 🙋‍♂️</h2>
          <br />
          <p>
            A passionate software engineer graduate who enjoys traveling,
            jogging, and solving real-world problems through code.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          className="col-span-2 row-span-3 bg-blue-300/70 shadow-md backdrop-blur-md sm:col-span-3 lg:col-span-4"
          variants={fadeInOutVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={isHoverEnabled ? hoverVariants : undefined}
        >
          <h2 className="font-bold">Education</h2>
          <ul>
            <li>
              <span className="font-semibold">
                University of Malaya, Malaysia
              </span>{" "}
              - B.CS. (Software Engineering)
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="col-span-2 row-span-7 flex flex-col justify-between bg-purple-300/70 shadow-md backdrop-blur-md sm:col-span-6 lg:col-span-4"
          variants={fadeInOutVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={isHoverEnabled ? hoverVariants : undefined}
        >
          <h2 className="font-bold">Projects</h2>
          <div className="flex flex-col gap-4 text-sm sm:text-base">
            <div>
              <strong>E-commerce Store for Upcycled Products</strong>
              <br />A Next.js e-commerce platform collaborated with{" "}
              <Link
                href="https://www.instagram.com/klothcircularity"
                target="_blank"
                className="text-primary"
              >
                Kloth Circularity
              </Link>{" "}
              for upcycled products
            </div>
            <div>
              <strong>Eco Quest</strong>
              <br /> A Unity 2D RPG-like interactive quiz game to raise
              environmental awareness topics. Built in C# exported to Android
              Application
            </div>
            <div>
              <strong>Detectify</strong>
              <br /> Django application integrate with roboflow api to find
              suitable glassess based on face shape
            </div>
          </div>

          <Link href="/projects" target="_self">
            <div className="tooltip" data-tip="More Projects">
              <h2 className="font-bold transition-transform duration-300 ease-in-out hover:translate-x-2">
                →
              </h2>
            </div>
          </Link>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="col-span-2 row-span-4 bg-green-300/70 shadow-md backdrop-blur-md sm:col-span-3 lg:col-span-4"
          variants={fadeInOutVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={isHoverEnabled ? hoverVariants : undefined}
        >
          <h2 className="font-bold">Contact</h2>
          <br />
          <div className="*:hover-transition-primary flex flex-col gap-2 *:flex *:items-center *:gap-2">
            <Link href="mailto:adrianteh02@hotmail.com">
              <EntypoMail />
              <span className="break-all sm:break-normal">
                adrianteh02@hotmail.com
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/adrian-teh-kuan-kiat"
              target="_blank"
            >
              <EntypoSocialLinkedin />
              <span>Adrian Teh</span>
            </Link>
            <Link href="https://github.com/adrianteh126" target="_blank">
              <EntypoSocialGithub />
              <span>adrianteh126</span>
            </Link>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="col-span-2 row-span-3 bg-orange-300/70 shadow-md backdrop-blur-md sm:col-span-6 lg:col-span-4"
          variants={fadeInOutVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={isHoverEnabled ? hoverVariants : undefined}
        >
          <h2 className="font-bold">Skills</h2>

          <div className="flex flex-col gap-2 text-sm *:flex *:flex-wrap *:gap-2 sm:text-base">
            <div className="*:flex *:items-center *:gap-2">
              <span className="font-semibold">Language </span>
              <span>
                <SkillIconsTypescript />
                TypeScript
              </span>
              <span>
                <SkillIconsJavaLight />
                Java
              </span>
              <span>
                <SkillIconsPythonLight />
                Python
              </span>
            </div>
            <div className="*:flex *:items-center *:gap-2">
              <span className="font-semibold"> Framework </span>

              <span>
                <SkillIconsReactLight />
                React.js
              </span>
              <span>
                <SkillIconsVuejsLight />
                Vue.js
              </span>
              <span>
                <SkillIconsSpringLight />
                Spring Boot
              </span>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="col-span-2 row-span-6 bg-teal-300/70 shadow-md backdrop-blur-md sm:col-span-3 lg:col-span-3"
          variants={fadeInOutVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={isHoverEnabled ? hoverVariants : undefined}
        >
          <h2 className="font-bold">Experience</h2>
          <p>
            <strong>Junior Software Developer</strong> @ AppFuxion Consulting
            <br />
            Sep 2024 - Dec 2024 (Contract)
          </p>
          <br />
          <p>
            <strong>Software Engineer Intern</strong> @ Fuxionex Group <br />
            Aug 2023 - Jan 2024
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="col-span-2 row-span-6 bg-red-300/70 shadow-md backdrop-blur-md sm:col-span-3 lg:col-span-3"
          variants={fadeInOutVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={isHoverEnabled ? hoverVariants : undefined}
        >
          <span className="flex h-full w-full select-none flex-col items-center justify-center text-[4rem] sm:text-[6rem] lg:text-[8rem]">
            🧑‍💻
          </span>
        </motion.div>

        {/* Blog */}
        <motion.div
          className="col-span-2 row-span-6 flex flex-col justify-between bg-yellow-300/70 shadow-md backdrop-blur-md sm:col-span-6 lg:col-span-6"
          variants={fadeInOutVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={isHoverEnabled ? hoverVariants : undefined}
        >
          <h2 className="font-bold">Blog</h2>
          <div className="flex flex-col gap-3 text-sm sm:text-base">
            {recentPosts.length > 0 ? (
              recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="hover-transition-primary"
                >
                  <div>
                    <strong>{post.title}</strong>
                    <br />
                    <span className="text-xs opacity-70">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-sm opacity-70">No recent posts available</p>
            )}
          </div>
          <Link href="/blogs" target="_self">
            <div className="tooltip" data-tip="More Blog Contents">
              <h2 className="font-bold transition-transform duration-300 ease-in-out hover:translate-x-2">
                →
              </h2>
            </div>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
