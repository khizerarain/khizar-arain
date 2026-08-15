import { siteConfig } from "./site";

/**
 * Curated content for the /projects page.
 *
 * Feature bullets and tech stacks are taken from the project files in
 * `content/projects` — nothing here is invented. Download totals are a dated
 * snapshot from PyPI (see `downloadsAsOf`); refresh them rather than guessing.
 *
 * Ordered newest-first by the `createdAt` in each project's content file.
 */

export type ProjectCategory = "AI" | "CLI" | "Brand";

export interface ShowcaseProject {
  /** Maps to content/projects/<slug>.md and the /projects/<slug> route. */
  slug: string;
  name: string;
  /** One-line tag shown under the name. */
  tag: string;
  /** One-sentence pitch for the scannable list. */
  summary: string;
  category: ProjectCategory;
  /** Short status label, e.g. Active / Open Source / Case Study. */
  status: string;
  /** Longer description for the featured card. */
  detail: string;
  liveUrl?: string;
  pypiUrl?: string;
  repoUrl?: string;
  install?: string;
  features: string[];
  stack: string[];
}

const repo = (name: string) =>
  `https://github.com/${siteConfig.githubUsername}/${name}`;

export const showcaseProjects: ShowcaseProject[] = [
  {
    slug: "mnemo",
    name: "MNEMO",
    tag: "AI-powered learning platform",
    summary:
      "Neuroscience-inspired learning platform with interactive quizzes and intelligent assistance.",
    category: "AI",
    status: "Active",
    detail:
      "AI-powered neuroscience-inspired learning platform improving memory retention through interactive quizzes, intelligent assistance, and personalized experiences. Built as a full product — dashboard, auth, and real-time updates — not a static course site.",
    liveUrl: "https://mnemo-brain.vercel.app/",
    repoUrl: repo("MNEMO"),
    features: [
      "AI-powered assistance",
      "interactive quizzes",
      "modern dashboard",
      "real-time updates",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "sentinel",
    name: "SENTINEL",
    tag: "Cybersecurity recon CLI",
    summary: "Toolkit for ethical security assessment.",
    category: "CLI",
    status: "Open Source",
    detail:
      "Cybersecurity intelligence CLI toolkit for ethical security assessment, published on PyPI. It inspects SSL certificates, DNS records, security headers, and open ports, then exports a report from the terminal.",
    pypiUrl: "https://pypi.org/project/sentinel-recon",
    repoUrl: repo("SENTINEL"),
    install: "pip install sentinel-recon",
    features: [
      "website scanner with a security score",
      "SSL certificate and expiry checks",
      "DNS lookup and security header analysis",
      "port scanning and IP geolocation",
      "report export to Markdown or PDF",
    ],
    stack: ["Python", "Typer", "Rich"],
  },
  {
    slug: "scribe",
    name: "SCRIBE",
    tag: "AI content CLI",
    summary:
      "Blog generation, SEO scoring, and content repurposing from the terminal.",
    category: "CLI",
    status: "Open Source",
    detail:
      "AI-powered CLI for blog generation, SEO scoring, and content repurposing. It covers the whole pipeline from the terminal: titles, outlines, full drafts, SEO analysis, tone shifting, and export.",
    pypiUrl: "https://pypi.org/project/scribe-gen",
    repoUrl: repo("SCRIBE"),
    install: "pip install scribe-gen",
    features: [
      "title and outline generation",
      "full drafts in five different tones",
      "SEO analyzer using real readability math",
      "social repurposing for LinkedIn, X, and Facebook",
      "Markdown and PDF export",
    ],
    stack: ["Python", "Typer", "Rich"],
  },
  {
    slug: "atlas",
    name: "ATLAS",
    tag: "World intelligence CLI",
    summary:
      "Explore countries, economies, currencies, and geography from the terminal.",
    category: "CLI",
    status: "Open Source",
    detail:
      "World intelligence CLI for exploring countries, economies, currencies, and geography from the terminal. Live lookups sit next to interactive sessions so reference data is one command away.",
    pypiUrl: "https://pypi.org/project/atlas-world-intel",
    repoUrl: repo("ATLAS"),
    install: "pip install atlas-world-intel",
    features: [
      "country lookup and profiles",
      "side-by-side country comparisons",
      "world rankings by population and area",
      "live currency conversion",
      "geography quiz and AI explanations",
    ],
    stack: ["Python", "Typer", "Rich"],
  },
  {
    slug: "eclipse",
    name: "ECLIPSE",
    tag: "Space intelligence terminal",
    summary:
      "Live ISS tracking, rocket launches, NASA picture of the day, and an AI cosmic assistant.",
    category: "CLI",
    status: "Open Source",
    detail:
      "Space intelligence terminal with live ISS tracking, rocket launch schedules, NASA's picture of the day, a planet database, and an AI-powered cosmic assistant.",
    repoUrl: repo("ECLIPSE"),
    features: [
      "live ISS position, speed, and crew count",
      "NASA picture of the day",
      "upcoming rocket launch schedule",
      "planet database with fuzzy name matching",
      "AI cosmic assistant with SQLite-backed caching",
    ],
    stack: ["Python", "Typer", "Rich"],
  },
  {
    slug: "utopia",
    name: "UTOPIA",
    tag: "GitHub profile intelligence",
    summary:
      "Turns any GitHub profile into a developer intelligence report with portfolio scoring and an AI recruiter simulation.",
    category: "CLI",
    status: "Open Source",
    detail:
      "Transforms any GitHub profile into a developer intelligence report, featuring portfolio scoring, an AI recruiter simulation, a roast mode, and a 30-day improvement plan.",
    pypiUrl: "https://pypi.org/project/utopia-analyzer",
    repoUrl: repo("utopia"),
    install: "pip install utopia-analyzer",
    features: [
      "portfolio scoring on quality and consistency",
      "AI recruiter simulation",
      "roast mode for blunt, constructive feedback",
      "30-day improvement plan",
    ],
    stack: ["Python", "Click", "Rich"],
  },
  {
    slug: "vitra",
    name: "Vitra",
    tag: "Cinematic brand experience",
    summary: "Celebrating 100 years of Panton design.",
    category: "Brand",
    status: "Case Study",
    detail:
      "Cinematic brand experience celebrating 100 years of Panton design. A scroll-driven narrative, large typographic moments, and a monochrome palette keep the focus on form.",
    features: [
      "scroll-driven narrative built on GSAP ScrollTrigger",
      "large typographic moments and slow parallax",
      "monochrome palette that keeps focus on form",
      "fully responsive with reduced-motion support",
    ],
    stack: ["Next.js", "Framer Motion", "GSAP"],
  },
  {
    slug: "studio-atlas",
    name: "Studio Atlas",
    tag: "Architecture studio brand",
    summary: "Identity and digital presence for an architecture studio.",
    category: "Brand",
    status: "Case Study",
    detail:
      "Brand identity and digital presence for an architecture studio. Minimal and image-forward, with a quiet identity that matches the precision of the work.",
    features: [
      "visual identity system",
      "image-forward responsive website",
      "Sanity CMS integration",
      "strict grid with generous whitespace",
    ],
    stack: ["Next.js", "Sanity", "Tailwind CSS"],
  },
];

/**
 * Roles already listed on /about. Bullets stay qualitative unless a number
 * can be pointed at a source. `[ADD REAL DETAIL]` marks gaps to fill later.
 */
export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2023 — Present",
    bullets: [
      "building websites, web applications, and e-commerce stores end to end",
      "owning the full stack — frontend, backend, and deployment — without a large team",
      "[ADD REAL DETAIL] — number of clients or products shipped in this period",
      "[ADD REAL DETAIL] — any verified outcome (conversion lift, retainers, revenue)",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify"],
  },
  {
    role: "E-commerce Developer",
    company: "Self-employed",
    period: "2022 — 2023",
    bullets: [
      "developed and customized Shopify themes and product pages",
      "focused on conversion-oriented storefronts and headless commerce",
      "[ADD REAL DETAIL] — stores shipped in this period",
      "[ADD REAL DETAIL] — any verified conversion or sales impact",
    ],
    stack: ["Shopify", "Liquid", "JavaScript", "CSS"],
  },
] as const;

