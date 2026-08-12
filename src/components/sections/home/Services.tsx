import React from "react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { services } from "@/lib/site";

export function Services() {
  return (
    <Section className="border-t border-border">
      <Eyebrow>Services</Eyebrow>
      <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground">
        How I can help.
      </h2>

      <dl className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {services.map((service, index) => (
          <ScrollReveal key={service.title} delay={Math.min(index * 0.05, 0.2)}>
            <div className="border-t border-border pt-5">
              <dt className="text-base font-medium text-foreground">
                {service.title}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </dd>
            </div>
          </ScrollReveal>
        ))}
      </dl>
    </Section>
  );
}
