# Contributing

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

## Code Standards

- Use TypeScript for all new code
- Follow ESLint rules: `npm run lint`
- Components should be in `src/components/`
- Utilities should be in `src/utils/`
- Custom hooks should be in `src/hooks/`
- Type definitions should be in `src/types/`

## Building

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router
├── components/       # Reusable React components
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── types/           # TypeScript type definitions
├── contexts/        # React Context providers
└── styles/          # Global styles
```
