import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Writing } from "./Writing";

export const meta = {
  description: "Latest writing section, pulled from the blog.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function WritingPreview() {
  return <Writing />;
}
