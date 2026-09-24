import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Packages } from "./Packages";

export const meta = {
  description: "Published PyPI packages with install commands (PackageList is reused on /packages).",
  layout: "frame",
} satisfies ComponentPreviewMeta;

export default function PackagesPreview() {
  return <Packages />;
}
