import type { ComponentPreviewMeta } from "@/lib/component-preview";
import Navbar from "./Navbar";

export const meta = {
  description: "Fixed site header with desktop links and a mobile sheet menu.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function NavbarPreview() {
  return (
    <div className="h-18">
      <Navbar />
    </div>
  );
}
