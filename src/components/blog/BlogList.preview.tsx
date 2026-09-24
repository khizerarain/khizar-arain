import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { getAllPosts } from "@/lib/blog";
import BlogList from "./BlogList";

export const meta = {
  description: "Chronological list of posts on the blog index.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default async function BlogListPreview() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <BlogList posts={posts} />
    </div>
  );
}
