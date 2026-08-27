---
title: "launching SCRIBE: an AI content CLI"
slug: "launching-scribe"
excerpt: "A command-line tool that drafts a blog post, scores it with real SEO math, and repurposes it for LinkedIn, X, and Facebook. pip install scribe-gen."
category: "Notes"
tags: ["SCRIBE", "Python", "OpenAI", "PyPI"]
createdAt: "2026-07-09T14:01:25Z"
featured: false
---

I kept opening ChatGPT, pasting a topic, getting a blob of text, then doing the actual work in another window: titles, outline, SEO pass, LinkedIn version, a thread that doesn't blow past 280 characters. That's not writing. That's logistics.

[SCRIBE](/projects/scribe) is that logistics layer as a CLI. One topic in. Markdown out. Then optional SEO, rewrite, tone shift, social posts.

```bash
pip install scribe-gen
```

`scribe generate --topic "whatever" --tone casual --length 1500`. Or `scribe title`, `scribe outline`, `scribe seo --file ...`, `scribe social`.

## How the SEO score actually works

This is the part I cared about. Models will happily invent a "SEO score: 94." That's marketing. SCRIBE computes the number.

Readability is Flesch (via `textstat`), clamped 0–100. Keyword density is real counts over word total — 1–2% is the sweet spot, stuffed if you go past 3%. Structure is heuristics: H2s, an intro, a conclusion, paragraph length. Weighted roughly 40 / 30 / 30. The model only writes a meta description and three suggestions. It never gets to set the score.

If you omit `--keywords`, density drops out and the other weights redistribute. That's boring to explain and important if you don't want a fake 30% of the grade.

## What was hard

Prompt discipline. Every AI call goes through one client (`client.py`) with backoff. Prompts live in `prompts.py`. If I swap OpenAI for something else, I want that to be one file, not a scavenger hunt.

The improver shows a unified diff before it overwrites anything. Non-destructive export by default, slugified filenames, YAML frontmatter. Windows also hates Typer's fancy arrows unless you set `PYTHONIOENCODING=utf-8`. I found that the hard way.

X threads are validated per tweet. A "thread generator" that emits 400-character chunks is not a thread generator.

## What's next

History that's actually searchable, not a JSON append. Streaming on `improve` so you watch the diff land. The seams for that are already commented in the repo. v1 is the pipeline. v2 is memory.

Repo: [github.com/khizerarain/scribe](https://github.com/khizerarain/scribe)
