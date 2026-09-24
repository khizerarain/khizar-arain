import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { WhatIsMnemo } from "./WhatIsMnemo";

export const meta = {
  description: "MNEMO overview section.",
  layout: "frame",
  dark: true,
} satisfies ComponentPreviewMeta;

export default function WhatIsMnemoPreview() {
  return <WhatIsMnemo />;
}
