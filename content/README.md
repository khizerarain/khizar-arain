# Content Guide

Add blog posts and projects by dropping `.md` files into the folders below.

## Blog posts

Create a file in `content/blog/` named after the slug, e.g. `my-new-post.md`.

```md
---
title: "My New Post"
slug: "my-new-post"
excerpt: "A short summary."
coverImage: "https://..."
category: "Web Development"
tags: ["Next.js", "Tailwind"]
createdAt: "2026-06-12T08:00:00Z"
updatedAt: "2026-06-12T08:00:00Z"
featured: false
# If the real ship date is unknown, use createdAt: "[DATE]" — never invent one.
---

# My New Post

Write your article in Markdown here.
```

## Projects

Create a file in `content/projects/` named after the slug, e.g. `my-project.md`.

```md
---
title: "My Project"
slug: "my-project"
shortDescription: "One-line summary."
coverImage: "https://..."
galleryImages:
  - "https://..."
  - "https://..."
technologies: ["Next.js", "TypeScript"]
category: "Case"
githubUrl: "https://github.com/..."
liveDemoUrl: "https://..."
featured: true
status: "published"
createdAt: "2026-06-12T08:00:00Z"
---

# My Project

Long-form case study content in Markdown.
```

## Images

You can use external URLs or place images in `public/` and reference them with a root path like `/images/my-photo.jpg`.

## Rebuild

Content is read at build time. Run `pnpm build` after adding or editing files to see changes in production.
