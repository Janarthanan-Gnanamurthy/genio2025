<template>
  <section id="about" class="py-16 px-4 md:px-8 bg-neutral/30 relative">
    <!-- Background decorative elements -->
    <div class="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/5 blur-xl"></div>
    <div class="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-secondary/5 blur-xl"></div>
    
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-6 relative">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              About GENIO 2K25
            </span>
            <div class="h-1 w-24 bg-secondary mt-4"></div>
          </h2>
          
          <p class="text-lg mb-6">
            The Department of Computer Science and Engineering at Anna University Regional Campus, Coimbatore hosts a highly anticipated National-level Technical Symposium.
          </p>
          
          <p class="text-lg mb-6">
            GENIO 2K25 is a platform for students to showcase their technical prowess, creativity and innovation. The event features a diverse range of activities including workshops, technical presentations, coding competitions, and interactive sessions.
          </p>
          
          <p class="text-xl font-display">Celebrate innovation with Genio 2K25</p>
          
          <div class="mt-8 space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <i class="fas fa-lightbulb text-secondary"></i>
              </div>
              <span>Innovative challenges and competitions</span>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <i class="fas fa-users text-secondary"></i>
              </div>
              <span>Network with industry experts and peers</span>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <i class="fas fa-trophy text-secondary"></i>
              </div>
              <span>Exciting prizes and recognition</span>
            </div>
          </div>
        </div>
        
        <div class="order-1 md:order-2 flex justify-center items-center">
          <div class="relative w-64 h-64 md:w-80 md:h-80">
            <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-ping opacity-20"></div>
            <div class="absolute inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-ping opacity-20 animation-delay-300"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <img src="https://res.cloudinary.com/dihkz12e6/image/upload/v1742958499/event-log-removebg-preview_rjiu0r.png" 
                   alt="GENIO Logo" class="w-full h-full object-contain z-10" />
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
.animation-delay-300 {
  animation-delay: 300ms;
}
</style> 