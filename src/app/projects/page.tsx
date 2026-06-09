import React from "react";
import { supabase } from "../../lib/supabase";
import ProjectGrid from "../../components/projects/ProjectGrid";
import FeaturedProjects from "../../components/projects/FeaturedProjects";

export const revalidate = 60; // cache for 60s

export default async function ProjectsPage() {
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <FeaturedProjects
        projects={(projects || []).filter((p: any) => p.featured)}
      />
      <div style={{ height: 28 }} />
      <ProjectGrid projects={projects || []} />
    </main>
  );
}
