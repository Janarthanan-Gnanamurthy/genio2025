<template>
  <section id="events" class="py-16 px-4 md:px-8 relative">
    <!-- Background element -->
    <div class="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>

    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-display font-bold text-center mb-16 relative">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Genio Gallery</span>
        <div class="h-1 w-24 bg-secondary mx-auto mt-4"></div>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div v-for="(event, index) in events" :key="index" class="relative group overflow-hidden rounded-xl">
          <div class="relative h-80 overflow-hidden">
            <!-- Image -->
            <img :src="event.image" :alt="event.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80"></div>
            
            <!-- Content -->
            <div class="absolute inset-0 flex flex-col justify-end p-6 text-white transform transition-all duration-500">
              <h3 class="text-2xl font-bold mb-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                {{ event.title }}
              </h3>
              
              <router-link :to="event.link" class="flex items-center text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 hover:underline font-medium">
                Explore 
                <i class="fas fa-angle-right ml-2 transition-transform group-hover:translate-x-1"></i>
              </router-link>
            </div>
            
            <!-- Glowing border effect on hover -->
            <div class="absolute inset-0 border-2 border-transparent group-hover:border-primary/40 rounded-xl transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventGallery',
  data() {
    return {
      events: [
        {
          title: 'Workshop',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkVbgV6aGi82B7y9cI7G550JcFsdtcVlVmw&s',
          link: '/workshop'
        },
        {
          title: 'Technical Events',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Fs_FYn8jAf8lL2i6BVsTAm9UmUSWZ40iFg&s',
          link: '/technical'
        },
        {
          title: 'Non-Technical Events',
          image: 'https://nirmawebsite.s3.ap-south-1.amazonaws.com/wp-content/uploads/sites/44/2019/06/nutech_cl.jpg',
          link: '/non-technical'
        },
        {
          title: 'Fun Room Events',
          image: 'https://brainrichkids.com/cdn/shop/articles/chaos.and.rainbows_833x.jpg?v=1653572932',
          link: '/fun-room'
        }
      ]
    }
  }
}
</script>

<style scoped>
.bg-gradient-radial {
  background-image: radial-gradient(var(--tw-gradient-stops));
}
</style> 