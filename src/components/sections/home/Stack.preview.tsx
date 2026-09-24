import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Stack } from "./Stack";

export const meta = {
  description: "Tech stack section.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function StackPreview() {
  return <Stack />;
}
