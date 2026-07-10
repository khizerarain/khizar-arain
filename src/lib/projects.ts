import { readMarkdownFiles } from "./content";
import type { Project, ProjectFrontmatter } from "@/types/project";

function parseProject({
  frontmatter,
  content,
  slug,
}: {
  frontmatter: ProjectFrontmatter;
  content: string;
  slug: string;
}): Project {
  return {
    id: slug,
    title: frontmatter.title,
    slug: frontmatter.slug || slug,
    shortDescription: frontmatter.shortDescription,
    content,
    coverImage: frontmatter.coverImage,
    galleryImages: frontmatter.galleryImages || [],
    technologies: frontmatter.technologies || [],
    category: frontmatter.category,
    githubUrl: frontmatter.githubUrl,
    pypiUrl: frontmatter.pypiUrl,
    pypiInstallCommand: frontmatter.pypiInstallCommand,
    liveDemoUrl: frontmatter.liveDemoUrl,
    featured: frontmatter.featured ?? false,
    status: frontmatter.status || "published",
    createdAt: frontmatter.createdAt,
  };
}

export async function getAllProjects(): Promise<Project[]> {
  const files = await readMarkdownFiles<ProjectFrontmatter>("content/projects");
  const projects = files.map(parseProject);

  return projects.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getAllProjects();
  return projects.find((project) => project.slug === slug) || null;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.featured);
}

export async function getRecentProjects(limit = 3): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.slice(0, limit);
}

export async function getProjectCategories(): Promise<string[]> {
  const projects = await getAllProjects();
  return Array.from(new Set(projects.map((project) => project.category)));
}

export async function getProjectTechnologies(): Promise<string[]> {
  const projects = await getAllProjects();
  const technologies = projects.flatMap((project) => project.technologies);
  return Array.from(new Set(technologies));
}

export async function getRelatedProjects(
  currentSlug: string,
  limit = 2,
): Promise<Project[]> {
  const projects = await getAllProjects();
  const current = projects.find((project) => project.slug === currentSlug);
  if (!current) return [];

  return projects
    .filter((project) => project.slug !== currentSlug)
    .filter(
      (project) =>
        project.category === current.category ||
        project.technologies.some((tech) =>
          current.technologies.includes(tech),
        ),
    )
    .slice(0, limit);
}
