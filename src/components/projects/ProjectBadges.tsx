import React from "react";
import { Badge } from "@/components/ui/badge";
import type { ProjectCategory } from "@/lib/projects-showcase";
import { cn } from "@/lib/utils";

/**
 * Subtle category tints. Each foreground is a 700-weight colour so it stays
 * legible on the warm off-white background.
 */
const categoryStyles: Record<ProjectCategory, string> = {
  AI: "border-violet-600/25 bg-violet-500/10 text-violet-700",
  CLI: "border-emerald-600/25 bg-emerald-500/10 text-emerald-700",
  Brand: "border-amber-700/25 bg-amber-500/10 text-amber-700",
};

export function CategoryBadge({
  category,
  className,
}: {
  category: ProjectCategory;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full px-2.5 text-[11px] font-medium",
        categoryStyles[category],
        className,
      )}
    >
      {category}
    </Badge>
  );
}

export function StatusBadge({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  const isActive = status.toLowerCase() === "active";

  return (
    <Badge
      variant="outline"
      className={cn("gap-1.5 rounded-full px-2.5 text-[11px]", className)}
    >
      {isActive && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-emerald-500"
          aria-hidden="true"
        />
      )}
      {status}
    </Badge>
  );
}
