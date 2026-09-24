import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { CtaSection } from "./CtaSection";

export const meta = {
  description: "MNEMO closing call-to-action.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function CtaSectionPreview() {
  return <CtaSection />;
}
