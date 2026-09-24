import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export const meta = {
  description: "Hover and focus tooltip.",
} satisfies ComponentPreviewMeta;

export default function TooltipPreview() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" className="rounded-full px-6" />}>
        Hover me
      </TooltipTrigger>
      <TooltipContent>Tooltips explain icon-only controls.</TooltipContent>
    </Tooltip>
  );
}
