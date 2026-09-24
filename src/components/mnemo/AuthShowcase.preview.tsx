import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { AuthShowcase } from "./AuthShowcase";

export const meta = {
  description: "MNEMO authentication screens.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function AuthShowcasePreview() {
  return <AuthShowcase />;
}
