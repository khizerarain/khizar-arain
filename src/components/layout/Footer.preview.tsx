import type { ComponentPreviewMeta } from "@/lib/component-preview";
import Footer from "./Footer";

export const meta = {
  description: "Site footer with page links, socials, and the ASCII signature.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function FooterPreview() {
  return <Footer />;
}
