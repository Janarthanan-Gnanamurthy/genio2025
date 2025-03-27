<template>
  <section id="about" class="py-24 relative">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-light-200 dark:bg-dark-100 z-0"></div>
    <div class="absolute inset-0 bg-mesh-pattern opacity-5 z-0"></div>
    
    <!-- Animated blobs -->
    <div class="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-primary-200/20 dark:bg-primary-800/20 blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-64 -left-64 w-96 h-96 rounded-full bg-secondary-200/20 dark:bg-secondary-800/20 blur-3xl pointer-events-none"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-screen-xl">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- About image -->
        <div class="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg gradient-border">
          <img src="https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Students at tech symposium" 
               class="w-full h-auto object-cover" />
        </div>
        
        <!-- About content -->
        <div class="w-full lg:w-1/2">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-6 gradient-text">
            About GENIO 2K25
          </h2>
          
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="mb-4 text-dark-100 dark:text-light-200">
              GENIO 2K25 is the flagship technical symposium organized by the Department of Computer Science and Engineering at Anna University Regional Campus.
            </p>
            
            <p class="mb-6 text-dark-100 dark:text-light-200">
              It brings together students from all over the country to showcase their technical prowess, engage in innovative challenges, and interact with industry professionals.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <!-- Feature 1 -->
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Technical Excellence</h3>
                  <p class="text-dark-100 dark:text-light-200 text-sm">Cutting-edge events and workshops focused on emerging technologies.</p>
                </div>
              </div>
              
              <!-- Feature 2 -->
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center text-secondary-600 dark:text-secondary-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Networking</h3>
                  <p class="text-dark-100 dark:text-light-200 text-sm">Connect with like-minded students and industry professionals.</p>
                </div>
              </div>
              
              <!-- Feature 3 -->
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-accent-600 dark:text-accent-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Career Opportunities</h3>
                  <p class="text-dark-100 dark:text-light-200 text-sm">Exposure to various career paths and industry trends.</p>
                </div>
              </div>
              
              <!-- Feature 4 -->
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Prizes & Recognition</h3>
                  <p class="text-dark-100 dark:text-light-200 text-sm">Attractive prizes and certificates for winners and participants.</p>
                </div>
              </div>
            </div>
            
            <!-- Stats -->
            <div class="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">20+</div>
                <div class="text-sm mt-1 text-dark-100 dark:text-light-200">Events</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-secondary-600 dark:text-secondary-400">10+</div>
                <div class="text-sm mt-1 text-dark-100 dark:text-light-200">Workshops</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-accent-600 dark:text-accent-400">1000+</div>
                <div class="text-sm mt-1 text-dark-100 dark:text-light-200">Participants</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">₹1L+</div>
                <div class="text-sm mt-1 text-dark-100 dark:text-light-200">Prize Pool</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500;
}

.prose {
  @apply text-dark-200 dark:text-light-100;
}
</style> 