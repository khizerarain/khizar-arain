import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { StatsRow } from "./StatsRow";

export const meta = {
  description: "Count-up stats row.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function StatsRowPreview() {
  return <StatsRow />;
}
