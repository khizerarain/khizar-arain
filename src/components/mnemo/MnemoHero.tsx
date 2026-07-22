"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MnemoLogo } from "./MnemoLogo";
import { MagneticButton } from "@/components/animation/MagneticButton";
import { FloatingElement } from "@/components/animation/FloatingElement";
import { MNEMO_LINKS, MNEMO_IMAGES } from "./constants";

export function MnemoHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-32 pb-20 md:pt-40">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] animate-pulse-glow opacity-30">
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.15),transparent_40%)]" />
        </div>
        <div className="absolute top-0 right-0 h-[800px] w-[800px] opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_70%_30%,rgba(217,70,239,0.15),transparent_40%)]" />
        </div>
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.15),transparent_40%)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm"
          >
            <MnemoLogo size={28} showText={false} />
            <span className="text-sm font-medium text-neutral-300">MNEMO</span>
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            <span className="text-xs text-neutral-500">Live Product</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient-mnemo">AI-powered</span>
            <br />
            learning platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl"
          >
            An AI-powered neuroscience inspired learning platform designed to improve memory retention and learning through interactive quizzes, intelligent assistance and modern personalized experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticButton>
              <Button
                size="lg"
                className="h-12 rounded-full bg-white px-8 text-sm font-medium text-black hover:bg-neutral-200"
                asChild
              >
                <Link href={MNEMO_LINKS.liveDemo} target="_blank" rel="noreferrer">
                  Live Demo
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
                <Link href={MNEMO_LINKS.github} target="_blank" rel="noreferrer">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                  </svg>
                  View Code
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <FloatingElement duration={7} distance={12}>
            <div className="glass-strong glow-border rounded-2xl p-2 shadow-2xl shadow-violet-500/10 md:rounded-3xl md:p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl md:rounded-2xl">
                <Image
                  src={MNEMO_IMAGES.dashboard}
                  alt="MNEMO Dashboard Preview"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">See it in action</span>
                </div>
              </div>
            </div>
          </FloatingElement>

          {/* Floating accent cards */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-12 hidden rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md md:block lg:-right-12"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20">
                <span className="text-lg">🧠</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Memory Retention</p>
                <p className="text-xs text-neutral-400">+42% improvement</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-4 bottom-24 hidden rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md md:block lg:-left-12"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/20">
                <span className="text-lg">✨</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">AI Assisted</p>
                <p className="text-xs text-neutral-400">Personalized learning</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
