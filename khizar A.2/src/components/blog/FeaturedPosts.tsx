"use client";

import { Post } from "@/types/blog";
import BlogCard from "./BlogCard";

interface FeaturedPostsProps {
  posts: Post[];
  title?: string;
}

export default function FeaturedPosts({
  posts,
  title = "Featured Posts",
}: FeaturedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <div className="h-1 w-16 bg-blue-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} variant="featured" />
          ))}
        </div>
      </div>
    </section>
  );
}
