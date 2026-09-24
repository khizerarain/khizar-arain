import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { FinalCta } from "./FinalCta";

export const meta = {
  description: "Closing call-to-action section.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function FinalCtaPreview() {
  return <FinalCta />;
}
