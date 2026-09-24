import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { CopyCommand } from "./CopyCommand";

export const meta = {
  description: "Terminal-style install command with a copy button.",
} satisfies ComponentPreviewMeta;

export default function CopyCommandPreview() {
  return <CopyCommand command="pip install sentinel-recon" />;
}
