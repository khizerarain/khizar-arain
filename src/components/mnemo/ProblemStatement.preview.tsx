import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { ProblemStatement } from "./ProblemStatement";

export const meta = {
  description: "MNEMO problem statement.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function ProblemStatementPreview() {
  return <ProblemStatement />;
}
