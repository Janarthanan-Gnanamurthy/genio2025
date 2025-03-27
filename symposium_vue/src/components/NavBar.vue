<template>
  <div class="navbar bg-base-100/50 backdrop-blur-md sticky top-0 z-50">
    <div class="navbar-start">
      <div class="flex items-center">
        <img src="https://res.cloudinary.com/dihkz12e6/image/upload/v1742958500/anna-clg-logo_xrsku2.png" alt="Anna University Logo" class="h-12 mr-2" />
        <router-link to="/" class="text-sm md:text-lg font-semibold hidden md:block">
          Anna University Regional Campus
        </router-link>
      </div>
    </div>
    
    <div class="navbar-center">
      <router-link to="/" class="font-display text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-secondary">GENIO 2K25</router-link>
    </div>
    
    <div class="navbar-end">
      <!-- Theme Toggle Button -->
      <button id="theme-toggle" class="btn btn-ghost mr-2" aria-label="Toggle Theme">
        <svg class="sun-icon w-5 h-5" style="display:none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg class="moon-icon w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
      
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <i class="fas fa-bars text-lg"></i>
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-neutral rounded-box w-52 mt-4">
          <li><router-link to="/" class="text-white hover:text-secondary"><i class="fas fa-home mr-2"></i>Home</router-link></li>
          <li><router-link to="/technical" class="text-white hover:text-secondary"><i class="fas fa-code mr-2"></i>Technical Events</router-link></li>
          <li><router-link to="/non-technical" class="text-white hover:text-secondary"><i class="fas fa-gamepad mr-2"></i>Non-Technical Events</router-link></li>
          <li><router-link to="/fun-room" class="text-white hover:text-secondary"><i class="fas fa-smile mr-2"></i>Fun Room</router-link></li>
          <li><router-link to="/workshop" class="text-white hover:text-secondary"><i class="fas fa-chalkboard-teacher mr-2"></i>Workshops</router-link></li>
          <li class="md:hidden"><button class="text-white hover:text-secondary flex items-center" @click="toggleTheme">
            <i class="fas fa-moon mr-2"></i>Toggle theme
          </button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { createThemeToggle } from '../utils/shadcnUI';

export default {
  name: 'NavBar',
  emits: ['theme-changed'],
  setup(props, { emit }) {
    const currentTheme = ref('dark');
    
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
            sunIcon.style.display = newTheme === 'dark' ? 'block' : 'none';
            moonIcon.style.display = newTheme === 'dark' ? 'none' : 'block';
          }
        });
        
        // Set initial button state
        const sunIcon = themeToggleBtn.querySelector('.sun-icon');
        const moonIcon = themeToggleBtn.querySelector('.moon-icon');
        if (sunIcon && moonIcon) {
          sunIcon.style.display = currentTheme.value === 'dark' ? 'block' : 'none';
          moonIcon.style.display = currentTheme.value === 'dark' ? 'none' : 'block';
        }
      }
    });
    
    // For mobile menu
    const toggleTheme = () => {
      const themeToggle = document.getElementById('theme-toggle');
      if (themeToggle) {
        themeToggle.click();
      }
    };
    
    return {
      toggleTheme,
      currentTheme
    };
  }
}
</script>

<style scoped>
@import '../assets/aceternity-shadcn.css';

.dropdown-content {
  @apply bg-neutral/90 backdrop-blur-md;
}

/* Theme specific styles */
:global(.dark-mode) {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}

:global(:not(.dark-mode)) {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}
</style> 