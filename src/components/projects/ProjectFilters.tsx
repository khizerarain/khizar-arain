"use client";

import React from "react";

export default function ProjectFilters({
  categories = [],
  technologies = [],
  onFilter,
}: any) {
  return (
    <div className="flex gap-4 mb-6">
      <select onChange={(e) => onFilter({ category: e.target.value })}>
        <option value="">All Categories</option>
        {categories.map((c: string) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select onChange={(e) => onFilter({ technology: e.target.value })}>
        <option value="">All Technologies</option>
        {technologies.map((t: string) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}
