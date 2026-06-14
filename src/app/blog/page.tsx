import type { Metadata } from "next";
import {
  getAllPosts,
  getCategories,
  getFeaturedPosts,
  getTags,
} from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles on web design, development, and personal branding by Khizar Arain.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featured = await getFeaturedPosts();
  const categories = await getCategories();
  const tags = await getTags();

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Blog
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Insights & Ideas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Practical articles, case studies, and frontend best practices for
            ambitious creators.
          </p>
        </div>

        {featured.length > 0 && (
          <div className="mb-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Featured
            </p>
            <BlogCard post={featured[0]} featured />
          </div>
        )}

        <BlogList posts={posts} categories={categories} tags={tags} />
      </div>
    </div>
  );
}
