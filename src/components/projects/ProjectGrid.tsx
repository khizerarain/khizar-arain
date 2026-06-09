"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }: { projects: any[] }) {
  if (!projects || projects.length === 0) return <div>No projects found.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
