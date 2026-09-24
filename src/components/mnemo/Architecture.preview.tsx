import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Architecture } from "./Architecture";

export const meta = {
  description: "MNEMO system architecture diagram.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function ArchitecturePreview() {
  return <Architecture />;
}
