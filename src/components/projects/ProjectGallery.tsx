"use client";

import React from "react";

export default function ProjectGallery({ images }: { images?: string[] }) {
  if (!images || images.length === 0) return null;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={src}
          alt={`Gallery ${i}`}
          className="w-full h-48 object-cover rounded"
        />
      ))}
    </div>
  );
}
