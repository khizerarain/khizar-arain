"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deletePost } from "@/lib/blog";

interface AdminPostActionsProps {
  postId: string;
}

export default function AdminPostActions({ postId }: AdminPostActionsProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (
      !confirm(
        "Are you sure you want to delete this post? This action cannot be undone.",
      )
    ) {
      return;
    }

    setIsDeleting(true);
    const result = await deletePost(postId);

    if (result.success) {
      router.refresh();
    } else {
      alert(result.error || "Failed to delete post");
    }
    setIsDeleting(false);
  };

  return (
    <div className="flex gap-2 justify-end">
      <Link
        href={`/admin/posts/${postId}/edit`}
        className="inline-block px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
      >
        Edit
      </Link>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="px-3 py-1 text-sm font-medium text-red-600 hover:text-red-700 border border-red-600 rounded hover:bg-red-50 disabled:opacity-50 transition-colors"
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}
