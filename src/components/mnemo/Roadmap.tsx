"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SpotlightCard } from "@/components/animation/SpotlightCard";

const roadmap = [
  { quarter: "Q1", title: "AI-Generated Quizzes", description: "Upload documents and instantly generate quizzes from content." },
  { quarter: "Q2", title: "Spaced Repetition", description: "Smart scheduling based on memory decay curves." },
  { quarter: "Q3", title: "Collaborative Rooms", description: "Study together in real-time with peers." },
  { quarter: "Q4", title: "Mobile App", description: "Native mobile experience with offline support." },
];

export function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.06),transparent_60%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Future Roadmap
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            What&apos;s next for MNEMO
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            A clear product roadmap that keeps the platform moving toward a full-scale AI education product.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <SpotlightCard className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-violet-500/30 hover:bg-white/[0.04]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-sm font-bold text-white transition-transform group-hover:scale-110">
                    {item.quarter}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
