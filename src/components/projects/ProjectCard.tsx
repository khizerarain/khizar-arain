import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <Card className="group h-full gap-0 overflow-hidden rounded-2xl border border-border bg-card py-0 ring-0 transition-colors duration-300 hover:border-foreground/25">
        <div className="aspect-[16/10] overflow-hidden">
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={`Cover image for ${project.title}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary text-sm text-muted-foreground">
              No image
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <div className="mb-3 flex items-center gap-2">
            <Badge variant="outline" className="rounded-full px-3 py-1">
              {project.category}
            </Badge>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {project.shortDescription}
              </p>
            </div>
            <ArrowUpRight
              className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
              aria-hidden="true"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
