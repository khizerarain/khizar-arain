import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { BuildingInPublic, GitHubActivity } from "./BuildingInPublic";

export const meta = {
  description: "Homepage \"building in public\" section with live GitHub activity.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function BuildingInPublicPreview() {
  return (
    <BuildingInPublic>
      <GitHubActivity />
    </BuildingInPublic>
  );
}
