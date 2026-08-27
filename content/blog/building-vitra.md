---
title: "building Vitra: a cinematic brand experience"
slug: "building-vitra"
excerpt: "Designing a motion-driven brand site for 100 years of Panton — Next.js, Framer Motion, and GSAP ScrollTrigger, with reduced-motion as a first-class path, not an afterthought."
category: "Notes"
tags: ["Vitra", "Next.js", "GSAP", "Framer Motion"]
createdAt: "[DATE]"
featured: false
---

Vitra was a motion problem disguised as a website. A century of Panton design doesn't want a grid of product cards. It wants pace: type that holds, scroll that breathes, a palette that gets out of the way.

[Vitra](/projects/vitra) is a Next.js App Router build. GSAP ScrollTrigger drives the cinematic scroll. Framer Motion handles the smaller springs. Tailwind is the system. The page is statically generated so the animation code isn't also doing SSR gymnastics for content that barely changes.

## The constraint

If you animate everything, you animate nothing. The work was choosing a few moments — letter-spacing on the hero, parallax layers in the media blocks, a pinned CTA — and letting the rest of the site be quiet. Monochrome, large type, slow parallax. Furniture already has the color.

`prefers-reduced-motion` is not a CSS one-liner you remember at the end. Lenis plus ScrollTrigger will fight a vestibular system if you let them. The reduced-motion path skips the pin/scrub theater and keeps the layout.

## What was hard

Scroll-linked animation is easy to demo and hard to not break. Pinning a gallery, mapping vertical scroll to a horizontal track, then adding drag — that's three sources of truth if you're sloppy. GSAP has to stay authoritative or the gallery drifts.

The other hard part is honesty about results. Session-duration numbers and award shortlists belong in a case study only if they're real. If a figure isn't mine to cite, it shouldn't be on the page. The craft is in the scroll, not the press release.

## What's next

Swap placeholder media for licensed assets. Tighten mobile where `white-space: nowrap` hero type becomes a joke. Motion is a desktop sport until you test a thumb.

Ship date for this case study is still `[DATE]` — I don't have a confirmed launch day in git or a changelog, so I'm not inventing one.
