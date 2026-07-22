"use client";

import React from "react";
import {
  Hexagon,
  Code2,
  Wind,
  Database,
  Lock,
  Globe,
  Activity,
  Aperture,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SpotlightCard } from "@/components/animation/SpotlightCard";
import { TiltCard } from "@/components/animation/TiltCard";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Hexagon,
  Code2,
  Wind,
  Database,
  Lock,
  Globe,
  Activity,
  Aperture,
};

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "NextJS", icon: "Hexagon", description: "React framework for production-grade web apps." },
      { name: "Typescript", icon: "Code2", description: "Type-safe development across the entire codebase." },
      { name: "TailwindCSS", icon: "Wind", description: "Utility-first styling for rapid, consistent design." },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Supabase", icon: "Database", description: "PostgreSQL database, real-time subscriptions, and edge functions." },
    ],
  },
  {
    title: "Authentication",
    items: [
      { name: "Supabase Auth", icon: "Lock", description: "Secure authentication and session management." },
    ],
  },
  {
    title: "Deployment",
    items: [
      { name: "Vercel", icon: "Globe", description: "Global edge deployment with optimized performance." },
    ],
  },
  {
    title: "UI & Motion",
    items: [
      { name: "Framer Motion", icon: "Activity", description: "Smooth animations and interactive transitions." },
      { name: "Lucide Icons", icon: "Aperture", description: "Crisp, consistent iconography throughout the app." },
    ],
  },
];

export function TechStack() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Technologies
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Modern stack, modern results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Every technology was chosen for performance, reliability, and developer experience.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} delay={categoryIndex * 0.1}>
              <TiltCard className="h-full" tiltAmount={5}>
                <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-neutral-500">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((item) => {
                      const Icon = iconMap[item.icon];
                      return (
                        <div
                          key={item.name}
                          className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/[0.04]"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
                            <Icon className="h-5 w-5 text-violet-400 transition-colors group-hover:text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-white">{item.name}</p>
                            <p className="text-sm text-neutral-400">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </SpotlightCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
