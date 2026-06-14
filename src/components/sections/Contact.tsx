"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "realkhizararain7@gmail.com",
    href: "mailto:realkhizararain7@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "03103080347",
    href: "tel:03103080347",
  },
  {
    icon: Calendar,
    label: "Calendar",
    value: "Book a 20-minute intro call",
    href: "/contact",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Get in Touch
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Contact
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Have a project in mind? Let&apos;s talk.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={item.href}>
                <Card className="h-full border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                  <CardContent className="flex flex-col items-start p-8">
                    <item.icon
                      className="h-6 w-6 text-white"
                      strokeWidth={1.5}
                    />
                    <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-medium text-white">
                      {item.value}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="rounded-full bg-white px-8 text-black hover:bg-neutral-200"
            asChild
          >
            <Link href="/contact">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
