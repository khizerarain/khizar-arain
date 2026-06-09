"use client";

import React from "react";
import ProjectGallery from "./ProjectGallery";

export default function ProjectDetails({ project }: { project: any }) {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      {project.cover_image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.cover_image}
          alt={project.title}
          className="w-full h-64 object-cover rounded"
        />
      ) : null}

      <div className="mt-4 prose max-w-none">
        <p>{project.full_description || project.short_description}</p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">Technologies</h3>
        <div className="flex gap-2 mt-2">
          {(project.technologies || []).map((t: string) => (
            <span key={t} className="px-2 py-1 bg-gray-100 rounded text-sm">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        {project.github_url ? (
          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            View on GitHub
          </a>
        ) : null}
        {project.live_demo_url ? (
          <a
            href={project.live_demo_url}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Live demo
          </a>
        ) : null}
      </div>

      <div className="mt-8">
        <ProjectGallery images={project.gallery_images || []} />
      </div>
    </article>
  );
}
