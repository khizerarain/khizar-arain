---
title: "why I built ECLIPSE"
slug: "why-i-built-eclipse"
excerpt: "A space intelligence terminal — live ISS tracking, rocket launches, NASA's picture of the day, and an AI cosmic assistant, all from the command line."
category: "Notes"
tags: ["ECLIPSE", "Python", "Typer", "NASA"]
createdAt: "2026-06-14"
featured: false
---

ECLIPSE is the first CLI I finished where I actually sat back and thought: I made that. Not a tutorial clone. A tool I wanted to open at 1am.

[ECLIPSE](/projects/eclipse) turns the terminal into a small space desk. Live ISS position — lat, long, altitude, speed, crew count. NASA's picture of the day with the title and blurb. Upcoming launches from Launch Library. A planet database with fuzzy names so "earth" and "terra" don't both 404. And an AI assistant for the questions that aren't a JSON field.

Python, Typer, Rich, SQLite for cache and conversation logs, Anthropic for the streamed answers.

## Why a terminal

Space data is already public. The friction is glue: five APIs, five response shapes, a UI that doesn't look like a stack trace. I wanted `eclipse` and a panel, not a Jupyter notebook I never reopen.

The cache is the unsexy part that makes it feel fast. ISS endpoints don't need to be hit every keystroke. SQLite keeps repeats instant and gives the assistant somewhere to put history.

## What was hard

Coordinating live APIs that don't share a clock. Launches slip. ISS TLE-derived fields disagree depending on who you ask. The planet module is local, which is a relief — fuzzy match against a known list instead of hoping a third-party spelling is kind.

Streaming the assistant through Rich without the spinner and the tokens fighting each other took more fiddling than the ISS tracker. That's usually how it goes. The demo command is easy. The "this still looks good when the network is sad" command is the product.

## What's next

ECLIPSE isn't on PyPI yet. That's a gap, not a philosophy. More cache discipline, and a launch view that doesn't make you parse status codes with your eyes.

Repo: [github.com/khizerarain/ECLIPSE](https://github.com/khizerarain/ECLIPSE)
