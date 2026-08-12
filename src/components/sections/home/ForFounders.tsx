import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { founderPoints } from "@/lib/site";

export function ForFounders() {
  return (
    <Section className="border-t border-border">
      <ScrollReveal>
        <Eyebrow>For founders &amp; hiring managers</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground">
          What you get when you hire me.
        </h2>

        <ul className="mt-10 max-w-2xl space-y-4">
          {founderPoints.map((point) => (
            <li key={point} className="flex gap-3 text-base leading-relaxed">
              <span
                className="mt-3 h-px w-4 shrink-0 bg-foreground/40"
                aria-hidden="true"
              />
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button className="rounded-full px-6" asChild>
            <Link href="/projects">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" className="rounded-full px-6" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </ScrollReveal>
    </Section>
  );
}
