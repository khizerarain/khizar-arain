import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { TiltCard } from "./TiltCard";

export const meta = {
  description: "3D tilt on hover, with an optional glow.",
} satisfies ComponentPreviewMeta;

export default function TiltCardPreview() {
  return (
    <TiltCard className="w-full max-w-xs rounded-2xl border border-border bg-card p-6">
      <p className="text-sm font-medium text-foreground">Hover to tilt</p>
      <p className="mt-1 text-sm text-muted-foreground">Follows the cursor in 3D.</p>
    </TiltCard>
  );
}
