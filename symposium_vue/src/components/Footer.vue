<template>
  <footer class="relative bg-light-100 dark:bg-dark-200 pt-16 pb-8 text-dark-200 dark:text-light-100 border-t border-light-300 dark:border-dark-100">
    <!-- Background pattern -->
    <div class="absolute inset-0 bg-mesh-pattern opacity-5 pointer-events-none"></div>
    
    <!-- Curved divider at top -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
      <svg class="relative block w-full" style="height: 60px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path class="fill-current text-light-100 dark:text-dark-200" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
      </svg>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Logo and Info -->
        <div class="flex flex-col">
          <div>
            <router-link to="/" class="font-display text-2xl font-bold gradient-text">
              GENIO 2K25
            </router-link>
            <p class="mt-4 text-dark-100 dark:text-light-200">
              The Annual Technical Symposium by the Department of CSE and AI & DS, Anna University Regional Campus.
            </p>
          </div>
          <div class="mt-6 flex space-x-4">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/genio_2.0_/profilecard/?igsh=bzI2b3lvbzd2Mzlw" class="social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="www.linkedin.com/in/janarthanangm" class="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h5 class="text-lg font-semibold mb-4">Quick Links</h5>
          <ul class="space-y-2">
            <li><router-link to="/" class="footer-link">Home</router-link></li>
            <li><router-link to="/technical" class="footer-link">Technical Events</router-link></li>
            <li><router-link to="/non-technical" class="footer-link">Non-Technical Events</router-link></li>
            <li><router-link to="/fun-room" class="footer-link">Fun Room</router-link></li>
            <li><router-link to="/workshop" class="footer-link">Workshops</router-link></li>
            <li><router-link to="/sponsors" class="footer-link">Sponsors</router-link></li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div>
          <h5 class="text-lg font-semibold mb-4">Contact</h5>
          <div class="space-y-3">
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-0.5 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="ml-3 block text-dark-100 dark:text-light-200">
                Maruthamalai Main Road, Navavoor, Coimbatore(Dt), <br>Tamil Nadu  India <br> 641046
              </span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@genio2k25.com" class="ml-3 footer-link">info@genio2k25.com</a>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+919876543210" class="ml-3 footer-link">+91 98765 43210</a>
            </div>
          </div>
        </div>
        
        <!-- Newsletter -->
        <div>
          <h5 class="text-lg font-semibold mb-4">Stay Updated</h5>
          <p class="mb-4 text-dark-100 dark:text-light-200">Subscribe to our newsletter for the latest updates and announcements.</p>
          <form action="#" method="POST" class="space-y-2">
            <div class="flex items-center">
              <input type="email" placeholder="Your email address" required
                     class="w-full px-3 py-2 rounded-l-md border border-light-300 dark:border-dark-100 bg-white dark:bg-dark-100 text-dark-200 dark:text-light-100 focus:outline-none focus:ring-1 focus:ring-primary-500" />
              <button type="submit" class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-r-md transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <!-- Bottom Section -->
      <div class="border-t border-light-300 dark:border-dark-100 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-sm text-dark-100 dark:text-light-300">
          &copy; 2025 GENIO Symposium. All Rights Reserved.
        </p>
        <div class="mt-4 sm:mt-0 flex flex-wrap justify-center gap-4 text-sm text-dark-100 dark:text-light-300">
          <a href="#" class="hover:text-primary-500 transition-colors">Privacy Policy</a>
          <span class="hidden sm:inline">•</span>
          <a href="#" class="hover:text-primary-500 transition-colors">Terms of Service</a>
          <span class="hidden sm:inline">•</span>
          <a href="#" class="hover:text-primary-500 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500;
}

.footer-link {
  @apply text-dark-100 dark:text-light-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors;
}

.social-link {
  @apply flex items-center justify-center w-10 h-10 rounded-full border border-light-300 dark:border-dark-100 text-dark-100 dark:text-light-200 hover:text-primary-500 hover:border-primary-500 dark:hover:border-primary-500 transition-colors;
}
</style> 