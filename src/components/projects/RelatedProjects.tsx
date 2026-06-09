"use client";

import React from "react";
import Link from "next/link";

export default function RelatedProjects({ projects }: { projects?: any[] }) {
  if (!projects || projects.length === 0) return null;
  return (
    <div className="mt-8">
      <h4 className="font-semibold mb-3">Related Projects</h4>
      <div className="flex gap-3 flex-wrap">
        {projects.map((p) => (
          <Link
            key={p.id}
            href={`/projects/${p.slug}`}
            className="px-3 py-2 bg-gray-100 rounded"
          >
            {p.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
