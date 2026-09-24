import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { ForFounders } from "./ForFounders";

export const meta = {
  description: "\"For founders\" section with the working-together points.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function ForFoundersPreview() {
  return <ForFounders />;
}
