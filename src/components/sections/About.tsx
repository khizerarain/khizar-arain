"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <Avatar className="h-24 w-24 border border-white/10">
            <AvatarImage src="/khizar-self.png" alt="Khizar Arain" />
            <AvatarFallback className="bg-neutral-900 text-white">
              KA
            </AvatarFallback>
          </Avatar>

          <p className="mb-4 mt-8 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            One developer, big results.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            I&apos;m Khizar Arain, a full-stack developer focused on building
            clean, modern, and high-performing digital experiences. I work
            across frontend and backend, with strong practical experience in
            e-commerce and production-ready web development.
          </p>

          <Button
            variant="outline"
            className="mt-10 rounded-full border-white/10 bg-transparent px-8 text-white hover:bg-white/5"
            asChild
          >
            <Link href="/about">
              More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
