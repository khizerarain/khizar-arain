# Types (`types/`)

TypeScript type definitions and interfaces.

## Purpose
- Shared TypeScript interfaces
- Type definitions
- Enums
- Custom types

## Naming Convention
- Use meaningful names: `interface`, `type`, `enum`
- Prefix with capital letter
- Group related types together

## Example Structure
```
types/
├── api.ts           (API request/response types)
├── components.ts    (Component prop types)
├── models.ts        (Data model types)
└── index.ts         (Re-export all types)
```

Use `index.ts` to centralize exports for easier imports.
