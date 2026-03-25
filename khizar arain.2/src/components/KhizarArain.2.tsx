"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
};

function Modal({ open, title, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="aa-modalOverlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="aa-modal"
            initial={{ y: 24, opacity: 0, scale: 0.99 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="aa-modalHeader">
              <div className="aa-modalTitle">{title}</div>
              <button className="aa-closeBtn" onClick={onClose} aria-label="Close modal">
                Close
              </button>
            </div>
            <div className="aa-modalBody">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(!!mq?.matches);
    update();
    if (!mq) return;
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

function splitToLetters(text: string) {
  // Keep spaces as non-breaking spaces so letter stagger feels cinematic.
  return Array.from(text).map((ch) => (ch === " " ? "\u00A0" : ch));
}

function HeroTitle({
  line,
  className,
  staggerDelaySecPerLetter,
}: {
  line: string;
  className?: string;
  staggerDelaySecPerLetter: number;
}) {
  const letters = useMemo(() => splitToLetters(line), [line]);
  return (
    <div className={className ?? ""}>
      {letters.map((ch: string, idx: number) => (
        <motion.span
          key={`${ch}-${idx}`}
          className="aa-heroLetter"
          initial={{ opacity: 0, y: 26, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: idx * staggerDelaySecPerLetter }}
        >
          {ch}
        </motion.span>
      ))}
    </div>
  );
}

function CursorButton({
  label,
  onClick,
  variant,
}: {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
}) {
  const v = variant ?? "primary";
  return (
    <motion.button
      className={`aa-btn ${v === "ghost" ? "aa-btnGhost" : "aa-btnPrimary"}`}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        letterSpacing: "0.04em",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.4), 0 0 28px rgba(255,255,255,0.14)",
      }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
    >
      <span className="aa-btnText">{label}</span>
      <span className="aa-btnSheen" aria-hidden="true" />
    </motion.button>
  );
}

function UnderlineNavLink({ label, href, onClick }: { label: string; href?: string; onClick?: () => void }) {
  return (
    <a
      className="aa-navLink"
      href={href ?? "#"}
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!href) e.preventDefault();
        onClick?.();
      }}
    >
      <span className="aa-navLinkText">{label}</span>
      <span className="aa-navUnderline" aria-hidden="true" />
    </a>
  );
}

function SectionReveal({ children, className, idx }: { children: React.ReactNode; className?: string; idx: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      end: "top 60%",
      scrub: true,
      onUpdate: (self: any) => {
        const p = self.progress;
        // Ease in a bit; stays subtle and premium.
        const eased = gsap.utils.interpolate(0, 1, Math.min(1, Math.max(0, (p - 0.05) / 0.95)));
        el.style.opacity = String(0 + eased);
        el.style.transform = `translate3d(0, ${50 * (1 - eased)}px, 0)`;
      },
    });
    return () => { st.kill(); };
  }, [idx]);

  return (
    <div ref={ref} className={className ?? ""} style={{ opacity: 0, transform: "translate3d(0,50px,0)" }}>
      {children}
    </div>
  );
}

function ParallaxBox({
  className,
  speed,
  strength = 56,
}: {
  className?: string;
  speed: number; // 0.3x, 0.6x, 1x
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.closest("[data-aa-section]") as HTMLElement | null;
    if (!parent) return;

    const st = ScrollTrigger.create({
      trigger: parent,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const y = (self.progress - 0.5) * 2 * strength * speed;
        gsap.set(el, { y });
      },
    });
    return () => { st.kill(); };
  }, [speed, strength]);

  return <div ref={ref} className={className} />;
}

