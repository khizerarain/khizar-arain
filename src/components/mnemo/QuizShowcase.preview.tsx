import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { QuizShowcase } from "./QuizShowcase";

export const meta = {
  description: "MNEMO quiz interface showcase.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function QuizShowcasePreview() {
  return <QuizShowcase />;
}
