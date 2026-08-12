"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

/** Monospace install command with an inline copy affordance. */
export function CopyCommand({
  command,
  className,
}: {
  command: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
    } catch {
      return;
    }
    setCopied(true);
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy command: ${command}`}
      className={cn(
        "group inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-foreground/25",
        className,
      )}
    >
      <span className="text-muted-foreground" aria-hidden="true">
        $
      </span>
      {command}
      {copied ? (
        <Check className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
      ) : (
        <Copy
          className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-foreground"
          aria-hidden="true"
        />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}
