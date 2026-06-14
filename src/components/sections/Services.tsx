"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, ShoppingBag, Palette, Globe } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend & Backend Development",
    description:
      "Full-stack web applications using Next.js, React, TypeScript, and modern backends. Clean architecture, scalable APIs, and polished interfaces.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Over 2 years of experience building online stores. Shopify custom themes, headless commerce, and conversion-focused product experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design Systems",
    description:
      "Component libraries, design tokens, and responsive layouts that keep products consistent, accessible, and easy to maintain.",
  },
  {
    icon: Globe,
    title: "Performance & SEO",
    description:
      "Core Web Vitals optimization, semantic markup, and server-side rendering to help your site rank and load fast.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            What I Do
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            I help businesses turn ideas into production-ready digital products.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card className="h-full border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                <CardContent className="p-8">
                  <service.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-neutral-400">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
