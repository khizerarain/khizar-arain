import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { BuildingList } from "./BuildingList";

export const meta = {
  description: "\"What I'm building\" list on the projects page.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function BuildingListPreview() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <BuildingList />
    </div>
  );
}
