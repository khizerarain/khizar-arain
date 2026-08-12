import React from "react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { stack } from "@/lib/site";

export function Stack() {
  return (
    <Section className="border-t border-border">
      <Eyebrow>Stack</Eyebrow>
      <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground">
        Tools I actually use.
      </h2>

      <ul className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
        {stack.map((tool) => (
          <li
            key={tool.name}
            className="group flex flex-col items-center justify-center gap-2.5 rounded-xl border border-border bg-card px-3 py-5 transition-colors hover:border-foreground/20"
          >
            {tool.slug ? (
              <Image
                src={`https://cdn.simpleicons.org/${tool.slug}`}
                alt=""
                width={24}
                height={24}
                loading="lazy"
                unoptimized
                className="h-6 w-6 grayscale opacity-60 transition group-hover:grayscale-0 group-hover:opacity-100"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex h-6 w-6 items-center justify-center font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground"
              >
                {tool.name.slice(0, 2)}
              </span>
            )}
            <span className="text-center text-xs text-muted-foreground transition-colors group-hover:text-foreground">
              {tool.name}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
