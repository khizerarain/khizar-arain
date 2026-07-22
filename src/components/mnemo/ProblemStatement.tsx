"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, BookOpen, Clock, Frown } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SpotlightCard } from "@/components/animation/SpotlightCard";

const problems = [
  {
    icon: BookOpen,
    title: "Passive Consumption",
    description: "Learners read or watch content without active engagement or reinforcement.",
  },
  {
    icon: Clock,
    title: "Generic Pacing",
    description: "One-size-fits-all schedules ignore individual memory and learning curves.",
  },
  {
    icon: Frown,
    title: "Weak Feedback Loops",
    description: "Delayed or shallow feedback makes it hard to know what actually stuck.",
  },
  {
    icon: AlertTriangle,
    title: "No Retention Strategy",
    description: "Traditional platforms rarely revisit concepts at the right interval.",
  },
];

export function ProblemStatement() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            The Problem
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Learning platforms are broken
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Traditional education tools treat every learner the same, missing the science behind how memory actually works.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <ScrollReveal key={problem.title} delay={index * 0.1}>
              <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05]">
                  <problem.icon className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {problem.description}
                </p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 h-px w-48 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
        />
      </div>
    </section>
  );
}
