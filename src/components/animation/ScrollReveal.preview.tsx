import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { ScrollReveal } from "./ScrollReveal";

export const meta = {
  description: "Fades and slides content in as it enters the viewport.",
} satisfies ComponentPreviewMeta;

export default function ScrollRevealPreview() {
  return (
    <div className="flex gap-3">
      {[0, 0.1, 0.2].map((delay) => (
        <ScrollReveal key={delay} delay={delay} once={false}>
          <div className="h-16 w-16 rounded-xl border border-border bg-card" />
        </ScrollReveal>
      ))}
    </div>
  );
}
