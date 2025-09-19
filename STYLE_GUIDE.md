# Payzo Fintech Landing Page - Style Guide

## 1. Color System Implementation

### CSS Variables
```css
/* Add to globals.css */
@layer base {
  :root {
    /* Brand Colors */
    --brand-primary: 142 76% 36%;
    --brand-primary-hover: 142 76% 32%;
    --brand-secondary: 158 64% 52%;
    --brand-gradient-start: 142 76% 36%;
    --brand-gradient-end: 158 64% 52%;

    /* Semantic Colors */
    --success: 142 76% 36%;
    --warning: 43 74% 66%;
    --error: 0 84% 60%;
    --info: 199 89% 48%;

    /* Neutral Palette */
    --gray-50: 0 0% 98%;
    --gray-100: 240 5% 96%;
    --gray-200: 240 6% 90%;
    --gray-300: 240 5% 84%;
    --gray-400: 240 5% 65%;
    --gray-500: 240 5% 45%;
    --gray-600: 240 5% 34%;
    --gray-700: 240 5% 26%;
    --gray-800: 240 10% 16%;
    --gray-900: 240 10% 10%;
  }
}
```

### Tailwind Config Extension
```javascript
// tailwind.config.ts
colors: {
  brand: {
    primary: 'hsl(var(--brand-primary))',
    'primary-hover': 'hsl(var(--brand-primary-hover))',
    secondary: 'hsl(var(--brand-secondary))',
  },
  gray: {
    50: 'hsl(var(--gray-50))',
    100: 'hsl(var(--gray-100))',
    // ... continue for all grays
  }
}
```

## 2. Typography Classes

### Heading Styles
```css
/* Heading utilities */
.heading-hero {
  @apply text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight;
}

.heading-1 {
  @apply text-3xl md:text-4xl lg:text-5xl font-semibold;
}

.heading-2 {
  @apply text-2xl md:text-3xl lg:text-4xl font-semibold;
}

.heading-3 {
  @apply text-xl md:text-2xl lg:text-3xl font-medium;
}

.heading-4 {
  @apply text-lg md:text-xl lg:text-2xl font-medium;
}

/* Body text utilities */
.body-large {
  @apply text-lg leading-relaxed;
}

.body-regular {
  @apply text-base leading-normal;
}

.body-small {
  @apply text-sm leading-normal;
}

.caption {
  @apply text-xs text-gray-500;
}
```

## 3. Component Variants

### Button Variants
```tsx
// Button component extensions
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gradient: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-lg hover:-translate-y-0.5",
        outline: "border border-gray-200 bg-transparent hover:bg-gray-50",
        ghost: "hover:bg-gray-100",
        link: "text-brand-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6",
        lg: "h-12 px-8 text-lg",
        xl: "h-14 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "gradient",
      size: "md",
    },
  }
)
```

### Card Styles
```tsx
// Card component patterns
const cardStyles = {
  base: "rounded-2xl border border-gray-200 bg-white transition-all duration-200",
  hover: "hover:shadow-lg hover:-translate-y-1 cursor-pointer",
  padding: {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  },
}

// Usage example
<Card className={cn(cardStyles.base, cardStyles.hover, cardStyles.padding.md)}>
  {/* Content */}
</Card>
```

## 4. Animation Classes

### Transition Utilities
```css
/* Animation utilities */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.4s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
```

### Hover Effects
```css
/* Interactive hover effects */
.hover-lift {
  @apply transition-all duration-200 hover:-translate-y-1 hover:shadow-lg;
}

.hover-glow {
  @apply transition-all duration-200 hover:shadow-xl hover:shadow-brand-primary/20;
}

.hover-scale {
  @apply transition-transform duration-200 hover:scale-105;
}
```

## 5. Layout Patterns

### Container System
```css
/* Container utilities */
.container-narrow {
  @apply max-w-4xl mx-auto px-4 sm:px-6 lg:px-8;
}

.container-regular {
  @apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8;
}

.container-wide {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.container-full {
  @apply w-full px-4 sm:px-6 lg:px-8;
}
```

### Grid Systems
```css
/* Grid layouts */
.grid-cols-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.bento-item-large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-item-wide {
  grid-column: span 2;
}

.bento-item-tall {
  grid-row: span 2;
}
```

## 6. Component Examples

