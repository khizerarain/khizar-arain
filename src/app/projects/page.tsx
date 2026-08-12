import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import {
  getAllProjects,
  getProjectCategories,
  getProjectTechnologies,
} from "@/lib/projects";
import ProjectsList from "@/components/projects/ProjectsList";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MnemoLogo } from "@/components/mnemo/MnemoLogo";
import { MNEMO_LINKS, MNEMO_IMAGES } from "@/components/mnemo/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a selection of web development, AI, and product design projects by Khizar Arain. Featuring MNEMO, an AI-powered learning platform.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  const categories = await getProjectCategories();
  const technologies = await getProjectTechnologies();

  const mnemo = projects.find((p) => p.slug === "mnemo");
  const otherProjects = projects.filter((p) => p.slug !== "mnemo");

  return (
    <div className="min-h-screen pb-24">
      <div className="mx-auto max-w-5xl px-6 pt-32 md:pt-40">
        <header className="max-w-2xl">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A collection of work spanning AI education, frontend engineering, and product design.
          </p>
        </header>

        {mnemo && (
          <section className="mt-16 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="p-6 md:p-10">
                <Badge
                  variant="outline"
                  className="mb-6 border-violet-600/25 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700"
                >
                  <Sparkles className="mr-1.5 h-3 w-3" aria-hidden="true" />
                  Flagship Project
                </Badge>

                <MnemoLogo className="mb-6" size={36} />

                <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {mnemo.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {mnemo.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {mnemo.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                  <Button size="lg" className="h-11 rounded-full px-6" asChild>
                    <Link href="/projects/mnemo">
                      Explore MNEMO
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-11 rounded-full px-6"
                    asChild
                  >
                    <Link href={MNEMO_LINKS.liveDemo} target="_blank" rel="noreferrer">
                      Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>

              <Link
                href="/projects/mnemo"
                className="group relative m-2 block aspect-[16/10] overflow-hidden rounded-xl bg-secondary"
              >
                <Image
                  src={MNEMO_IMAGES.dashboard}
                  alt="The MNEMO dashboard showing quiz progress and retention stats"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-white">Live Product</span>
                </div>
              </Link>
            </div>
          </section>
        )}

        <div className="mt-20 mb-8 flex items-center gap-4">
          <Eyebrow>More Projects</Eyebrow>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <ProjectsList
          projects={otherProjects}
          categories={categories}
          technologies={technologies}
        />
      </div>
    </div>
  );
}
