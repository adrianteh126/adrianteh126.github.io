import { getAllPosts } from "@/lib/blogs";
import { BlogList } from "@/components/blogs/BlogList";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-4 text-5xl font-bold">Blog</h1>
        <p className="text-lg text-slate-600">
          Welcome to my blog! Here I share my thoughts, experiences, and
          learnings as a software engineer.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-lg bg-white p-8 text-center shadow-md">
          <p className="text-slate-600">No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <BlogList posts={posts} />
      )}
    </div>
  );
}
