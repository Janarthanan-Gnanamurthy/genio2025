<template>
  <div class="py-16 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Fun Room</span>
        <div class="h-1 w-32 bg-secondary mx-auto mt-4"></div>
      </h1>
      
      <p class="text-center text-xl mb-12 max-w-3xl mx-auto">
        Take a break from technical competitions and enjoy these fun activities designed to refresh your mind and spark your creativity.
      </p>
      
      <!-- Animated fun room banner -->
      <div class="relative h-64 md:h-96 rounded-xl overflow-hidden mb-16">
        <img src="https://brainrichkids.com/cdn/shop/articles/chaos.and.rainbows_833x.jpg?v=1653572932" 
             alt="Fun Room" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-neutral via-neutral/50 to-transparent opacity-80"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h2 class="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Fun-tastic Zone
          </h2>
          <p class="text-lg md:text-xl text-white max-w-2xl">
            Where technology meets entertainment. Relax, play, and recharge between events.
          </p>
        </div>
      </div>
      
      <!-- Fun Activities -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div v-for="(activity, index) in funActivities" :key="index" 
             class="card bg-neutral/40 backdrop-blur-sm shadow-xl overflow-hidden border border-primary/20 group transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20 hover:border-primary/40">
          <div class="card-body">
            <div class="text-4xl text-secondary mb-4">
              <i :class="activity.icon"></i>
            </div>
            <h3 class="card-title font-display text-white">{{ activity.title }}</h3>
            <p class="text-gray-300 mb-4">{{ activity.description }}</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline badge-secondary">{{ activity.duration }}</div>
              <div class="badge badge-outline">{{ activity.participants }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Gaming Corner -->
      <div class="mb-16">
        <h2 class="text-3xl font-display font-bold mb-8 text-center">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Gaming Corner</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-neutral/40 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
            <h3 class="text-xl font-display font-bold mb-4 text-secondary">Console Gaming</h3>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center"><i class="fas fa-gamepad text-secondary mr-2"></i> PlayStation 5</li>
              <li class="flex items-center"><i class="fas fa-gamepad text-secondary mr-2"></i> Xbox Series X</li>
              <li class="flex items-center"><i class="fas fa-gamepad text-secondary mr-2"></i> Nintendo Switch</li>
            </ul>
            <p class="text-sm text-gray-400">Popular titles including FIFA, Call of Duty, Mario Kart, and more!</p>
          </div>
          
          <div class="bg-neutral/40 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
            <h3 class="text-xl font-display font-bold mb-4 text-secondary">VR Experience</h3>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center"><i class="fas fa-vr-cardboard text-secondary mr-2"></i> Beat Saber</li>
              <li class="flex items-center"><i class="fas fa-vr-cardboard text-secondary mr-2"></i> Half-Life: Alyx</li>
              <li class="flex items-center"><i class="fas fa-vr-cardboard text-secondary mr-2"></i> Job Simulator</li>
              <li class="flex items-center"><i class="fas fa-vr-cardboard text-secondary mr-2"></i> VR Racing Simulator</li>
            </ul>
            <p class="text-sm text-gray-400">Experience cutting-edge virtual reality on Oculus Quest 2 and HTC Vive!</p>
          </div>
        </div>
      </div>
      
      <!-- Food Court -->
      <div class="bg-neutral/40 backdrop-blur-sm rounded-xl p-8 border border-primary/20 mb-12">
        <h2 class="text-3xl font-display font-bold mb-6 text-center">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Refreshment Zone</span>
        </h2>
        
        <p class="text-center mb-8">
          Recharge with delicious food and beverages available throughout the day.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div class="p-4">
            <div class="text-3xl text-secondary mb-2">
              <i class="fas fa-coffee"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">Café Corner</h3>
            <p class="text-gray-400 text-sm">Coffee, tea, cold drinks, and energy boosters</p>
          </div>
          
          <div class="p-4">
            <div class="text-3xl text-secondary mb-2">
              <i class="fas fa-pizza-slice"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">Snack Station</h3>
            <p class="text-gray-400 text-sm">Sandwiches, pizza, burgers, and quick bites</p>
          </div>
          
          <div class="p-4">
            <div class="text-3xl text-secondary mb-2">
              <i class="fas fa-ice-cream"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">Sweet Spot</h3>
            <p class="text-gray-400 text-sm">Desserts, ice cream, and sweet treats</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <router-link to="/" class="btn btn-outline btn-secondary">
          <i class="fas fa-arrow-left mr-2"></i> Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FunRoom',
  data() {
    return {
      funActivities: [
        {
          title: 'Tech Pictionary',
          icon: 'fas fa-paint-brush',
          description: 'Draw and guess tech-related terms and concepts in this digital version of the classic game.',
          duration: '30 min sessions',
          participants: 'Teams of 4-6'
        },
        {
          title: 'VR Experiences',
          icon: 'fas fa-vr-cardboard',
          description: 'Immerse yourself in virtual worlds with our cutting-edge VR setups featuring the latest games and experiences.',
          duration: '15 min sessions',
          participants: 'Individual'
        },
        {
          title: 'Tech Karaoke',
          icon: 'fas fa-microphone-alt',
          description: 'Sing your heart out with tech-themed songs and geeky classics in a fun, judgment-free zone.',
          duration: '5 min per person',
          participants: 'Individual or Duet'
        },
        {
          title: 'Retro Gaming Corner',
          icon: 'fas fa-gamepad',
          description: 'Travel back in time with classic consoles and arcade machines featuring beloved games from the past.',
          duration: 'Open all day',
          participants: '1-4 players'
        },
        {
          title: 'Tech Charades',
          icon: 'fas fa-theater-masks',
          description: 'Act out tech terms, gadgets, and famous personalities for your team to guess in this hilarious game.',
          duration: '20 min sessions',
          participants: 'Teams of 6-8'
        },
        {
          title: 'Digital Graffiti Wall',
          icon: 'fas fa-spray-can',
          description: 'Express your creativity on our digital graffiti wall using gesture-controlled virtual spray paint.',
          duration: 'Open all day',
          participants: 'Individual'
        },
        {
          title: 'Tech Escape Room',
          icon: 'fas fa-key',
          description: 'Solve puzzles and crack codes to escape from our specially designed tech-themed escape room.',
          duration: '30 min sessions',
          participants: 'Teams of 4-6'
        },
        {
          title: 'DJ Booth & Dance Floor',
          icon: 'fas fa-music',
          description: 'Take a break and groove to the beats with our student DJs spinning the latest electronic and dance tracks.',
          duration: 'Open all day',
          participants: 'Everyone'
        },
        {
          title: 'Robot Maze Race',
          icon: 'fas fa-robot',
          description: 'Program a robot to navigate through a maze in the shortest time possible.',
          duration: '15 min sessions',
          participants: 'Individual or Pairs'
        }
      ]
    }
  }
}
</script> 