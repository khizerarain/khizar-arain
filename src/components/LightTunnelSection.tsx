'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function LightTunnelSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mainTextOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 1, 1]);
  const mainTextScale = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.8, 1, 0.9]);

  const leftSplitX = useTransform(scrollYProgress, [0.25, 0.5], [0, -60]);
  const rightSplitX = useTransform(scrollYProgress, [0.25, 0.5], [0, 60]);
  const splitOpacity = useTransform(scrollYProgress, [0.25, 0.5, 1], [0, 0.8, 0.6]);

  const paragraphOpacity = useTransform(scrollYProgress, [0.45, 0.65, 1], [0, 1, 1]);
  const paragraphY = useTransform(scrollYProgress, [0.45, 0.65], [40, 0]);

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const backgroundParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.1]);

  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 0.8, 0.7]);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-md bg-black/10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-white text-2xl font-bold tracking-wider">Khizar Arain</div>
          <div className="flex gap-12 items-center">
            <NavLink href="#work" label="WORK" />
            <NavLink href="#services" label="SERVICES" />
            <NavLink href="#about" label="ABOUT" />
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
      >
        {/* Background: Light Tunnel Effect */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: backgroundParallax }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient
                id="tunnelGradient"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#a8daff" stopOpacity="0.3" />
                <stop offset="30%" stopColor="#4fa8ff" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#001a4d" stopOpacity="0" />
              </radialGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Center Glow Pulse */}
            <motion.circle
              cx="960"
              cy="540"
              r="200"
              fill="#a8daff"
              opacity={0.2}
              filter="url(#glow)"
              style={{ scale: glowScale, opacity: glowOpacity }}
            />

            {/* Radial Gradient Background */}
            <rect width="1920" height="1080" fill="url(#tunnelGradient)" />

            {/* Animated Light Streaks */}
            {isMounted &&
              Array.from({ length: 24 }).map((_, i) => {
                const angle = (i / 24) * Math.PI * 2;
                const x1 = 960 + Math.cos(angle) * 100;
                const y1 = 540 + Math.sin(angle) * 100;
                const x2 = 960 + Math.cos(angle) * 1200;
                const y2 = 540 + Math.sin(angle) * 1200;

                return (
                  <motion.line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#a8daff"
                    strokeWidth="2"
                    opacity={0.4}
                    filter="url(#glow)"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                      strokeWidth: [1, 3, 1],
                    }}
                    transition={{
                      duration: 3 + (i % 3) * 0.5,
                      repeat: Infinity,
                      delay: (i * 0.15) % 3,
                    }}
                  />
                );
              })}

            {/* Inner Streaks */}
            {isMounted &&
              Array.from({ length: 18 }).map((_, i) => {
                const angle = (i / 18) * Math.PI * 2 + Math.PI / 36;
                const x1 = 960 + Math.cos(angle) * 80;
                const y1 = 540 + Math.sin(angle) * 80;
                const x2 = 960 + Math.cos(angle) * 900;
                const y2 = 540 + Math.sin(angle) * 900;

                return (
                  <motion.line
                    key={`inner-${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#5fa5ff"
                    strokeWidth="1.5"
                    opacity={0.3}
                    filter="url(#glow)"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0.15, 0.4, 0.15],
                      strokeWidth: [0.5, 2, 0.5],
                    }}
                    transition={{
                      duration: 4 + (i % 2) * 0.7,
                      repeat: Infinity,
                      delay: (i * 0.2) % 4,
                    }}
                  />
                );
              })}
          </svg>
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          {/* Main Animated Text */}
          <motion.div
            className="text-center"
            style={{
              opacity: mainTextOpacity,
              scale: mainTextScale,
            }}
          >
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
              Emotion is the heart of
              <br />
              every decision
            </motion.h1>
          </motion.div>

          {/* Split Text Phase */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="w-full flex items-center justify-center gap-8">
              <motion.div
                className="text-center"
                style={{
                  opacity: splitOpacity,
                  x: leftSplitX,
                }}
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                  Emotion is the heart
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                style={{
                  opacity: splitOpacity,
                  x: rightSplitX,
                }}
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                  of every decision
                </p>
              </motion.div>
            </div>
          </div>

          {/* Secondary Paragraph */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-6 sm:px-8"
            style={{
              opacity: paragraphOpacity,
              y: paragraphY,
            }}
          >
            <div className="max-w-3xl text-center">
              <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                Whether it's a product or a service,
                <br />
                people choose with their hearts,
                <br />
                not just their heads. We create the
                <br />
                world your product lives in.
              </p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 flex flex-col items-center gap-2"
            style={{
              opacity: scrollIndicatorOpacity,
            }}
          >
            <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest">
              Scroll
            </p>
            <svg
              className="w-5 h-5 text-gray-400 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-sm font-semibold text-white tracking-wider hover:text-blue-300 transition-colors relative group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
    </a>
  );
}
