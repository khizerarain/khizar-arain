# Custom Hooks (`hooks/`)

Reusable React hooks for state management and side effects.

## Purpose
- Custom React hooks (useEffect, useState, etc.)
- Complex state logic
- Behavior extraction
- Animation hooks

## Naming Convention
All hooks must follow the `use` prefix pattern:
- ✅ `useAnimation()`
- ✅ `useScrollPosition()`
- ❌ `AnimationHook()`

## Example Structure
```
hooks/
├── useAnimation.ts
├── useScrollPosition.ts
└── useMotionPreference.ts
```

Each hook should be independent and composable.
