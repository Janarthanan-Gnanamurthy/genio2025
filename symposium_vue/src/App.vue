<template>
  <div :class="['min-h-screen transition-colors duration-300', 
                {'bg-gradient-to-b from-darkBg to-[#1a1a2e]': isDarkMode, 
                 'bg-gradient-to-b from-[#f5f5f5] to-[#e5e5f5]': !isDarkMode}]">
    <NavBar @theme-changed="onThemeChange" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  setup() {
    const isDarkMode = ref(true);
    
    // Check theme on load
    onMounted(() => {
      const storedTheme = localStorage.getItem('genio-theme-preference');
      isDarkMode.value = storedTheme ? storedTheme === 'dark' : true;
      
      // Listen for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleThemeChange = (e) => {
        if (!localStorage.getItem('genio-theme-preference')) {
          isDarkMode.value = e.matches;
        }
      };
      
      mediaQuery.addEventListener('change', handleThemeChange);
    });
    
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
@import './assets/aceternity-shadcn.css';

/* Base theme styles */
body {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Light mode overrides */
:root:not(.dark-mode) .aceternity-float-card {
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 10px 35px -5px rgba(0, 0, 0, 0.1);
}

:root:not(.dark-mode) .meteor {
  background-color: #8A2BE2;
  box-shadow: 0 0 10px 2px rgba(138, 43, 226, 0.6);
}

:root:not(.dark-mode) .shadcn-card {
  background-color: rgba(255, 255, 255, 0.8);
  color: #1a1a2e;
}
</style> 