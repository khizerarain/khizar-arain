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
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <Button
          variant="ghost"
          size="sm"
          className="mb-8 -ml-3 text-neutral-400 hover:text-white"
          asChild
        >
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="border-white/10 text-neutral-300">
              {post.category}
            </Badge>
            <span className="text-sm text-neutral-500">
              {formatDate(post.createdAt)} · {calculateReadingTime(post.content)}{" "}
              min read
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-neutral-400">{post.excerpt}</p>
        </div>

        {post.coverImage && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="mb-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-sm text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <article className="prose-custom">
          <MarkdownRenderer>{post.content}</MarkdownRenderer>
        </article>

        <Separator className="my-12 bg-white/10" />

        {related.length > 0 && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-white">
              Related Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <Link key={item.id} href={`/blog/${item.slug}`}>
                  <Card className="overflow-hidden border-white/10 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.04]">
                    <div className="aspect-video overflow-hidden">
                      {item.coverImage ? (
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-neutral-900" />
                      )}
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-neutral-400">
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
