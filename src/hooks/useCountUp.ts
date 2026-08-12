"use client";

import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  /** Final value to count to. */
  target: number;
  /** Animation length in milliseconds. */
  duration?: number;
}

/**
 * Counts from 0 to `target` once the element scrolls into view, driven by
 * requestAnimationFrame. Users who prefer reduced motion get the final value
 * immediately.
 */
export function useCountUp<T extends HTMLElement = HTMLDivElement>({
  target,
  duration = 1600,
}: UseCountUpOptions) {
  const ref = useRef<T>(null);
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasRun.current) return;

    let frame = 0;

    const run = () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        setValue(target);
        return;
      }

      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutExpo keeps the number moving fast then settling.
        const eased =
          progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setValue(Math.round(eased * target));

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return { ref, value };
}
