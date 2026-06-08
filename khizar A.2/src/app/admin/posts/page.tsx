import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import AdminPostsList from "@/components/admin/AdminPostsList";

export const metadata: Metadata = {
  title: "Admin - Blog Posts | Khizar Arain",
  robots: "noindex, nofollow",
};

interface AdminPostsPageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
}

export default async function AdminPostsPage({
  searchParams,
}: AdminPostsPageProps) {
  const params = await searchParams;
  const page = parseInt(params.page || "1", 10);
  const search = params.search;

  const postsData = await getAllPosts({
    page,
    limit: 10,
    search,
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Blog Posts
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your blog posts and create new content
              </p>
            </div>

            <Link
              href="/admin/posts/new"
              className="mt-4 sm:mt-0 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              + New Post
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {postsData.success ? (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Total: {postsData.total} post
                  {postsData.total !== 1 ? "s" : ""}
                </p>
              </div>

              <AdminPostsList posts={postsData.data} />

              {/* Pagination */}
              {postsData.totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: postsData.totalPages }).map(
                    (_, idx) => {
                      const pageNum = idx + 1;
                      return (
                        <Link
                          key={pageNum}
                          href={`/admin/posts?page=${pageNum}${
                            search
                              ? `&search=${encodeURIComponent(search)}`
                              : ""
                          }`}
                          className={`px-3 py-2 rounded transition-colors ${
                            postsData.page === pageNum
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                          }`}
                        >
                          {pageNum}
                        </Link>
                      );
                    },
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-500">Failed to load posts</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
