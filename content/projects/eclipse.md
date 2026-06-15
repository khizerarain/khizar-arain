---
title: "ECLIPSE"
slug: "eclipse"
shortDescription: "A space intelligence terminal that lets you explore the universe from your terminal. Live ISS tracking, rocket launches, NASA picture of the day, planet database, and an AI-powered cosmic assistant."
coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
galleryImages:
  - "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80"
  - "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=800&q=80"
technologies: ["Python", "Typer", "Rich", "SQLite", "Anthropic API"]
category: "Developer Tools"
githubUrl: "https://github.com/khizerarain/eclipse"
featured: true
status: "published"
createdAt: "2026-06-15T10:00:00Z"
---

# ECLIPSE

ECLIPSE is a Python CLI that transforms your terminal into a full space intelligence platform. It pulls live data from NASA, the ISS, and rocket launch APIs to give you real-time space information at your fingertips. Built with a focus on beautiful terminal UI and a seamless developer experience.

## Features

- **Live ISS tracker** — real-time latitude, longitude, altitude, speed and crew count from open APIs.
- **NASA picture of the day** — fetches and displays the official APOD with title and description.
- **Rocket launch schedule** — upcoming launches from the Launch Library API with status and countdown.
- **Planet database** — detailed stats for all 8 planets, Pluto and the Moon with fuzzy name matching.
- **AI cosmic assistant** — ask any space question and get a streamed answer powered by Claude.
- **Smart caching** — SQLite-backed cache layer so repeated commands are instant.

## Tech stack

Python powers the core logic, Typer provides the CLI interface, Rich renders beautiful terminal output, SQLite handles caching and conversation logs, and the Anthropic API drives the AI assistant.
