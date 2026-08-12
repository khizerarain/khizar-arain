"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MnemoLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function MnemoLogo({ className, size = 40, showText = true }: MnemoLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="mnemoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#mnemoGradient)" fillOpacity="0.15" />
        <path
          d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24"
          stroke="url(#mnemoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M24 18C20.686 18 18 20.686 18 24C18 27.314 20.686 30 24 30C27.314 30 30 27.314 30 24"
          stroke="url(#mnemoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="2" fill="url(#mnemoGradient)" />
        <path
          d="M33 15L36 12M36 12L33 9M36 12H30"
          stroke="url(#mnemoGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span className="text-xl font-semibold tracking-tight text-foreground">
          MNEMO
        </span>
      )}
    </div>
  );
}
