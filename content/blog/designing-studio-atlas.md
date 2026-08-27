---
title: "designing the Studio Atlas brand"
slug: "designing-studio-atlas"
excerpt: "A quiet identity and Sanity-backed site for an architecture studio — strict grid, warm neutrals, and a front end that doesn't compete with the buildings."
category: "Notes"
tags: ["Studio Atlas", "Next.js", "Sanity", "Tailwind"]
createdAt: "[DATE]"
featured: false
---

Architecture studios have a specific problem on the web: the work is already the hero. If the site performs, it looks insecure. If it's only a gallery, it looks unfinished.

[Studio Atlas](/projects/studio-atlas) was about building a presence that felt as precise as the practice. Next.js for the front, Sanity for the content, Tailwind for a grid that doesn't collapse into "card soup." Warm neutrals, lots of air, image-forward pages, hover states that barely move.

## Why Sanity

Architects will not open a pull request to swap a project photo. A CMS is the difference between a brochure and a site that lasts a year. Sanity's model is structured enough that "project" isn't a blob of HTML. Slugs, galleries, and metadata stay typed. The front end stays boring in a good way: query, render, don't invent layout per case.

## What was hard

Restraint. Every extra animation is a bid for attention the photography already won. Page transitions had to be short. Type had to scale without turning the name into a poster. The identity system — type, space, rules for image crops — mattered more than a custom cursor.

The technical work is the usual Next.js + CMS glue: structured queries that don't overfetch, images that don't layout-shift, a project template that still looks considered when the studio adds a messy shoot.

## What's next

A clearer index that filters by typology without looking like an e-commerce catalog. And real project photography in the CMS, not stand-ins.

Launch day is `[DATE]` until I have a ship record I can point at. I won't fake a calendar for a brand case.
