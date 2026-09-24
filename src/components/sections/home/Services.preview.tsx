import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Services } from "./Services";

export const meta = {
  description: "Services overview section.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function ServicesPreview() {
  return <Services />;
}
