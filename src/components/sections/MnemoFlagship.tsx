"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Brain, LayoutDashboard, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/animation/MagneticButton";
import { FloatingElement } from "@/components/animation/FloatingElement";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TiltCard } from "@/components/animation/TiltCard";
import { SpotlightCard } from "@/components/animation/SpotlightCard";
import { MnemoLogo } from "@/components/mnemo/MnemoLogo";
import { MNEMO_LINKS, MNEMO_IMAGES } from "@/components/mnemo/constants";

const quickStats = [
  { label: "AI Powered", icon: Sparkles },
  { label: "Interactive Quizzes", icon: Brain },
  { label: "Modern Dashboard", icon: LayoutDashboard },
  { label: "Real-time Updates", icon: Zap },
];

export function MnemoFlagship() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(139,92,246,0.12),transparent_60%)]" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(217,70,239,0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-12 text-center">
          <Badge
            variant="outline"
            className="mb-6 border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300"
          >
            Flagship Project
          </Badge>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <MnemoLogo className="mb-6" size={40} />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="text-gradient-mnemo">MNEMO</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-4 text-2xl font-medium text-white md:text-3xl">
                AI-powered learning platform
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
                An AI-powered neuroscience inspired learning platform designed to improve memory retention and learning through interactive quizzes, intelligent assistance and modern personalized experiences.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3">
                {quickStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2"
                  >
                    <stat.icon className="h-4 w-4 text-violet-400" />
                    <span className="text-sm text-neutral-300">{stat.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <MagneticButton>
                  <Button
                    size="lg"
                    className="h-12 rounded-full bg-white px-8 text-sm font-medium text-black hover:bg-neutral-200"
                    asChild
                  >
                    <Link href="/projects/mnemo">
                      Explore Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>

                <MagneticButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-white/10 bg-white/[0.03] px-8 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/5"
                    asChild
                  >
                    <Link href={MNEMO_LINKS.liveDemo} target="_blank" rel="noreferrer">
                      Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" className="order-1 lg:order-2">
            <FloatingElement duration={6} distance={12}>
              <TiltCard tiltAmount={5}>
                <SpotlightCard className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2 shadow-2xl shadow-violet-500/10 md:rounded-3xl md:p-3">
                  <Link href="/projects/mnemo" className="block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl md:rounded-2xl">
                      <Image
                        src={MNEMO_IMAGES.dashboard}
                        alt="MNEMO Dashboard"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        <span className="text-sm font-medium text-white">Live on Vercel</span>
                      </div>
                    </div>
                  </Link>
                </SpotlightCard>
              </TiltCard>
            </FloatingElement>
          </ScrollReveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-20 h-px w-48 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
        />
      </div>
    </section>
  );
}
