import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { DevelopmentJourney } from "./DevelopmentJourney";

export const meta = {
  description: "MNEMO development journey timeline.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function DevelopmentJourneyPreview() {
  return <DevelopmentJourney />;
}
