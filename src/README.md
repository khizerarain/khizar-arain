# Source Code (`src/`)

Main application source code.

## Directory Structure

```
src/
├── app/              Next.js App Router pages
├── components/       Reusable React components
├── hooks/           Custom React hooks
├── lib/             Utility functions
├── types/           TypeScript type definitions
├── styles/          Global stylesheets
└── utils/           General utilities
```

## Quick Start
- **Add UI Components**: `src/components/`
- **Add Custom Hooks**: `src/hooks/` (prefix with `use`)
- **Add Types**: `src/types/`
- **Add Utilities**: `src/lib/` or `src/utils/`
- **Add Styles**: `src/styles/`

## Import Paths
Use absolute imports for better readability:
```tsx
import { MyComponent } from '@/components/MyComponent';
import { useCustomHook } from '@/hooks/useCustomHook';
import type { MyType } from '@/types/models';
```

Ensure `jsconfig.json` or `tsconfig.json` has path aliases configured.
