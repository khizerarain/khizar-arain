"use client";

import React from "react";
import Image from "next/image";
import { Check, Clock, RefreshCcw, Trophy } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TiltCard } from "@/components/animation/TiltCard";
import { SpotlightCard } from "@/components/animation/SpotlightCard";
import { FloatingElement } from "@/components/animation/FloatingElement";
import { MNEMO_IMAGES } from "./constants";

const highlights = [
  "Multiple question types and formats",
  "Instant feedback with explanations",
  "Timer and retry mechanics",
  "Score tracking and progress badges",
];

export function QuizShowcase() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(217,70,239,0.08),transparent_50%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <FloatingElement duration={7} distance={12}>
              <TiltCard tiltAmount={5}>
                <SpotlightCard className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={MNEMO_IMAGES.quiz}
                      alt="MNEMO Quiz Interface"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </SpotlightCard>
              </TiltCard>
            </FloatingElement>
          </ScrollReveal>

          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-fuchsia-400">
                Quiz Engine
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Active learning through interactive quizzes
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                MNEMO&apos;s quiz engine turns studying into an active experience. Learners answer questions, receive immediate feedback, and can retry weak areas until mastery is achieved.
              </p>
            </ScrollReveal>

            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <ScrollReveal key={item} delay={0.15 + index * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20">
                      <Check className="h-3.5 w-3.5 text-fuchsia-400" />
                    </div>
                    <p className="text-neutral-300">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2">
                <Clock className="h-4 w-4 text-fuchsia-400" />
                <span className="text-sm text-neutral-300">Timed sessions</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2">
                <RefreshCcw className="h-4 w-4 text-fuchsia-400" />
                <span className="text-sm text-neutral-300">Unlimited retries</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2">
                <Trophy className="h-4 w-4 text-fuchsia-400" />
                <span className="text-sm text-neutral-300">Achievement badges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
