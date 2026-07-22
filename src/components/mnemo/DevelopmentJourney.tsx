"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Code, TestTube, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SpotlightCard } from "@/components/animation/SpotlightCard";

const journeySteps = [
  {
    icon: Lightbulb,
    phase: "Discovery",
    title: "Identifying the gap",
    description: "I started by researching how people actually learn and retain information, then identified the weaknesses in traditional platforms.",
  },
  {
    icon: Code,
    phase: "Build",
    title: "Engineering the foundation",
    description: "Next.js, TypeScript, Tailwind, and Supabase were chosen to create a scalable, type-safe, and performant foundation.",
  },
  {
    icon: TestTube,
    phase: "Iterate",
    title: "Testing and refining",
    description: "I iterated on the quiz engine, dashboard layout, auth flow, and mobile responsiveness until the experience felt polished.",
  },
  {
    icon: Rocket,
    phase: "Launch",
    title: "Shipping to production",
    description: "MNEMO was deployed on Vercel with optimized images, accessibility in mind, and a clear product narrative.",
  },
];

const challenges = [
  "Structuring quiz state so progress, scoring, and retry logic remain clean and predictable.",
  "Integrating Supabase real-time updates with optimistic UI patterns.",
  "Optimizing image loading, rendering, and API calls for performance.",
  "Prioritizing keyboard navigation, color contrast, and semantic markup for accessibility.",
];

export function DevelopmentJourney() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Development Journey
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            From idea to launch-ready product
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.1}>
              <SpotlightCard className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 transition-transform group-hover:scale-110">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-violet-400">{step.phase}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-20">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">Challenges</h3>
                <p className="mt-4 text-neutral-400">
                  Building a production-grade learning platform came with real engineering challenges that shaped the final architecture.
                </p>
              </div>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                    <p className="text-neutral-300">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
