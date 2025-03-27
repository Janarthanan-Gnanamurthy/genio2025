<template>
  <section class="py-16 px-4 md:px-8 relative aceternity-sparkle-container">
    <!-- Background decorations -->
    <div class="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
    
    <!-- Sparkles -->
    <div v-for="i in 15" :key="`sparkle-${i}`" 
         class="sparkle"
         :style="{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            backgroundColor: i % 2 === 0 ? '#8A2BE2' : '#FFFFFF'
         }">
    </div>
    
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 aceternity-3d-text">
        Event <span class="text-primary">Details</span>
      </h2>
      
      <div class="aceternity-bento-grid md:grid-cols-2 lg:grid-cols-4">
        <div v-for="(detail, index) in eventDetails" :key="index" 
             class="aceternity-bento-item glass-effect hover-lift shadcn-card"
             :class="{ 'shimmer-effect': index === 0 }">
          <div class="shadcn-card-header">
            <div class="card-icon mb-4 text-4xl text-secondary">
              <i :class="detail.icon"></i>
            </div>
            <h3 class="shadcn-card-title text-white flex items-center">
              <span class="text-secondary mr-1">{{ detail.titleHighlight }}</span>{{ detail.title }}
              <span v-if="detail.badge" class="ml-2">
                <span class="shadcn-badge" :class="`shadcn-badge-${detail.badgeType || 'outline'}`">
                  {{ detail.badge }}
                </span>
              </span>
            </h3>
          </div>
          <div class="shadcn-card-content">
            <p>{{ detail.description }}</p>
            <div class="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
          </div>
          <div class="shadcn-card-footer">
            <button class="shadcn-btn shadcn-btn-outline text-xs">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue';
import { createGlassMorphism, createShimmerEffect } from '../utils/shadcnUI';

export default {
  name: 'EventDetails',
  data() {
    return {
      eventDetails: [
        {
          icon: 'fas fa-calendar-days',
          titleHighlight: 'D',
          title: 'ate',
          description: '21 Apr 2025',
          badge: 'Coming soon',
          badgeType: 'primary'
        },
        {
          icon: 'fas fa-location-dot',
          titleHighlight: 'V',
          title: 'enue',
          description: 'AURC - Coimbatore',
          badge: 'Confirmed',
          badgeType: 'secondary'
        },
        {
          icon: 'fas fa-clipboard-list',
          titleHighlight: 'E',
          title: 'vents',
          description: 'Twenty Plus Technical Events',
          badge: '20+',
          badgeType: 'outline'
        },
        {
          icon: 'fas fa-dice-d6',
          titleHighlight: 'G',
          title: 'ames',
          description: 'Immersive World of Interactive Challenges',
          badge: 'New',
          badgeType: 'primary'
        }
      ]
    }
  },
  mounted() {
    // Apply glass morphism effect to cards
    onMounted(() => {
      createGlassMorphism('.glass-effect', {
        opacity: 0.1,
        blur: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      });
      
      // Apply shimmer effect to the first card
      createShimmerEffect('.shimmer-effect', {
        color: 'rgba(255, 255, 255, 0.1)',
        duration: '2s'
      });
    });
  }
}
</script>

<style scoped>
@import '../assets/aceternity-shadcn.css';
</style> 