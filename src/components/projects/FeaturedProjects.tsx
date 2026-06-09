"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects({ projects }: { projects: any[] }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
