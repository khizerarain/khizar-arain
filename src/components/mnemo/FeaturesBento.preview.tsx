import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { FeaturesBento } from "./FeaturesBento";

export const meta = {
  description: "MNEMO features bento grid.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function FeaturesBentoPreview() {
  return <FeaturesBento />;
}
