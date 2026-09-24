import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { WhyBuilt } from "./WhyBuilt";

export const meta = {
  description: "Why MNEMO was built.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function WhyBuiltPreview() {
  return <WhyBuilt />;
}
