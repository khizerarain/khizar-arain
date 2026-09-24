import type { ComponentPreviewMeta } from "@/lib/component-preview";
import MarkdownRenderer from "./MarkdownRenderer";

export const meta = {
  description: "Renders Markdown for blog posts and project case studies.",
} satisfies ComponentPreviewMeta;

const sample = `### Rendered from Markdown

Supports **bold**, _italics_, [links](/projects), and \`inline code\`.

- Lists
- Code blocks
- Images and tables
`;

export default function MarkdownRendererPreview() {
  return (
    <div className="prose-custom w-full max-w-md">
      <MarkdownRenderer shiftHeadings={false}>{sample}</MarkdownRenderer>
    </div>
  );
}
