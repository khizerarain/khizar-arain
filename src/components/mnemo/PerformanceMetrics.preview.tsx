import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { PerformanceMetrics } from "./PerformanceMetrics";

export const meta = {
  description: "MNEMO performance metrics.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function PerformanceMetricsPreview() {
  return <PerformanceMetrics />;
}
