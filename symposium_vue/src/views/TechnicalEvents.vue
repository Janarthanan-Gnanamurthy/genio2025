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
            { name: 'Mridul aa', phone: '7695888103' },
            { name: 'Pooja M', phone: '9361083662' },
            { name: 'Mohammed Rizhwan', phone: '9952720810' }
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
            { name: 'Joshiga', phone: '8778957458' },
            { name: 'Mythili', phone: '6369497320' },
            { name: 'Sasikumar', phone: '9342866773' },
            { name: 'Subramaniya Siva', phone: '8825470295' }
          ]
        },
        {
          title: 'UI and UX Design',
          image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxUPEBAQFRAQFRAWFRUVEA8VEBUVFRUWFxUVFhUYHSggGholHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHSUtLS0tLSstLS0tLS0vMCstLS0tLS0tLS0tKy0tKystLSstLy0tLS0tLS0rLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAABAgADBAUGBwj/xABEEAACAQIEAQgGCAUDAgcAAAABAgADEQQSITEFEyJBUWFxgZEGMnKhscEUI0JSgtHS8AcVVJOiM2LhU5QWJDRDRGOC',
          description: 'Design user interfaces and experiences for web and mobile applications.',
          fullDescription: 'This event challenges participants to create beautiful and functional user interfaces and experiences. Showcase your creativity, design skills, and understanding of user behavior and accessibility principles.',
          skills: ['UI Design', 'UX Research', 'Prototyping'],
          rules: [
            'Team size: 1-2 members',
            'Participants must bring their own design tools/software',
            'Design brief will be provided at the start of the event',
            'Time limit: 4 hours',
            'Presentation of design decisions required'
          ],
          coordinators: [
            { name: 'Rajavaman K', phone: '6374666253' },
            { name: 'Abinaya A', phone: '6379076960' },
            { name: 'Kavya', phone: '9345648054' },
            { name: 'Akhilkarthikeyan', phone: '9363180933' }
          ]
        },
        {
          title: 'Password Cracking',
          image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxUPEBAQFRAQFRAWFRUVEA8VEBUVFRUWFxUVFhUYHSggGholHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHSUtLS0tLSstLS0tLS0vMCstLS0tLS0tLS0tKy0tKystLSstLy0tLS0tLS0rLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAABAgADBAUGBwj/xABEEAACAQIEAQgGCAUDAgcAAAABAgADEQQSITEFEyJBUWFxgZEGMnKhscEUI0JSgtHS8AcVVJOiM2LhU5QWJDRDRGOC',
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
            { name: 'Rajasree E', phone: '6383076735' },
            { name: 'Priyadharshini', phone: '7871736671' },
            { name: 'Sachin', phone: '9655370719' },
            { name: 'Madhan V', phone: '8072664400' }
          ]
        },
        {
          title: 'Animation Maker',
          image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
          description: 'Create animated content using various tools and techniques.',
          fullDescription: 'Show off your animation skills in this creative competition. Participants will create animated shorts, motion graphics, or interactive animations based on a given theme.',
          skills: ['Animation', 'Creative Design', 'Storytelling'],
          rules: [
            'Individual or team of 2 participants',
            'Animation length: 30-90 seconds',
            'Participants must bring their own animation software/tools',
            'Theme will be provided at the start of the event',
            'Judging based on creativity, technical skill, and adherence to theme'
          ],
          coordinators: [
            { name: 'Sowndaya A', phone: '6383046798' },
            { name: 'SivaPrakash S', phone: '9363440752' },
            { name: 'Ajayakumar', phone: '9363456438' },
            { name: 'Pragadesh', phone: '9994161318' }
          ]
        },
        {
          title: 'Technical Quiz',
          image: 'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png',
          description: 'Test your knowledge in various technical domains from programming to hardware.',
          fullDescription: 'Compete in this fast-paced quiz on various technical topics including programming languages, algorithms, computer hardware, networking, and technology trends.',
          skills: ['Technical Knowledge', 'Quick Thinking', 'Problem Solving'],
          rules: [
            'Team size: 2 members',
            'Multiple rounds with varying formats',
            'Topics include programming, hardware, networking, and tech trends',
            'No electronic devices allowed during the quiz',
            'Final decision rests with the quiz master'
          ],
          coordinators: [
            { name: 'Narmatha', phone: '6369359396' },
            { name: 'Thillainaragan B', phone: '9994484358' },
            { name: 'Rakshana Fathima', phone: '8838191447' },
            { name: 'Siddharth', phone: '9944650562' }
          ]
        },
        {
          title: 'AI Puzzle Solving',
          image: 'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png',
          description: 'Develop AI algorithms to solve complex puzzles and problems.',
          fullDescription: 'Design and implement AI algorithms to solve various puzzles and optimization problems. Demonstrate your understanding of artificial intelligence concepts through practical applications.',
          skills: ['AI', 'Algorithm Design', 'Problem Solving'],
          rules: [
            'Individual or team of 2 participants',
            'Multiple rounds with different puzzle types',
            'Participants must bring their own development environment',
            'Languages allowed: Python, Java, C++',
            'Solutions will be judged on effectiveness, efficiency, and innovation'
          ],
          coordinators: [
            { name: 'Dharshini', phone: '9789443458' },
            { name: 'Madhumitha', phone: '6361739963' },
            { name: 'Janarthanan', phone: '9003119904' },
            { name: 'Praveen', phone: '8610322907' }
          ]
        },
        {
          title: 'AI Jailbreak',
          image: 'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png',
          description: 'Challenge AI systems by finding creative ways to bypass their limitations.',
          fullDescription: 'This competition challenges participants to find creative ways to "jailbreak" AI systems - making them produce outputs they were designed to avoid. Demonstrate your understanding of AI limitations and prompting techniques.',
          skills: ['AI', 'Creative Thinking', 'Security'],
          rules: [
            'Individual participation',
            'Multiple AI systems to challenge',
            'Ethical guidelines must be followed',
            'Scoring based on creativity and effectiveness',
            'Detailed documentation of methods required'
          ],
          coordinators: [
            { name: 'Sachiv C', phone: '9444299374' },
            { name: 'Abinandudha', phone: '9500880409' },
            { name: 'Haridharsini', phone: '8838849924' },
            { name: 'Sowmithraa', phone: '8438364809' }
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