"use client";

import React, { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/types/blog";

interface BlogListProps {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
}

const filterBadge = "cursor-pointer rounded-full px-3 py-1 transition-colors";
const inactiveBadge = "hover:bg-accent/60";

export default function BlogList({ posts, categories, tags }: BlogListProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory = !category || post.category === category;
      const matchesTag = !tag || post.tags.includes(tag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [posts, search, category, tag]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5">
        <Input
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-11 rounded-full border-border bg-card px-5 text-foreground placeholder:text-muted-foreground"
        />

        <div className="flex flex-wrap items-center gap-2">
          <span className="py-2 text-sm text-muted-foreground">Categories:</span>
          <button
            type="button"
            onClick={() => setCategory(null)}
            className="rounded-full"
            aria-pressed={category === null}
          >
            <Badge
              variant={category === null ? "default" : "outline"}
              className={`${filterBadge} ${category === null ? "" : inactiveBadge}`}
            >
              All
            </Badge>
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className="rounded-full"
              aria-pressed={category === c}
            >
              <Badge
                variant={category === c ? "default" : "outline"}
                className={`${filterBadge} ${category === c ? "" : inactiveBadge}`}
              >
                {c}
              </Badge>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="py-2 text-sm text-muted-foreground">Tags:</span>
          <button
            type="button"
            onClick={() => setTag(null)}
            className="rounded-full"
            aria-pressed={tag === null}
          >
            <Badge
              variant={tag === null ? "default" : "outline"}
              className={`${filterBadge} ${tag === null ? "" : inactiveBadge}`}
            >
              All
            </Badge>
          </button>
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              className="rounded-full"
              aria-pressed={tag === t}
            >
              <Badge
                variant={tag === t ? "default" : "outline"}
                className={`${filterBadge} ${tag === t ? "" : inactiveBadge}`}
              >
                {t}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card py-20 text-center text-muted-foreground">
          No articles match your filters.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
