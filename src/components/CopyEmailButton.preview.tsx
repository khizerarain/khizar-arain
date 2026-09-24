import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { CopyEmailButton } from "./CopyEmailButton";

export const meta = {
  description: "Copies the contact email to the clipboard with a tooltip confirmation.",
} satisfies ComponentPreviewMeta;

export default function CopyEmailButtonPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <CopyEmailButton />
      <CopyEmailButton variant="ghost" />
    </div>
  );
}
