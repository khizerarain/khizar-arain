---
title: "launching ATLAS: a world intelligence CLI"
slug: "launching-atlas"
excerpt: "Explore countries, economies, currencies, and geography without leaving your terminal. pip install atlas-world-intel."
category: "Notes"
tags: ["ATLAS", "Python", "Typer", "PyPI"]
createdAt: "2026-07-09T10:16:15Z"
featured: false
---

I look up country facts more than I want to admit. Population, currency, "what time is it there," a quick convert before I send an invoice. Browser tabs for that felt like using a truck to move a backpack.

[ATLAS](/projects/atlas) is a world-intel CLI. Profiles, side-by-side comparisons, rankings, live FX, local time, a geography quiz, travel notes, and an `atlas ask` command when you want a sentence instead of a table.

```bash
pip install atlas-world-intel
```

Then `atlas country japan`, `atlas compare france germany`, `atlas convert 100 USD PKR`, `atlas quiz`. RestCountries for the facts, exchange-rate data for conversion, OpenAI behind `ask` if you've set a key.

## How it's structured

Typer commands, Rich panels. Fuzzy matching on names because nobody types "United States of America" the same way twice. The compare command is the one I use: two countries, same fields, no Wikipedia rabbit hole.

The AI path is optional on purpose. Country data shouldn't require an API key. `atlas ask` is the only command that should fail closed if `OPENAI_API_KEY` is missing — a Rich panel, not a stack trace.

## What was hard

Live APIs lie, timeout, and change shape. Caching and fallbacks matter more than the pretty table. Currency conversion is the worst of it: rates move, free endpoints rate-limit, and "100 USD to PKR" has to still feel instant.

PyPI naming, again. `atlas` was never going to be free. The package is `atlas-world-intel`. The command is `atlas`.

## What's next

Better ranking metrics, a tighter travel module, and less sequential waiting when a profile needs three HTTP calls. The CLI already feels like a dashboard. I want the data layer to be as calm as the UI.

Repo: [github.com/khizerarain/atlas](https://github.com/khizerarain/atlas)
