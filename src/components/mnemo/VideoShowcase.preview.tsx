import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { VideoShowcase } from "./VideoShowcase";

export const meta = {
  description: "MNEMO video walkthrough.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function VideoShowcasePreview() {
  return <VideoShowcase />;
}
