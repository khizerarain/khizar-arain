import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Hero } from "./Hero";

export const meta = {
  description: "Homepage hero.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function HeroPreview() {
  return <Hero />;
}
