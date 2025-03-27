<template>
  <div class="py-16 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-12">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Technical Events</span>
        <div class="h-1 w-32 bg-secondary mx-auto mt-4"></div>
      </h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div v-for="(event, index) in technicalEvents" :key="index" 
             class="card bg-neutral/40 backdrop-blur-sm shadow-xl overflow-hidden group hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border border-primary/10 hover:border-primary/30">
          <figure class="relative h-56 overflow-hidden">
            <img :src="event.image" :alt="event.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral via-neutral/50 to-transparent opacity-70"></div>
          </figure>
          <div class="card-body">
            <h2 class="card-title text-secondary font-display">{{ event.title }}</h2>
            <p class="text-gray-300 mb-4">{{ event.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="(skill, idx) in event.skills" :key="idx" 
                    class="badge badge-sm badge-primary badge-outline">{{ skill }}</span>
            </div>
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
  name: 'TechnicalEvents',
  data() {
    return {
      selectedEvent: null,
      technicalEvents: [
        {
          title: 'Paper Presentation',
          image: 'https://rvrjcce.ac.in/ece/youthfest2k17/CivilFest2K17/images/PaperPresentation1.jpg',
          description: 'Present your innovative ideas and research in various domains of computer science and technology.',
          fullDescription: 'Paper presentation is an opportunity for students to present their innovative ideas, research work and technical solutions. This event aims to enhance the research orientation and presentation skills of participants.',
          skills: ['Research', 'Presentation', 'Technical Writing'],
          rules: [
            'Team size: Maximum 2 members',
            'Time limit: 8 minutes presentation + 2 minutes Q&A',
            'Presentation must be in PowerPoint format',
            'Abstract submission deadline: April 15, 2025',
            'Topics should relate to emerging technologies in Computer Science'
          ],
          coordinators: [
            { name: 'Rishi Kumar', phone: '9876543210' },
            { name: 'Priya S', phone: '9876543211' }
          ]
        },
        {
          title: 'Relay Coding & Blind Coding',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VxNI60ULI3T_SyrQFCYNZgIrmQcmY0iOVA&s',
          description: 'Test your programming skills with time constraints and challenging problems.',
          fullDescription: 'Relay coding is a team event where participants take turns to code a solution within strict time limits. Blind coding challenges participants to write code without being able to see the output until the end.',
          skills: ['Programming', 'Problem Solving', 'Time Management'],
          rules: [
            'Relay Coding: Teams of 3 members, each member codes for 10 minutes',
            'Blind Coding: Individual participation, no testing until submission',
            'Languages allowed: C, C++, Java, Python',
            'Internet access is not allowed during the competition',
            'Judges decision will be final'
          ],
          coordinators: [
            { name: 'Karthik R', phone: '9876543212' },
            { name: 'Sneha M', phone: '9876543213' }
          ]
        },
        {
          title: 'Password Cracking',
          image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxUPEBAQFRAQFRAWFRUVEA8VEBUVFRUWFxUVFhUYHSggGholHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHSUtLS0tLSstLS0tLS0vMCstLS0tLS0tLS0tKy0tKystLSstLy0tLS0tLS0rLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAABAgADBAUGBwj/xABEEAACAQIEAQgGCAUDAgcAAAABAgADEQQSITEFEyJBUWFxgZEGMnKhscEUI0JSktHS8AcVVJOiM2LhU5QWJDRDRGOC',
          description: 'Solve cryptographic challenges and break complex encryption algorithms.',
          fullDescription: 'This competition tests your cryptographic skills and understanding of security principles. Participants will need to solve various cryptographic puzzles and break encrypted messages.',
          skills: ['Cryptography', 'Security', 'Problem Solving'],
          rules: [
            'Individual participation only',
            'Multiple rounds with increasing difficulty',
            'Basic understanding of cryptographic algorithms required',
            'Time-based scoring system',
            'Bring your own laptop with necessary tools installed'
          ],
          coordinators: [
            { name: 'Vikram J', phone: '9876543214' },
            { name: 'Aisha T', phone: '9876543215' }
          ]
        },
        {
          title: 'Bug Hunting Challenge',
          image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
          description: 'Find and fix bugs in given code snippets and applications within time constraints.',
          fullDescription: 'This challenge focuses on your debugging skills. Participants will be presented with faulty code or applications and need to identify and fix the bugs to make them work correctly.',
          skills: ['Debugging', 'Code Analysis', 'Problem Solving'],
          rules: [
            'Individual or team of 2 participants',
            'Three rounds of increasing complexity',
            'Languages: Java, Python, JavaScript',
            'Limited time for each debugging task',
            'Solutions will be judged on correctness and efficiency'
          ],
          coordinators: [
            { name: 'Rahul M', phone: '9876543216' },
            { name: 'Divya P', phone: '9876543217' }
          ]
        },
        {
          title: 'Hackathon',
          image: 'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg',
          description: 'Build innovative solutions for real-world problems in a 24-hour coding marathon.',
          fullDescription: 'The flagship event of GENIO 2K25, this 24-hour hackathon challenges teams to develop innovative solutions for real-world problems. Present your working prototype and pitch your idea to industry experts.',
          skills: ['Development', 'Innovation', 'Teamwork'],
          rules: [
            'Team size: 3-4 members',
            'Duration: 24 hours',
            'Problem statements will be released at the start',
            'Evaluation based on innovation, functionality, and presentation',
            'Teams need to bring their own hardware and development tools'
          ],
          coordinators: [
            { name: 'Arjun K', phone: '9876543218' },
            { name: 'Meera L', phone: '9876543219' }
          ]
        },
        {
          title: 'Code Golf',
          image: 'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png',
          description: 'Solve programming challenges with the shortest code possible.',
          fullDescription: 'Code Golf challenges participants to solve programming problems with the smallest code size possible. Efficiency in terms of code length (characters) is more important than execution speed.',
          skills: ['Programming', 'Optimization', 'Logic'],
          rules: [
            'Individual participation',
            'Solutions are ranked by code length (characters)',
            'All solutions must correctly solve the given problem',
            'Languages allowed: Python, JavaScript, Ruby',
            'Multiple submissions allowed, only the shortest valid solution counts'
          ],
          coordinators: [
            { name: 'Ganesh N', phone: '9876543220' },
            { name: 'Lakshmi R', phone: '9876543221' }
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