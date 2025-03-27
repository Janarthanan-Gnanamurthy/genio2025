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
          title: 'IPL Auction',
          image: 'https://cdn.pixabay.com/photo/2017/01/10/14/48/old-1969568_1280.jpg',
          description: 'Experience the thrill of IPL auction by strategically bidding for players to create your dream cricket team.',
          fullDescription: 'Simulate the IPL auction experience where participants have a limited budget to bid and build their dream cricket team. Test your cricket knowledge, strategic thinking, and resource management skills in this exciting event.',
          rules: [
            'Team size: 2-3 members',
            'Fixed budget allocation per team',
            'Must select a balanced team of batsmen, bowlers, all-rounders, and wicket-keepers',
            'Auction will follow IPL auction format with base prices',
            'Teams will compete in a virtual tournament after player selection'
          ],
          coordinators: [
            { name: 'Santhya S', phone: '8015842650' },
            { name: 'SuryaPrakash', phone: '9543457446' },
            { name: 'Lakshana', phone: '7695819390' },
            { name: 'Rohit A', phone: '9488382326' }
          ]
        },
        {
          title: 'Photography',
          image: 'https://cdn.pixabay.com/photo/2014/10/30/17/32/camera-509526_1280.jpg',
          description: 'Showcase your photography skills with creative and impactful images.',
          fullDescription: 'Capture the essence of the symposium through your lens. This competition challenges photographers to document the events, people, and atmosphere of GENIO 2.0 in creative and compelling ways.',
          rules: [
            'Individual participation',
            'Both DSLR and smartphone photography categories available',
            'Photos must be taken during the symposium',
            'Basic editing allowed, no heavy manipulation',
            'Photos will be judged on creativity, composition, and storytelling'
          ],
          coordinators: [
            { name: 'Madesh K', phone: '8438508690' },
            { name: 'Vedhavan V', phone: '7200668090' },
            { name: 'Puvanesh', phone: '9342371737' }
          ]
        },
        {
          title: 'Treasure Hunt',
          image: 'https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg',
          description: 'Navigate through a series of clues and challenges to find hidden treasures.',
          fullDescription: 'Embark on an adventurous journey around the campus, solving cryptic clues, riddles and challenges to find hidden treasures. Test your problem-solving skills, teamwork and quick thinking in this thrilling hunt.',
          rules: [
            'Team size: 3-4 members',
            'Time limit: 2 hours',
            'Teams must stay together during the hunt',
            'Using internet for solving clues is allowed',
            'First team to find all treasures wins'
          ],
          coordinators: [
            { name: 'Entharasu K', phone: '9361876797' },
            { name: 'Deepa S', phone: '7418218985' },
            { name: 'Pramothini', phone: '9025779943' }
          ]
        },
        {
          title: 'Anime and Marvel Trivia',
          image: 'https://cdn.pixabay.com/photo/2017/03/30/09/16/debate-2187444_1280.jpg',
          description: 'Test your knowledge of anime and Marvel universe in this exciting trivia competition.',
          fullDescription: 'Are you an anime or Marvel superfan? Prove your knowledge in this comprehensive trivia competition covering everything from classic anime series to the latest Marvel blockbusters.',
          rules: [
            'Team size: 2-3 members',
            'Multiple rounds covering both anime and Marvel content',
            'Questions range from easy to expert-level',
            'Final round will be rapid-fire',
            'Tie-breaker questions prepared in case of equal scores'
          ],
          coordinators: [
            { name: 'Sridhar S', phone: '8300003849' },
            { name: 'Ramasamy B', phone: '9100078887' },
            { name: 'Preethi', phone: '9942881139' },
            { name: 'Avinash', phone: '9360025428' }
          ]
        },
        {
          title: 'Crime Detection',
          image: 'https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png',
          description: 'Solve mysteries and criminal cases using deductive reasoning and detective skills.',
          fullDescription: 'Channel your inner Sherlock Holmes in this interactive crime-solving event. Teams will be presented with fictional crime scenarios and must gather clues, interview suspects, and solve the case before time runs out.',
          rules: [
            'Team size: 3-4 members',
            'Multiple crime scenarios of increasing complexity',
            'Time limit: 45 minutes per case',
            'Teams must document their investigative process',
            'Points awarded for correct solutions and investigative methods'
          ],
          coordinators: [
            { name: 'Apsara', phone: '9342716408' },
            { name: 'Honey Priya Dharshini V', phone: '8838012447' },
            { name: 'Gowtham', phone: '6374448526' },
            { name: 'Deepa', phone: '9597492370' }
          ]
        },
        {
          title: 'Meme Creation',
          image: 'https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg',
          description: 'Create hilarious and relatable tech and college-themed memes to entertain and engage.',
          fullDescription: 'Put your creativity and humor to the test in this meme creation competition. Create original memes related to technology, college life, or the symposium itself that resonate with your peers and make them laugh.',
          rules: [
            'Individual or team of 2 participants',
            'Memes must be original and created during the event',
            'Theme will be announced at the start',
            'Appropriate content guidelines must be followed',
            'Judging based on humor, creativity, and relevance'
          ],
          coordinators: [
            { name: 'Janet', phone: '7397081369' },
            { name: 'Kabish D', phone: '7418836307' },
            { name: 'Subash', phone: '8148407557' },
            { name: 'Sreedharshni', phone: '8248210862' }
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