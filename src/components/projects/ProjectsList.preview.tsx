import type { ComponentPreviewMeta } from "@/lib/component-preview";
import {
  getAllProjects,
  getProjectCategories,
  getProjectTechnologies,
} from "@/lib/projects";
import ProjectsList from "./ProjectsList";

export const meta = {
  description: "Filterable grid of project cards.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default async function ProjectsListPreview() {
  const [projects, categories, technologies] = await Promise.all([
    getAllProjects(),
    getProjectCategories(),
    getProjectTechnologies(),
  ]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <ProjectsList
        projects={projects}
        categories={categories}
        technologies={technologies}
      />
    </div>
  );
}
