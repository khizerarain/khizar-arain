"use client";

import React, { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types/project";

interface ProjectsListProps {
  projects: Project[];
  categories: string[];
  technologies: string[];
}

export default function ProjectsList({
  projects,
  categories,
  technologies,
}: ProjectsListProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [technology, setTechnology] = useState("all");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        search === "" ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(search.toLowerCase()),
        );

      const matchesCategory =
        category === "all" || project.category === category;
      const matchesTechnology =
        technology === "all" || project.technologies.includes(technology);

      return matchesSearch && matchesCategory && matchesTechnology;
    });
  }, [projects, search, category, technology]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <Input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-11 rounded-full border-white/10 bg-white/[0.02] text-white placeholder:text-neutral-500 focus-visible:ring-white/20"
        />
        <div className="flex gap-3">
          <Select value={category} onValueChange={(value) => setCategory(value ?? "all")}>
            <SelectTrigger className="w-[160px] rounded-full border-white/10 bg-white/[0.02] text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="border-white/10 bg-neutral-900 text-white">
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={technology} onValueChange={(value) => setTechnology(value ?? "all")}>
            <SelectTrigger className="w-[160px] rounded-full border-white/10 bg-white/[0.02] text-white">
              <SelectValue placeholder="Technology" />
            </SelectTrigger>
            <SelectContent className="border-white/10 bg-neutral-900 text-white">
              <SelectItem value="all">All tech</SelectItem>
              {technologies.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] py-20 text-center text-neutral-400">
          No projects match your filters.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
