import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Roadmap } from "./Roadmap";

export const meta = {
  description: "MNEMO product roadmap.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function RoadmapPreview() {
  return <Roadmap />;
}
