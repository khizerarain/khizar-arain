import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Textarea } from "./textarea";

export const meta = {
  description: "Multi-line text input.",
} satisfies ComponentPreviewMeta;

export default function TextareaPreview() {
  return <Textarea className="max-w-xs" placeholder="Tell me about your project…" />;
}
