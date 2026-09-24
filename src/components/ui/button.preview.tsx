import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";

export const meta = {
  description: "Token-driven button with default, outline, secondary, ghost, and link variants.",
} satisfies ComponentPreviewMeta;

export default function ButtonPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button className="rounded-full px-6">
        Start a project <ArrowRight className="h-4 w-4" />
      </Button>
      <Button variant="outline" className="rounded-full px-6">
        Outline
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
