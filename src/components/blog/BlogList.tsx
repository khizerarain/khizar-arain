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
      <div className="mb-8 flex flex-col gap-4">
        <Input
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-11 rounded-full border-white/10 bg-white/[0.02] text-white placeholder:text-neutral-500 focus-visible:ring-white/20"
        />

        <div className="flex flex-wrap gap-2">
          <span className="py-2 text-sm text-neutral-500">Categories:</span>
          <button onClick={() => setCategory(null)}>
            <Badge
              variant={category === null ? "default" : "outline"}
              className={`cursor-pointer ${
                category === null
                  ? "bg-white text-black hover:bg-neutral-200"
                  : "border-white/10 text-neutral-300 hover:bg-white/5"
              }`}
            >
              All
            </Badge>
          </button>
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)}>
              <Badge
                variant={category === c ? "default" : "outline"}
                className={`cursor-pointer ${
                  category === c
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "border-white/10 text-neutral-300 hover:bg-white/5"
                }`}
              >
                {c}
              </Badge>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="py-2 text-sm text-neutral-500">Tags:</span>
          <button onClick={() => setTag(null)}>
            <Badge
              variant={tag === null ? "default" : "outline"}
              className={`cursor-pointer ${
                tag === null
                  ? "bg-white text-black hover:bg-neutral-200"
                  : "border-white/10 text-neutral-300 hover:bg-white/5"
              }`}
            >
              All
            </Badge>
          </button>
          {tags.map((t) => (
            <button key={t} onClick={() => setTag(t)}>
              <Badge
                variant={tag === t ? "default" : "outline"}
                className={`cursor-pointer ${
                  tag === t
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "border-white/10 text-neutral-300 hover:bg-white/5"
                }`}
              >
                {t}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] py-20 text-center text-neutral-400">
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
