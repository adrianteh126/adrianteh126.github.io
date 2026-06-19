import HomePage, { type RecentPost } from "@/components/HomePage";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRecentPosts } from "@/lib/blogs";
import { getCoverSrc } from "@/app/blogs/covers";
import { projects } from "@/data/projects";
import {
  SITE_URL,
  AUTHOR_NAME,
  AUTHOR_JOB_TITLE,
  SITE_DESCRIPTION,
  SOCIAL_LINKS,
} from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR_NAME,
  url: SITE_URL,
  jobTitle: AUTHOR_JOB_TITLE,
  description: SITE_DESCRIPTION,
  sameAs: SOCIAL_LINKS,
};

export default async function Page() {
  const posts = getRecentPosts(4);
  const recentPosts: RecentPost[] = await Promise.all(
    posts.map(async (post) => ({
      ...post,
      cover: await getCoverSrc(post.slug),
    })),
  );

  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      <JsonLd data={personJsonLd} />
      <SiteHeader />
      <HomePage recentPosts={recentPosts} projects={projects} />
      <SiteFooter />
    </div>
  );
}
