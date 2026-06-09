import React from "react";
import { supabase } from "../../../lib/supabase";
import ProjectDetails from "../../../components/projects/ProjectDetails";

export const revalidate = 60;

interface Props {
  params: { slug: string };
}

export default async function ProjectSlugPage({ params }: Props) {
  const { slug } = params;
  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!data) {
    return <div className="p-6">Project not found.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <ProjectDetails project={data} />
    </main>
  );
}
