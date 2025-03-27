// shadcn UI utilities for Vue.js

// Function to merge class names
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Create glowing border effect
export function createGlowingBorder(element, options = {}) {
  if (!element) return;
  
  const config = {
    color: 'hsl(var(--primary))',
    size: '2px',
    blur: '15px',
    ...options
  };
  
  element.style.position = 'relative';
  element.style.zIndex = '1';
  
  // Create pseudo-element for glow
  const style = document.createElement('style');
  style.textContent = `
    [data-glow] {
      position: relative;
    }
    
    [data-glow]::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: ${config.size};
      background-image: linear-gradient(
        45deg,
        ${config.color} 5%,
        transparent 50%,
        ${config.color} 95%
      );
      background-position: 100% 100%;
      background-size: 300% 300%;
      background-origin: border-box;
      border: none;
      margin: -${config.size};
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      filter: blur(${config.blur});
      transition: background-position 0.5s ease;
      pointer-events: none;
      opacity: 0;
    }
    
    [data-glow]:hover::after {
      background-position: 0% 0%;
      opacity: 0.5;
    }
  `;
  
  document.head.appendChild(style);
  element.setAttribute('data-glow', '');
}

// Create tooltip
export function createTooltip(element, content, options = {}) {
  if (!element) return;
  
  const config = {
    position: 'top', // top, bottom, left, right
    offset: 10,
    delay: 300,
    ...options
  };
  
  // Create tooltip element
  const tooltip = document.createElement('div');
  tooltip.className = 'shadcn-tooltip-content';
  tooltip.innerHTML = content;
  tooltip.style.position = 'absolute';
  tooltip.style.zIndex = '50';
  tooltip.style.opacity = '0';
  tooltip.style.visibility = 'hidden';
  tooltip.style.transition = 'opacity 150ms ease-in-out, visibility 150ms ease-in-out';
  tooltip.style.backgroundColor = 'hsl(var(--popover, 222.2 84% 4.9%))';
  tooltip.style.color = 'hsl(var(--popover-foreground, 210 40% 98%))';
  tooltip.style.padding = '0.5rem 1rem';
  tooltip.style.borderRadius = '0.375rem';
  tooltip.style.fontSize = '0.875rem';
  tooltip.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
  tooltip.style.maxWidth = '20rem';
  tooltip.style.wordWrap = 'break-word';
  
  // Add tooltip to document
  document.body.appendChild(tooltip);
  
  // Calculate tooltip position
  const calculatePosition = () => {
    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    let top, left;
    
    switch (config.position) {
      case 'top':
        top = rect.top - tooltipRect.height - config.offset;
        left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'bottom':
        top = rect.bottom + config.offset;
        left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'left':
        top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
        left = rect.left - tooltipRect.width - config.offset;
        break;
      case 'right':
        top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
        left = rect.right + config.offset;
        break;
    }
    
    // Adjust if tooltip goes off screen
    const rightEdge = left + tooltipRect.width;
    const bottomEdge = top + tooltipRect.height;
    
    if (rightEdge > window.innerWidth) {
      left = window.innerWidth - tooltipRect.width - 5;
    }
    
    if (bottomEdge > window.innerHeight) {
      top = window.innerHeight - tooltipRect.height - 5;
    }
    
    if (left < 0) {
      left = 5;
    }
    
    if (top < 0) {
      top = 5;
    }
    
    tooltip.style.top = `${top + window.scrollY}px`;
    tooltip.style.left = `${left + window.scrollX}px`;
  };
  
  // Show tooltip
  let timeout;
  const showTooltip = () => {
    timeout = setTimeout(() => {
      calculatePosition();
      tooltip.style.opacity = '1';
      tooltip.style.visibility = 'visible';
    }, config.delay);
  };
  
  // Hide tooltip
  const hideTooltip = () => {
    clearTimeout(timeout);
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
  };
  
  // Add event listeners
  element.addEventListener('mouseenter', showTooltip);
  element.addEventListener('mouseleave', hideTooltip);
  element.addEventListener('focus', showTooltip);
  element.addEventListener('blur', hideTooltip);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('mouseenter', showTooltip);
    element.removeEventListener('mouseleave', hideTooltip);
    element.removeEventListener('focus', showTooltip);
    element.removeEventListener('blur', hideTooltip);
    document.body.removeChild(tooltip);
  };
}

// Create magnetic button effect
export function createMagneticEffect(element, options = {}) {
  if (!element) return;
  
  const config = {
    intensity: 0.3, // Adjust this value to control the intensity of the effect
    resetSpeed: 0.5, // Speed to reset to original position
    ...options
  };
  
  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + 
      Math.pow(e.clientY - centerY, 2)
    );
    
    // Only apply effect if cursor is close enough to the element
    if (distance < rect.width * 1.5) {
      const moveX = (e.clientX - centerX) * config.intensity;
      const moveY = (e.clientY - centerY) * config.intensity;
      
      element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    }
  };
  
  const resetPosition = () => {
    element.style.transition = `transform ${config.resetSpeed}s ease`;
    element.style.transform = 'translate3d(0, 0, 0)';
    
    // Remove transition after reset is complete
    setTimeout(() => {
      element.style.transition = '';
    }, config.resetSpeed * 1000);
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', resetPosition);
  
  // Return cleanup function
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', resetPosition);
  };
}

