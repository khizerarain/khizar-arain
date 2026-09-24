import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Badge } from "./badge";

export const meta = {
  description: "Small status label in several variants.",
} satisfies ComponentPreviewMeta;

export default function BadgePreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}
