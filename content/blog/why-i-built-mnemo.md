---
title: "why I built MNEMO"
slug: "why-i-built-mnemo"
excerpt: "A neuroscience-inspired learning platform I built so studying would actually stick — quizzes, an AI assistant, and a dashboard that reacts to how you learn."
category: "Notes"
tags: ["MNEMO", "Next.js", "Supabase"]
createdAt: "2026-07-15"
featured: false
---

Most study apps I tried felt like a content dump with a quiz bolted on. You watch something, you click through a few questions, you forget it by Thursday. I wanted something that treated memory as the actual product, not a side effect.

That's why I built [MNEMO](/projects/mnemo).

It's a full-stack learning platform — Next.js App Router, TypeScript, Tailwind, Supabase for auth and real-time data, deployed on Vercel. Live at [mnemo-brain.vercel.app](https://mnemo-brain.vercel.app/). The idea is simple: you sign in, you take quizzes, an AI assistant sits next to the material, and the dashboard tracks what you're actually retaining instead of what you "completed."

## What it does

You get a dashboard with progress and recommended topics. You start a quiz, get immediate feedback, retry the weak spots. When a concept doesn't land, the assistant explains it in context instead of sending you to a generic FAQ. Progress syncs in real time, so the UI doesn't feel like a static course site.

Under the hood the quiz state has to stay clean — scoring, retries, and "where did I leave off" without the component tree turning into soup. That was the first hard part. The second was wiring Supabase realtime without the dashboard flickering every time a row updated. Optimistic UI plus reconnection handling sounds boring until you skip it and the whole page feels cheap.

## What was hard

State in a quiz is deceptively messy. One wrong model and "retry this question" fights with "submit the whole set." I ended up treating the quiz as a small state machine instead of a pile of `useState` flags.

Auth looks easy until you care about session restore on mobile. Supabase Auth got me there faster than rolling my own, which was the point — I wanted to spend time on the learning loop, not OAuth edge cases.

## What's next

Spaced repetition is the obvious missing piece. If MNEMO is about memory, the schedule should be the engine, not a chart. After that: quizzes generated from uploaded notes, and a path that works offline. The SaaS shell is there. The science still has room to go deeper.

Repo: [github.com/khizerarain/MNEMO](https://github.com/khizerarain/MNEMO)
