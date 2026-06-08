import { Metadata } from "next";
import Link from "next/link";
import { getPostById } from "@/lib/blog";
import AdminPostForm from "@/components/admin/AdminPostForm";

export const metadata: Metadata = {
  title: "Edit Post | Admin | Khizar Arain",
  robots: "noindex, nofollow",
};

interface EditPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/admin/posts"
              className="text-blue-600 hover:text-blue-700"
            >
              ← Back to Posts
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Edit Post
          </h1>
          <p className="text-gray-600 mt-1">Update your blog post</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <AdminPostForm postId={id} />
          </div>
        </div>
      </section>
    </main>
  );
}
