<template>
  <section id="gallery" class="py-24 relative">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-gradient-to-b from-light-100 to-light-200 dark:from-dark-200 dark:to-dark-100 z-0"></div>
    <div class="absolute inset-0 bg-mesh-pattern opacity-5 z-0"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
          Event Gallery
        </h2>
        <p class="text-lg text-dark-100 dark:text-light-200 max-w-3xl mx-auto">
          Take a glimpse at our previous successful symposiums and the engaging experiences we offer.
        </p>
      </div>
      
      <!-- Gallery grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(image, index) in galleryImages" :key="index"
             class="gallery-item group relative rounded-xl overflow-hidden hover-lift">
          <img :src="image.src" :alt="image.alt" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
            <div>
              <h3 class="text-white text-xl font-bold mb-2">{{ image.title }}</h3>
              <p class="text-light-100">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- View more button -->
      <div class="mt-10 text-center">
        <button class="shadcn-btn shadcn-btn-outline hover-lift">
          <span>View All Photos</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
      
      <!-- Testimonials Carousel -->
      <div class="mt-20">
        <h3 class="text-2xl font-display font-bold mb-8 text-center gradient-text">
          What Participants Say
        </h3>
        
        <div class="flex overflow-x-auto md:overflow-hidden gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          <div v-for="(testimonial, index) in testimonials" :key="index"
               class="glassmorphism p-6 rounded-2xl flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center hover-lift">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                <span class="text-primary-500 font-bold text-lg">{{ testimonial.initials }}</span>
              </div>
              <div>
                <h4 class="font-semibold">{{ testimonial.name }}</h4>
                <p class="text-sm text-dark-100 dark:text-light-200">{{ testimonial.role }}</p>
              </div>
            </div>
            <p class="text-dark-100 dark:text-light-200 italic">{{ testimonial.quote }}</p>
            <div class="flex mt-4">
              <div v-for="i in 5" :key="i" class="text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
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
  name: 'EventGallery',
  data() {
    return {
      galleryImages: [
        {
          src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          alt: 'Hackathon Event',
          title: 'Annual Hackathon',
          description: 'Teams collaborating to build innovative solutions'
        },
        {
          src: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          alt: 'Technical Workshop',
          title: 'AI Workshop',
          description: 'Hands-on session on machine learning algorithms'
        },
        {
          src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          alt: 'Presentation',
          title: 'Project Showcase',
          description: 'Students presenting their innovative projects'
        },
        {
          src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          alt: 'Awards Ceremony',
          title: 'Awards Ceremony',
          description: 'Recognizing outstanding achievements'
        },
        {
          src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          alt: 'Team Activity',
          title: 'Team Challenge',
          description: 'Collaborative problem-solving activities'
        },
        {
          src: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          alt: 'Networking',
          title: 'Networking Session',
          description: 'Students connecting with industry professionals'
        }
      ],
      testimonials: [
        {
          name: 'Rahul Sharma',
          initials: 'RS',
          role: 'Computer Science Student, IIT Madras',
          quote: 'GENIO was an incredible experience. The hackathon challenged me to push my boundaries and think outside the box. I met amazing people and learned so much!'
        },
        {
          name: 'Priya Patel',
          initials: 'PP',
          role: 'AI Enthusiast, VIT Vellore',
          quote: 'The workshops were incredibly informative and hands-on. The mentors were approachable and helped us understand complex concepts in a simple way.'
        },
        {
          name: 'Mohammed Khan',
          initials: 'MK',
          role: 'Cybersecurity Specialist, Amrita University',
          quote: 'As someone passionate about cybersecurity, the CTF challenge at GENIO was one of the best I\'ve participated in. Very well organized with challenging problems.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style> 