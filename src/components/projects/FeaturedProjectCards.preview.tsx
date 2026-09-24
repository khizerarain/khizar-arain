import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { FeaturedProjectCards } from "./FeaturedProjectCards";

export const meta = {
  description: "Featured project cards with stack pills and links.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function FeaturedProjectCardsPreview() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <FeaturedProjectCards />
    </div>
  );
}
