"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SpotlightCard } from "@/components/animation/SpotlightCard";

const metrics = [
  { label: "Performance", value: 98, suffix: "/100", color: "#8b5cf6" },
  { label: "Accessibility", value: 100, suffix: "/100", color: "#d946ef" },
  { label: "SEO", value: 100, suffix: "/100", color: "#06b6d4" },
  { label: "Best Practices", value: 100, suffix: "/100", color: "#10b981" },
];

function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
      <div className="relative mx-auto mb-4 h-28 w-28">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke={metric.color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={264}
            initial={{ strokeDashoffset: 264 }}
            animate={isInView ? { strokeDashoffset: 264 - (264 * metric.value) / 100 } : {}}
            transition={{ duration: 1.5, delay: index * 0.15, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{metric.value}</span>
        </div>
      </div>
      <p className="text-sm font-medium text-neutral-300">{metric.label}</p>
      <p className="text-xs text-neutral-500">{metric.suffix}</p>
    </SpotlightCard>
  );
}

export function PerformanceMetrics() {
  const containerRef = useRef(null);

  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32" ref={containerRef}>
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Performance
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Lighthouse-grade quality
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Optimized for speed, accessibility, SEO, and best practices across every page.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 0.1}>
              <MetricCard metric={metric} index={index} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="mt-12 text-center">
          <p className="text-sm text-neutral-500">
            Images are optimized and lazy-loaded. Components are built for reuse and clean architecture.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
