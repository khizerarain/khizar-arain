import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { cliTools } from "@/lib/projects-showcase";
import { CliTools } from "./CliTools";

export const meta = {
  description: "Grid of published CLI tools with install commands.",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function CliToolsPreview() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <CliTools tools={cliTools} />
    </div>
  );
}
