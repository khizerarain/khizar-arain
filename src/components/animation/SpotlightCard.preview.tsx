import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { SpotlightCard } from "./SpotlightCard";

export const meta = {
  description: "Card with a soft light that follows the cursor.",
} satisfies ComponentPreviewMeta;

export default function SpotlightCardPreview() {
  return (
    <SpotlightCard className="w-full max-w-xs rounded-2xl border border-border bg-card p-6">
      <p className="text-sm font-medium text-foreground">Move your cursor</p>
      <p className="mt-1 text-sm text-muted-foreground">The spotlight follows it.</p>
    </SpotlightCard>
  );
}
