import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  CategoryBadge,
  StatusBadge,
} from "@/components/projects/ProjectBadges";
import { showcaseProjects } from "@/lib/projects-showcase";

export function FeaturedProjectCards() {
  return (
    <div className="grid gap-5">
      {showcaseProjects.map((project, index) => (
        <ScrollReveal key={project.slug} delay={Math.min(index * 0.03, 0.15)}>
          <article className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 md:p-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              <StatusBadge status={project.status} />
              <CategoryBadge category={project.category} />
            </div>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {project.detail}
            </p>

            {project.liveUrl && !project.liveUrl.includes("example.com") && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-mono text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
              >
                {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </a>
            )}

            {project.install && (
              <p className="mt-4 font-mono text-sm text-muted-foreground">
                {project.install}
              </p>
            )}

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Key features
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm">
                      <span
                        className="mt-2.5 h-px w-3 shrink-0 bg-foreground/40"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Stack
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
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

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
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
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
