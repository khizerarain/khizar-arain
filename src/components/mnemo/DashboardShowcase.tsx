"use client";

import React from "react";
import Image from "next/image";
import { Check, TrendingUp, Users, BookOpen } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TiltCard } from "@/components/animation/TiltCard";
import { SpotlightCard } from "@/components/animation/SpotlightCard";
import { FloatingElement } from "@/components/animation/FloatingElement";
import { MNEMO_IMAGES } from "./constants";

const highlights = [
  "Real-time learning progress at a glance",
  "Recommended topics based on performance",
  "Activity summaries and streak tracking",
  "Quick access to quizzes and AI assistance",
];

export function DashboardShowcase() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,0.08),transparent_50%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <ScrollReveal>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                Dashboard
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Your command center for learning
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                The MNEMO dashboard gives learners a complete overview of their progress, upcoming quizzes, and personalized recommendations in a clean, modern interface.
              </p>
            </ScrollReveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <ScrollReveal key={item} delay={0.15 + index * 0.08}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20">
                      <Check className="h-3 w-3 text-violet-400" />
                    </div>
                    <p className="text-sm text-neutral-300">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <ScrollReveal delay={0.4}>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <TrendingUp className="mx-auto h-5 w-5 text-violet-400" />
                  <p className="mt-2 text-2xl font-bold text-white">42%</p>
                  <p className="text-xs text-neutral-500">Retention</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.45}>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <BookOpen className="mx-auto h-5 w-5 text-fuchsia-400" />
                  <p className="mt-2 text-2xl font-bold text-white">128</p>
                  <p className="text-xs text-neutral-500">Quizzes</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <Users className="mx-auto h-5 w-5 text-cyan-400" />
                  <p className="mt-2 text-2xl font-bold text-white">1.2k</p>
                  <p className="text-xs text-neutral-500">Learners</p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal direction="right">
            <FloatingElement duration={6} distance={10}>
              <TiltCard tiltAmount={5}>
                <SpotlightCard className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={MNEMO_IMAGES.dashboard}
                      alt="MNEMO Dashboard"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </SpotlightCard>
              </TiltCard>
            </FloatingElement>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
