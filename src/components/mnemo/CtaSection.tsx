"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animation/MagneticButton";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { AnimatedGradient } from "@/components/animation/AnimatedGradient";
import { MNEMO_LINKS } from "./constants";
import { MnemoLogo } from "./MnemoLogo";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-16">
            <AnimatedGradient
              className="absolute inset-0 opacity-20"
              colors={["rgba(139,92,246,0.3)", "rgba(217,70,239,0.2)", "rgba(6,182,212,0.3)"]}
              speed={12}
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 text-center">
              <MnemoLogo className="mx-auto mb-8 justify-center" size={48} />
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Ready to explore MNEMO?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
                See the live demo, review the codebase, or reach out to discuss how this kind of product thinking can apply to your next project.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                      View on GitHub
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
