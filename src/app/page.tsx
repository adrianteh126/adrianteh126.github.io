import HomePage, { type RecentPost } from "@/components/HomePage";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getRecentPosts } from "@/lib/blogs";
import { getCoverSrc } from "@/app/blogs/covers";
import { projects } from "@/data/projects";

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
      <SiteHeader />
      <HomePage recentPosts={recentPosts} projects={projects} />
      <SiteFooter />
    </div>
  );
}
