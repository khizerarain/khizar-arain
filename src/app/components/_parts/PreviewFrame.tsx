"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface PreviewFrameProps {
  children: ReactNode;
  /** Width the content is laid out at before being scaled to fit. */
  width?: number;
  /** Maximum rendered height in px; taller content is clipped with a fade. */
  maxHeight?: number;
}

/**
 * Renders full-width sections at a desktop viewport width and scales them down
 * to fit the card. The transform also contains `position: fixed` children
 * (e.g. the navbar) inside the frame.
 */
export function PreviewFrame({
  children,
  width = 1280,
  maxHeight = 440,
}: PreviewFrameProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const observer = new ResizeObserver(() => {
      const next = outer.clientWidth / width;
      setScale(next);
      setContentHeight(inner.offsetHeight * next);
    });
    observer.observe(outer);
    observer.observe(inner);
    return () => observer.disconnect();
  }, [width]);

  const height = Math.min(contentHeight ?? maxHeight, maxHeight);
  const clipped = contentHeight !== null && contentHeight > maxHeight;

  return (
    <div ref={outerRef} className="relative overflow-hidden" style={{ height }}>
      <div
        ref={innerRef}
        aria-hidden="true"
        inert
        className="origin-top-left"
        style={{ width, transform: `scale(${scale})` }}
      >
        {children}
      </div>
      {clipped && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"
        />
      )}
    </div>
  );
}
