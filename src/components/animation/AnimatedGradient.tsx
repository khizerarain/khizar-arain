"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  colors?: string[];
  speed?: number;
}

export function AnimatedGradient({
  className,
  colors = ["#8b5cf6", "#d946ef", "#06b6d4"],
  speed = 8,
}: AnimatedGradientProps) {
  const gradient = `linear-gradient(135deg, ${colors.join(", ")})`;

  return (
    <div
      className={cn("animate-gradient", className)}
      style={{
        background: gradient,
        backgroundSize: "200% 200%",
        animationDuration: `${speed}s`,
      }}
    />
  );
}
