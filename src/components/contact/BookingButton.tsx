import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingUrl, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BookingButton({
  label,
  size = "lg",
  className,
}: {
  label: string;
  size?: "lg" | "default";
  className?: string;
}) {
  if (bookingUrl) {
    return (
      <Button size={size} className={cn("rounded-full px-6", className)} asChild>
        <a href={bookingUrl} target="_blank" rel="noreferrer">
          {label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </Button>
    );
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <Button
        size={size}
        className={cn("rounded-full px-6", className)}
        asChild
      >
        <a href="#contact-form">
          {label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </Button>
      <p className="max-w-sm font-mono text-xs text-muted-foreground">
        [ADD BOOKING LINK] — drop a Cal.com or Calendly URL into{" "}
        <code>bookingUrl</code> in <code>src/lib/site.ts</code>. Until then this
        jumps to the form. Or email{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="underline decoration-border underline-offset-2 hover:text-foreground"
        >
          {siteConfig.email}
        </a>
        .
      </p>
    </div>
  );
}
