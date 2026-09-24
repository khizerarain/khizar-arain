import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Work } from "./Work";

export const meta = {
  description: "Selected work section.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function WorkPreview() {
  return <Work />;
}
