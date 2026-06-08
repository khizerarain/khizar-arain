import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-4 mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            {post.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {post.title}
          </h1>
          <p className="text-gray-300 max-w-3xl leading-8">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 text-sm text-gray-400">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {post.coverImage ? (
          <div className="overflow-hidden rounded-3xl mb-10 border border-white/10">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        ) : null}

        <article className="prose prose-invert max-w-none text-gray-200 prose-headings:text-white prose-a:text-blue-300 prose-a:no-underline prose-ul:list-disc prose-ul:pl-5">
          {post.content.split("\n\n").map((block, index) => {
            if (block.startsWith("# ")) {
              return (
                <h1 key={index} className="mt-12 mb-5 text-4xl font-semibold">
                  {block.replace("# ", "")}
                </h1>
              );
            }
            if (block.startsWith("## ")) {
              return (
                <h2 key={index} className="mt-10 mb-4 text-3xl font-semibold">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("### ")) {
              return (
                <h3 key={index} className="mt-8 mb-3 text-2xl font-semibold">
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.trim().startsWith("- ")) {
              return (
                <ul key={index} className="list-disc space-y-2">
                  {block
                    .split("\n")
                    .filter((line) => line.startsWith("- "))
                    .map((line, itemIndex) => (
                      <li key={itemIndex}>{line.replace("- ", "")}</li>
                    ))}
                </ul>
              );
            }
            return <p key={index}>{block}</p>;
          })}
        </article>

        <div className="mt-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/10"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    </main>
  );
}
