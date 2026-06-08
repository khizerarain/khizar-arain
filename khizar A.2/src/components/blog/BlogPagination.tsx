"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  baseUrl = "/blog",
}: BlogPaginationProps) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) {
    return null;
  }

  const getPaginationUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${baseUrl}?${params.toString()}`;
  };

  const pageNumbers = [];
  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  if (startPage > 1) {
    pageNumbers.push(1);
    if (startPage > 2) {
      pageNumbers.push("...");
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pageNumbers.push("...");
    }
    pageNumbers.push(totalPages);
  }

  return (
    <nav className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      {currentPage > 1 && (
        <Link
          href={getPaginationUrl(currentPage - 1)}
          className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-semibold"
        >
          ← Previous
        </Link>
      )}

      {/* Page Numbers */}
      <div className="flex gap-2">
        {pageNumbers.map((page, idx) =>
          page === "..." ? (
            <span key={`ellipsis-${idx}`} className="px-2 py-2 text-gray-500">
              {page}
            </span>
          ) : (
            <Link
              key={page}
              href={getPaginationUrl(page as number)}
              className={`px-3 py-2 rounded-lg transition-colors font-semibold ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {page}
            </Link>
          ),
        )}
      </div>

      {/* Next Button */}
      {currentPage < totalPages && (
        <Link
          href={getPaginationUrl(currentPage + 1)}
          className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-semibold"
        >
          Next →
        </Link>
      )}
    </nav>
  );
}
