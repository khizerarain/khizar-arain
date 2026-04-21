# Architecture Overview

## Project Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: CSS-in-JS / Framer Motion / GSAP
- **Animations**: 
  - GSAP (timeline, ScrollTrigger, easing)
  - Framer Motion (component animations)
- **Scroll**: Lenis (smooth scroll library)
- **Linting**: ESLint
- **Styling**: PostCSS

## Component Structure

### Main Component: `KhizarArain.tsx`

The main portfolio component (`src/components/KhizarArain.tsx`) is a comprehensive React component that handles:

#### Features
1. **Smooth Scrolling**: Integrated Lenis library for cinematic scroll
2. **GSAP Animations**: 
   - Letter-spacing scrub on hero section
   - Parallax backgrounds
   - Section reveals on scroll
   - Gallery horizontal scroll with pin
   - CTA section pin effect
   - Header blur/transparency on scroll

3. **Framer Motion**: 
   - Hero title letter stagger
   - Modal animations
   - Button hover effects
   - Section reveal animations

4. **Interactive Elements**:
   - Modals with smooth open/close
   - Hover effects on buttons and cards
   - Gallery with drag-to-scroll and scroll-driven animation
   - Team cards with hover reveal

#### Sub-Components (Internal)

- **Modal**: Reusable modal with enter/exit animations
- **HeroTitle**: Letter-stagger animation for title
- **CursorButton**: Interactive button with sheen effect
- **UnderlineNavLink**: Navigation link with underline animation
- **SectionReveal**: Scroll-triggered section reveal
- **ParallaxBox**: Scroll-driven parallax effect

#### Hooks

- **usePrefersReducedMotion**: Respects user's motion preferences
- Custom useEffect hooks for:
  - Hero animations
  - Gallery functionality
  - Lenis smooth scroll
  - CTA pinning
  - Scroll indicator
  - Header blur effect
  - Gallery drag-to-scroll

#### State Management

Uses React's built-in hooks:
- `useState` for modal visibility
- `useRef` for DOM element references
- `useEffect` for scroll and animation setup
- `useMemo` for letter splitting

#### Performance Considerations

1. **ScrollTrigger Cleanup**: Kills all triggers on unmount
2. **RequestAnimationFrame**: Used for smooth animations
3. **will-change CSS**: Applied to animated elements
4. **Reduced Motion Support**: Respects prefers-reduced-motion
5. **Event Delegation**: Efficient event listening

### SmoothScrolling Component

Utility component (`src/components/SmoothScrolling.tsx`) for scroll-related functionality.

## Data Flow

```
App (Next.js Page)
    ↓
├─→ Layout (global context)
│   └─→ Globals CSS (theme variables)
│
└─→ KhizarArain Component
    ├─→ useEffect (animations setup)
    ├─→ useState (modal state)
    ├─→ Sections (content sections)
    │   ├─→ Hero Section
    │   ├─→ Work Cases
    │   ├─→ Team
    │   ├─→ Contact
    │   ├─→ Services
    │   ├─→ Gallery
    │   ├─→ About
    │   └─→ CTA
    │
    └─→ Sub-Components
        ├─→ Modal
        ├─→ HeroTitle
        ├─→ CursorButton
        ├─→ UnderlineNavLink
        ├─→ SectionReveal
        └─→ ParallaxBox
```

## Styling Architecture

### CSS Organization

1. **Global Styles**: Defined within component using CSS-in-JS
2. **CSS Variables**: Theme values (colors, spacing)
3. **Component Scoping**: Class names prefixed with `aa-` (analog-agency)
4. **Responsive Design**: Mobile-first with breakpoints

### Animation Patterns

1. **GSAP ScrollTrigger**: For scroll-driven animations
2. **Framer Motion**: For component-level animations
3. **CSS Transitions**: For simple hover effects
4. **Keyframe Animations**: For repeating effects

## UX/Accessibility

- **Reduced Motion Support**: Disables animations for users who prefer it
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **ARIA Labels**: Proper labels for screen readers
- **Focus Management**: Modal handles focus properly
- **Semantic HTML**: Uses proper heading hierarchy

## Future Improvements

### Refactoring Opportunities

1. **Extract to Custom Hooks**:
   ```typescript
   - useScrollAnimations()
   - useGalleryScroll()
   - useModalState()
   ```

2. **Extract Sub-Components**:
   ```typescript
   - Hero/
   - Work/
   - Team/
   - Contact/
   - Services/
   - Gallery/
   ```

3. **Move Constants**:
   ```typescript
   - src/constants/animations.ts
   - src/constants/content.ts
   - src/constants/breakpoints.ts
   ```

4. **Type Definitions**:
   ```typescript
   - src/types/components.ts (component props)
   - src/types/animations.ts (animation configs)
   ```

### Performance Enhancements

1. **Code Splitting**: Lazy load sections
2. **Image Optimization**: Use Next.js Image component
3. **Memoization**: Memo heavy components
4. **Animation Debounce**: Throttle scroll events

### Features to Add

1. **Dark/Light Mode**: Theme switching
2. **Analytics**: Track user interactions
3. **Content Management**: Move content to data files
4. **Internationalization**: Multi-language support

## Build & Deployment

### Build Process
```bash
npm run build  # Creates optimized production bundle
```

### Output
- `.next/` directory contains optimized code
- Static exports possible with `output: 'export'` config

### Production Optimizations
- Code splitting
- Image optimization
- CSS minification
- JavaScript minification
- Asset compression

## Security Considerations

- No sensitive data in client components
- Validate all user inputs
- Use HTTPS in production
- Regular dependency updates
- Security headers in `next.config.ts`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Smooth Scroll API support
- CSS Grid and Flexbox support
- ES2020 JavaScript features

## Environment Variables

Currently not required, but can be added for:
- API endpoints
- Analytics keys
- Feature flags
- Theme configuration

Create `.env.local` when needed.
