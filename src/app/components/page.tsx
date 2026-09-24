import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getComponentCategories } from "@/lib/component-registry";
import { ComponentCard } from "./_parts/ComponentCard";

export const metadata: Metadata = {
  title: "Components",
  description:
    "Every component this portfolio is built from, rendered live — download any of them as a source file.",
};

export default function ComponentsPage() {
  const categories = getComponentCategories();
  const total = categories.reduce((sum, c) => sum + c.components.length, 0);

  return (
    <>
      <Section className="pt-32 pb-8 md:pt-40 md:pb-10">
        <Eyebrow>Components</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          The parts this site is built from
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Every component in this portfolio, rendered live. Grab the source of
          any one with a single click.
        </p>
        <p className="mt-6 font-mono text-sm text-muted-foreground">
          {total} components · {categories.length} groups
        </p>

        <nav aria-label="Component groups" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <a
                  href={`#${category.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                >
                  {category.title}
                  <span className="font-mono text-xs">
                    {category.components.length}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Section>

      {categories.map((category) => (
        <Section
          key={category.slug}
          id={category.slug}
          className="scroll-mt-16 border-t border-border py-16 md:py-20"
        >
          <Eyebrow>{category.title}</Eyebrow>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {category.components.map((entry) => (
              <ComponentCard key={entry.file} entry={entry} />
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
