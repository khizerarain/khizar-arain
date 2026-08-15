import React from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { experience } from "@/lib/projects-showcase";

export function ExperienceTimeline() {
  return (
    <ol className="relative border-l border-border pl-6 md:pl-8">
      {experience.map((role, index) => (
        <li key={`${role.role}-${role.period}`} className="relative pb-12 last:pb-0">
          <span
            className="absolute top-1.5 -left-[25px] h-2.5 w-2.5 rounded-full border border-foreground/30 bg-background md:-left-[33px]"
            aria-hidden="true"
          />
          <ScrollReveal delay={Math.min(index * 0.06, 0.18)}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-lg font-medium tracking-tight text-foreground">
                {role.role}
                <span className="text-muted-foreground"> · {role.company}</span>
              </h3>
              <p className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {role.period}
              </p>
            </div>

            <ul className="mt-4 space-y-2">
              {role.bullets.map((bullet) => {
                const isPlaceholder = bullet.startsWith("[ADD REAL DETAIL]");
                return (
                  <li key={bullet} className="flex gap-2.5 text-sm">
                    <span
                      className="mt-2.5 h-px w-3 shrink-0 bg-foreground/40"
                      aria-hidden="true"
                    />
                    <span
                      className={
                        isPlaceholder
                          ? "italic text-muted-foreground/70"
                          : "text-muted-foreground"
                      }
                    >
                      {bullet}
                    </span>
                  </li>
                );
              })}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2">
              {role.stack.map((tech) => (
                <li key={tech}>
                  <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </li>
      ))}
    </ol>
  );
}
