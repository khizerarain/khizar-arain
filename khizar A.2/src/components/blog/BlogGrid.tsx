"use client";

import { Post } from "@/types/blog";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: Post[];
  variant?: "featured" | "regular" | "minimal";
  columns?: 1 | 2 | 3;
  emptyMessage?: string;
}

export default function BlogGrid({
  posts,
  variant = "regular",
  columns = 3,
  emptyMessage = "No posts found",
}: BlogGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  const variantClass = {
    featured: "gap-6 md:gap-8",
    regular: "gap-6 md:gap-8",
    minimal: variant === "minimal" ? "gap-0" : "gap-6",
  };

  return (
    <div className={`grid ${gridClass[columns]} ${variantClass[variant]}`}>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} variant={variant} />
      ))}
    </div>
  );
}
