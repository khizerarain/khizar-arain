---
title: "building SENTINEL: a cybersecurity recon CLI"
slug: "building-sentinel"
excerpt: "Why I built a terminal-first toolkit for ethical security assessment — SSL, DNS, headers, ports, and a report you can actually hand someone. Published on PyPI as sentinel-recon."
category: "Notes"
tags: ["SENTINEL", "Python", "Typer", "PyPI"]
createdAt: "2026-07-07"
featured: false
---

I got tired of opening five tabs to answer one question: is this domain even set up like a grown-up? Certificate expiry, DNS records, security headers, a couple of ports. That's not a pentest. That's Tuesday.

[SENTINEL](/projects/sentinel) is the CLI I wanted for that. Ethical recon only — systems you own or have permission to look at. Published on PyPI:

```bash
pip install sentinel-recon
```

Then `sentinel scan example.com`, `sentinel ssl`, `sentinel dns`, `sentinel headers`, `sentinel ports`, `sentinel report`. Typer for the commands, Rich for the output, Requests for HTTP, dnspython for records, ReportLab when you need a PDF instead of a screenshot.

## Why a CLI

Security tools that live in a browser make you context-switch. I live in a terminal. I wanted a score, a list of findings, and a file I could drop in a notes folder. Markdown export was non-negotiable. PDF was the thing I added after the first time someone asked "can you send this as a document?"

The scanner isn't magic. It pulls what the internet already tells you if you ask politely: cert dates, header gaps, common ports, WHOIS, a geolocation lookup on the IP. Then it rolls that into a score so you can compare hosts without reading a novel.

## What was hard

Naming on PyPI. `sentinel` was taken. That's why the package is `sentinel-recon` and the command is still `sentinel`. PyPI is undefeated.

The other hard part is staying honest. A CLI that "scans the web" can sound like a weapon. The README leads with ethical use for a reason. Port scans of machines you don't own is how you get uninvited email from lawyers. The tool is for developers checking their own stuff, students in a lab, ops people who already have the keys.

## What's next

Richer header scoring, cleaner report templates, and fewer commands that dump raw JSON when a table would do. The architecture is already split by job — scan vs ssl vs dns — so adding a check shouldn't mean rewriting the CLI.

Repo: [github.com/khizerarain/sentinel](https://github.com/khizerarain/sentinel)
