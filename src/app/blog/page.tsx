import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Khizar Arain",
  description:
    "Read the latest articles on web design, development, and personal branding.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-6 text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Insights on design, development, and building a standout personal
            brand.
          </h1>
          <p className="mx-auto max-w-2xl text-gray-300 text-base md:text-lg leading-8">
            Explore practical articles, case studies, and front-end best
            practices written for ambitious creators.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-shadow duration-300 hover:border-blue-400/40 hover:shadow-[0_30px_80px_-40px_rgba(59,130,246,0.6)]"
            >
              {post.coverImage ? (
                <div className="overflow-hidden rounded-3xl mb-5 h-52 bg-slate-900">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              ) : null}
              <div className="space-y-4">
                <div className="text-sm text-blue-300 uppercase tracking-[0.24em] font-semibold">
                  {post.category}
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {post.title}
                </h2>
                <p className="text-gray-300 leading-7">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white"
                  >
                    Read article
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
