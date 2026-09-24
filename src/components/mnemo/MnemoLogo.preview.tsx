import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { MnemoLogo } from "./MnemoLogo";

export const meta = {
  description: "MNEMO logo mark with optional wordmark.",
} satisfies ComponentPreviewMeta;

export default function MnemoLogoPreview() {
  return (
    <div className="flex items-center gap-8">
      <MnemoLogo />
      <MnemoLogo size={32} showText={false} />
    </div>
  );
}
