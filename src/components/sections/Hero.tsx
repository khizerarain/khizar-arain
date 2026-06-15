"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
        >
          Full-Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Khizar Arain
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl"
        >
          I build clean, modern, and high-performing digital experiences.
          Whether it&apos;s a product or a service, I create the world your
          brand lives in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="rounded-full bg-white px-8 text-black hover:bg-neutral-200"
            asChild
          >
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 bg-transparent px-8 text-white hover:bg-white/5 hover:text-white"
            asChild
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#projects"
          className="flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-white"
        >
          Scroll
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