export default function AnalogueAgency() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);

  const heroLineTightened = "0.08em";
  const heroLineWide = "0.5em";

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (prefersReducedMotion) return;

    const heroLines = root.querySelectorAll<HTMLElement>("[data-aa-heroline]");
    const bg1 = root.querySelector<HTMLElement>("[data-aa-bg1]");
    const bg2 = root.querySelector<HTMLElement>("[data-aa-bg2]");

    // Hero letter-spacing scrub.
    if (heroLines.length) {
      heroLines.forEach((hero: HTMLElement) => {
        gsap.set(hero, { letterSpacing: heroLineWide });
        gsap.to(hero, {
          letterSpacing: heroLineTightened,
          ease: "none",
          scrollTrigger: {
            trigger: root.querySelector("[data-aa-hero]"),
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }

    // Very subtle geometric/noise parallax.
    const triggers = [bg1, bg2].filter(Boolean) as HTMLElement[];
    if (triggers.length) {
      triggers.forEach((el, i) => {
        const factor = i === 0 ? 12 : 22;
        gsap.to(el, {
          y: -factor,
          ease: "none",
          scrollTrigger: {
            trigger: root.querySelector("[data-aa-hero]"),
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (prefersReducedMotion) return;

    const media = root.querySelector<HTMLElement>("[data-aa-casemedia]");
    if (!media) return;

    const st = gsap.fromTo(
      media,
      { scale: 1 },
      {
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: media,
          start: "top 85%",
          end: "bottom 25%",
          scrub: true,
        },
      }
    );

    return () => { st.kill(); };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Clean up ScrollTrigger on unmount (helps when pasting into editor hot reload).
    return () => { ScrollTrigger.getAll().forEach((t: any) => t.kill()); };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (prefersReducedMotion) return;

    // Horizontal gallery: map vertical scroll to horizontal translate.
    const gallery = root.querySelector<HTMLElement>("[data-aa-gallery]");
    const galleryTrack = root.querySelector<HTMLElement>("[data-aa-gallerytrack]");
    if (!gallery || !galleryTrack) return;

    const pinSpacer = gallery;
    const st = ScrollTrigger.create({
      trigger: gallery,
      start: "top top",
      end: () => `+=${Math.max(0, galleryTrack.scrollWidth - gallery.clientWidth + 1)}px`,
      scrub: true,
      pin: pinSpacer,
      anticipatePin: 1,
      onUpdate: (self: any) => {
        const maxX = galleryTrack.scrollWidth - gallery.clientWidth;
        const x = maxX * self.progress;
        gsap.set(galleryTrack, { x: -x });
      },
    });

    return () => { st.kill(); };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (prefersReducedMotion) {
      // Keep minimal smoothness on reduced motion.
      return;
    }

    // Lenis smooth scroll (but still allow ScrollTrigger to drive animations).
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      lerp: 0.08,
      wheelMultiplier: 1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      // Keep ScrollTrigger in sync with Lenis.
      ScrollTrigger.update();
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (prefersReducedMotion) return;

    // Final CTA brief pin near the bottom.
    const cta = root.querySelector<HTMLElement>("[data-aa-ctapin]");
    if (!cta) return;
    const st = ScrollTrigger.create({
      trigger: cta,
      start: "top 85%",
      end: "+=260",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      onEnter: () => gsap.set(cta, { opacity: 1 }),
    });
    return () => { st.kill(); };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (prefersReducedMotion) return;

    // "Scroll indicator fades after 3 seconds".
    const indicator = root.querySelector<HTMLElement>("[data-aa-scrollindicator]");
    if (!indicator) return;
    const to = window.setTimeout(() => {
      gsap.to(indicator, { opacity: 0, duration: 0.45, ease: "power2.out" });
    }, 3000);
    return () => window.clearTimeout(to);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (prefersReducedMotion) return;

    // Header blur/transparency on scroll.
    const header = root.querySelector<HTMLElement>("[data-aa-header]");
    if (!header) return;
    gsap.to(header, {
      backgroundColor: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(10px)",
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "+=160",
        scrub: true,
      },
    });
  }, [prefersReducedMotion]);

  // Drag-to-scroll gallery feel (in addition to ScrollTrigger scrub).
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const galleryViewport = root.querySelector<HTMLElement>("[data-aa-galleryviewport]");
    const galleryTrack = root.querySelector<HTMLElement>("[data-aa-gallerytrack]");
    if (!galleryViewport || !galleryTrack) return;

    let isDown = false;
    let startX = 0;
    let startLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.clientX;
      startLeft = galleryTrack.offsetLeft;
      (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
      galleryViewport.style.cursor = "grabbing";
    };
    const onPointerUp = () => {
      isDown = false;
      galleryViewport.style.cursor = "grab";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      // Because GSAP drives x translate, we only provide a little "feel" drag by adjusting container scroll-like offset.
      // This is intentionally subtle so ScrollTrigger remains authoritative.
      const maxX = Math.max(0, galleryTrack.scrollWidth - galleryViewport.clientWidth);
      const currentX = Number(gsap.getProperty(galleryTrack, "x"));
      const currentOffset = -currentX; // we store horizontal offset as positive
      const nextOffset = Math.min(maxX, Math.max(0, currentOffset - dx));
      gsap.set(galleryTrack, { x: -nextOffset });
    };

    galleryViewport.style.cursor = "grab";
    galleryViewport.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointermove", onPointerMove);
    return () => {
      galleryViewport.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  const heroSubtitle = "Whether it’s a product or a service, people choose with their hearts, not just their heads. We create the world your product lives in.";

  const styles = `
    :root{
      --bg:#000000;
      --fg:#FFFFFF;
      --muted: rgba(255,255,255,0.72);
    }
    .aa-root{
      min-height: 100vh;
      background: var(--bg);
      color: var(--fg);
      font-family: ui-sans-serif, system-ui, -apple-system, "Neue Haas Grotesk", "Helvetica Neue", Arial, sans-serif;
      overflow-x: hidden;
    }
    .aa-header{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      padding: 22px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: background-color 0.2s ease, backdrop-filter 0.2s ease;
      background: rgba(0,0,0,0.02);
      backdrop-filter: blur(0px);
    }
    .aa-brand{
      font-weight: 800;
      letter-spacing: 0.01em;
      font-size: 22px;
      line-height: 1;
      user-select: none;
    }
    .aa-nav{
      display: flex;
      gap: 28px;
      align-items: center;
    }
    .aa-navLink{
      position: relative;
      display: inline-flex;
      align-items: center;
      color: var(--fg);
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 0.01em;
      padding: 8px 0;
      cursor: pointer;
    }
    .aa-navLinkText{
      transition: letter-spacing 220ms ease;
    }
    .aa-navLink:hover .aa-navLinkText{
      letter-spacing: 0.06em;
    }
    .aa-navUnderline{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 4px;
      height: 1px;
      background: var(--fg);
      transform-origin: left;
      transform: scaleX(0);
      transition: transform 260ms ease;
    }
    .aa-navLink:hover .aa-navUnderline{
      transform: scaleX(1);
    }

    .aa-section{
      position: relative;
      padding: 90px 28px;
    }

    [data-aa-hero]{
      padding-top: 110px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .aa-heroBg{
      position:absolute;
      inset:0;
      pointer-events:none;
      opacity: 0.45;
      filter: contrast(105%) brightness(103%);
    }
    .aa-heroBgLayer{
      position:absolute;
      inset:-20%;
      background-image:
        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), rgba(255,255,255,0) 55%),
        radial-gradient(circle at 80% 65%, rgba(255,255,255,0.06), rgba(255,255,255,0) 60%),
        linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
      transform: translate3d(0,0,0);
      mix-blend-mode: screen;
    }
    .aa-heroBgLayer:nth-child(2){
      opacity:0.55;
      background-image:
        repeating-linear-gradient(120deg, rgba(255,255,255,0.05), rgba(255,255,255,0) 8px),
        repeating-linear-gradient(35deg, rgba(255,255,255,0.03), rgba(255,255,255,0) 10px);
      filter: blur(0.2px);
    }

    .aa-heroTitleWrap{
      position: relative;
      z-index: 2;
    }
    .aa-heroTitle{
      font-weight: 900;
      font-size: clamp(44px, 7.2vw, 96px);
      letter-spacing: 0.5em;
      line-height: 0.98;
      margin: 0;
      text-transform: none;
      user-select: none;
      white-space: nowrap;
    }
    .aa-heroLetter{
      display: inline-block;
      will-change: transform;
    }
    .aa-heroSubtitle{
      margin-top: 26px;
      font-size: clamp(14px, 1.7vw, 18px);
      max-width: 860px;
      color: var(--muted);
      line-height: 1.55;
      z-index: 2;
      letter-spacing: 0.01em;
    }
    .aa-scrollIndicator{
      position:absolute;
      bottom: 22px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      opacity: 1;
      z-index: 3;
    }

    .aa-btn{
      border: 1px solid rgba(255,255,255,0.75);
      background: rgba(0,0,0,0.2);
      color: var(--fg);
      padding: 14px 18px;
      border-radius: 999px;
      font-weight: 700;
      letter-spacing: 0.02em;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .aa-btnText{
      display: inline-block;
      position: relative;
      z-index: 2;
    }
    .aa-btnSheen{
      content: "";
      position:absolute;
      inset: -60% -30%;
      background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.18), rgba(255,255,255,0));
      transform: translateX(-30%) rotate(12deg);
      opacity: 0;
      transition: opacity 240ms ease;
      z-index: 1;
      pointer-events:none;
    }
    .aa-btn:hover .aa-btnSheen{
      opacity: 1;
      animation: aa-sheen 900ms ease-out;
    }
    @keyframes aa-sheen{
      0%{ transform: translateX(-40%) rotate(12deg); }
      100%{ transform: translateX(40%) rotate(12deg); }
    }

    .aa-btnPrimary{
      box-shadow: 0 0 0 1px rgba(255,255,255,0.18) inset;
    }
    .aa-btnGhost{
      background: transparent;
      box-shadow: none;
    }

    .aa-grid2{
      display:grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 24px;
      align-items: center;
    }
    .aa-kicker{
      color: rgba(255,255,255,0.74);
      font-size: 14px;
      letter-spacing: 0.02em;
      margin-bottom: 18px;
      font-weight: 600;
    }
    .aa-h2{
      font-size: clamp(28px, 4.2vw, 56px);
      font-weight: 900;
      margin: 0;
      letter-spacing: 0.01em;
      line-height: 1.03;
    }
    .aa-p{
      color: rgba(255,255,255,0.74);
      font-size: 16px;
      line-height: 1.6;
      max-width: 760px;
      margin-top: 16px;
    }
    .aa-row{
      display:flex;
      align-items: center;
      justify-content: space-between;
      gap: 22px;
      flex-wrap: wrap;
    }

    .aa-card{
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 18px;
      overflow:hidden;
      background: rgba(255,255,255,0.02);
    }

    .aa-media{
      height: 420px;
      border-radius: 18px;
      overflow: hidden;
      position: relative;
    }
    .aa-mediaLayer{
      position:absolute;
      inset:-18%;
      will-change: transform;
      background:
        radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), rgba(255,255,255,0) 58%),
        radial-gradient(circle at 80% 60%, rgba(255,255,255,0.08), rgba(255,255,255,0) 60%),
        linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
      opacity: 0.95;
      transform: translate3d(0,0,0);
    }
    .aa-layerA{ opacity: 0.92; }
    .aa-layerB{ opacity: 0.78; filter: blur(0.2px); }
    .aa-layerC{ opacity: 0.6; filter: blur(0.6px); }
    .aa-media::before{
      content:"";
      position:absolute;
      inset:-30%;
      background:
        radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), rgba(255,255,255,0) 60%),
        radial-gradient(circle at 70% 60%, rgba(255,255,255,0.06), rgba(255,255,255,0) 55%),
        linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0));
      transform: translate3d(0,0,0);
      opacity: 0.9;
    }
    .aa-mediaOverlay{
      position:absolute;
      inset:0;
      background: radial-gradient(circle at 50% 20%, rgba(0,0,0,0), rgba(0,0,0,0.75) 68%, rgba(0,0,0,0.9) 100%);
    }
    .aa-sectionHeader{
      margin-bottom: 22px;
    }

    .aa-teamGrid{
      display:grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 14px;
    }
    .aa-teamCard{
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.12);
      overflow:hidden;
      background: rgba(255,255,255,0.02);
      position: relative;
      height: 320px;
      display:flex;
      flex-direction: column;
      justify-content:flex-end;
    }
    .aa-teamImg{
      position:absolute;
      inset:0;
      background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01)),
        radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), rgba(255,255,255,0) 62%),
        radial-gradient(circle at 70% 70%, rgba(255,255,255,0.06), rgba(255,255,255,0) 58%),
        linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0));
      transform: scale(1.02);
      transition: transform 340ms ease;
      will-change: transform;
    }
    .aa-teamCard:hover .aa-teamImg{
      transform: scale(1.1);
    }
    .aa-teamName{
      position: relative;
      z-index: 2;
      padding: 14px 14px 12px;
      background: linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.78) 30%, rgba(0,0,0,0.92) 100%);
      transform: translateY(14px);
      opacity: 0;
      transition: opacity 260ms ease, transform 260ms ease;
      font-weight: 800;
      letter-spacing: 0.02em;
    }
    .aa-teamCard:hover .aa-teamName{
      opacity: 1;
      transform: translateY(0);
    }

    .aa-contactGrid{
      display:grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
    }
    .aa-contactItem{
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 16px;
      padding: 20px;
      background: rgba(255,255,255,0.02);
      min-height: 130px;
    }
    .aa-icon{
      width: 26px;
      height: 26px;
      display:block;
      margin-bottom: 14px;
      opacity: 0.95;
    }
    .aa-contactLabel{
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: 15px;
      margin-bottom: 6px;
    }
    .aa-contactValue{
      color: rgba(255,255,255,0.74);
      line-height: 1.55;
      font-size: 14px;
    }

    .aa-servicesGrid{
      display:grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }
    .aa-serviceBlock{
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 18px;
      padding: 22px;
      background: rgba(255,255,255,0.02);
      transition: transform 220ms ease, box-shadow 220ms ease;
      min-height: 210px;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .aa-serviceBlock:hover{
      transform: translateY(-20px);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.18) inset, 0 0 32px rgba(255,255,255,0.08);
    }
    .aa-serviceTitle{
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 0.01em;
    }
    .aa-serviceDesc{
      margin-top: 12px;
      color: rgba(255,255,255,0.74);
      line-height: 1.65;
      font-size: 14px;
    }

    .aa-workWrap{
      border-top: 1px solid rgba(255,255,255,0.08);
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .aa-gallery{
      position: relative;
      padding: 26px 0;
    }
    .aa-galleryViewport{
      width: 100%;
      overflow:hidden;
      cursor: grab;
    }
    .aa-galleryTrack{
      display:flex;
      gap: 16px;
      padding: 0 28px;
      will-change: transform;
    }
    .aa-workCard{
      width: min(420px, 72vw);
      height: 320px;
      border-radius: 18px;
      overflow:hidden;
      position: relative;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.02);
      flex: 0 0 auto;
    }
    .aa-workImg{
      position:absolute;
      inset:0;
      background:
        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.10), rgba(255,255,255,0) 58%),
        radial-gradient(circle at 80% 60%, rgba(255,255,255,0.08), rgba(255,255,255,0) 60%),
        linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
      transform: scale(1.02);
      transition: transform 280ms ease;
    }
    .aa-workCard:hover .aa-workImg{
      transform: scale(1.08);
    }
    .aa-workOverlay{
      position:absolute;
      inset:0;
      background: rgba(0,0,0,0.18);
      transition: background 280ms ease;
    }
    .aa-workCard:hover .aa-workOverlay{
      background: rgba(0,0,0,0.55);
    }
    .aa-workTitle{
      position:absolute;
      bottom: 16px;
      left: 16px;
      right: 16px;
      font-weight: 900;
      letter-spacing: 0.01em;
      font-size: 18px;
      display:flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 14px;
      z-index: 2;
    }
    .aa-workTag{
      color: rgba(255,255,255,0.7);
      font-size: 12px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 800;
    }

    .aa-aboutBig{
      font-size: clamp(18px, 2.4vw, 28px);
      line-height: 1.45;
      font-weight: 800;
      color: rgba(255,255,255,0.85);
      max-width: 980px;
      margin: 0 auto;
      letter-spacing: 0.01em;
    }

    .aa-cta{
      min-height: 60vh;
      padding-top: 120px;
      padding-bottom: 120px;
      display:flex;
      align-items: center;
      justify-content: center;
      text-align:center;
      border-top: 1px solid rgba(255,255,255,0.08);
    }
    .aa-ctaInner{
      display:flex;
      flex-direction: column;
      gap: 26px;
      align-items: center;
      justify-content:center;
    }
    .aa-ctaText{
      font-weight: 950;
      font-size: clamp(44px, 6vw, 96px);
      letter-spacing: 0.06em;
      line-height: 1;
      user-select: none;
    }

    .aa-modalOverlay{
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.75);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index: 1000;
      padding: 20px;
    }
    .aa-modal{
      width: min(860px, 100%);
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.14);
      background: rgba(0,0,0,0.72);
      backdrop-filter: blur(10px);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.06) inset, 0 30px 80px rgba(0,0,0,0.7);
      overflow:hidden;
    }
    .aa-modalHeader{
      padding: 18px 18px 10px;
      display:flex;
      align-items:center;
      justify-content: space-between;
      gap: 12px;
      border-bottom: 1px solid rgba(255,255,255,0.10);
    }
    .aa-modalTitle{
      font-weight: 950;
      letter-spacing: 0.02em;
      font-size: 16px;
    }
    .aa-closeBtn{
      background: transparent;
      border: 1px solid rgba(255,255,255,0.18);
      color: rgba(255,255,255,0.92);
      padding: 10px 14px;
      border-radius: 999px;
      font-weight: 800;
      cursor: pointer;
    }
    .aa-modalBody{
      padding: 18px;
      color: rgba(255,255,255,0.74);
      line-height: 1.7;
      font-size: 14px;
    }

    footer{
      padding: 46px 28px 70px;
      border-top: 1px solid rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.74);
    }
    .aa-footerRow{
      display:flex;
      justify-content: space-between;
      align-items:flex-start;
      gap: 20px;
      flex-wrap: wrap;
    }
    .aa-footerLinks{
      display:flex;
      gap: 22px;
      flex-wrap: wrap;
    }
    .aa-footerLink{
      color: rgba(255,255,255,0.78);
      text-decoration: none;
      font-weight: 700;
      letter-spacing: 0.01em;
      position: relative;
      padding-bottom: 6px;
    }
    .aa-footerLink::after{
      content:"";
      position:absolute;
      left:0;
      right:0;
      bottom:0;
      height:1px;
      background: rgba(255,255,255,0.9);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 260ms ease;
    }
    .aa-footerLink:hover::after{
      transform: scaleX(1);
    }
    .aa-social{
      display:flex;
      gap: 14px;
      align-items:center;
    }
    .aa-social a{
      width: 36px;
      height: 36px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.16);
      display:flex;
      align-items:center;
      justify-content:center;
      color: rgba(255,255,255,0.84);
      text-decoration:none;
      transition: transform 200ms ease, box-shadow 200ms ease;
    }
    .aa-social a:hover{
      transform: scale(1.05);
      box-shadow: 0 0 26px rgba(255,255,255,0.12);
    }

    /* Mobile: simplify motion and layout. */
    @media (max-width: 900px){
      .aa-header{ padding: 18px 18px; }
      .aa-teamGrid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .aa-grid2{ grid-template-columns: 1fr; }
      .aa-servicesGrid{ grid-template-columns: 1fr; }
      .aa-contactGrid{ grid-template-columns: 1fr; }
      .aa-workCard{ height: 280px; }
      [data-aa-hero]{ padding-top: 96px; }
      .aa-heroTitle{ white-space: normal; letter-spacing: 0.18em; }
      .aa-scrollIndicator{ display:none; }
    }
  `;

  const vitraAnnouncement = {
    heading: "Website of the Year",
    sub: "Our latest case for Vitra has won Framer Website of the Year",
  };

  const vitraNewCase = {
    heading: "New case",
    sub: "We’re proud to announce our latest case with Vitra: 100 years Panton",
  };

  const team = [
    { name: "khizar arain", tag: "Full-Stack Developer" },
  
  ];

  const work = [
    { name: "Vitra", tag: "Case" },
    { name: "Studio Atlas", tag: "Brand" },
    { name: "North & Co.", tag: "Digital" },
    { name: "Kinetic", tag: "E-comm" },
    { name: "Morrow", tag: "Touchpoints" },
    { name: "Cinder", tag: "Identity" },
  ];

  return (
    <div ref={rootRef} className="aa-root">
      <style>{styles}</style>

      <header className="aa-header" data-aa-header>
        <div className="aa-brand">khizar arain</div>
        <nav className="aa-nav" aria-label="Primary">
          <UnderlineNavLink
            label="Work"
            onClick={() => rootRef.current?.querySelector<HTMLElement>("[data-aa-work]")?.scrollIntoView({ behavior: "smooth" })}
          />
          <UnderlineNavLink
            label="About"
            onClick={() => rootRef.current?.querySelector<HTMLElement>("[data-aa-about]")?.scrollIntoView({ behavior: "smooth" })}
          />
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section data-aa-hero>
          <div className="aa-heroBg" aria-hidden="true">
            <div data-aa-bg1 className="aa-heroBgLayer" />
            <div data-aa-bg2 className="aa-heroBgLayer" />
          </div>

          <div className="aa-heroTitleWrap">
            <div
              data-aa-heroline
              className="aa-heroTitle"
              // Framer Motion updates letterSpacing via GSAP; initial value set via CSS.
              style={{ letterSpacing: heroLineWide }}
            >
              <HeroTitle line="khizar" staggerDelaySecPerLetter={0.05} />
            </div>
            <div
              data-aa-heroline
              className="aa-heroTitle"
              style={{ letterSpacing: heroLineWide, marginTop: "-0.06em" }}
            >
              <HeroTitle line="arain" staggerDelaySecPerLetter={0.05} />
            </div>
          </div>

          <motion.div
            className="aa-heroSubtitle"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          >
            {heroSubtitle}
          </motion.div>

          <div data-aa-scrollindicator className="aa-scrollIndicator">
            Scroll
          </div>
        </section>

        {/* 1: Website of the Year */}
        <section className="aa-section" data-aa-section>
          <div className="aa-sectionHeader" data-aa-section>
            <SectionReveal idx={1}>
              <div className="aa-row">
                <div>
                  <h2 className="aa-h2">{vitraAnnouncement.heading}</h2>
                  <p className="aa-p" style={{ marginTop: 14 }}>
                    {vitraAnnouncement.sub}
                  </p>
                </div>
                <CursorButton label="See announcement" onClick={() => setModalOpen(true)} />
              </div>
            </SectionReveal>
          </div>
          <div className="aa-media" data-aa-section>
            {/* Replace these placeholder layers with licensed Vitra media (images/videos). */}
            <ParallaxBox speed={0.3} className="aa-mediaLayer aa-layerA" />
            <ParallaxBox speed={0.6} className="aa-mediaLayer aa-layerB" />
            <ParallaxBox speed={1} className="aa-mediaLayer aa-layerC" strength={64} />
            <div className="aa-mediaOverlay" />
          </div>
        </section>

        {/* 2: New case */}
        <section className="aa-section" data-aa-section>
          <SectionReveal idx={2}>
            <div className="aa-grid2" data-aa-section>
              <div>
                <h2 className="aa-h2">{vitraNewCase.heading}</h2>
                <p className="aa-p">
                  {vitraNewCase.sub}
                </p>
                <div style={{ marginTop: 22 }}>
                  <CursorButton label="Learn more" onClick={() => setLearnMoreOpen(true)} />
                </div>
              </div>
              <div className="aa-media" data-aa-casemedia data-aa-section>
                <ParallaxBox speed={0.3} className="aa-mediaLayer aa-layerA" strength={42} />
                <ParallaxBox speed={0.6} className="aa-mediaLayer aa-layerB" strength={56} />
                <ParallaxBox speed={1} className="aa-mediaLayer aa-layerC" strength={74} />
                <div className="aa-mediaOverlay" />
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* 3: Our team */}
        <section className="aa-section" data-aa-section>
          <SectionReveal idx={3}>
            <div className="aa-row" data-aa-section>
              <div>
                <div className="aa-kicker">One Man, big results.</div>
                <h2 className="aa-h2">My self</h2>
              </div>
              <CursorButton label="Learn more" />
            </div>
          </SectionReveal>
          <div style={{ height: 26 }} />
          <div className="aa-teamGrid" data-aa-section>
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                className="aa-teamCard"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.2, once: false }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.06 }}
                aria-label={`Team member ${t.name}`}
              >
                <div className="aa-teamImg" />
                <div className="aa-teamName">
                  {t.name} <span style={{ color: "rgba(255,255,255,0.72)", fontWeight: 700 }}>— {t.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4: Contact */}
        <section className="aa-section" data-aa-section id="contact">
          <SectionReveal idx={4}>
            <div className="aa-row">
              <div>
                <div className="aa-kicker">By mail, phone or book a call.</div>
                <h2 className="aa-h2">Contact</h2>
              </div>
              <CursorButton label="Learn more" />
            </div>
          </SectionReveal>
          <div style={{ height: 26 }} />
          <div className="aa-contactGrid" data-aa-section>
            <div className="aa-contactItem">
              <svg className="aa-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4.5 7.5l7.5 5 7.5-5" />
                <rect x="4.5" y="6" width="15" height="12.5" rx="2" />
              </svg>
              <div className="aa-contactLabel">Mail</div>
              <div className="aa-contactValue">realkhizararain7@gmail.com</div>
            </div>
            <div className="aa-contactItem">
              <svg className="aa-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M7 3.8h2.2l1.2 4-1.2 1.2c1.5 3 3.6 5.2 6.6 6.6l1.2-1.2 4 1.2V19c0 .6-.4 1-1 1-8.6 0-15.6-7-15.6-15.6 0-.6.4-1 1-1z" />
              </svg>
              <div className="aa-contactLabel">Phone</div>
              <div className="aa-contactValue">03103080347</div>
            </div>
            <div className="aa-contactItem">
              <svg className="aa-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="4.8" y="6.5" width="14.2" height="14.2" rx="2" />
                <path d="M8 3.8v5" />
                <path d="M16 3.8v5" />
                <path d="M4.8 10h14.2" />
              </svg>
              <div className="aa-contactLabel">Calendar</div>
              <div className="aa-contactValue">Book a 20-minute intro call</div>
            </div>
          </div>
        </section>

        {/* 5: Our Services */}
        <section className="aa-section" data-aa-section id="services">
          <SectionReveal idx={5}>
            <div className="aa-row">
              <div>
                <h2 className="aa-h2">Our Services</h2>
              </div>
            </div>
          </SectionReveal>
          <div style={{ height: 26 }} />
          <div className="aa-servicesGrid" data-aa-section>
            <div className="aa-serviceBlock">
              <div>
                <div className="aa-serviceTitle">Front end And Back end. Developer</div>
                <div className="aa-serviceDesc">
                  We define your brand through strategy, branding design and touchpoints.
                </div>
              </div>
              <div style={{ height: 8 }} />
            </div>
            <div className="aa-serviceBlock">
              <div>
                <div className="aa-serviceTitle">(no-code) E-commerce</div>
                <div className="aa-serviceDesc">
                  Over 2 years of experience in e-commerce. We partner with Shopify plus partners for development.
                </div>
              </div>
              <div style={{ height: 8 }} />
            </div>
          </div>
        </section>

        {/* 6: Our Work */}
        <section className="aa-section aa-workWrap" data-aa-work id="work">
          <SectionReveal idx={6}>
            <div className="aa-row" style={{ marginBottom: 12 }}>
              <div>
                <h2 className="aa-h2">Our work</h2>
              </div>
              <CursorButton label="See all" />
            </div>
          </SectionReveal>

          <div className="aa-gallery" data-aa-section>
            <div className="aa-galleryViewport" data-aa-galleryviewport>
              <div className="aa-galleryTrack" data-aa-gallerytrack data-aa-gallery>
                {work.map((p, i) => (
                  <div key={p.name + i} className="aa-workCard" aria-label={`Project ${p.name}`}>
                    <div className="aa-workImg" />
                    <div className="aa-workOverlay" />
                    <div className="aa-workTitle">
                      <div>{p.name}</div>
                      <div className="aa-workTag">{p.tag}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7: About Us */}
        <section className="aa-section" data-aa-about id="about">
          <SectionReveal idx={7}>
            <h2 className="aa-h2" style={{ marginBottom: 18 }}>
              About Us
            </h2>
            <p className="aa-aboutBig">
              Khizar Arain is an award-winning design professional. I help businesses at critical touchpoints define, and build new futures.
            </p>
          </SectionReveal>
        </section>

        {/* Final CTA */}
        <section className="aa-cta" data-aa-ctapin>
          <div className="aa-ctaInner" data-aa-section>
            <div className="aa-ctaText">Ready when you are</div>
            <CursorButton label="Book call" variant="primary" />
          </div>
        </section>
      </main>

      <footer>
        <div className="aa-footerRow">
          <div className="aa-footerLinks" aria-label="Footer links">
            <a className="aa-footerLink" href="#work">
              Work
            </a>
            <a className="aa-footerLink" href="#about">
              About
            </a>
            <a className="aa-footerLink" href="#services">
              Services
            </a>
            <a className="aa-footerLink" href="#contact">
              Contact
            </a>
          </div>
          <div>
            <div style={{ fontWeight: 800, color: "rgba(255,255,255,0.78)", marginBottom: 10 }}>
              © {new Date().getFullYear()} khizar arain
            </div>
            <div className="aa-social" aria-label="Social links">
              <a href="https://x.com/KhizarArain103" aria-label="Twitter">
                X
              </a>
              <a href="https://www.instagram.com/realkhizerarain/" aria-label="Instagram">
                IG
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Behance">
                BE
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Modal open={modalOpen} title="Website of the Year" onClose={() => setModalOpen(false)}>
        <p style={{ marginTop: 0 }}>
          Our latest case for Vitra has won Framer Website of the Year. Replace this copy with your announcement details.
        </p>
        <p>
          For pixel-perfect reproduction you would also replace the placeholder media with licensed Vitra assets (images/videos) and match exact
          dimensions.
        </p>
      </Modal>

      <Modal open={learnMoreOpen} title="Learn more" onClose={() => setLearnMoreOpen(false)}>
        <p style={{ marginTop: 0 }}>
          We’re proud to announce our latest case with Vitra: 100 years Panton. Replace this section with the real case study preview
          content.
        </p>
      </Modal>
    </div>
  );
}

