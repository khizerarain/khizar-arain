import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { DashboardShowcase } from "./DashboardShowcase";

export const meta = {
  description: "MNEMO dashboard showcase.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function DashboardShowcasePreview() {
  return <DashboardShowcase />;
}
