import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import MarkdownRenderer from "@/components/content/MarkdownRenderer";
import { Section } from "@/components/layout/Section";

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
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = await getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen pb-24">
      <Section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to writing
        </Link>

        <article className="mx-auto mt-10 max-w-2xl">
          <header>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {post.title}
            </h1>
            <time
              dateTime={post.createdAt}
              className="mt-4 block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
            >
              {formatDate(post.createdAt)}
            </time>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          </header>

          <div className="prose-custom mt-12">
            <MarkdownRenderer shiftHeadings={false}>{post.content}</MarkdownRenderer>
          </div>
        </article>

        {related.length > 0 && (
          <div className="mx-auto mt-20 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              More notes
            </p>
            <ul className="mt-6">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group block py-4"
                  >
                    <span className="text-base font-medium text-foreground transition-colors group-hover:text-foreground/70">
                      {item.title}
                    </span>
                    <time
                      dateTime={item.createdAt}
                      className="mt-1 block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {formatDate(item.createdAt)}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mx-auto mt-16 max-w-2xl">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to writing
          </Link>
        </div>
      </Section>
    </div>
  );
}
