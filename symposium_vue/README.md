# GENIO 2K25 Symposium Website

A modern, interactive website for the GENIO 2K25 Symposium featuring enhanced UI components powered by Aceternity UI and shadcn UI.

## UI Enhancements

This project incorporates modern UI elements from both Aceternity UI and shadcn UI libraries, providing a sleek and interactive experience.

### Aceternity UI Components

- **3D Floating Cards**: Interactive cards with 3D movement effects
- **Meteor Effect**: Animated shooting meteors in the background
- **Sparkle Effect**: Animated sparkles that add visual interest
- **Moving Gradients**: Dynamic gradient backgrounds that shift over time
- **Wave Effect**: Smooth wave animation for section transitions
- **3D Text**: Text elements with depth and interactive hover states
- **Bento Grid Layout**: Modern grid layout for dynamic content arrangement

### shadcn UI Components

- **Buttons**: Styled buttons with hover effects and variants
- **Cards**: Clean card components with headers, content, and footers
- **Badges**: Status indicators and tags
- **Inputs**: Form elements with proper styling
- **Glass Morphism**: Frosted glass effect for containers
- **Shimmer Effect**: Loading state indicators with subtle motion

### Utility Functions

The project includes several utility functions in `src/utils/shadcnUI.js`:

- `cn()`: Merges class names
- `createGlowingBorder()`: Adds glowing borders to elements
- `createTooltip()`: Creates customizable tooltips
- `createMagneticEffect()`: Adds magnetic mouse following to elements
- `createGlassMorphism()`: Applies glass morphism styling
- `createShimmerEffect()`: Adds loading shimmer animations
- `createThemeToggle()`: Manages theme switching between light and dark modes

## Features

- Responsive design for all screen sizes
- Dark/Light mode toggle
- Interactive UI elements
- Smooth animations
- Accessible components

## CSS Styles

The project uses a combined CSS file (`src/assets/aceternity-shadcn.css`) that includes:

- Custom variables for consistent theming
- Component-specific styles
- Animation keyframes
- Utility classes for common effects

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`

## Usage Example

```vue
<template>
  <div class="aceternity-float-card">
    <h2>Interactive Card</h2>
    <p>This card has a 3D floating effect</p>
    <div class="card-shine"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { createGlowingBorder } from '../utils/shadcnUI';

export default {
  setup() {
    const cardRef = ref(null);
    
    onMounted(() => {
      // Apply glow effect
      createGlowingBorder('.aceternity-float-card');
    });
    
    return { cardRef };
  }
}
</script>
```

## Browser Support

This project works best in modern browsers that support:
- CSS Variables
- CSS Grid
- CSS Animations
- CSS Backdrop Filter
