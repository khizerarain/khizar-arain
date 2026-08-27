"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <p className="mt-16 text-base text-muted-foreground">
        No notes yet. Add a markdown file to{" "}
        <code className="font-mono text-sm">content/blog/</code>.
      </p>
    );
  }

  return (
    <ul className="mt-8 md:mt-10">
      {posts.map((post, index) => (
        <li key={post.slug}>
          <ScrollReveal delay={Math.min(index * 0.05, 0.25)}>
            <Link href={`/blog/${post.slug}`} className="group block py-8 md:py-10">
              <h2 className="max-w-2xl text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                {post.title}
              </h2>
              <time
                dateTime={post.createdAt}
                className="mt-2 block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
              >
                {formatDate(post.createdAt)}
              </time>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </Link>
          </ScrollReveal>
        </li>
      ))}
    </ul>
  );
}
