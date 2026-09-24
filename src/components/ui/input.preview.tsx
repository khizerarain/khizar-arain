import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Input } from "./input";

export const meta = {
  description: "Text input styled with the site's border and ring tokens.",
} satisfies ComponentPreviewMeta;

export default function InputPreview() {
  return <Input className="max-w-xs" placeholder="you@company.com" type="email" />;
}
