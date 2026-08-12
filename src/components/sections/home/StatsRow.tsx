"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { useCountUp } from "@/hooks/useCountUp";
import { stats } from "@/lib/site";

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, value: current } = useCountUp<HTMLDivElement>({ target: value });

  return (
    <div ref={ref}>
      <div className="text-4xl font-semibold tracking-tight text-foreground tabular-nums sm:text-5xl">
        {current}
        {suffix}
      </div>
      <p className="mt-2 text-sm leading-snug text-muted-foreground">{label}</p>
    </div>
  );
}

export function StatsRow() {
  return (
    <Section className="border-t border-border">
      <dl className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <Stat
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
