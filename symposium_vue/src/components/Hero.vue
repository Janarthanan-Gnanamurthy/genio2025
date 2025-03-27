<template>
  <section id="home" class="hero min-h-screen relative overflow-hidden aceternity-meteor-container">
    <!-- Animated background grid -->
    <div class="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
      <div v-for="i in 144" :key="i" class="border border-primary/10"></div>
    </div>
    
    <!-- Add meteors -->
    <div v-for="i in 12" :key="`meteor-${i}`" 
         class="meteor"
         :style="{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 5}s`
         }">
    </div>
    
    <!-- Animated particles -->
    <div v-for="i in 20" :key="i" 
         :class="`particle particle-${i} absolute rounded-full bg-primary-light/30`"
         :style="{
           width: `${Math.random() * 10 + 2}px`,
           height: `${Math.random() * 10 + 2}px`,
           top: `${Math.random() * 100}%`,
           left: `${Math.random() * 100}%`,
           animationDuration: `${Math.random() * 20 + 10}s`,
           animationDelay: `${Math.random() * 5}s`
         }">
    </div>
    
    <div class="hero-content text-center text-neutral-content flex flex-col md:flex-row px-4 z-10">
      <div class="max-w-md md:max-w-2xl">
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 class="text-lg md:text-xl mb-4 text-gray-300 shimmer-effect">
            Plug in and power up for the Grand Event
          </h3>
          
          <div class="block md:hidden mb-8 aceternity-float-card p-4">
            <img src="https://res.cloudinary.com/dihkz12e6/image/upload/v1742958499/event-log-removebg-preview_rjiu0r.png" 
                 alt="GENIO Logo" class="w-48 h-48 object-contain mx-auto" />
            <div class="card-shine"></div>
          </div>
          
          <h1 class="aceternity-3d-text font-display text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-secondary p-2 border-2 border-primary/30 rounded-lg shadow-lg shadow-primary/20">
            GENIO 2K25
          </h1>
          
          <p class="text-xl md:text-2xl mb-8 text-white aceternity-moving-gradient" 
             style="background-image: linear-gradient(45deg, #5D3FD3, #8A2BE2, #5D3FD3); background-size: 200% 200%;">From April 21</p>
          
          <div class="flex items-center justify-center space-x-2 md:space-x-4 mb-8">
            <span class="text-lg md:text-xl font-semibold">Rise</span>
            <div class="w-2 h-2 rounded-full bg-secondary"></div>
            <span class="text-lg md:text-xl font-semibold">Revive</span>
            <div class="w-2 h-2 rounded-full bg-secondary"></div>
            <span class="text-lg md:text-xl font-semibold">Revolutionize</span>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="shadcn-btn shadcn-btn-primary hover-scale" @click="joinEvent">
              Join the excitement
              <i class="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
            </button>
            
            <button class="shadcn-btn shadcn-btn-outline glass-effect hover-lift">
              Learn more
              <i class="fas fa-info-circle ml-2"></i>
            </button>
          </div>
          
          <div class="mt-8 flex gap-2">
            <span class="shadcn-badge shadcn-badge-primary">Tech</span>
            <span class="shadcn-badge shadcn-badge-secondary">Innovation</span>
            <span class="shadcn-badge shadcn-badge-outline">Creativity</span>
          </div>
        </div>
      </div>
      
      <div class="hidden md:block md:w-1/3 aceternity-float-card p-6" ref="floatCard">
        <img src="https://res.cloudinary.com/dihkz12e6/image/upload/v1742958499/event-log-removebg-preview_rjiu0r.png" 
             alt="GENIO Logo" class="w-full h-auto object-contain bounce-animation" />
        <div class="card-shine"></div>
      </div>
    </div>
    
    <!-- Tech line animation -->
    <div class="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
      <div class="tech-line"></div>
    </div>
    
    <!-- Add wave effect at bottom -->
    <div class="aceternity-wave-container absolute bottom-0 left-0 w-full overflow-hidden">
      <div class="wave-container">
        <svg class="wave" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-opacity="0.1" fill="#8A2BE2" d="M0,40L48,58.7C96,77,192,113,288,122.7C384,132,480,113,576,101.3C672,89,768,85,864,96C960,107,1056,132,1152,138.7C1248,145,1344,132,1392,125.3L1440,119L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';
// Import the utility functions
import { createGlowingBorder, createMagneticEffect } from '../utils/shadcnUI';

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
          const angleX = (e.clientY - cardCenterY) / 10;
          const angleY = -(e.clientX - cardCenterX) / 10;
          
          card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
          
          // Add shine effect
          const shine = card.querySelector('.card-shine');
          if (shine) {
            shine.style.opacity = '0.25';
            shine.style.background = `radial-gradient(circle at ${e.clientX - cardRect.left}px ${e.clientY - cardRect.top}px, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 60%)`;
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
        
        // Apply magnetic effect to the first button
        createMagneticEffect('.shadcn-btn-primary', {
          intensity: 50,
          resetSpeed: 0.5
        });
        
        // Apply glowing border to buttons
        createGlowingBorder('.shadcn-btn-primary', {
          color: 'rgba(138, 43, 226, 0.6)',
          size: '4px',
          blur: '12px'
        });
      }
    });
    
    // Join event function
    const joinEvent = () => {
      console.log('Joining event');
      // Add your logic here
    };
    
    return {
      floatCard,
      joinEvent
    };
  }
}
</script>

<style scoped>
@import '../assets/aceternity-shadcn.css';

.bounce-animation {
  animation: bounce 4s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.tech-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--p), transparent);
  width: 100%;
  position: absolute;
  bottom: 10px;
  animation: techLine 8s infinite linear;
}

@keyframes techLine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.particle {
  animation: float linear infinite;
  opacity: 0;
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(100px);
    opacity: 0;
  }
}
</style> 