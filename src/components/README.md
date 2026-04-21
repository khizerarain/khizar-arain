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

## Best Practices
- Keep components focused and single-responsibility
- Use TypeScript for prop types
- Extract complex logic to hooks or utilities
- Use relative imports within same folder
