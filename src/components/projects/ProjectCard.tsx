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
    <Link href={`/projects/${project.slug}`}>
      <Card className="group h-full overflow-hidden border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
        <div className="aspect-[16/10] overflow-hidden">
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-900 text-neutral-600">
              No image
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <div className="mb-3 flex items-center gap-2">
            <Badge variant="outline" className="border-white/10 text-neutral-300">
              {project.category}
            </Badge>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-neutral-400">
                {project.shortDescription}
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-500 transition-colors group-hover:text-white" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-neutral-400"
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