/**
 * Published PyPI packages shown in the CLI tools section.
 * Versions and download totals were read from PyPI and pypistats;
 * `downloadsAsOf` records when. Update both together.
 * Versions are overwritten at build time when the PyPI fetch succeeds.
 */
export const downloadsAsOf = "August 2026";

export interface CliTool {
  name: string;
  /** Omitted when PyPI has not been reached and no snapshot exists. */
  version?: string;
  description: string;
  /** Omitted from the UI when zero — never invent a count. */
  downloads?: number;
  install: string;
  pypiUrl: string;
  repoUrl: string;
  features: string[];
  stack: string[];
}

export const cliTools: CliTool[] = [
  {
    name: "sentinel-recon",
    version: "1.0.0",
    description:
      "Cybersecurity recon CLI toolkit for ethical security assessment.",
    downloads: 161,
    install: "pip install sentinel-recon",
    pypiUrl: "https://pypi.org/project/sentinel-recon",
    repoUrl: repo("SENTINEL"),
    features: [
      "website scanner with a security score",
      "SSL, DNS, and security header checks",
      "port scanning and IP geolocation",
      "Markdown and PDF reports",
    ],
    stack: ["Python", "Typer", "Rich"],
  },
  {
    name: "atlas-world-intel",
    version: "1.0.0",
    description:
      "World intelligence CLI for countries, economies, and geography.",
    downloads: 159,
    install: "pip install atlas-world-intel",
    pypiUrl: "https://pypi.org/project/atlas-world-intel",
    repoUrl: repo("ATLAS"),
    features: [
      "country lookup and comparisons",
      "world rankings by population and area",
      "live currency conversion",
      "geography quiz and AI explanations",
    ],
    stack: ["Python", "Typer", "Rich"],
  },
  {
    name: "scribe-gen",
    version: "0.1.0",
    description:
      "AI CLI for blog generation, SEO scoring, and content repurposing.",
    downloads: 141,
    install: "pip install scribe-gen",
    pypiUrl: "https://pypi.org/project/scribe-gen",
    repoUrl: repo("SCRIBE"),
    features: [
      "titles, outlines, and full drafts",
      "SEO analyzer using real readability math",
      "social repurposing for LinkedIn and X",
      "Markdown and PDF export",
    ],
    stack: ["Python", "Typer", "Rich"],
  },
];
