export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Portfolio Experiences with Next.js",
    slug: "building-modern-portfolio-experiences-with-nextjs",
    excerpt:
      "Learn how to create fast, animated portfolio websites using Next.js, Tailwind CSS, and motion-driven interactions.",
    content: `# Building Modern Portfolio Experiences with Next.js

The modern portfolio is more than just a resume page. It's a place to showcase your design system, selected case studies, and the details that make your process feel premium.

## Why Next.js?

Next.js enables fast page loads, reliable routing, and server-side rendering out of the box. That means your work arrives quickly, and search engines can index it effectively.

- Use **dynamic routing** for project detail pages.
- Use **server-side rendering** for portfolio sections.
- Use **Tailwind CSS** to build a responsive visual system.

### Performance tips

Keep your images optimized, reduce third-party scripts, and use motion selectively so the experience feels polished without slowing down.

The result is a portfolio that feels intentional, modern, and instantly memorable.`,
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    category: "Web Development",
    tags: ["Next.js", "Tailwind", "Portfolio"],
    createdAt: "2026-06-01T08:00:00Z",
    updatedAt: "2026-06-02T10:30:00Z",
  },
  {
    id: "2",
    title: "How to Build an Effective Personal Brand Website",
    slug: "how-to-build-an-effective-personal-brand-website",
    excerpt:
      "A personal brand website should communicate your value clearly and keep visitors engaged. Here are the key principles.",
    content: `# How to Build an Effective Personal Brand Website

A strong personal brand website helps you stand out and makes it easy for clients or employers to understand what you do.

## Core principles

- Keep the homepage simple and focused.
- Use bold headlines that state your role clearly.
- Show a few featured projects with strong visuals.

## Content structure

On a personal website, your messaging should answer:

- Who are you?
- What do you specialize in?
- How can people contact you?

## Design with clarity

Use whitespace, clear typography, and consistent color to guide attention. Every section should feel purposeful.

Your website should move visitors from curiosity to connection in just a few scrolls.`,
    coverImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    category: "Design",
    tags: ["Branding", "UX", "Strategy"],
    createdAt: "2026-05-22T12:15:00Z",
    updatedAt: "2026-05-22T12:15:00Z",
  },
  {
    id: "3",
    title: "A Developer’s Guide to Writing Clean Frontend Code",
    slug: "a-developers-guide-to-writing-clean-frontend-code",
    excerpt:
      "Clean frontend code is maintainable, readable, and easy to update. These practical habits help you ship better interfaces.",
    content: `# A Developer’s Guide to Writing Clean Frontend Code

Writing clean frontend code is just as important as writing beautiful UI. Clean code is easier to maintain and easier to extend.

## Best practices

- Keep components small and self-contained.
- Use clear naming for classes, functions, and props.
- Avoid deeply nested markup.

## Consistency matters

Pick a consistent pattern for spacing, layout, and state management. When the codebase feels familiar, you can move faster.

## Document what matters

Comments should explain why, not what. Use simple utility functions and keep business logic outside of UI markup.

The goal is code that another developer can read and build on without friction.`,
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    category: "Development",
    tags: ["Frontend", "JavaScript", "Best Practices"],
    createdAt: "2026-04-15T09:40:00Z",
    updatedAt: "2026-04-15T09:40:00Z",
  },
];
