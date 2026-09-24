import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export const meta = {
  description: "Project card linking to a case study.",
} satisfies ComponentPreviewMeta;

export default async function ProjectCardPreview() {
  const [project] = await getAllProjects();
  if (!project) return <p className="text-sm text-muted-foreground">No projects yet.</p>;

  return (
    <div className="w-full max-w-sm">
      <ProjectCard project={project} />
    </div>
  );
}
