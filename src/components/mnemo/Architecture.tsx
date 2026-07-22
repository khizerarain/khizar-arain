"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SpotlightCard } from "@/components/animation/SpotlightCard";

const steps = [
  { title: "Next.js App Router", description: "Server-side rendering, route handling, and SEO." },
  { title: "TypeScript Layer", description: "Type safety across components and API calls." },
  { title: "TailwindCSS Design System", description: "Consistent, responsive styling at scale." },
  { title: "Supabase Backend", description: "Database, real-time subscriptions, and authentication." },
  { title: "Vercel Edge", description: "Global deployment, caching, and performance optimization." },
];

export function Architecture() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.08),transparent_50%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Architecture
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Built for scale from the ground up
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            A clean, layered architecture that separates concerns and scales with the product.
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-violet-500/50 via-fuchsia-500/50 to-cyan-500/50 md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.1}>
                <div className={`relative flex items-center gap-8 md:gap-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block md:w-1/2" />

                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <SpotlightCard className={`flex-1 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-neutral-400">{step.description}</p>
                  </SpotlightCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.5} className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-neutral-400">
            <span>Data Flow</span>
            <ArrowRight className="h-4 w-4 text-violet-400" />
            <span>User</span>
            <ArrowRight className="h-4 w-4 text-fuchsia-400" />
            <span>Next.js</span>
            <ArrowRight className="h-4 w-4 text-cyan-400" />
            <span>Supabase</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