// Create a glass morphism effect
export function createGlassMorphism(element, options = {}) {
  if (!element) return;
  
  const config = {
    opacity: 0.05,
    blur: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    ...options
  };
  
  element.style.backgroundColor = `rgba(255, 255, 255, ${config.opacity})`;
  element.style.backdropFilter = `blur(${config.blur})`;
  element.style.WebkitBackdropFilter = `blur(${config.blur})`;
  element.style.border = config.border;
  element.style.borderRadius = 'var(--radius, 0.5rem)';
  element.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.36)';
}

// Add a shimmer effect
export function createShimmerEffect(element, options = {}) {
  if (!element) return;
  
  const config = {
    color: 'rgba(255, 255, 255, 0.05)',
    duration: '2s',
    ...options
  };
  
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  
  const shimmer = document.createElement('div');
  shimmer.style.position = 'absolute';
  shimmer.style.top = '0';
  shimmer.style.left = '0';
  shimmer.style.width = '100%';
  shimmer.style.height = '100%';
  shimmer.style.transform = 'translateX(-100%)';
  shimmer.style.backgroundImage = `linear-gradient(90deg, transparent, ${config.color}, transparent)`;
  shimmer.style.animation = `shimmer ${config.duration} linear infinite`;
  
  // Create keyframes for shimmer animation if they don't exist
  if (!document.querySelector('#shimmer-keyframes')) {
    const style = document.createElement('style');
    style.id = 'shimmer-keyframes';
    style.textContent = `
      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  element.appendChild(shimmer);
  
  // Return cleanup function
  return () => {
    if (element.contains(shimmer)) {
      element.removeChild(shimmer);
    }
  };
}

// Theme toggle functionality
export function createThemeToggle(options = {}) {
  const {
    darkClassName = 'dark-theme',
    storageKey = 'theme-preference'
  } = options;
  
  // Check for saved theme preference or use system preference
  const getThemePreference = () => {
    const savedPreference = localStorage.getItem(storageKey);
    if (savedPreference) {
      return savedPreference;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  
  // Apply theme to body
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.body.classList.add(darkClassName);
    } else {
      document.body.classList.remove(darkClassName);
    }
    
    // Update CSS variables if needed
    const root = document.documentElement;
    if (theme === 'dark') {
      // Dark theme colors
      root.style.setProperty('--background', '222.2 84% 4.9%');
      root.style.setProperty('--foreground', '210 40% 98%');
      root.style.setProperty('--card', '222.2 84% 4.9%');
      root.style.setProperty('--card-foreground', '210 40% 98%');
      root.style.setProperty('--popover', '222.2 84% 4.9%');
      root.style.setProperty('--popover-foreground', '210 40% 98%');
      root.style.setProperty('--primary', '263.4 70% 50.4%');
      root.style.setProperty('--primary-foreground', '210 40% 98%');
      root.style.setProperty('--secondary', '217.2 32.6% 17.5%');
      root.style.setProperty('--secondary-foreground', '210 40% 98%');
      root.style.setProperty('--muted', '217.2 32.6% 17.5%');
      root.style.setProperty('--muted-foreground', '215 20.2% 65.1%');
      root.style.setProperty('--accent', '217.2 32.6% 17.5%');
      root.style.setProperty('--accent-foreground', '210 40% 98%');
    } else {
      // Light theme colors
      root.style.setProperty('--background', '0 0% 100%');
      root.style.setProperty('--foreground', '222.2 84% 4.9%');
      root.style.setProperty('--card', '0 0% 100%');
      root.style.setProperty('--card-foreground', '222.2 84% 4.9%');
      root.style.setProperty('--popover', '0 0% 100%');
      root.style.setProperty('--popover-foreground', '222.2 84% 4.9%');
      root.style.setProperty('--primary', '262.1 83.3% 57.8%');
      root.style.setProperty('--primary-foreground', '210 40% 98%');
      root.style.setProperty('--secondary', '220 14.3% 95.9%');
      root.style.setProperty('--secondary-foreground', '222.2 47.4% 11.2%');
      root.style.setProperty('--muted', '220 14.3% 95.9%');
      root.style.setProperty('--muted-foreground', '220 8.9% 46.1%');
      root.style.setProperty('--accent', '220 14.3% 95.9%');
      root.style.setProperty('--accent-foreground', '222.2 47.4% 11.2%');
    }
  };
  
  // Save theme preference
  const saveThemePreference = (theme) => {
    localStorage.setItem(storageKey, theme);
  };
  
  // Toggle theme
  const toggleTheme = () => {
    const currentTheme = getThemePreference();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    saveThemePreference(newTheme);
    return newTheme;
  };
  
  // Initialize theme
  const initializeTheme = () => {
    const theme = getThemePreference();
    applyTheme(theme);
    return theme;
  };
  
  return {
    toggleTheme,
    initializeTheme,
    getThemePreference
  };
}

// Create theme toggle button
export function createThemeToggleButton(selector, options = {}) {
  const toggleButton = document.querySelector(selector);
  if (!toggleButton) return;
  
  const themeToggle = createThemeToggle(options);
  const currentTheme = themeToggle.initializeTheme();
  
  // Update button state based on current theme
  const updateButtonState = (theme) => {
    if (toggleButton.querySelector('.moon-icon')) {
      toggleButton.querySelector('.moon-icon').style.display = theme === 'dark' ? 'none' : 'block';
    }
    if (toggleButton.querySelector('.sun-icon')) {
      toggleButton.querySelector('.sun-icon').style.display = theme === 'dark' ? 'block' : 'none';
    }
  };
  
  updateButtonState(currentTheme);
  
  // Add click event to toggle theme
  toggleButton.addEventListener('click', () => {
    const newTheme = themeToggle.toggleTheme();
    updateButtonState(newTheme);
  });
} 