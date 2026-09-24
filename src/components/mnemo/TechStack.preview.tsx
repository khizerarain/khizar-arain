import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { TechStack } from "./TechStack";

export const meta = {
  description: "MNEMO tech stack.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function TechStackPreview() {
  return <TechStack />;
}
