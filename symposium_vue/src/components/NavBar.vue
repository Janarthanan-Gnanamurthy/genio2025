<template>
  <header class="sticky top-0 z-50 w-full">
    <nav class="mx-auto px-4 sm:px-6 lg:px-8 glassmorphism shadow-lg border-b border-light-300/10 dark:border-dark-100/20">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <img src="https://res.cloudinary.com/dihkz12e6/image/upload/v1742958500/anna-clg-logo_xrsku2.png" alt="Anna University Logo" class="h-10 w-auto mr-3" />
          <div class="hidden md:block">
            <router-link to="/" class="text-base text-dark-200 dark:text-light-100 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Anna University Regional Campus
            </router-link>
          </div>
        </div>
        
        <div class="flex-shrink-0">
          <router-link to="/" class="font-display text-2xl font-bold gradient-text">
            GENIO 2K25
          </router-link>
        </div>
        
        <div class="flex items-center gap-2">
          <!-- Theme Toggle Button -->
          <button id="theme-toggle" class="p-2 rounded-full hover:bg-light-200 dark:hover:bg-dark-100 transition-colors" aria-label="Toggle Theme">
            <!-- Sun icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="sun-icon h-5 w-5 text-dark-200 dark:text-light-100" style="display:none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <!-- Moon icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="moon-icon h-5 w-5 text-dark-200 dark:text-light-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex md:items-center md:space-x-4">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/technical" class="nav-link">Technical</router-link>
            <router-link to="/non-technical" class="nav-link">Non-Technical</router-link>
            <router-link to="/fun-room" class="nav-link">Fun Room</router-link>
            <router-link to="/workshop" class="nav-link">Workshops</router-link>
          </div>
          
          <!-- Mobile Menu Button -->
          <button type="button" class="md:hidden p-2 rounded-md hover:bg-light-200 dark:hover:bg-dark-100 transition-colors" @click="toggleMenu">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6 text-dark-200 dark:text-light-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu, show/hide based on menu state -->
      <div v-show="isMenuOpen" class="md:hidden py-3 space-y-1 border-t border-light-300/10 dark:border-dark-100/20">
        <router-link to="/" class="mobile-nav-link" @click="closeMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </router-link>
        <router-link to="/technical" class="mobile-nav-link" @click="closeMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Technical Events
        </router-link>
        <router-link to="/non-technical" class="mobile-nav-link" @click="closeMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Non-Technical Events
        </router-link>
        <router-link to="/fun-room" class="mobile-nav-link" @click="closeMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Fun Room
        </router-link>
        <router-link to="/workshop" class="mobile-nav-link" @click="closeMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Workshops
        </router-link>
        <button class="mobile-nav-link w-full text-left" @click="toggleTheme">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          Toggle Theme
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import { onMounted, ref } from 'vue';
import { createThemeToggle } from '../utils/shadcnUI';

export default {
  name: 'NavBar',
  emits: ['theme-changed'],
  setup(props, { emit }) {
    const currentTheme = ref('dark');
    const isMenuOpen = ref(false);
    
    onMounted(() => {
      // Get initial theme
      const storedTheme = localStorage.getItem('genio-theme-preference');
      currentTheme.value = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      
      // Initialize theme toggle functionality
      const themeUtils = createThemeToggle({
        darkClassName: 'dark-mode',
        storageKey: 'genio-theme-preference'
      });
      
      // Initialize theme
      themeUtils.initializeTheme();
      
      // Add event listener to theme toggle button
      const themeToggleBtn = document.getElementById('theme-toggle');
      if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
          const newTheme = themeUtils.toggleTheme();
          currentTheme.value = newTheme;
          emit('theme-changed', newTheme === 'dark');
          
          // Update button icons
          const sunIcon = themeToggleBtn.querySelector('.sun-icon');
          const moonIcon = themeToggleBtn.querySelector('.moon-icon');
          if (sunIcon && moonIcon) {
            sunIcon.style.display = newTheme === 'dark' ? 'none' : 'block';
            moonIcon.style.display = newTheme === 'dark' ? 'block' : 'none';
          }
        });
        
        // Set initial button state
        const sunIcon = themeToggleBtn.querySelector('.sun-icon');
        const moonIcon = themeToggleBtn.querySelector('.moon-icon');
        if (sunIcon && moonIcon) {
          sunIcon.style.display = currentTheme.value === 'dark' ? 'none' : 'block';
          moonIcon.style.display = currentTheme.value === 'dark' ? 'block' : 'none';
        }
      }
    });
    
    // Toggle mobile menu
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    
    // Close mobile menu
    const closeMenu = () => {
      isMenuOpen.value = false;
    };
    
    // For mobile menu
    const toggleTheme = () => {
      const themeToggle = document.getElementById('theme-toggle');
      if (themeToggle) {
        themeToggle.click();
      }
      closeMenu();
    };
    
    return {
      toggleTheme,
      currentTheme,
      isMenuOpen,
      toggleMenu,
      closeMenu
    };
  }
}
</script>

<style scoped>
.nav-link {
  @apply px-3 py-2 text-sm font-medium text-dark-200 dark:text-light-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  @apply bg-primary-500;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.router-link-active.nav-link::after {
  width: 80%;
}

.mobile-nav-link {
  @apply flex items-center px-4 py-2 text-base font-medium text-dark-200 dark:text-light-100 hover:bg-light-200 dark:hover:bg-dark-100 transition-colors;
}

.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500;
}

.glassmorphism {
  @apply bg-white/70 dark:bg-dark-200/70 backdrop-blur-lg;
}
</style> 