"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Target, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SpotlightCard } from "@/components/animation/SpotlightCard";

const reasons = [
  {
    icon: Rocket,
    title: "Startup-Grade Product",
    description: "Built to demonstrate product thinking, engineering depth, and launch-ready quality at a YC level.",
  },
  {
    icon: Target,
    title: "Real-World Impact",
    description: "Focuses on a genuine problem: making learning active, measurable, and personalized with AI.",
  },
  {
    icon: Zap,
    title: "Technical Showcase",
    description: "Combines modern frontend engineering with real backend infrastructure, auth, and deployment.",
  },
];

export function WhyBuilt() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_60%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Why I Built It
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            More than a portfolio piece
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            MNEMO was built to prove I can design, ship, and scale a production-grade AI application from zero to launch.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 0.12}>
              <SpotlightCard className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.04]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 transition-transform duration-300 group-hover:scale-110">
                  <reason.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-400">
                  {reason.description}
                </p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-neutral-500"
        >
          <span className="text-sm">Trusted patterns from</span>
          <div className="flex items-center gap-6 text-sm font-medium text-white">
            <span>Linear</span>
            <span className="text-neutral-700">·</span>
            <span>Vercel</span>
            <span className="text-neutral-700">·</span>
            <span>Stripe</span>
            <span className="text-neutral-700">·</span>
            <span>Supabase</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
