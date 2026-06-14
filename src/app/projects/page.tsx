import type { Metadata } from "next";
import {
  getAllProjects,
  getProjectCategories,
  getProjectTechnologies,
} from "@/lib/projects";
import ProjectsList from "@/components/projects/ProjectsList";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a selection of web development, e-commerce, and brand projects by Khizar Arain.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  const categories = await getProjectCategories();
  const technologies = await getProjectTechnologies();

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            A collection of work spanning frontend development, e-commerce, and
            brand experiences.
          </p>
        </div>

        <ProjectsList
          projects={projects}
          categories={categories}
          technologies={technologies}
        />
      </div>
    </div>
  );
}
