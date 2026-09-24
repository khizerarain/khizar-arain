import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { AnimatedGradient } from "./AnimatedGradient";

export const meta = {
  description: "Slowly shifting gradient background.",
} satisfies ComponentPreviewMeta;

export default function AnimatedGradientPreview() {
  return (
    <div className="h-32 w-full max-w-sm overflow-hidden rounded-xl border border-border">
      <AnimatedGradient className="h-full w-full" />
    </div>
  );
}
