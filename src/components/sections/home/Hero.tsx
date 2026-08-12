"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import {
  GitHubIcon,
  InstagramIcon,
  XIcon,
} from "@/components/icons/BrandIcons";
import { mnemoDemoUrl, siteConfig, socialLinks } from "@/lib/site";

const icons = {
  X: XIcon,
  Instagram: InstagramIcon,
  GitHub: GitHubIcon,
} as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-3xl">
        <motion.div {...rise(0)}>
          <Image
            src="/khizar-self.png"
            alt="Portrait of Khizar Arain"
            width={72}
            height={72}
            priority
            className="h-18 w-18 rounded-full object-cover ring-1 ring-border"
          />
        </motion.div>

        <motion.p
          {...rise(0.08)}
          className="mt-8 text-sm text-muted-foreground"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.h1
          {...rise(0.14)}
          className="mt-3 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl"
        >
          Khizar Arain.
        </motion.h1>

        <motion.p
          {...rise(0.2)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          I build clean, modern, high-performing digital products — frontend to
          backend, from idea to shipped.
        </motion.p>

        <motion.div
          {...rise(0.26)}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button size="lg" className="rounded-full px-6" asChild>
            <Link href="/contact">
              Work with me
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <CopyEmailButton />
        </motion.div>

        <motion.ul
          {...rise(0.32)}
          className="mt-8 flex items-center gap-1"
        >
          {socialLinks.map((social) => {
            const Icon = icons[social.label];
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.label} — ${social.handle}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              </li>
            );
          })}
        </motion.ul>

        <motion.div {...rise(0.4)} className="mt-10">
          <a
            href={mnemoDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
          >
            <Rocket className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="font-medium text-foreground">MNEMO</span>
            <span aria-hidden="true">·</span>
            live AI learning platform
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
