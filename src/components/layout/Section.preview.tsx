import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "./Section";

export const meta = {
  description: "Shared section wrapper: consistent vertical rhythm and a max-w-5xl column.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function SectionPreview() {
  return (
    <Section>
      <Eyebrow>Section</Eyebrow>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Every section shares this rhythm.
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        px-6, py-20 on mobile and py-28 on desktop, content capped at max-w-5xl.
      </p>
    </Section>
  );
}
