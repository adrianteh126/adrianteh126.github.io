import HomePage from "@/components/HomePage";
import { getRecentPosts } from "@/lib/blogs";

export default function Page() {
  const recentPosts = getRecentPosts(3);

  return <HomePage recentPosts={recentPosts} />;
}
