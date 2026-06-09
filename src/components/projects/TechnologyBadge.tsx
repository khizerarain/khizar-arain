"use client";

import React from "react";

export default function TechnologyBadge({ label }: { label: string }) {
  return <span className="px-2 py-1 bg-gray-200 text-sm rounded">{label}</span>;
}
