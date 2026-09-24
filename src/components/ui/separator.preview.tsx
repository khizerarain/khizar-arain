import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Separator } from "./separator";

export const meta = {
  description: "Horizontal or vertical divider.",
} satisfies ComponentPreviewMeta;

export default function SeparatorPreview() {
  return (
    <div className="w-full max-w-xs text-sm text-foreground">
      <p>Horizontal</p>
      <Separator className="my-3" />
      <div className="flex h-5 items-center gap-3 text-muted-foreground">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Projects</span>
        <Separator orientation="vertical" />
        <span>Contact</span>
      </div>
    </div>
  );
}
