/**
 * Central site configuration.
 *
 * Every number in `stats` is verified: package counts and download totals come
 * from PyPI, project counts from `content/projects`. Do not add a figure here
 * that cannot be pointed at a source.
 */

export const siteConfig = {
  name: "Khizar Arain",
  url: "https://khizar-arain.vercel.app",
  email: "realkhizararain7@gmail.com",
  githubUsername: "khizerarain",
  description:
    "I build clean, modern, high-performing digital products — frontend to backend, from idea to shipped.",
  tagline: "Full-Stack Developer · building end-to-end products",
  bio: "I build clean, modern, high-performing digital products — frontend to backend, from idea to shipped.",
} as const;

export const socialLinks = [
  {
    label: "X",
    handle: "@KhizarArain103",
    href: "https://x.com/KhizarArain103",
  },
  {
    label: "Instagram",
    handle: "@realkhizerarain",
    href: "https://www.instagram.com/realkhizerarain/",
  },
  {
    label: "GitHub",
    handle: `@${siteConfig.githubUsername}`,
    href: `https://github.com/${siteConfig.githubUsername}`,
  },
] as const;

export const mnemoDemoUrl = "https://mnemo-brain.vercel.app/";

/**
 * Stats rendered with a count-up on scroll.
 * `value` is the number animated to; `suffix` is appended verbatim.
 */
export const stats = [
  { value: 8, suffix: "+", label: "projects & tools shipped" },
  { value: 4, suffix: "", label: "CLI tools published on PyPI" },
  { value: 600, suffix: "+", label: "PyPI package downloads" },
  { value: 3, suffix: "+", label: "years building production web apps" },
] as const;

export const founderPoints = [
  "Ships end-to-end — frontend, backend, and e-commerce systems, not just UI.",
  "Comfortable owning a build solo — from idea to deployed product — without a large team.",
  "Four developer tools published on PyPI — sentinel-recon, scribe-gen, atlas-world-intel, utopia-analyzer.",
  "3+ years of hands-on e-commerce experience — Shopify custom themes and headless commerce.",
  "Fixed-price, scoped upfront — no surprise invoices.",
] as const;

export const packages = [
  {
    name: "sentinel-recon",
    install: "pip install sentinel-recon",
    description:
      "Cybersecurity recon CLI toolkit for ethical security assessment.",
    pypiUrl: "https://pypi.org/project/sentinel-recon",
    repo: `https://github.com/${siteConfig.githubUsername}/sentinel`,
  },
  {
    name: "scribe-gen",
    install: "pip install scribe-gen",
    description:
      "AI CLI for blog generation, SEO scoring, and content repurposing.",
    pypiUrl: "https://pypi.org/project/scribe-gen",
    repo: `https://github.com/${siteConfig.githubUsername}/scribe`,
  },
  {
    name: "atlas-world-intel",
    install: "pip install atlas-world-intel",
    description:
      "Explore countries, economies, and geography from your terminal.",
    pypiUrl: "https://pypi.org/project/atlas-world-intel",
    repo: `https://github.com/${siteConfig.githubUsername}/atlas`,
  },
  {
    name: "utopia-analyzer",
    install: "pip install utopia-analyzer",
    description:
      "Turns a GitHub profile into a developer intelligence report with portfolio scoring.",
    pypiUrl: "https://pypi.org/project/utopia-analyzer",
    repo: `https://github.com/${siteConfig.githubUsername}/utopia`,
  },
] as const;

export const services = [
  {
    title: "Frontend & Backend Development",
    description: "Next.js, React, TypeScript, scalable APIs.",
  },
  {
    title: "E-commerce",
    description:
      "Shopify custom themes, headless commerce, conversion-focused builds.",
  },
  {
    title: "UI/UX Design Systems",
    description:
      "Component libraries, design tokens, accessible responsive layouts.",
  },
  {
    title: "Performance & SEO",
    description: "Core Web Vitals, semantic markup, SSR.",
  },
] as const;

/**
 * Homepage work list. MNEMO is rendered separately as the flagship.
 * `slug` maps to `content/projects/<slug>.md`; `pitch` and `tag` are the
 * homepage-specific one-liners so the case study copy can evolve on its own.
 */
export const featuredWork = [
  {
    slug: "sentinel",
    name: "SENTINEL",
    tag: "Developer Tools",
    pitch:
      "Cybersecurity intelligence CLI toolkit for ethical security assessment.",
    meta: "pip install sentinel-recon",
  },
  {
    slug: "scribe",
    name: "SCRIBE",
    tag: "Developer Tools",
    pitch:
      "AI-powered CLI for blog generation, SEO scoring, and content repurposing.",
    meta: "pip install scribe-gen",
  },
  {
    slug: "atlas",
    name: "ATLAS",
    tag: "Developer Tools",
    pitch:
      "World intelligence CLI for exploring countries, economies, and geography from the terminal.",
    meta: "pip install atlas-world-intel",
  },
  {
    slug: "eclipse",
    name: "ECLIPSE",
    tag: "Developer Tools",
    pitch:
      "Space intelligence terminal — live ISS tracking, rocket launches, NASA picture of the day, and an AI cosmic assistant.",
    meta: null,
  },
  {
    slug: "utopia",
    name: "UTOPIA",
    tag: "Developer Tools",
    pitch:
      "Turns any GitHub profile into a developer intelligence report with portfolio scoring, an AI recruiter simulation, and a 30-day improvement plan.",
    meta: "pip install utopia-analyzer",
  },
  {
    slug: "vitra",
    name: "Vitra",
    tag: "Brand / Case Study",
    pitch:
      "Cinematic brand experience celebrating 100 years of Panton design.",
    meta: "Next.js · Framer Motion · GSAP",
  },
  {
    slug: "studio-atlas",
    name: "Studio Atlas",
    tag: "Brand",
    pitch: "Identity and digital presence for an architecture studio.",
    meta: "Next.js · Sanity · Tailwind CSS",
  },
] as const;

/**
 * Stack logos. `slug` is a simpleicons.org identifier; entries without one
 * (Python CLI libraries with no brand mark) render as a monospace tile.
 */
export const stack = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "shadcn/ui", slug: "shadcnui" },
  { name: "Python", slug: "python" },
  { name: "Typer", slug: null },
  { name: "Rich", slug: null },
  { name: "Framer Motion", slug: "framer" },
  { name: "GSAP", slug: "greensock" },
  { name: "Sanity", slug: "sanity" },
  { name: "Shopify", slug: "shopify" },
  { name: "Vercel", slug: "vercel" },
  { name: "GitHub", slug: "github" },
  { name: "Figma", slug: "figma" },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Packages", href: "/packages" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
