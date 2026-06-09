"use client";

import React from "react";
import TechnologyBadge from "./TechnologyBadge";
import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <article className="border rounded-md overflow-hidden shadow-sm">
      {project.cover_image ? (
        // Use next/image in real app for optimization
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.cover_image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-100" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          {project.short_description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(project.technologies || []).slice(0, 6).map((t: string) => (
            <TechnologyBadge key={t} label={t} />
          ))}
        </div>
      </div>
    </article>
  );
}
