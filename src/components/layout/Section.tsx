import React from "react";
import { cn } from "@/lib/utils";

/** Consistent vertical rhythm and max width for every homepage section. */
export function Section({
  children,
  className,
  id,
  as: Component = "section",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}) {
  return (
    <Component
      id={id}
      className={cn("px-6 py-20 md:py-28", className)}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </Component>
  );
}
