import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { CategoryBadge } from "@/components/projects/ProjectBadges";
import { showcaseProjects } from "@/lib/projects-showcase";

export function BuildingList() {
  return (
    <ul>
      {showcaseProjects.map((project, index) => (
        <li key={project.slug}>
          <ScrollReveal delay={Math.min(index * 0.04, 0.2)}>
            <div className="grid gap-3 border-t border-border py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:items-start md:gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  <CategoryBadge category={project.category} />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.tag}
                </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {project.liveUrl &&
                    !project.liveUrl.includes("example.com") && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Live Demo
                        <ArrowUpRight
                          className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    )}

                  {project.pypiUrl && (
                    <a
                      href={project.pypiUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      PyPI
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  )}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                  >
                    Case study
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </li>
      ))}
    </ul>
  );
}
