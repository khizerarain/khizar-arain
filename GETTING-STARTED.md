# Getting Started

## Prerequisites
- Node.js 18+ 
- npm (comes with Node.js)

## Installation

1. Clone the repository
```bash
git clone https://github.com/khizerarain/khizar-arain.git
cd khizar A.2
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build optimized production bundle
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
npm run lint:fix    # Fix linting issues automatically

# Type Checking
npm run type-check  # Run TypeScript type checker
```

## Project Features

- ✨ Smooth scrolling with Lenis
- 🎬 Advanced animations with GSAP & Framer Motion
- 📱 Fully responsive design
- ♿ Accessibility-first approach
- 🎨 Modern React with TypeScript
- ⚡ Next.js 14+ with App Router
- 🔧 ESLint & TypeScript configured

## Folder Structure

See [PROJECT-STRUCTURE.md](./PROJECT-STRUCTURE.md) for the complete project structure breakdown.

## Common Tasks

### Adding a New Component
1. Create `src/components/NewComponent.tsx`
2. Define prop types/interface
3. Export from component file
4. Import and use in pages

### Adding a Custom Hook
1. Create `src/hooks/useNewFeature.ts`
2. Follow React hooks conventions
3. Export the hook
4. Import in components

### Adding Utilities
1. Create file in `src/lib/` or `src/utils/`
2. Write pure functions
3. Export for import elsewhere
4. Document complex logic

### Styling
- Global styles: `src/styles/`
- Component-specific: Use CSS Modules or inline Framer Motion
- CSS Variables: Define in `src/styles/variables.css`

## Environment Setup

Create a `.env.local` file if needed for environment variables:
```env
# Example (not required for basic usage)
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
npm run type-check
```

## Next Steps

1. Review [PROJECT-STRUCTURE.md](./PROJECT-STRUCTURE.md)
2. Check [CONTRIBUTING.md](./CONTRIBUTING.md) for code standards
3. Explore `src/components/KhizarArain.tsx` to understand the main component
4. Update content in components and pages as needed

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Framer Motion](https://www.framer.com/motion)
- [GSAP Documentation](https://gsap.com/docs)
- [Lenis - Smooth Scroll](https://lenis.darkroom.engineering/)

## License

This project is personal work. See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.
