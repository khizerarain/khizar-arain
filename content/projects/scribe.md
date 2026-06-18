---
title: "SCRIBE"
slug: "scribe"
shortDescription: "AI-powered CLI that turns a topic into a publish-ready blog post, then repurposes it for LinkedIn, X, and Facebook."
coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80"
galleryImages:
  - "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  - "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
technologies: ["Python", "Typer", "Rich", "OpenAI API"]
category: "Developer Tools"
githubUrl: "https://github.com/khizerarain/scribe"
featured: true
status: "published"
createdAt: "2026-06-18T13:50:00Z"
---

# SCRIBE

SCRIBE is a Python CLI that turns any topic into a publish-ready blog post, then helps you repurpose that content across LinkedIn, X/Twitter, and Facebook. It covers the full content pipeline — from title generation and outline building through full draft creation, SEO analysis, content improvement, tone shifting, and social post generation — all from the terminal.

## Features

- **Title generator** — 5 varied title angles (list, how-to, question, contrarian) for any topic
- **Outline builder** — structured section-by-section plan with descriptions
- **Full draft generation** — 1500-word articles in professional, casual, witty, technical, or persuasive tone
- **SEO analyzer** — real Flesch readability + keyword density math + structure heuristics; model only writes suggestions, not the score
- **Content improver** — AI rewrite with a green/red unified diff shown before saving
- **Tone changer** — shift any post between 5 tones while preserving structure
- **Social repurposer** — LinkedIn post, X thread (character-validated per tweet), and Facebook caption
- **Markdown export** — YAML frontmatter, slugified filenames, non-destructive writes by default

## Tech stack

Python powers the core logic, Typer provides the CLI interface, Rich renders the terminal UI, and the OpenAI API handles all AI generation through a centralized prompt-engineering layer.
