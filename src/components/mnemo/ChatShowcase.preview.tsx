import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { ChatShowcase } from "./ChatShowcase";

export const meta = {
  description: "MNEMO chat interface showcase.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function ChatShowcasePreview() {
  return <ChatShowcase />;
}
