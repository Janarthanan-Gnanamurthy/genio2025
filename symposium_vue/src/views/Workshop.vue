<template>
  <div class="py-16 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Workshops</span>
        <div class="h-1 w-32 bg-secondary mx-auto mt-4"></div>
      </h1>
      
      <p class="text-center text-xl mb-12 max-w-3xl mx-auto">
        Enhance your skills and knowledge through hands-on workshops led by industry experts and academic professionals.
      </p>
      
      <!-- Timeline -->
      <div class="relative mx-auto mb-24">
        <!-- Vertical line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
        
        <!-- Workshop items -->
        <div v-for="(workshop, index) in workshops" :key="index" 
             :class="['relative flex', index % 2 === 0 ? 'flex-row-reverse' : 'flex-row', 'mb-16']">
          <!-- Content -->
          <div :class="['w-full md:w-5/12', index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8 text-left']">
            <div class="bg-neutral/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-primary/20">
              <span class="text-xs font-mono text-secondary mb-2 block">{{ workshop.date }} — {{ workshop.time }}</span>
              <h3 class="text-xl md:text-2xl font-display font-bold mb-3">{{ workshop.title }}</h3>
              <p class="text-gray-300 mb-4">{{ workshop.description }}</p>
              
              <div :class="['flex gap-3 mb-4', index % 2 === 0 ? 'justify-end' : 'justify-start']">
                <span v-for="(tag, tagIndex) in workshop.tags" :key="tagIndex" 
                      class="badge badge-sm badge-primary">{{ tag }}</span>
              </div>
              
              <div class="flex items-center space-x-3 mt-4">
                <img :src="workshop.speakerImage" :alt="workshop.speaker" class="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p class="font-bold text-white">{{ workshop.speaker }}</p>
                  <p class="text-xs text-gray-400">{{ workshop.speakerTitle }}</p>
                </div>
              </div>
              
              <button class="btn btn-primary btn-sm mt-4" @click="showWorkshopDetails(workshop)">
                Register <i class="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
          
          <!-- Circle marker -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-darkBg flex items-center justify-center">
            <i :class="['text-xs text-white', workshop.icon]"></i>
          </div>
        </div>
      </div>
      
      <!-- Workshop Details Modal -->
      <div v-if="selectedWorkshop" class="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="selectedWorkshop = null"></div>
        <div class="bg-neutral rounded-lg w-full max-w-2xl relative z-10 border border-primary/30">
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-display font-bold text-secondary">{{ selectedWorkshop.title }}</h3>
              <button class="btn btn-ghost btn-circle btn-sm" @click="selectedWorkshop = null">
                <i class="fas fa-times"></i>
              </button>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div class="flex items-center">
                <i class="fas fa-calendar text-secondary mr-2"></i>
                <span>{{ selectedWorkshop.date }}</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-clock text-secondary mr-2"></i>
                <span>{{ selectedWorkshop.time }}</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-map-marker-alt text-secondary mr-2"></i>
                <span>{{ selectedWorkshop.venue }}</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-users text-secondary mr-2"></i>
                <span>{{ selectedWorkshop.capacity }} participants</span>
              </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="mb-4">
              <h4 class="font-bold text-white mb-2">About the Workshop:</h4>
              <p>{{ selectedWorkshop.fullDescription }}</p>
            </div>
            
            <div class="mb-4">
              <h4 class="font-bold text-white mb-2">Prerequisites:</h4>
              <ul class="list-disc pl-5 space-y-1">
                <li v-for="(prereq, idx) in selectedWorkshop.prerequisites" :key="idx">{{ prereq }}</li>
              </ul>
            </div>
            
            <div class="mb-4">
              <h4 class="font-bold text-white mb-2">What You'll Learn:</h4>
              <ul class="list-disc pl-5 space-y-1">
                <li v-for="(point, idx) in selectedWorkshop.learningOutcomes" :key="idx">{{ point }}</li>
              </ul>
            </div>
            
            <div class="mb-6">
              <h4 class="font-bold text-white mb-2">About the Speaker:</h4>
              <div class="flex items-start space-x-4">
                <img :src="selectedWorkshop.speakerImage" :alt="selectedWorkshop.speaker" class="w-16 h-16 rounded-full object-cover" />
                <div>
                  <p class="font-bold text-white">{{ selectedWorkshop.speaker }}</p>
                  <p class="text-sm text-gray-400">{{ selectedWorkshop.speakerTitle }}</p>
                  <p class="mt-2 text-sm">{{ selectedWorkshop.speakerBio }}</p>
                </div>
              </div>
            </div>
            
            <form @submit.prevent="registerForWorkshop" class="space-y-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-gray-300">Full Name</span>
                </label>
                <input type="text" placeholder="Your name" class="input input-bordered w-full" v-model="registrationForm.name" required />
              </div>
              
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-gray-300">Email</span>
                </label>
                <input type="email" placeholder="Your email" class="input input-bordered w-full" v-model="registrationForm.email" required />
              </div>
              
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-gray-300">University/Institution</span>
                </label>
                <input type="text" placeholder="Your institution" class="input input-bordered w-full" v-model="registrationForm.institution" required />
              </div>
              
              <div class="flex justify-end">
                <button type="submit" class="btn btn-primary">
                  Register Now <i class="fas fa-check ml-2"></i>
                </button>
              </div>
            </form>
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
  name: 'Workshop',
  data() {
    return {
      selectedWorkshop: null,
      registrationForm: {
        name: '',
        email: '',
        institution: ''
      },
      workshops: [
        {
          title: 'Machine Learning with Python',
          date: 'April 21, 2025',
          time: '9:00 AM - 12:30 PM',
          venue: 'Main Auditorium',
          capacity: 150,
          description: 'An intensive workshop on building and deploying machine learning models using Python and popular libraries.',
          fullDescription: 'This workshop will cover the fundamentals of machine learning, from data preprocessing to model evaluation. You will learn how to implement various ML algorithms using Python libraries like scikit-learn and TensorFlow. By the end of the workshop, you will be able to build and deploy a complete machine learning model for classification and regression tasks.',
          prerequisites: [
            'Basic knowledge of Python programming',
            'Understanding of fundamental statistics concepts',
            'Laptop with Python and required libraries installed (installation guide will be provided)'
          ],
          learningOutcomes: [
            'Understand the machine learning workflow',
            'Implement various ML algorithms for classification and regression',
            'Evaluate model performance and improve results',
            'Deploy ML models for real-world applications'
          ],
          icon: 'fas fa-brain',
          tags: ['AI', 'Python', 'Data Science'],
          speaker: 'Dr. Arjun Reddy',
          speakerTitle: 'AI Research Scientist, Google',
          speakerImage: 'https://randomuser.me/api/portraits/men/32.jpg',
          speakerBio: 'Dr. Arjun Reddy is an AI Research Scientist at Google with over 10 years of experience in machine learning and deep learning. He has published numerous papers in top-tier conferences and journals, and has developed ML models used by millions of users worldwide.'
        },
        {
          title: 'Cybersecurity Essentials',
          date: 'April 21, 2025',
          time: '2:00 PM - 5:30 PM',
          venue: 'CS Lab 1',
          capacity: 75,
          description: 'Learn practical cybersecurity techniques including ethical hacking, penetration testing, and security best practices.',
          fullDescription: 'This hands-on workshop will introduce participants to the world of cybersecurity from a practical perspective. You will learn about common security vulnerabilities, how to identify them, and methods to protect systems and data. The workshop includes live demonstrations of ethical hacking techniques and countermeasures.',
          prerequisites: [
            'Basic understanding of networking concepts',
            'Familiarity with Linux command line',
            'Laptop with Kali Linux (can be virtual machine)'
          ],
          learningOutcomes: [
            'Identify common security vulnerabilities',
            'Perform basic penetration testing',
            'Implement security best practices',
            'Understand the ethical implications of security research'
          ],
          icon: 'fas fa-shield-alt',
          tags: ['Security', 'Ethical Hacking', 'Network'],
          speaker: 'Sneha Kapoor',
          speakerTitle: 'Senior Security Engineer, Microsoft',
          speakerImage: 'https://randomuser.me/api/portraits/women/44.jpg',
          speakerBio: 'Sneha Kapoor is a Senior Security Engineer at Microsoft with expertise in application security, penetration testing, and threat modeling. She has helped secure numerous high-profile applications and has spoken at major security conferences worldwide.'
        },
        {
          title: 'Web3 and Blockchain Development',
          date: 'April 22, 2025',
          time: '9:00 AM - 1:00 PM',
          venue: 'Innovation Lab',
          capacity: 60,
          description: 'Explore the fundamentals of blockchain technology and learn to build decentralized applications (dApps).',
          fullDescription: 'This comprehensive workshop will cover both the theoretical foundations of blockchain technology and practical development skills. You will learn about smart contracts, decentralized applications, and the Ethereum ecosystem. Through guided exercises, you will build your own simple dApp and deploy it to a test network.',
          prerequisites: [
            'Experience with JavaScript/TypeScript',
            'Understanding of web development concepts',
            'Laptop with Node.js environment set up'
          ],
          learningOutcomes: [
            'Understand blockchain fundamentals and architecture',
            'Develop and deploy smart contracts using Solidity',
            'Build front-end interfaces for blockchain applications',
            'Integrate Web3.js with modern front-end frameworks'
          ],
          icon: 'fas fa-link',
          tags: ['Blockchain', 'Ethereum', 'Smart Contracts'],
          speaker: 'Vikram Singh',
          speakerTitle: 'Blockchain Developer, Ethereum Foundation',
          speakerImage: 'https://randomuser.me/api/portraits/men/15.jpg',
          speakerBio: 'Vikram Singh is a Blockchain Developer at the Ethereum Foundation who specializes in smart contract development and decentralized applications. He has contributed to major DeFi projects and is an active educator in the blockchain space.'
        },
        {
          title: 'Cloud Computing with AWS',
          date: 'April 22, 2025',
          time: '2:30 PM - 6:00 PM',
          venue: 'CS Lab 2',
          capacity: 80,
          description: 'Learn to architect, deploy, and manage applications in the cloud using Amazon Web Services.',
          fullDescription: 'This workshop will introduce participants to cloud computing concepts and AWS services. You will learn how to design scalable, high-available, and fault-tolerant systems using various AWS services. The workshop includes hands-on labs where you will deploy a complete application stack to the cloud.',
          prerequisites: [
            'Basic understanding of networking and servers',
            'Familiarity with Linux operating system',
            'AWS free tier account (instructions will be provided)'
          ],
          learningOutcomes: [
            'Understand core AWS services and their use cases',
            'Design and implement cloud architecture patterns',
            'Deploy applications to AWS using best practices',
            'Implement security and cost optimization strategies'
          ],
          icon: 'fas fa-cloud',
          tags: ['AWS', 'Cloud', 'DevOps'],
          speaker: 'Ramesh Kumar',
          speakerTitle: 'Solutions Architect, Amazon Web Services',
          speakerImage: 'https://randomuser.me/api/portraits/men/67.jpg',
          speakerBio: 'Ramesh Kumar is a Solutions Architect at AWS with extensive experience helping organizations design and implement cloud solutions. He is an AWS Certified Solutions Architect - Professional and has helped hundreds of customers migrate to and optimize their workloads in the cloud.'
        },
        {
          title: 'IoT Development Workshop',
          date: 'April 23, 2025',
          time: '10:00 AM - 2:00 PM',
          venue: 'Electronics Lab',
          capacity: 40,
          description: 'Build smart, connected devices using Arduino, Raspberry Pi, and various sensors in this hands-on IoT workshop.',
          fullDescription: 'This practical workshop will teach you how to build Internet of Things (IoT) projects from scratch. You will learn to connect sensors, process data, and control devices remotely. The workshop includes a complete project where you will build a smart environmental monitoring system that can be accessed over the internet.',
          prerequisites: [
            'Basic programming knowledge (preferably Python or C)',
            'Basic understanding of electronics (optional)',
            'Laptop with Arduino IDE and Python installed'
          ],
          learningOutcomes: [
            'Set up and program microcontrollers for IoT applications',
            'Connect and use various sensors and actuators',
            'Implement wireless communication between devices',
            'Create web interfaces to monitor and control IoT devices'
          ],
          icon: 'fas fa-microchip',
          tags: ['IoT', 'Hardware', 'Embedded Systems'],
          speaker: 'Priya Sharma',
          speakerTitle: 'IoT Engineer, Intel',
          speakerImage: 'https://randomuser.me/api/portraits/women/28.jpg',
          speakerBio: 'Priya Sharma is an IoT Engineer at Intel who specializes in embedded systems and connected devices. She has designed IoT solutions for smart homes, industrial automation, and healthcare applications. Priya is also the author of "Practical IoT Projects," a popular book for beginners.'
        }
      ]
    }
  },
  methods: {
    showWorkshopDetails(workshop) {
      this.selectedWorkshop = workshop;
      this.registrationForm = {
        name: '',
        email: '',
        institution: ''
      };
    },
    registerForWorkshop() {
      // This would typically connect to a registration system
      alert(`Thank you for registering for "${this.selectedWorkshop.title}"! A confirmation email will be sent to ${this.registrationForm.email}.`);
      this.selectedWorkshop = null;
    }
  }
}
</script> 