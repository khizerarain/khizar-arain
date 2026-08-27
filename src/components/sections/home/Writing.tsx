import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getRecentPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export async function Writing() {
  const posts = await getRecentPosts(5);

  if (posts.length === 0) return null;

  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Eyebrow>Writing</Eyebrow>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          All posts
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      <ul className="mt-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="text-base font-medium text-foreground transition-colors group-hover:text-foreground/70">
                {post.title}
              </span>
              <time
                dateTime={post.createdAt}
                className="shrink-0 text-sm text-muted-foreground tabular-nums"
              >
                {formatDate(post.createdAt)}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
