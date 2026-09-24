import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { MnemoHero } from "./MnemoHero";

export const meta = {
  description: "MNEMO case study hero.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function MnemoHeroPreview() {
  return <MnemoHero />;
}
