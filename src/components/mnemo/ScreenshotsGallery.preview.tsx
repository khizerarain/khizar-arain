import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { ScreenshotsGallery } from "./ScreenshotsGallery";

export const meta = {
  description: "MNEMO screenshots gallery.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function ScreenshotsGalleryPreview() {
  return <ScreenshotsGallery />;
}
