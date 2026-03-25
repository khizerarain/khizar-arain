"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Lenis?: any;
  }
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(s);
  });
}

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;
    let rafId = 0;

    (async () => {
      // Lenis is loaded via CDN because npm installs are unreliable in this environment.
      await loadScript("https://cdn.jsdelivr.net/npm/lenis@1.0.42/dist/lenis.min.js");
      if (cancelled) return;

      const Lenis = window.Lenis;
      if (!Lenis) return;

      const lenis = new Lenis({
        lerp: 0.08, // buttery smoothness
        smoothTouch: false,
        getDirection: true,
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      // Keep ScrollTrigger in sync if it exists.
      lenis.on?.("scroll", () => {
        const st = (window as any).gsap?.ScrollTrigger;
        st?.update?.();
      });
    })().catch(() => {
      // If Lenis fails, the page still works with default scrolling.
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy?.();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}

