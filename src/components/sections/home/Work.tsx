import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { featuredWork, mnemoDemoUrl } from "@/lib/site";

const mnemoTags = [
  "AI Powered",
  "Interactive Quizzes",
  "Modern Dashboard",
  "Real-time Updates",
];

export function Work() {
  return (
    <Section id="work" className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Eyebrow>Selected work</Eyebrow>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          All projects
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Flagship */}
      <ScrollReveal className="mt-8">
        <article className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-foreground/20 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Flagship
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            MNEMO
          </h3>
          <p className="mt-2 text-base text-muted-foreground">
            AI-powered learning platform
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A neuroscience-inspired learning platform that turns any material
            into interactive quizzes, tracks what you actually retain, and
            adapts as you go.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {mnemoTags.map((tag) => (
              <li key={tag}>
                <Badge variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="rounded-full px-6" asChild>
              <Link href="/projects/mnemo">
                Explore Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" className="rounded-full px-6" asChild>
              <a href={mnemoDemoUrl} target="_blank" rel="noreferrer">
                Live Demo
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </article>
      </ScrollReveal>

      {/* List */}
      <ul className="mt-14">
        {featuredWork.map((project, index) => (
          <li key={project.slug}>
            <ScrollReveal delay={Math.min(index * 0.04, 0.2)}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid gap-2 border-t border-border py-6 transition-colors hover:border-foreground/25 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8"
              >
                <div>
                  <h3 className="flex items-center gap-1.5 text-lg font-medium tracking-tight text-foreground">
                    {project.name}
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {project.tag}
                  </p>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {project.pitch}
                  </p>
                  {project.meta && (
                    <p className="mt-2 font-mono text-xs text-muted-foreground/80">
                      {project.meta}
                    </p>
                  )}
                </div>
              </Link>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
