import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { CategoryBadge, StatusBadge } from "./ProjectBadges";

export const meta = {
  description: "Category and status pills for project cards.",
} satisfies ComponentPreviewMeta;

export default function ProjectBadgesPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <CategoryBadge category="AI" />
      <CategoryBadge category="CLI" />
      <CategoryBadge category="Brand" />
      <StatusBadge status="Live" />
      <StatusBadge status="In development" />
    </div>
  );
}
