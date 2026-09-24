import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "./BlogCard";

export const meta = {
  description: "Post card used on the blog index, rendered with the latest real post.",
} satisfies ComponentPreviewMeta;

export default async function BlogCardPreview() {
  const [post] = await getAllPosts();
  if (!post) return <p className="text-sm text-muted-foreground">No posts yet.</p>;

  return (
    <div className="w-full max-w-sm">
      <BlogCard post={post} />
    </div>
  );
}
