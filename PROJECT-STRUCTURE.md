# Project Structure

Complete overview of the Khizar Arain portfolio project.

```
khizar A.2/
│
├── 📁 src/                          Main source code
│   ├── 📁 app/                      Next.js App Router
│   │   ├── layout.tsx              Root layout wrapper
│   │   ├── page.tsx                Home page
│   │   ├── globals.css             Global styles
│   │   └── favicon.ico             Site icon
│   │
│   ├── 📁 components/              Reusable React components
│   │   ├── KhizarArain.tsx        Main portfolio component
│   │   ├── SmoothScrolling.tsx    Smooth scroll utility
│   │   └── README.md               Component guidelines
│   │
│   ├── 📁 hooks/                   Custom React hooks
│   │   └── README.md               Hook guidelines
│   │
│   ├── 📁 lib/                     Utility functions
│   │   └── README.md               Utility guidelines
│   │
│   ├── 📁 types/                   TypeScript definitions
│   │   └── README.md               Type guidelines
│   │
│   ├── 📁 styles/                  Global styles
│   │   └── README.md               Style guidelines
│   │
│   ├── 📁 utils/                   Utility helpers
│   │   └── README.md               Utility guidelines
│   │
│   └── README.md                   Source code overview
│
├── 📁 public/                       Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── 📁 docs/                         Project documentation
│   ├── ARCHITECTURE.md             Project architecture
│   └── DEPLOYMENT.md               Deployment guide
│
├── 📁 .next/                        Build output (gitignored)
├── 📁 node_modules/                Dependencies (gitignored)
│
├── 📋 Configuration Files
│   ├── package.json                Project metadata & scripts
│   ├── package-lock.json           Dependency lock file
│   ├── tsconfig.json               TypeScript config
│   ├── next.config.ts              Next.js config
│   ├── eslint.config.mjs           ESLint config
│   ├── postcss.config.mjs          PostCSS config
│   └── .gitignore                  Git ignore rules
│
├── 📄 README.md                     Project introduction
├── 📄 CONTRIBUTING.md              Contribution guidelines
└── 📄 PROJECT-STRUCTURE.md         This file
```

## Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Start production build
npm start
```

## Key Directories Explained

### `src/app/`
Next.js App Router configuration. Contains pages, layouts, and global app styles.

### `src/components/`
Reusable React components. Each component should be self-contained and well-documented.

### `src/hooks/`
Custom React hooks for reusable logic and state management. Must be prefixed with `use` (e.g., `useAnimation`).

### `src/lib/`
Pure utility functions for transformations, formatting, and common algorithms.

### `src/types/`
TypeScript interfaces and type definitions for the entire application.

### `src/styles/`
Global stylesheets and shared animation definitions.

### `src/utils/`
Miscellaneous utility functions (animations, scroll helpers, DOM utilities, etc.).

## Development Workflow

1. **Feature Development**: Create components in `src/components/` or hooks in `src/hooks/`
2. **Utilities**: Add shared logic to `src/lib/` or `src/utils/`
3. **Types**: Define types in `src/types/`
4. **Styles**: Add global styles to `src/styles/`
5. **Pages**: Create pages in `src/app/`

## File Naming Conventions

- **Components**: PascalCase (e.g., `KhizarArain.tsx`, `Modal.tsx`)
- **Hooks**: starts with `use` prefix (e.g., `useAnimation.ts`)
- **Utilities/Functions**: camelCase (e.g., `formatDate.ts`, `validateEmail.ts`)
- **Types**: PascalCase interfaces/types (e.g., `interface ModalProps`)
- **Styles**: lowercase with hyphens (e.g., `globals.css`, `animations.css`)

## Imports

Use absolute imports configured in `tsconfig.json`:

```tsx
// ✅ Good
import { KhizarArain } from '@/components/KhizarArain';
import { useAnimation } from '@/hooks/useAnimation';
import type { ModalProps } from '@/types/components';

// ❌ Avoid
import { KhizarArain } from '../../../components/KhizarArain';
```

## Git Workflow

- Keep each commit focused on a single feature/fix
- Use meaningful commit messages
- Follow conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `style:`

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.
