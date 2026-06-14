# Content Authoring Guide

This site is fully file-based. There is no database or admin panel. To add or edit content, create or modify Markdown files in the `content/` directory.

## Blog posts

Create a new `.md` file in `content/blog/`.

### Required frontmatter

```md
---
title: "Your Post Title"
slug: "your-post-slug"
excerpt: "A short summary that appears on cards and in SEO."
coverImage: "https://example.com/image.jpg"
category: "Development"
tags: ["Next.js", "Tailwind"]
createdAt: "2026-06-12T00:00:00Z"
updatedAt: "2026-06-12T00:00:00Z"
featured: false
---
```

### Optional frontmatter

- `featured: true` — displays the post in the featured section on `/blog` and the homepage.

### Writing tips

- Use standard Markdown: headings, lists, code blocks, links, and images.
- Code blocks are syntax-highlighted automatically.
- The first `# Heading` in the body is rendered by the detail page, so it can match your title.

## Projects

Create a new `.md` file in `content/projects/`.

### Required frontmatter

```md
---
title: "Project Name"
slug: "project-name"
shortDescription: "One-line description."
coverImage: "https://example.com/image.jpg"
technologies: ["Next.js", "Tailwind CSS"]
category: "Web Development"
status: "published"
createdAt: "2026-06-12T00:00:00Z"
---
```

### Optional frontmatter

- `featured: true` — shows the project on the homepage.
- `liveDemoUrl: "https://..."` — adds a live demo button.
- `githubUrl: "https://..."` — adds a source-code button.
- `galleryImages:` — list of image URLs for the project gallery.

```md
galleryImages:
  - "https://example.com/1.jpg"
  - "https://example.com/2.jpg"
```

## Images

- You can use absolute URLs (`https://...`).
- For local images, place them in `public/` and reference them from the root, e.g. `/my-image.jpg`.

## Dates

Use ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.

## After adding content

Run the dev server or rebuild:

```bash
pnpm dev
# or
pnpm build
```

The new page will be available at:

- `/blog/your-post-slug`
- `/projects/project-name`
