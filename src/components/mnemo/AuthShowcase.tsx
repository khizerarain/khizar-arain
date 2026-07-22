"use client";

import React from "react";
import Image from "next/image";
import { Check, Fingerprint, Lock, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TiltCard } from "@/components/animation/TiltCard";
import { SpotlightCard } from "@/components/animation/SpotlightCard";
import { FloatingElement } from "@/components/animation/FloatingElement";
import { MNEMO_IMAGES } from "./constants";

const highlights = [
  "Secure email and password authentication",
  "Session management with refresh tokens",
  "Protected routes and middleware",
  "Password recovery and account security",
];

export function AuthShowcase() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.08),transparent_50%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <ScrollReveal>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Authentication
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Enterprise-grade security, simple UX
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                Supabase Auth powers a secure, frictionless authentication flow. Users can sign up, sign in, and recover accounts with confidence, while the app enforces protected routes.
              </p>
            </ScrollReveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <ScrollReveal key={item} delay={0.15 + index * 0.08}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <Check className="h-3 w-3 text-emerald-400" />
                    </div>
                    <p className="text-sm text-neutral-300">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <Fingerprint className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <Lock className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
              </div>
            </div>
          </div>

          <ScrollReveal direction="right">
            <FloatingElement duration={6} distance={10}>
              <TiltCard tiltAmount={5}>
                <SpotlightCard className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={MNEMO_IMAGES.auth}
                      alt="MNEMO Authentication Flow"
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
