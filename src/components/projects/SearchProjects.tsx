"use client";

import React, { useState } from "react";

export default function SearchProjects({
  onSearch,
}: {
  onSearch: (q: string) => void;
}) {
  const [q, setQ] = useState("");
  return (
    <div className="mb-4">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(q)}
        placeholder="Search projects..."
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );
}
