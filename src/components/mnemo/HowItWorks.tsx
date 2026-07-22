"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, LayoutDashboard, BrainCircuit, MessageCircle, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up",
    description: "Create a secure account with Supabase Auth in seconds.",
  },
  {
    number: "02",
    icon: LayoutDashboard,
    title: "Explore Dashboard",
    description: "View progress, analytics, and recommended learning paths.",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Take a Quiz",
    description: "Answer interactive questions and receive instant feedback.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Ask AI",
    description: "Get personalized explanations whenever a concept is unclear.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Track Progress",
    description: "Watch your retention and performance improve over time.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            From sign up to mastery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            A simple, five-step loop that turns passive studying into active, measurable learning.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.1} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-black p-1">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white/[0.03]">
                      <step.icon className="h-8 w-8 text-violet-400" />
                    </div>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-widest text-violet-400">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-500">Designed for the way human memory actually works.</p>
        </motion.div>
      </div>
    </section>
  );
}
