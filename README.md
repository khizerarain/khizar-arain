# Khizar Arain Portfolio

A premium developer portfolio showcasing production-grade AI applications, full-stack engineering, and product design. Built with Next.js and designed to feel like a modern SaaS product site.

**Live Portfolio:** [https://khizar-arain.vercel.app/](https://khizar-arain.vercel.app/)

## Flagship Project: MNEMO

**MNEMO** is an AI-powered neuroscience-inspired learning platform designed to improve memory retention through interactive quizzes, intelligent assistance, and personalized experiences.

| Resource | Link |
| --- | --- |
| Case Study | [https://khizar-arain.vercel.app/projects/mnemo](https://khizar-arain.vercel.app/projects/mnemo) |
| Live Demo | [https://mnemo-brain.vercel.app/](https://mnemo-brain.vercel.app/) |
| Dashboard | [https://mnemo-brain.vercel.app/dashboard](https://mnemo-brain.vercel.app/dashboard) |
| GitHub | [https://github.com/khizerarain/MNEMO](https://github.com/khizerarain/MNEMO) |

### MNEMO Showcase Features

- Full product landing page at `/projects/mnemo`
- Homepage flagship section with magnetic CTAs and 3D tilt effects
- Feature bento grid, tech stack cards, and architecture timeline
- Dashboard, quiz, auth, and chat showcases
- Desktop and mobile mockup galleries
- Animated performance metrics and product roadmap
- Scroll reveal, spotlight, glassmorphism, and floating animations

## Portfolio Features

- Fast Next.js App Router performance with Turbopack
- Smooth Framer Motion animations and magnetic interactions
- Fully responsive dark-mode design
- Markdown-driven projects and blog content
- SEO metadata, Open Graph tags, and sitemap
- Optimized images via `next/image`
- Accessible UI components with semantic markup

## Tech Stack

- **Next.js 16.2.1** — React framework with App Router
- **React 19.2.4** — UI library
- **TypeScript 5** — Type safety
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion 12.38.0** — Animation and interaction
- **GSAP 3.14.2** — Advanced motion
- **Lenis 1.3.20** — Smooth scrolling
- **Lucide React** — Iconography
- **Vercel** — Hosting and deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```text
src/
  app/                    # App Router pages
  components/
    animation/            # Reusable motion primitives
    mnemo/                # MNEMO case study sections
    projects/             # Project listing UI
    sections/             # Homepage sections
  lib/                    # Content and utility helpers
content/
  projects/               # Project markdown (includes mnemo.md)
  blog/                   # Blog posts
```

See [ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed documentation on the project structure and conventions.

## Deployment

This portfolio is deployed on Vercel. Pushing to `main` triggers a production deployment.

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for deployment instructions.

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

## License

Proprietary - All rights reserved
