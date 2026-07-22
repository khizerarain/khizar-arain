"use client";

import React from "react";
import {
  Sparkles,
  Brain,
  LayoutDashboard,
  Shield,
  Zap,
  Smartphone,
  UserCog,
  BarChart3,
  Target,
  Palette,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SpotlightCard } from "@/components/animation/SpotlightCard";
import { TiltCard } from "@/components/animation/TiltCard";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Sparkles,
  Brain,
  LayoutDashboard,
  Shield,
  Zap,
  Smartphone,
  UserCog,
  BarChart3,
  Target,
  Palette,
};

const features = [
  {
    title: "AI Learning System",
    description: "Intelligent assistance that adapts explanations to each learner's level and needs.",
    icon: "Sparkles",
    color: "#8b5cf6",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Interactive Quiz System",
    description: "Dynamic quizzes with real-time feedback, scoring, and retry logic.",
    icon: "Brain",
    color: "#d946ef",
    span: "",
  },
  {
    title: "User Dashboard",
    description: "A central hub for progress, stats, and recommended learning paths.",
    icon: "LayoutDashboard",
    color: "#06b6d4",
    span: "",
  },
  {
    title: "Authentication",
    description: "Secure sign up, sign in, and session management via Supabase Auth.",
    icon: "Shield",
    color: "#10b981",
    span: "",
  },
  {
    title: "Real Time Updates",
    description: "Live data sync across the app for a seamless experience.",
    icon: "Zap",
    color: "#f59e0b",
    span: "md:col-span-2",
  },
  {
    title: "Responsive Design",
    description: "Fully optimized for desktop, tablet, and mobile.",
    icon: "Smartphone",
    color: "#f43f5e",
    span: "",
  },
  {
    title: "Personalized Learning",
    description: "Tailored recommendations based on performance and goals.",
    icon: "UserCog",
    color: "#8b5cf6",
    span: "",
  },
  {
    title: "Analytics",
    description: "Clear visual insights into learning habits and improvement.",
    icon: "BarChart3",
    color: "#d946ef",
    span: "md:col-span-2",
  },
  {
    title: "Progress Tracking",
    description: "Goal-oriented tracking that keeps learners motivated.",
    icon: "Target",
    color: "#06b6d4",
    span: "",
  },
  {
    title: "Modern UI/UX",
    description: "Clean, accessible, and delightful interface.",
    icon: "Palette",
    color: "#10b981",
    span: "",
  },
];

export function FeaturesBento() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(217,70,239,0.06),transparent_50%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Everything a modern learning platform needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            A complete feature set built to feel like a premium SaaS product from day one.
          </p>
        </ScrollReveal>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <ScrollReveal
                key={feature.title}
                delay={index * 0.05}
                className={feature.span || "md:col-span-1"}
              >
                <TiltCard className="h-full" tiltAmount={4}>
                  <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                    <div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${feature.color}15` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: feature.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {feature.description}
                    </p>
                  </SpotlightCard>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
