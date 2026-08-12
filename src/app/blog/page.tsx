import type { Metadata } from "next";
import {
  getAllPosts,
  getCategories,
  getFeaturedPosts,
  getTags,
} from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import BlogList from "@/components/blog/BlogList";
import { Eyebrow } from "@/components/ui/eyebrow";

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
    <div className="min-h-screen pb-24">
      <div className="mx-auto max-w-5xl px-6 pt-32 md:pt-40">
        <header className="max-w-2xl">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Insights &amp; Ideas
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Practical articles, case studies, and frontend best practices for
            ambitious creators.
          </p>
        </header>

        {featured.length > 0 && (
          <div className="mt-16 mb-20">
            <div className="mb-6 flex items-center gap-4">
              <Eyebrow>Featured</Eyebrow>
              <div className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
            <BlogCard post={featured[0]} featured />
          </div>
        )}

        <div className="mt-16">
          <BlogList posts={posts} categories={categories} tags={tags} />
        </div>
      </div>
    </div>
  );
}
