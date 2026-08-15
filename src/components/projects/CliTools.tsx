import React from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { CopyCommand } from "@/components/CopyCommand";
import { GitHubIcon, PyPIIcon } from "@/components/icons/BrandIcons";
import type { CliTool } from "@/lib/projects-showcase";

export function CliTools({ tools }: { tools: CliTool[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {tools.map((tool, index) => (
        <ScrollReveal key={tool.name} delay={Math.min(index * 0.04, 0.16)}>
          <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20">
            <div className="flex flex-wrap items-center gap-2">
              <PyPIIcon
                className="h-4 w-4 text-muted-foreground"
                aria-hidden="true"
              />
              <h3 className="font-mono text-base font-medium text-foreground">
                {tool.name}
              </h3>
              {tool.version && (
                <Badge
                  variant="outline"
                  className="rounded-full px-2 font-mono text-[11px]"
                >
                  v{tool.version}
                </Badge>
              )}
            </div>

            <a
              href={tool.pypiUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 font-mono text-xs text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
            >
              pypi.org/project/{tool.name}
            </a>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {tool.description}
            </p>

            {tool.downloads ? (
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="font-medium text-foreground tabular-nums">
                  {tool.downloads}
                </span>
                downloads
              </p>
            ) : null}

            <div className="mt-4">
              <CopyCommand command={tool.install} />
            </div>

            <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Features
            </h4>
            <ul className="mt-3 space-y-2">
              {tool.features.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-sm">
                  <span
                    className="mt-2.5 h-px w-3 shrink-0 bg-foreground/40"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2">
              {tool.stack.map((tech) => (
                <li key={tech}>
                  <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5">
              <a
                href={tool.pypiUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
              >
                PyPI
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={tool.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                GitHub
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
