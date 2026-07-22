"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TiltCard } from "@/components/animation/TiltCard";
import { MNEMO_IMAGES } from "./constants";

const highlights = [
  "AI-assisted explanations adapted to your level",
  "Interactive quizzes with instant feedback",
  "Real-time progress tracking and analytics",
  "Personalized learning paths and recommendations",
];

export function WhatIsMnemo() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <TiltCard className="rounded-3xl" tiltAmount={6}>
                <div className="glass-strong glow-border overflow-hidden rounded-2xl md:rounded-3xl">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={MNEMO_IMAGES.learning}
                      alt="MNEMO Learning Experience"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </TiltCard>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20">
                    <Sparkles className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">AI Powered</p>
                    <p className="text-xs text-neutral-400">Neuroscience-backed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                What is MNEMO?
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                A learning platform that adapts to how you think
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                MNEMO is a production-grade AI learning platform that combines intelligent assistance, interactive quizzes, and real-time analytics into a cohesive, modern experience. It is designed for learners who want more than passive content — they want measurable improvement.
              </p>
            </ScrollReveal>

            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <ScrollReveal key={item} delay={0.15 + index * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20">
                      <Check className="h-3.5 w-3.5 text-violet-400" />
                    </div>
                    <p className="text-neutral-300">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