### Hero Section Pattern
```tsx
export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container-regular">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="heading-hero text-gray-900">
            Launch a fintech website in{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              days, not weeks
            </span>
          </h1>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Build and ship your next fintech website super fast with our modern components
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="gradient">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Stats Card Pattern
```tsx
export function StatsCard({
  value,
  label,
  icon: Icon,
  trend
}: StatsCardProps) {
  return (
    <Card className="hover-lift p-6">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="caption uppercase tracking-wider">{label}</p>
          <p className="heading-3 text-gray-900">{value}</p>
          {trend && (
            <p className="body-small text-green-600 flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              {trend}
            </p>
          )}
        </div>
        <div className="p-3 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-lg">
          <Icon className="h-6 w-6 text-brand-primary" />
        </div>
      </div>
    </Card>
  )
}
```

### Feature Card Pattern
```tsx
export function FeatureCard({
  title,
  description,
  icon: Icon
}: FeatureCardProps) {
  return (
    <Card className="group hover-lift p-6 border-2 border-transparent hover:border-brand-primary/20">
      <div className="space-y-4">
        <div className="p-3 bg-gray-100 rounded-lg w-fit group-hover:bg-gradient-to-br group-hover:from-brand-primary/10 group-hover:to-brand-secondary/10 transition-colors">
          <Icon className="h-6 w-6 text-gray-700 group-hover:text-brand-primary transition-colors" />
        </div>
        <div className="space-y-2">
          <h3 className="heading-4 text-gray-900">{title}</h3>
          <p className="body-small text-gray-600">{description}</p>
        </div>
      </div>
    </Card>
  )
}
```

## 7. Form Styles

### Input Patterns
```css
/* Form field styles */
.input-base {
  @apply w-full rounded-lg border border-gray-200 px-4 py-2 text-gray-900 placeholder-gray-400
         focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20
         disabled:cursor-not-allowed disabled:opacity-50;
}

.input-error {
  @apply border-red-500 focus:border-red-500 focus:ring-red-500/20;
}

.label-base {
  @apply block text-sm font-medium text-gray-700 mb-1;
}

.helper-text {
  @apply text-xs text-gray-500 mt-1;
}

.error-text {
  @apply text-xs text-red-500 mt-1;
}
```

## 8. Responsive Utilities

### Breakpoint System
```css
/* Responsive display utilities */
.mobile-only {
  @apply block sm:hidden;
}

.tablet-only {
  @apply hidden sm:block lg:hidden;
}

.desktop-only {
  @apply hidden lg:block;
}

/* Responsive spacing */
.section-padding {
  @apply py-12 sm:py-16 md:py-20 lg:py-24;
}

.section-margin {
  @apply my-12 sm:my-16 md:my-20 lg:my-24;
}
```

## 9. Dark Mode Styles

### Dark Mode Variables
```css
.dark {
  /* Brand colors remain vibrant */
  --brand-primary: 142 76% 40%;
  --brand-secondary: 158 64% 56%;

  /* Inverted neutrals */
  --gray-50: 240 10% 10%;
  --gray-100: 240 10% 16%;
  --gray-200: 240 5% 26%;
  --gray-300: 240 5% 34%;
  --gray-400: 240 5% 45%;
  --gray-500: 240 5% 65%;
  --gray-600: 240 5% 84%;
  --gray-700: 240 6% 90%;
  --gray-800: 240 5% 96%;
  --gray-900: 0 0% 98%;
}
```

## 10. Accessibility Utilities

### Focus States
```css
/* Focus utilities */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2;
}

.focus-visible-ring {
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2;
}

/* Skip to content link */
.skip-link {
  @apply absolute -top-10 left-4 z-50 rounded bg-brand-primary px-4 py-2 text-white
         focus:top-4 focus:outline-none;
}
```

### Screen Reader Utilities
```css
/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

## 11. Loading States

### Skeleton Screens
```tsx
export function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="rounded-2xl bg-gray-200 h-48 w-full mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  )
}
```

### Spinner Component
```tsx
export function Spinner({ size = 'md' }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  }

  return (
    <div className={cn(
      'animate-spin rounded-full border-2 border-gray-300 border-t-brand-primary',
      sizeClasses[size]
    )} />
  )
}
```

## 12. Best Practices

### Do's
- ✅ Use semantic HTML elements
- ✅ Maintain consistent spacing using the scale
- ✅ Use hover states for all interactive elements
- ✅ Ensure touch targets are at least 44x44px
- ✅ Test color contrast ratios
- ✅ Use CSS variables for theming
- ✅ Implement loading states
- ✅ Add focus indicators

### Don'ts
- ❌ Don't use inline styles except for dynamic values
- ❌ Don't create one-off spacing values
- ❌ Don't use colors outside the palette
- ❌ Don't forget hover/focus states
- ❌ Don't use px values for text sizes
- ❌ Don't ignore accessibility
- ❌ Don't mix different animation timings

## 13. Code Organization

### File Structure
```
src/
├── components/
│   ├── ui/           # Shadcn components
│   ├── common/       # Shared components
│   ├── sections/     # Page sections
│   └── layouts/      # Layout components
├── styles/
│   ├── globals.css   # Global styles
│   ├── utilities.css # Custom utilities
│   └── animations.css # Animation keyframes
└── lib/
    ├── utils.ts      # Utility functions
    └── cn.ts         # Class name helper
```

### Naming Conventions
- Components: PascalCase (e.g., `HeroSection`)
- CSS classes: kebab-case (e.g., `hero-section`)
- CSS utilities: descriptive names (e.g., `hover-lift`)
- Props: camelCase (e.g., `isLoading`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_WIDTH`)

---

*Style Guide Version: 1.0*
*Last Updated: 2025-01-18*
*Maintained by: Development Team*