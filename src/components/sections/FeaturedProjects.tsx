"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Selected Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Featured Projects
            </h2>
          </div>
          <Button
            variant="outline"
            className="rounded-full border-white/10 bg-transparent text-white hover:bg-white/5"
            asChild
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={`/projects/${project.slug}`}>
                <Card className="group overflow-hidden border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
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
                    <div className="mb-3 flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-neutral-300"
                      >
                        {project.category}
                      </Badge>
                      <span className="text-xs text-neutral-500">
                        {project.technologies.slice(0, 3).join(" · ")}
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {project.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm text-neutral-400">
                          {project.shortDescription}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-500 transition-colors group-hover:text-white" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
