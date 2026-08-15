import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BuildingList } from "@/components/projects/BuildingList";
import { ExperienceTimeline } from "@/components/projects/ExperienceTimeline";
import { FeaturedProjectCards } from "@/components/projects/FeaturedProjectCards";
import { CliTools } from "@/components/projects/CliTools";
import { cliTools, downloadsAsOf } from "@/lib/projects-showcase";
import { getPypiVersions } from "@/lib/pypi";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects and tools Khizar Arain has shipped end to end — AI products, Python CLI tools published on PyPI, and brand experiences.",
};

export default async function ProjectsPage() {
  const versions = await getPypiVersions(cliTools.map((tool) => tool.name));
  const tools = cliTools.map((tool) => ({
    ...tool,
    version: versions[tool.name] || tool.version,
  }));

  return (
    <>
      <Section className="pt-32 pb-8 md:pt-40 md:pb-10">
        <Eyebrow>Projects</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Things I&apos;ve built
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Projects and tools I&apos;ve shipped end to end — AI products, CLI
          tools, and brand experiences.
        </p>
      </Section>

      <Section className="py-10 md:py-12">
        <Eyebrow>What I&apos;m building</Eyebrow>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
          Newest first.
        </h2>
        <div className="mt-8">
          <BuildingList />
        </div>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>Experience &amp; journey</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground">
          How I got here.
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted-foreground">
          Roles I can stand behind. Placeholders mark numbers I have not
          verified yet.
        </p>
        <div className="mt-10">
          <ExperienceTimeline />
        </div>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>Featured projects</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground">
          The detail behind each build.
        </h2>
        <div className="mt-10">
          <FeaturedProjectCards />
        </div>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>CLI tools</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground">
          Published on PyPI.
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted-foreground">
          {tools.length} command-line tools, installable with a single command.
          Download totals as of {downloadsAsOf}.
        </p>
        <div className="mt-10">
          <CliTools tools={tools} />
        </div>
      </Section>
    </>
  );
}
