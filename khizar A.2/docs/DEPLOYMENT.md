# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Running Production Build Locally

```bash
npm run build
npm start
```

The application will be available at `http://localhost:3000`

## Environment Variables

Copy `.env.example` to `.env.local` and configure your variables:

```bash
cp .env.example .env.local
```

## Hosting Options

### Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables
5. Deploy

### Other Platforms

Ensure your hosting platform:
- Supports Node.js 18+
- Can run the build command
- Serves static files from `public/`
