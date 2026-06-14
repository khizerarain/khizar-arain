import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { formatDate, calculateReadingTime } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card
        className={`group h-full overflow-hidden border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] ${
          featured ? "md:flex" : ""
        }`}
      >
        <div
          className={`overflow-hidden ${
            featured ? "aspect-[16/10] md:w-1/2" : "aspect-[16/10]"
          }`}
        >
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-900 text-neutral-600">
              No image
            </div>
          )}
        </div>
        <CardContent
          className={`p-6 ${featured ? "flex flex-1 flex-col justify-center md:p-10" : ""}`}
        >
          <div className="mb-3 flex items-center gap-3">
            <Badge variant="outline" className="border-white/10 text-neutral-300">
              {post.category}
            </Badge>
            <span className="text-xs text-neutral-500">
              {formatDate(post.createdAt)} · {calculateReadingTime(post.content)} min read
            </span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className={`font-semibold text-white ${
                  featured ? "text-2xl md:text-3xl" : "text-lg"
                }`}
              >
                {post.title}
              </h3>
              <p
                className={`mt-2 text-neutral-400 ${
                  featured ? "text-base md:text-lg" : "line-clamp-2 text-sm"
                }`}
              >
                {post.excerpt}
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-500 transition-colors group-hover:text-white" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
