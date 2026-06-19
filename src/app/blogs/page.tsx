import { getAllPosts } from "@/lib/blogs";
import { getCoverSrc } from "@/app/blogs/covers";
import { BlogList } from "@/components/blogs/BlogList";

export default async function BlogPage() {
  const posts = getAllPosts();
  const postsWithCovers = await Promise.all(
    posts.map(async (post) => ({
      ...post,
      cover: await getCoverSrc(post.slug),
    })),
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-4 text-5xl font-bold text-base-content">Blog</h1>
        <p className="text-lg text-base-content/60">
          Welcome to my blog! Here I share my thoughts, experiences, and
          learnings as a software engineer.
        </p>
      </div>

      {postsWithCovers.length === 0 ? (
        <div className="rounded-2xl border border-base-300 bg-base-100 p-8 text-center">
          <p className="text-base-content/60">
            No blog posts yet. Check back soon!
          </p>
        </div>
      ) : (
        <BlogList posts={postsWithCovers} />
      )}
    </div>
  );
}
