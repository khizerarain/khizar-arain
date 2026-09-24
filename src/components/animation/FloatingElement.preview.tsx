import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { FloatingElement } from "./FloatingElement";

export const meta = {
  description: "Gently bobs its children up and down.",
} satisfies ComponentPreviewMeta;

export default function FloatingElementPreview() {
  return (
    <FloatingElement>
      <div className="rounded-2xl border border-border bg-card px-6 py-4 text-sm font-medium text-foreground">
        Floating
      </div>
    </FloatingElement>
  );
}
