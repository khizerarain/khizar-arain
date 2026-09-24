import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Skeleton } from "./skeleton";

export const meta = {
  description: "Loading placeholder.",
} satisfies ComponentPreviewMeta;

export default function SkeletonPreview() {
  return (
    <div className="flex w-full max-w-xs items-center gap-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
