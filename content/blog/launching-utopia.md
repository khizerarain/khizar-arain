---
title: "launching UTOPIA: turn any GitHub profile into an intelligence report"
slug: "launching-utopia"
excerpt: "UTOPIA scores a GitHub profile, runs an AI recruiter simulation, and hands back a 30-day improvement plan. Here's why I built it. pip install utopia-analyzer."
category: "Notes"
tags: ["UTOPIA", "Python", "Click", "GitHub"]
createdAt: "2026-07-06"
featured: false
---

GitHub is a resume that nobody formats. Stars, empty READMEs, a graveyard of half-finished repos, one project that actually shows you can finish something. Recruiters skim it in two minutes. I wanted a second pass that was slower and ruder.

[UTOPIA](/projects/utopia) pulls a public profile and writes a report: weighted scores, an archetype guess, a recruiter-style verdict, a tech-stack breakdown, optional roast mode, and a 30-day plan. Click for the CLI, Rich for the tables, GitHub's API for the data.

```bash
pip install utopia-analyzer
```

`utopia khizerarain`. Add `--roast` if you want it blunt. `--output markdown --save report.md` if you want a file instead of a terminal session.

## How the scoring thinks

It's not "more stars = hired." Quality, activity, documentation, diversity, impact, open-source signal — six buckets, different caps. A profile that only speaks one language gets dinged even if the C is legendary. That's the point of the diversity axis, and also why Linus would hate that axis. The tool is for people trying to get hired, not write kernels.

The recruiter simulation is the part I use on myself. Would I hire this person, yes or no, with receipts. Weak READMEs show up. Tests show up. "Looks abandoned" shows up.

Unauthenticated GitHub is 60 requests an hour. A full run eats that alive. `--token` or `GITHUB_TOKEN` is how you actually use it.

## What was hard

PyPI naming. Again. The package is `utopia-analyzer`. Some docs still mention `utopia-cli` because I lost a fight with an already-taken name. The command is `utopia`.

Caching vs freshness: `--no-cache` exists because a report that is three weeks stale is a different person. Rate limits vs completeness is the whole product constraint.

## What's next

Better language detection when GitHub's linguist is lying, and a plan that isn't generic "improve your READMEs." The 30-day list should point at *your* top repos, not a template.

Repo: [github.com/khizerarain/utopia](https://github.com/khizerarain/utopia)
