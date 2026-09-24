import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Eyebrow } from "./eyebrow";

export const meta = {
  description: "Small uppercase label that sits above a section heading.",
} satisfies ComponentPreviewMeta;

export default function EyebrowPreview() {
  return (
    <div>
      <Eyebrow>Selected work</Eyebrow>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        Section heading
      </p>
    </div>
  );
}
