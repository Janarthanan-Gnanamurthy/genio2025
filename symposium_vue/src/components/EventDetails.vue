<template>
  <section id="events" class="py-24 relative">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-light-100 dark:bg-dark-200 z-0"></div>
    <div class="absolute inset-0 bg-mesh-pattern opacity-5 z-0"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
          Explore Our Events
        </h2>
        <p class="text-lg text-dark-100 dark:text-light-200 max-w-3xl mx-auto">
          Discover a variety of technical and non-technical events designed to challenge your skills and creativity.
        </p>
      </div>
      
      <!-- Event categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Technical Events -->
        <div class="modern-card hover-lift group">
          <div class="relative mb-6 overflow-hidden rounded-lg">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Technical Events" 
                 class="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent"></div>
            <div class="absolute bottom-3 left-3">
              <span class="shadcn-badge shadcn-badge-primary">Technical</span>
            </div>
          </div>
          
          <h3 class="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            Technical Events
          </h3>
          
          <p class="text-dark-100 dark:text-light-200 mb-6">
            From coding challenges to hackathons, our technical events are designed to test your programming skills and problem-solving abilities.
          </p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary-100/20 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300">Hackathon</span>
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary-100/20 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300">Coding Contest</span>
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary-100/20 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300">Debug</span>
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary-100/20 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300">Web Development</span>
          </div>
          
          <router-link to="/technical" class="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline">
            <span>Explore Technical Events</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
        
        <!-- Non-Technical Events -->
        <div class="modern-card hover-lift group">
          <div class="relative mb-6 overflow-hidden rounded-lg">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Non-Technical Events" 
                 class="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent"></div>
            <div class="absolute bottom-3 left-3">
              <span class="shadcn-badge shadcn-badge-secondary">Non-Technical</span>
            </div>
          </div>
          
          <h3 class="text-xl font-semibold mb-3 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
            Non-Technical Events
          </h3>
          
          <p class="text-dark-100 dark:text-light-200 mb-6">
            Participate in a variety of fun and engaging activities that don't require technical knowledge but test your creativity and quick thinking.
          </p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-secondary-100/20 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300">Quiz</span>
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-secondary-100/20 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300">Photography</span>
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-secondary-100/20 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300">Treasure Hunt</span>
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-secondary-100/20 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300">Gaming</span>
          </div>
          
          <router-link to="/non-technical" class="inline-flex items-center text-secondary-600 dark:text-secondary-400 font-medium hover:underline">
            <span>Explore Non-Technical Events</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
        
        <!-- Workshops -->
        <div class="modern-card hover-lift group">
          <div class="relative mb-6 overflow-hidden rounded-lg">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Workshops" 
                 class="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent"></div>
            <div class="absolute bottom-3 left-3">
              <span class="shadcn-badge shadcn-badge-outline">Workshops</span>
            </div>
          </div>
          
          <h3 class="text-xl font-semibold mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
            Workshops
          </h3>
          
          <p class="text-dark-100 dark:text-light-200 mb-6">
            Enhance your skills with hands-on workshops led by industry experts on cutting-edge technologies and trending topics.
          </p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-accent-100/20 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300">AI/ML</span>
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-accent-100/20 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300">Blockchain</span>
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-accent-100/20 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300">IoT</span>
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-accent-100/20 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300">Cloud Computing</span>
          </div>
          
          <router-link to="/workshop" class="inline-flex items-center text-accent-600 dark:text-accent-400 font-medium hover:underline">
            <span>Explore Workshops</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </div>
      
      <!-- CTA Banner -->
      <div class="mt-20 rounded-2xl p-8 md:p-12 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-500/10 glassmorphism">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="text-2xl font-display font-bold mb-2 gradient-text">Ready to Participate?</h3>
            <p class="text-dark-100 dark:text-light-200">Register now to secure your spot and showcase your talents.</p>
          </div>
          <button class="shadcn-btn shadcn-btn-primary hover-scale">
            <span>Register Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventDetails',
}
</script>

<style scoped>
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500;
}
</style> 