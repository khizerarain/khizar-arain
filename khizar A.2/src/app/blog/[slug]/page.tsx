import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";
import RelatedPosts from "@/components/blog/RelatedPosts";
import {
  formatDate,
  calculateReadingTime,
  extractPlainText,
} from "@/utils/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://khizararain.com";
  const imageUrl = post.cover_image || `${siteUrl}/og-image.jpg`;

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: "Khizar Arain" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
      authors: ["Khizar Arain"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `${siteUrl}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
    canonical: `${siteUrl}/blog/${post.slug}`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const { data: post, error } = await getPostBySlug(slug);

  if (!post || error) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.content);
  const relatedPosts = await getRelatedPosts(post.id, 3);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Article Header */}
      <article className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Category */}
          {post.category && (
            <Link
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              className="inline-block mb-4"
            >
              <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors">
                {post.category}
              </span>
            </Link>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <time dateTime={post.created_at}>
              {formatDate(post.created_at)}
            </time>
            <span>•</span>
            <span>{readingTime} min read</span>
            {post.updated_at !== post.created_at && (
              <>
                <span>•</span>
                <span>Updated {formatDate(post.updated_at)}</span>
              </>
            )}
          </div>
        </div>

        {/* Cover Image */}
        {post.cover_image && (
          <div className="relative h-96 md:h-[500px] bg-gray-200">
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </article>

      {/* Article Content */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {/* Render markdown content */}
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
              <div className="prose max-w-none leading-relaxed">
                {post.content.split("\n\n").map((paragraph, idx) => {
                  // Simple markdown rendering
                  if (paragraph.startsWith("# ")) {
                    return (
                      <h1 key={idx} className="text-3xl font-bold mt-8 mb-4">
                        {paragraph.substring(2)}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">
                        {paragraph.substring(3)}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={idx} className="text-xl font-bold mt-6 mb-3">
                        {paragraph.substring(4)}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <ul key={idx} className="list-disc list-inside mb-4">
                        {paragraph
                          .split("\n")
                          .filter((line) => line.startsWith("- "))
                          .map((line, i) => (
                            <li key={i} className="mb-2">
                              {line.substring(2)}
                            </li>
                          ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-600 mb-4">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Info */}
          <div className="mt-12 pt-12 border-t border-gray-200 bg-blue-50 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                KA
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Khizar Arain
                </h3>
                <p className="text-gray-600">
                  Full-stack developer passionate about building great web
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedPosts posts={relatedPosts} />
        </div>
      )}

      {/* Back to Blog */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    </main>
  );
}
