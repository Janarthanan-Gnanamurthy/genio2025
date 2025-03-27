<template>
  <footer id="contact" class="bg-neutral py-16 px-4 text-white relative overflow-hidden">
    <!-- Circuit pattern background -->
    <div class="absolute inset-0 opacity-5">
      <div class="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%238A2BE2%22%20stroke-width%3D%220.25%22%20d%3D%22M90%2C90%20L90%2C10%20L10%2C10%20L10%2C90%20L90%2C90%20M30%2C20%20L70%2C20%20M20%2C30%20L20%2C70%20M80%2C30%20L80%2C70%20M30%2C80%20L70%2C80%20M40%2C40%20L60%2C40%20M40%2C60%20L60%2C60%20M50%2C10%20L50%2C20%20M10%2C50%20L20%2C50%20M90%2C50%20L80%2C50%20M50%2C90%20L50%2C80%22%2F%3E%3C%2Fsvg%3E')]"></div>
    </div>
    
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Logo & About -->
        <div class="text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start mb-4">
            <img src="https://res.cloudinary.com/dihkz12e6/image/upload/v1742958499/event-log-removebg-preview_rjiu0r.png" alt="Genio Logo" class="h-16 mr-3" />
            <h3 class="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              GENIO 2K25
            </h3>
          </div>
          <p class="text-gray-400 mb-4">
            Department of Computer Science and Engineering at Anna University Regional Campus, Coimbatore hosts a highly anticipated National-level Technical Symposium.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div class="text-center md:text-left">
          <h4 class="text-lg font-bold mb-6">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="#home" class="text-gray-300 hover:text-secondary transition-colors">Home</a></li>
            <li><a href="#events" class="text-gray-300 hover:text-secondary transition-colors">Events</a></li>
            <li><a href="#about" class="text-gray-300 hover:text-secondary transition-colors">About Us</a></li>
            <li><a href="#contact" class="text-gray-300 hover:text-secondary transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div class="text-center md:text-left">
          <h4 class="text-lg font-bold mb-6">Contact Us</h4>
          <div class="space-y-3">
            <div class="flex items-center justify-center md:justify-start">
              <i class="fas fa-map-marker-alt text-secondary mr-3"></i>
              <span class="text-gray-300">Anna University Regional Campus, Coimbatore</span>
            </div>
            <div class="flex items-center justify-center md:justify-start">
              <i class="fas fa-envelope text-secondary mr-3"></i>
              <a href="mailto:genio@annauniv.edu" class="text-gray-300 hover:text-secondary">genio@annauniv.edu</a>
            </div>
            <div class="flex items-center justify-center md:justify-start">
              <i class="fas fa-phone text-secondary mr-3"></i>
              <a href="tel:+919876543210" class="text-gray-300 hover:text-secondary">+91 98765 43210</a>
            </div>
          </div>
          
          <!-- Social Media -->
          <div class="mt-6 flex justify-center md:justify-start space-x-4">
            <a href="#" class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
              <i class="fab fa-facebook-f text-white"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
              <i class="fab fa-twitter text-white"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
              <i class="fab fa-instagram text-white"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
              <i class="fab fa-linkedin-in text-white"></i>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-gray-800 mt-12 pt-8 text-center">
        <p class="text-sm text-gray-400">
          &copy; {{ new Date().getFullYear() }} GENIO 2K25. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script> 