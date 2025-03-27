<template>
  <div class="py-16 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-12">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Non-Technical Events</span>
        <div class="h-1 w-32 bg-secondary mx-auto mt-4"></div>
      </h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div v-for="(event, index) in nonTechnicalEvents" :key="index" 
             class="card bg-neutral/40 backdrop-blur-sm shadow-xl overflow-hidden group hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border border-primary/10 hover:border-primary/30">
          <figure class="relative h-56 overflow-hidden">
            <img :src="event.image" :alt="event.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral via-neutral/50 to-transparent opacity-70"></div>
          </figure>
          <div class="card-body">
            <h2 class="card-title text-secondary font-display">{{ event.title }}</h2>
            <p class="text-gray-300 mb-4">{{ event.description }}</p>
            <div class="card-actions">
              <button class="btn btn-primary btn-sm" @click="showEventDetails(event)">
                Learn More <i class="fas fa-angle-right ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Modal for event details -->
      <div v-if="selectedEvent" class="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="selectedEvent = null"></div>
        <div class="bg-neutral rounded-lg w-full max-w-2xl relative z-10 border border-primary/30">
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-display font-bold text-secondary">{{ selectedEvent.title }}</h3>
              <button class="btn btn-ghost btn-circle btn-sm" @click="selectedEvent = null">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="divider"></div>
            <p class="mb-4">{{ selectedEvent.fullDescription }}</p>
            
            <h4 class="font-bold text-white mb-2">Rules:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
              <li v-for="(rule, idx) in selectedEvent.rules" :key="idx">{{ rule }}</li>
            </ul>
            
            <h4 class="font-bold text-white mb-2">Coordinators:</h4>
            <div class="flex flex-wrap gap-4 mb-4">
              <div v-for="(coord, idx) in selectedEvent.coordinators" :key="idx" class="flex items-center space-x-2">
                <div class="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                  <i class="fas fa-user text-secondary"></i>
                </div>
                <span>{{ coord.name }} ({{ coord.phone }})</span>
              </div>
            </div>
            
            <div class="flex justify-end mt-6">
              <button class="btn btn-primary" @click="registerForEvent">
                Register for Event <i class="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-8">
        <router-link to="/" class="btn btn-outline btn-secondary">
          <i class="fas fa-arrow-left mr-2"></i> Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NonTechnicalEvents',
  data() {
    return {
      selectedEvent: null,
      nonTechnicalEvents: [
        {
          title: 'Treasure Hunt',
          image: 'https://cdn.pixabay.com/photo/2017/01/10/14/48/old-1969568_1280.jpg',
          description: 'Navigate through campus to find clues and solve puzzles in this exciting treasure hunt adventure.',
          fullDescription: 'Embark on an adventurous journey around the campus, solving cryptic clues, riddles and challenges to find hidden treasures. Test your problem-solving skills, teamwork and quick thinking in this thrilling hunt.',
          rules: [
            'Team size: 3-4 members',
            'Time limit: 2 hours',
            'Teams must stay together during the hunt',
            'Using internet for solving clues is allowed',
            'First team to find all treasures wins'
          ],
          coordinators: [
            { name: 'Deepak S', phone: '9876543230' },
            { name: 'Ananya P', phone: '9876543231' }
          ]
        },
        {
          title: 'Tech Quiz',
          image: 'https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg',
          description: 'Test your knowledge of technology, gadgets, programming languages, and tech history.',
          fullDescription: 'A competitive quiz that tests participants\' knowledge of technology trends, gadgets, programming languages, tech history, and current affairs in the tech world. Multiple rounds with increasing difficulty will challenge even the most tech-savvy participants.',
          rules: [
            'Team size: 2 members',
            'Multiple rounds with varying formats',
            'Preliminary written round followed by on-stage finals',
            'Use of electronic devices strictly prohibited',
            'Quiz master\'s decision is final'
          ],
          coordinators: [
            { name: 'Varun D', phone: '9876543232' },
            { name: 'Reshma K', phone: '9876543233' }
          ]
        },
        {
          title: 'Photography Contest',
          image: 'https://cdn.pixabay.com/photo/2014/10/30/17/32/camera-509526_1280.jpg',
          description: 'Capture the essence of technology and innovation through your lens.',
          fullDescription: 'Showcase your photography skills by capturing images that represent technology, innovation, or digital transformation. Photos will be judged on creativity, composition, technical skill, and relevance to the theme.',
          rules: [
            'Individual participation',
            'Theme: "Technology & Innovation"',
            'Maximum 3 entries per participant',
            'Basic editing allowed, but no heavy manipulation',
            'Submission deadline: April 18, 2025'
          ],
          coordinators: [
            { name: 'Nikhil M', phone: '9876543234' },
            { name: 'Tanvi B', phone: '9876543235' }
          ]
        },
        {
          title: 'Tech Debate',
          image: 'https://cdn.pixabay.com/photo/2017/03/30/09/16/debate-2187444_1280.jpg',
          description: 'Engage in structured arguments about controversial technology topics and ethical dilemmas.',
          fullDescription: 'Debate on pressing technological issues and ethical dilemmas of our time. Participants will be assigned positions to argue for or against topics such as AI ethics, privacy concerns, digital rights, and more.',
          rules: [
            'Team size: 2 members',
            'Debate format: Opening statements (3 min), Rebuttals (2 min), Closing arguments (2 min)',
            'Topics will be announced 30 minutes before the debate',
            'Judging based on content, delivery, and rebuttals',
            'Professional conduct expected at all times'
          ],
          coordinators: [
            { name: 'Rohit J', phone: '9876543236' },
            { name: 'Kavita S', phone: '9876543237' }
          ]
        },
        {
          title: 'Tech Ad-Mad Show',
          image: 'https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png',
          description: 'Create and perform creative advertisements for fictional tech products.',
          fullDescription: 'Let your creativity shine by creating and performing an advertisement for a fictional tech product or service. Teams will be judged on creativity, humor, presentation skills, and the innovation of the fictional product concept.',
          rules: [
            'Team size: 3-5 members',
            'Performance time: 3-5 minutes',
            'Props and costumes allowed',
            'Product must be fictional and technology-related',
            'Pre-registration required with product concept'
          ],
          coordinators: [
            { name: 'Sanjay V', phone: '9876543238' },
            { name: 'Neha R', phone: '9876543239' }
          ]
        },
        {
          title: 'Gaming Tournament',
          image: 'https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg',
          description: 'Compete in popular esports titles including Valorant, CS:GO, and FIFA.',
          fullDescription: 'Battle it out in this exciting gaming tournament featuring popular esports titles. Show off your skills, strategy, and teamwork to claim the gaming champion title of GENIO 2K25.',
          rules: [
            'Games: Valorant, CS:GO, FIFA 25',
            'Tournament structure depends on number of registrations',
            'Participants must bring their own peripherals',
            'Standard tournament rules apply for each game',
            'Anti-cheating measures will be enforced'
          ],
          coordinators: [
            { name: 'Akash P', phone: '9876543240' },
            { name: 'Shreya G', phone: '9876543241' }
          ]
        }
      ]
    }
  },
  methods: {
    showEventDetails(event) {
      this.selectedEvent = event;
    },
    registerForEvent() {
      // This would typically connect to a registration system
      alert(`Registration for ${this.selectedEvent.title} will be available soon!`);
      this.selectedEvent = null;
    }
  }
}
</script> 