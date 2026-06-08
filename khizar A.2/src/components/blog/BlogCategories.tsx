"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface BlogCategoriesProps {
  categories: string[];
  showAll?: boolean;
}

export default function BlogCategories({
  categories,
  showAll = true,
}: BlogCategoriesProps) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {showAll && (
          <Link
            href="/blog"
            className={`block px-4 py-2 rounded-lg transition-colors ${
              !activeCategory
                ? "bg-blue-100 text-blue-900 font-semibold"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Posts
          </Link>
        )}

        {categories.map((category) => (
          <Link
            key={category}
            href={`/blog?category=${encodeURIComponent(category)}`}
            className={`block px-4 py-2 rounded-lg transition-colors ${
              activeCategory === category
                ? "bg-blue-100 text-blue-900 font-semibold"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
