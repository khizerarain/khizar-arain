# Components (`components/`)

Reusable React components.

## Naming Convention
- Use PascalCase: `KhizarArain.tsx`, `SmoothScrolling.tsx`
- One component per file
- Group related components in folders

## Structure
```
components/
├── KhizarArain.tsx       (Main feature component)
├── UI/                   (Reusable UI components)│   ├── Button/
│   │   └── Button.tsx
│   └── Modal/
│       └── Modal.tsx
└── Sections/             (Page sections)
    ├── Hero/
    │   └── Hero.tsx
    └── Gallery/
        └── Gallery.tsx
```

## The /components page

Every `.tsx` file in this folder (any depth) is listed on `/components`
automatically, with a **Download** button for its source. There is no list to
update — the page scans this folder at build time
(`src/lib/component-registry.ts`). The folder a file sits in decides which group
it appears under.

### Adding a component

1. Create the component, e.g. `ui/pill.tsx`. It now shows up on `/components`
   with a "No preview yet" placeholder and a working download.
2. For a live preview, add a sibling `pill.preview.tsx`:

   ```tsx
   import type { ComponentPreviewMeta } from "@/lib/component-preview";
   import { Pill } from "./pill";

   export const meta = {
     description: "One-line description shown on the card.",
     // layout: "frame",  // full-width sections: render at desktop width, scaled to fit
     // dark: true,       // render in the scoped dark palette (MNEMO)
   } satisfies ComponentPreviewMeta;

   export default function PillPreview() {
     return <Pill>Hello</Pill>;
   }
   ```

That's it. `next dev` and `next build` regenerate
`src/lib/component-previews.generated.ts` (the import map of preview files) via
`next.config.ts`, and dev watches for new or deleted previews. Commit the
generated file along with your preview.

Preview files must stay server components (no `"use client"`); they may be
`async` to load data. `*.preview.tsx` files themselves are never listed.

## Best Practices
- Keep components focused and single-responsibility
- Use TypeScript for prop types
- Extract complex logic to hooks or utilities
- Use relative imports within same folder
