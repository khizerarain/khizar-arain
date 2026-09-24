import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { ScrollArea } from "./scroll-area";

export const meta = {
  description: "Scrollable region with a styled scrollbar.",
} satisfies ComponentPreviewMeta;

const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

export default function ScrollAreaPreview() {
  return (
    <ScrollArea className="h-36 w-full max-w-xs rounded-xl border border-border bg-card">
      <ul className="p-4 text-sm text-foreground">
        {items.map((item) => (
          <li key={item} className="border-b border-border py-2 last:border-0">
            {item}
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
