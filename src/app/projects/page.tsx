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
            A collection of work spanning AI education, frontend engineering, and product design.
          </p>
        </div>

        {mnemo && (
          <div className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-2">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="p-6 md:p-10">
                <Badge
                  variant="outline"
                  className="mb-6 border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
                >
                  <Sparkles className="mr-1.5 h-3 w-3" />
                  Flagship Project
                </Badge>

                <MnemoLogo className="mb-6" size={36} />

                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {mnemo.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-neutral-400">
                  {mnemo.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {mnemo.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-11 rounded-full bg-white px-6 text-sm font-medium text-black hover:bg-neutral-200"
                    asChild
                  >
                    <Link href="/projects/mnemo">
                      Explore MNEMO
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-11 rounded-full border-white/10 bg-transparent px-6 text-sm font-medium text-white hover:bg-white/5"
                    asChild
                  >
                    <Link href={MNEMO_LINKS.liveDemo} target="_blank" rel="noreferrer">
                      Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <Link href="/projects/mnemo" className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-900 lg:rounded-3xl">
                <Image
                  src={MNEMO_IMAGES.dashboard}
                  alt="MNEMO Dashboard"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium text-white">Live Product</span>
                </div>
              </Link>
            </div>
          </div>
        )}

        <div className="mb-8 flex items-center gap-4">
          <span className="text-sm font-medium uppercase tracking-widest text-neutral-500">More Projects</span>
          <div className="h-px flex-1 bg-white/10" />
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
