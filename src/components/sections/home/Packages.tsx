import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Badge } from "@/components/ui/badge";
import { CopyCommand } from "@/components/CopyCommand";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { packages } from "@/lib/site";

export function PackageList() {
  return (
    <ul>
      {packages.map((pkg, index) => (
        <li key={pkg.name}>
          <ScrollReveal delay={Math.min(index * 0.04, 0.16)}>
            <div className="grid gap-4 border-t border-border py-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="outline"
                    className="rounded-full font-mono text-[10px] tracking-wide uppercase"
                  >
                    PyPI
                  </Badge>
                  <a
                    href={pkg.pypiUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 font-mono text-base font-medium text-foreground"
                  >
                    {pkg.name}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href={pkg.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${pkg.name} source on GitHub`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {pkg.description}
                </p>
              </div>
              <CopyCommand command={pkg.install} className="justify-self-start" />
            </div>
          </ScrollReveal>
        </li>
      ))}
    </ul>
  );
}

export function Packages() {
  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>Packages</Eyebrow>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground">
            Open source and installable.
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Small tools that solve real problems.
          </p>
        </div>
        <Link
          href="/packages"
          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          All packages
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className="mt-10">
        <PackageList />
      </div>
    </Section>
  );
}
