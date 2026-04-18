# Architecture

## Tech Stack

- **Framework**: Next.js 16.2.1
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animation**: 
  - Framer Motion 12.38.0
  - GSAP 3.14.2
- **Smooth Scrolling**: Lenis 1.3.20
- **Runtime**: React 19.2.4

## Project Structure

### `/src/app`
Next.js App Router pages and layouts. Each route is defined here following Next.js conventions.

### `/src/components`
Reusable React components. Organized by feature or functionality.

### `/src/hooks`
Custom React hooks for shared logic across components.

### `/src/utils`
Helper functions and utilities used throughout the application.

### `/src/types`
TypeScript type definitions and interfaces.

### `/src/contexts`
React Context providers for global state management.

### `/src/styles`
Global CSS and styling configurations.

## Development Workflow

1. **Local Development**: Run `npm run dev`
2. **Linting**: Run `npm run lint`
3. **Build**: Run `npm run build`
4. **Production**: Run `npm start`

## Performance Considerations

- Uses Next.js with Turbopack for fast builds
- Framer Motion for optimized animations
- GSAP with ScrollTrigger for scroll-based animations
- Lenis for smooth scrolling experience
