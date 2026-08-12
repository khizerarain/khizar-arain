import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { formatDate, calculateReadingTime } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownRenderer from "@/components/content/MarkdownRenderer";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = await getRelatedPosts(slug, 2);

  return (
    <div className="min-h-screen pb-24">
      <div className="mx-auto max-w-3xl px-6 pt-32 md:pt-40">
        <Button
          variant="ghost"
          size="sm"
          className="mb-10 -ml-3 rounded-full"
          asChild
        >
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Back to Blog
          </Link>
        </Button>

        <div className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="rounded-full px-3 py-1">
              {post.category}
            </Badge>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {formatDate(post.createdAt)} · {calculateReadingTime(post.content)}{" "}
              min read
            </span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </div>

        {post.coverImage && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={post.coverImage}
              alt={`Cover image for ${post.title}`}
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="mb-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <article className="prose-custom">
          <MarkdownRenderer>{post.content}</MarkdownRenderer>
        </article>

        <Separator className="my-12" />

        {related.length > 0 && (
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
              Related Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <Link key={item.id} href={`/blog/${item.slug}`} className="block h-full">
                  <Card className="h-full gap-0 overflow-hidden rounded-2xl border border-border bg-card py-0 ring-0 transition-colors hover:border-foreground/25">
                    <div className="aspect-video overflow-hidden">
                      {item.coverImage ? (
                        <img
                          src={item.coverImage}
                          alt={`Cover image for ${item.title}`}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-secondary" />
                      )}
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {item.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
