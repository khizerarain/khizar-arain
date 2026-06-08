"use client";

import { Post } from "@/types/blog";
import BlogCard from "./BlogCard";

interface RelatedPostsProps {
  posts: Post[];
  title?: string;
}

export default function RelatedPosts({
  posts,
  title = "Related Articles",
}: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} variant="regular" />
          ))}
        </div>
      </div>
    </section>
  );
}
