import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/projects";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownRenderer from "@/components/content/MarkdownRenderer";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: project.coverImage ? [project.coverImage] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = await getRelatedProjects(slug, 2);

  const pypiInfo =
    project.slug === "utopia"
      ? {
          url: "https://pypi.org/project/utopia-analyzer",
          install: "pip install utopia-analyzer",
        }
      : project.slug === "atlas"
        ? {
            url: "https://pypi.org/project/atlas-world-intel",
            install: "pip install atlas-world-intel",
          }
        : project.slug === "sentinel"
          ? {
              url: "https://pypi.org/project/sentinel-recon",
              install: "pip install sentinel-recon",
            }
          : null;

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <Button
          variant="ghost"
          size="sm"
          className="mb-8 -ml-3 text-neutral-400 hover:text-white"
          asChild
        >
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="mb-8">
          <Badge variant="outline" className="border-white/10 text-neutral-300">
            {project.category}
          </Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-neutral-400">
            {project.shortDescription}
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Published {formatDate(project.createdAt)}
          </p>
        </div>

        {project.coverImage && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="mb-10 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-sm text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.liveDemoUrl && (
            <Button
              className="rounded-full bg-white text-black hover:bg-neutral-200"
              asChild
            >
              <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              className="rounded-full border-white/10 bg-transparent text-white hover:bg-white/5"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
                View Code
              </a>
            </Button>
          )}
        </div>

        {pypiInfo && (
          <div className="mt-4 w-full rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-neutral-300">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-white">PyPI:</span>
              <a
                href={pypiInfo.url}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 transition-colors hover:text-cyan-300"
              >
                {pypiInfo.url}
              </a>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="font-medium text-white">Install:</span>
              <code className="rounded bg-white/10 px-2 py-1 font-mono text-xs text-neutral-200">
                {pypiInfo.install}
              </code>
            </div>
          </div>
        )}

        <Separator className="my-12 bg-white/10" />

        <article className="prose-custom">
          <MarkdownRenderer>{project.content}</MarkdownRenderer>
        </article>

        {project.galleryImages.length > 0 && (
          <>
            <Separator className="my-12 bg-white/10" />
            <div>
              <h2 className="mb-6 text-2xl font-bold text-white">Gallery</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-white/10"
                  >
                    <img
                      src={image}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {related.length > 0 && (
          <>
            <Separator className="my-12 bg-white/10" />
            <div>
              <h2 className="mb-6 text-2xl font-bold text-white">
                Related Projects
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((item) => (
                  <Link key={item.id} href={`/projects/${item.slug}`}>
                    <Card className="overflow-hidden border-white/10 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.04]">
                      <div className="aspect-video overflow-hidden">
                        {item.coverImage ? (
                          <img
                            src={item.coverImage}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full bg-neutral-900" />
                        )}
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-sm text-neutral-400">
                          {item.shortDescription}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
