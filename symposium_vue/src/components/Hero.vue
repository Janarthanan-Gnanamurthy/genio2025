<template>
  <section class="relative min-h-[92vh] overflow-hidden flex items-center justify-center py-20 lg:py-32">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-mesh-pattern opacity-10 dark:opacity-5 pointer-events-none"></div>
    
    <!-- Animated blobs -->
    <div class="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary-300/20 dark:bg-primary-800/20 blur-3xl animate-pulse-slow pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-secondary-300/20 dark:bg-secondary-800/20 blur-3xl animate-pulse-slow animation-delay-1000 pointer-events-none"></div>
    <div class="absolute top-3/4 right-1/3 w-40 h-40 rounded-full bg-accent-300/20 dark:bg-accent-800/20 blur-3xl animate-pulse-slow animation-delay-2000 pointer-events-none"></div>
    
    <!-- Floating particles -->
    <div v-for="i in 20" :key="`particle-${i}`" 
         class="absolute rounded-full opacity-30 dark:opacity-50 animate-float"
         :class="[
           i % 3 === 0 ? 'bg-primary-400 dark:bg-primary-500' : 
           i % 3 === 1 ? 'bg-secondary-400 dark:bg-secondary-500' : 
           'bg-accent-400 dark:bg-accent-500'
         ]"
         :style="{
           width: `${Math.random() * 6 + 2}px`,
           height: `${Math.random() * 6 + 2}px`,
           top: `${Math.random() * 100}%`,
           left: `${Math.random() * 100}%`,
           animationDuration: `${Math.random() * 10 + 10}s`,
           animationDelay: `${Math.random() * 5}s`
         }">
    </div>
    
    <!-- Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <!-- Left content -->
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <!-- Pre-title -->
          <div class="inline-block mb-4 px-3 py-1 rounded-full bg-primary-100/10 dark:bg-primary-900/10 border border-primary-200/20 dark:border-primary-800/20">
            <p class="text-sm font-medium text-primary-700 dark:text-primary-300">
              <span class="mr-2">April 21, 2025</span>
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              <span class="ml-2">Anna University</span>
            </p>
          </div>
          
          <!-- Title -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight gradient-text">
            GENIO 2K25
          </h1>
          
          <!-- Description -->
          <p class="text-xl text-dark-100 dark:text-light-200 mb-8 max-w-xl mx-auto lg:mx-0">
            Where innovation meets creativity. Join us for the most anticipated technical festival that brings together talents from across the region.
          </p>
          
          <!-- Tagline -->
          <div class="flex items-center justify-center lg:justify-start space-x-4 mb-8">
            <span class="text-lg font-medium">Rise</span>
            <span class="w-1.5 h-1.5 rounded-full bg-secondary-500"></span>
            <span class="text-lg font-medium">Revive</span>
            <span class="w-1.5 h-1.5 rounded-full bg-secondary-500"></span>
            <span class="text-lg font-medium">Revolutionize</span>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button class="shadcn-btn shadcn-btn-primary hover-scale group">
              <span>Join the excitement</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <button class="shadcn-btn shadcn-btn-outline hover-lift">
              <span>Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          
          <!-- Badges -->
          <div class="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
            <span class="shadcn-badge shadcn-badge-primary">Technology</span>
            <span class="shadcn-badge shadcn-badge-secondary">Innovation</span>
            <span class="shadcn-badge shadcn-badge-outline">Creativity</span>
            <span class="shadcn-badge shadcn-badge-outline">Workshops</span>
          </div>
        </div>
        
        <!-- Right content - 3D Card -->
        <div class="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div class="aceternity-float-card p-8 max-w-md relative gradient-border" ref="floatCard">
            <div class="relative z-10">
              <img src="https://res.cloudinary.com/dihkz12e6/image/upload/v1742958499/event-log-removebg-preview_rjiu0r.png" 
                   alt="GENIO Logo" class="w-full h-auto object-contain animate-float" />
            </div>
            
            <!-- Card effects -->
            <div class="card-shine"></div>
            
            <!-- Card decorations -->
            <div class="absolute top-4 left-4 w-3 h-3 rounded-full bg-primary-500/60 glow"></div>
            <div class="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-secondary-500/60 glow"></div>
            <div class="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent-500/60 glow"></div>
            <div class="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary-500/60 glow"></div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span class="text-sm text-dark-200 dark:text-light-200 mb-2">Scroll to explore</span>
        <div class="w-6 h-10 border-2 border-dark-200 dark:border-light-200 rounded-full flex justify-center p-2">
          <div class="w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'Hero',
  setup() {
    const floatCard = ref(null);
    
    onMounted(() => {
      if (floatCard.value) {
        // Add 3D floating effect to the card
        floatCard.value.addEventListener('mousemove', (e) => {
          const card = floatCard.value;
          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const cardCenterY = cardRect.top + cardRect.height / 2;
          const angleX = (e.clientY - cardCenterY) / 15;
          const angleY = -(e.clientX - cardCenterX) / 15;
          
          card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
          
          // Add shine effect
          const shine = card.querySelector('.card-shine');
          if (shine) {
            shine.style.opacity = '0.25';
            shine.style.background = `radial-gradient(circle at ${e.clientX - cardRect.left}px ${e.clientY - cardRect.top}px, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`;
          }
        });
        
        floatCard.value.addEventListener('mouseleave', () => {
          const card = floatCard.value;
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
          
          // Remove shine effect
          const shine = card.querySelector('.card-shine');
          if (shine) {
            shine.style.opacity = '0';
          }
        });
      }
    });
    
    // Join event function
    const joinEvent = () => {
      console.log('Joining event');
      // Add your navigation logic here
    };
    
    return {
      floatCard,
      joinEvent
    };
  }
}
</script>

<style scoped>
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}

.glow {
  box-shadow: 0 0 10px 2px currentColor;
}

.scroll-indicator {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.group:hover svg {
  transform: translateX(4px);
}
</style> 