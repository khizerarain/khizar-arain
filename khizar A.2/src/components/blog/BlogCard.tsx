"use client";

import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/blog";
import { formatDate, calculateReadingTime } from "@/utils/blog";

interface BlogCardProps {
  post: Post;
  variant?: "featured" | "regular" | "minimal";
}

export default function BlogCard({ post, variant = "regular" }: BlogCardProps) {
  const readingTime = calculateReadingTime(post.content);

  if (variant === "minimal") {
    return (
      <article className="pb-4 border-b border-gray-200 last:border-b-0">
        <Link href={`/blog/${post.slug}`} className="group">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {formatDate(post.created_at)}
          </p>
        </Link>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Cover Image */}
      {post.cover_image && (
        <Link
          href={`/blog/${post.slug}`}
          className="relative block h-48 overflow-hidden bg-gray-200"
        >
          <Image
            src={post.cover_image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category */}
        {post.category && (
          <Link
            href={`/blog?category=${encodeURIComponent(post.category)}`}
            className="inline-block mb-3"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors">
              {post.category}
            </span>
          </Link>
        )}

        {/* Title */}
        <Link href={`/blog/${post.slug}`} className="group mb-3">
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
          <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
          <span>{readingTime} min read</span>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {post.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Read More Link */}
      <div className="px-6 pb-6">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
