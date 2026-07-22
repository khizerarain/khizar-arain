"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { MNEMO_IMAGES, MNEMO_LINKS } from "./constants";

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Video Showcase
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            See MNEMO in action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Watch the platform flow from dashboard to quiz to AI assistant in a single, seamless experience.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:rounded-3xl"
            onClick={() => setIsPlaying(true)}
          >
            <Image
              src={MNEMO_IMAGES.videoThumbnail}
              alt="MNEMO Video Thumbnail"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-colors group-hover:bg-white/20"
              >
                <Play className="h-8 w-8 fill-white text-white" />
              </motion.div>
            </div>
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <p className="text-sm font-medium text-white/80">Product Demo</p>
              <p className="text-lg font-semibold text-white">Explore the MNEMO experience</p>
            </div>
          </motion.div>
        </ScrollReveal>

        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-md"
              onClick={() => setIsPlaying(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Close video"
                >
                  <X className="h-5 w-5" />
                </button>
                <iframe
                  src={MNEMO_LINKS.liveDemo}
                  title="MNEMO Live Demo"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
