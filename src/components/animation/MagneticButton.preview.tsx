import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "./MagneticButton";

export const meta = {
  description: "Pulls its child toward the cursor on hover.",
} satisfies ComponentPreviewMeta;

export default function MagneticButtonPreview() {
  return (
    <MagneticButton>
      <Button className="rounded-full px-6">Hover near me</Button>
    </MagneticButton>
  );
}
