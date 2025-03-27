<template>
  <div class="particle-container">
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue';

export default {
  name: 'ParticleBackground',
  props: {
    particleColor: {
      type: String,
      default: '#6366f1' // primary color
    },
    particleCount: {
      type: Number,
      default: 80
    },
    particleSpeed: {
      type: Number,
      default: 0.8
    },
    particleSize: {
      type: Number,
      default: 1.3
    },
    lineOpacity: {
      type: Number,
      default: 0.2
    },
    connectionDistance: {
      type: Number,
      default: 160
    }
  },
  setup(props) {
    const particleCanvas = ref(null);
    let canvas, ctx, particles, animationFrame;
    let isDark = document.documentElement.classList.contains('dark-mode');

    // Particle class
    class Particle {
      constructor(x, y, size, color, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.baseSize = size;
        this.color = color;
        // Ensure all particles have a minimum speed
        this.speedX = speed * (Math.random() - 0.5) * 0.7;
        this.speedY = speed * (Math.random() - 0.5) * 0.7;
        
        // Make sure particles are always moving
        if (Math.abs(this.speedX) < 0.05) this.speedX = 0.05 * (this.speedX >= 0 ? 1 : -1);
        if (Math.abs(this.speedY) < 0.05) this.speedY = 0.05 * (this.speedY >= 0 ? 1 : -1);
      }

      update() {
        // Update position
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off walls
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const color = isDark ? props.particleColor : props.particleColor;
      
      for (let i = 0; i < props.particleCount; i++) {
        const size = props.particleSize * (Math.random() * 0.6 + 0.7);
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y, size, color, props.particleSpeed));
      }
    };

    // Draw connections between particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < props.connectionDistance) {
            const opacity = (1 - distance / props.connectionDistance) * props.lineOpacity;
            ctx.beginPath();
            ctx.strokeStyle = isDark 
              ? `rgba(99, 102, 241, ${opacity})` // primary in dark mode
              : `rgba(99, 102, 241, ${opacity * 0.7})`; // slightly more subtle in light mode
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with very subtle background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      drawConnections();

      // Continue animation
      animationFrame = requestAnimationFrame(animate);
    };

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;

      // Set canvas dimensions to window size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reinitialize particles after resize
      initParticles();
    };

    // Theme change handler
    const handleThemeChange = () => {
      isDark = document.documentElement.classList.contains('dark-mode');
      
      // Reinitialize particles with new color
      if (particles) {
        particles.forEach(particle => {
          particle.color = isDark ? props.particleColor : props.particleColor;
        });
      }
    };

    // Initialize and cleanup
    onMounted(() => {
      canvas = particleCanvas.value;
      ctx = canvas.getContext('2d');

      // Set initial size
      handleResize();

      // Add event listeners
      window.addEventListener('resize', handleResize);
      window.addEventListener('themechange', handleThemeChange);

      // Start animation
      animate();

      // Observer for theme changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            handleThemeChange();
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
    });

    onUnmounted(() => {
      // Clean up
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('themechange', handleThemeChange);
      cancelAnimationFrame(animationFrame);
    });

    return {
      particleCanvas
    };
  }
};
</script>

<style scoped>
.particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.particle-canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style> 