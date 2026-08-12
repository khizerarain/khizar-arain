import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { PackageList } from "@/components/sections/home/Packages";
import { packages, siteConfig, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Open source Python CLI tools published on PyPI by Khizar Arain — sentinel-recon, scribe-gen, atlas-world-intel, and utopia-analyzer.",
};

const downloadStat = stats.find((stat) =>
  stat.label.includes("downloads"),
);

export default function PackagesPage() {
  return (
    <>
      <Section className="pt-32 pb-8 md:pt-40 md:pb-10">
        <Eyebrow>Packages</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Open source and installable.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Small command-line tools that solve real problems — built with Python,
          Typer, and Rich, and published on PyPI.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          {packages.length} packages
          {downloadStat
            ? ` · ${downloadStat.value}${downloadStat.suffix} downloads`
            : ""}
        </p>
      </Section>

      <Section className="py-0">
        <PackageList />
      </Section>

      <Section className="border-t border-border">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Want something like this for your team?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I build internal tools and CLIs that fit the way your team already
            works.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button className="rounded-full px-6" asChild>
              <Link href="/contact">
                Work with me
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" className="rounded-full px-6" asChild>
              <a
                href={`https://github.com/${siteConfig.githubUsername}`}
                target="_blank"
                rel="noreferrer"
              >
                Browse GitHub
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
