"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SpotlightCard } from "@/components/animation/SpotlightCard";
import { TiltCard } from "@/components/animation/TiltCard";
import { MNEMO_IMAGES } from "./constants";

const desktopShots = [
  { title: "Landing Page", image: MNEMO_IMAGES.landing },
  { title: "Dashboard", image: MNEMO_IMAGES.dashboard },
  { title: "Quiz Page", image: MNEMO_IMAGES.quiz },
  { title: "Login", image: MNEMO_IMAGES.auth },
  { title: "Signup", image: MNEMO_IMAGES.signup },
  { title: "Chat", image: MNEMO_IMAGES.chat },
  { title: "Analytics", image: MNEMO_IMAGES.analytics },
];

const mobileShots = [
  { title: "Dashboard", image: MNEMO_IMAGES.mobileDashboard },
  { title: "Quiz", image: MNEMO_IMAGES.mobileQuiz },
  { title: "Authentication", image: MNEMO_IMAGES.mobileAuth },
];

export function ScreenshotsGallery() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Showcase
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Designed for every screen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            A premium product experience across desktop and mobile devices.
          </p>
        </ScrollReveal>

        <div className="mb-6 flex items-center gap-4">
          <span className="text-sm font-medium uppercase tracking-widest text-neutral-500">Desktop</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {desktopShots.map((shot, index) => (
            <ScrollReveal key={shot.title} delay={index * 0.08}>
              <TiltCard tiltAmount={4}>
                <SpotlightCard className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={shot.image}
                      alt={shot.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="font-medium text-white">{shot.title}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="mb-6 mt-20 flex items-center gap-4">
          <span className="text-sm font-medium uppercase tracking-widest text-neutral-500">Mobile</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
          {mobileShots.map((shot, index) => (
            <ScrollReveal key={shot.title} delay={index * 0.1}>
              <TiltCard tiltAmount={6}>
                <SpotlightCard className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="relative mx-auto aspect-[9/19] max-w-[280px] overflow-hidden">
                    <Image
                      src={shot.image}
                      alt={shot.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="font-medium text-white">{shot.title}</p>
                    </div>
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
