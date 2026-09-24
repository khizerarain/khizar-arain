import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { ExperienceTimeline } from "./ExperienceTimeline";

export const meta = {
  description: "Vertical experience timeline.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function ExperienceTimelinePreview() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <ExperienceTimeline />
    </div>
  );
}
