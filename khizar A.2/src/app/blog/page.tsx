import { Metadata } from "next";
import { Suspense } from "react";
import { getPublishedPosts, getBlogStats } from "@/lib/blog";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogSearch from "@/components/blog/BlogSearch";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogPagination from "@/components/blog/BlogPagination";
import FeaturedPosts from "@/components/blog/FeaturedPosts";

export const metadata: Metadata = {
  title: "Blog | Khizar Arain",
  description:
    "Read my latest articles about web development, technology, and software engineering.",
  openGraph: {
    title: "Blog | Khizar Arain",
    description: "Read my latest articles about web development and technology",
    type: "website",
  },
};

interface BlogPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    tag?: string;
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const page = parseInt(params.page || "1", 10);
  const search = params.search;
  const category = params.category;
  const tag = params.tag;

  const [postsData, statsData] = await Promise.all([
    getPublishedPosts({
      search,
      category,
      tag,
      page,
      limit: 9,
    }),
    getBlogStats(),
  ]);

  const hasFilters = search || category || tag;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Insights, tutorials, and thoughts on web development and technology.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search */}
              <div className="mb-8">
                <BlogSearch />
              </div>

              {/* Posts */}
              {postsData.success ? (
                <>
                  <div className="mb-8">
                    <p className="text-gray-600">
                      {hasFilters
                        ? `Found ${postsData.total} post${
                            postsData.total !== 1 ? "s" : ""
                          }`
                        : `${postsData.total} post${
                            postsData.total !== 1 ? "s" : ""
                          } published`}
                    </p>
                  </div>

                  <BlogGrid
                    posts={postsData.data}
                    columns={1}
                    emptyMessage={
                      hasFilters
                        ? "No posts match your filters. Try adjusting your search."
                        : "No blog posts yet."
                    }
                  />

                  {postsData.totalPages > 1 && (
                    <BlogPagination
                      currentPage={postsData.page}
                      totalPages={postsData.totalPages}
                    />
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">Failed to load posts</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <BlogCategories categories={statsData.categories} />
              </div>

              {/* Stats */}
              <div className="mt-6 bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Blog Stats
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Published Posts:</span>
                    <span className="font-semibold text-gray-900">
                      {statsData.publishedPosts}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Draft Posts:</span>
                    <span className="font-semibold text-gray-900">
                      {statsData.draftPosts}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Categories:</span>
                    <span className="font-semibold text-gray-900">
                      {statsData.categories.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
