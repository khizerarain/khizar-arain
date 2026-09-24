import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { HowItWorks } from "./HowItWorks";

export const meta = {
  description: "MNEMO \"how it works\" steps.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function HowItWorksPreview() {
  return <HowItWorks />;
}
