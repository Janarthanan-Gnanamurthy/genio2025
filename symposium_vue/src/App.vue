<template>
  <div :class="['min-h-screen theme-transition overflow-x-hidden', 
                {'bg-gradient-to-b from-dark-300 to-dark-200 text-light-100': isDarkMode, 
                 'bg-gradient-to-b from-light-100 to-light-200 text-dark-200': !isDarkMode}]">
    
    <!-- Professional particle background -->
    <ParticleBackground />
    
    <!-- Navbar -->
    <NavBar @theme-changed="onThemeChange" />
    
    <!-- Main content -->
    <main class="relative z-20">
      <router-view></router-view>
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import ParticleBackground from './components/ParticleBackground.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    ParticleBackground
  },
  setup() {
    const isDarkMode = ref(true);
    
    // Check theme on load
    onMounted(() => {
      const storedTheme = localStorage.getItem('genio-theme-preference');
      isDarkMode.value = storedTheme ? storedTheme === 'dark' : true;
      
      // Apply initial theme to document
      document.documentElement.classList.toggle('dark-mode', isDarkMode.value);
      document.documentElement.classList.toggle('light-mode', !isDarkMode.value);
      
      // Set data theme for daisyUI
      document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'genioDark' : 'genio');
      
      // Listen for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleThemeChange = (e) => {
        if (!localStorage.getItem('genio-theme-preference')) {
          isDarkMode.value = e.matches;
          updateThemeClasses();
        }
      };
      
      mediaQuery.addEventListener('change', handleThemeChange);
    });
    
    // Watch for theme changes
    watch(isDarkMode, () => {
      updateThemeClasses();
    });
    
    // Update theme classes
    const updateThemeClasses = () => {
      document.documentElement.classList.toggle('dark-mode', isDarkMode.value);
      document.documentElement.classList.toggle('light-mode', !isDarkMode.value);
      document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'genioDark' : 'genio');
    };
    
    // Theme change handler
    const onThemeChange = (isDark) => {
      isDarkMode.value = isDark;
    };
    
    return {
      isDarkMode,
      onThemeChange
    };
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
@import './assets/aceternity-shadcn.css';

/* Base theme styles */
body {
  @apply font-sans antialiased;
  transition: background-color 0.5s ease, color 0.5s ease;
}

html, body {
  scroll-behavior: smooth;
  min-height: 100vh;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  @apply bg-light-200 dark:bg-dark-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-primary-300 dark:bg-primary-700 rounded-full;
}

/* Light mode overrides */
:root:not(.dark-mode) .aceternity-float-card {
  background-color: rgba(248, 250, 252, 0.8);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 10px 35px -5px rgba(0, 0, 0, 0.05), 0 0 15px rgba(99, 102, 241, 0.1);
}

:root:not(.dark-mode) .meteor {
  background-color: #6366f1;
  box-shadow: 0 0 10px 2px rgba(99, 102, 241, 0.4);
}

:root:not(.dark-mode) .shadcn-card {
  background-color: rgba(248, 250, 252, 0.8);
  color: #1e293b;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

/* Focus styles for accessibility */
a:focus, button:focus, input:focus, select:focus, textarea:focus {
  @apply outline-none ring-2 ring-primary-500 ring-offset-2 ring-offset-light-100 dark:ring-offset-dark-200;
}

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
</style> 