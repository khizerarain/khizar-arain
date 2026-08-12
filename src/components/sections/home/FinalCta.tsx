import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function FinalCta() {
  return (
    <Section className="border-t border-border">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Have a project worth building?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Bring me the problem — I&apos;ll bring back a working product,
          designed and shipped end to end.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="rounded-full px-6" asChild>
            <Link href="/contact">
              Work with me
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-6"
            asChild
          >
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
        <div className="mt-5 flex justify-center">
          <CopyEmailButton variant="ghost" />
        </div>
      </ScrollReveal>
    </Section>
  );
}
