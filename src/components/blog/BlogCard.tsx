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
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <Card
        className={`group h-full gap-0 overflow-hidden rounded-2xl border border-border bg-card py-0 ring-0 transition-colors duration-300 hover:border-foreground/25 ${
          featured ? "md:flex md:flex-row" : ""
        }`}
      >
        <div
          className={`overflow-hidden ${
            featured ? "aspect-[16/10] md:w-1/2 md:shrink-0" : "aspect-[16/10]"
          }`}
        >
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={`Cover image for ${post.title}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary text-sm text-muted-foreground">
              No image
            </div>
          )}
        </div>
        <CardContent
          className={`p-6 ${featured ? "flex flex-1 flex-col justify-center md:p-10" : ""}`}
        >
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="rounded-full px-3 py-1">
              {post.category}
            </Badge>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {formatDate(post.createdAt)} · {calculateReadingTime(post.content)} min read
            </span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className={`font-semibold tracking-tight text-foreground ${
                  featured ? "text-2xl md:text-3xl" : "text-lg"
                }`}
              >
                {post.title}
              </h3>
              <p
                className={`mt-2 leading-relaxed text-muted-foreground ${
                  featured ? "text-base md:text-lg" : "line-clamp-2 text-sm"
                }`}
              >
                {post.excerpt}
              </p>
            </div>
            <ArrowUpRight
              className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
              aria-hidden="true"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
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
