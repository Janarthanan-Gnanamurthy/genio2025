// Aceternity UI Components Implementation

// Floating 3D cards similar to Aceternity UI's bento-grid component
class FloatingCard {
  constructor(element) {
    this.element = element;
    this.shine = document.createElement('div');
    this.shine.classList.add('card-shine');
    this.element.appendChild(this.shine);
    
    this.rotateElement = this.rotateElement.bind(this);
    this.resetElement = this.resetElement.bind(this);
    
    this.element.addEventListener('mousemove', this.rotateElement);
    this.element.addEventListener('mouseleave', this.resetElement);
  }
  
  rotateElement(e) {
    const rect = this.element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    
    const angleY = ((x - midX) / midX) * 10;
    const angleX = ((y - midY) / midY) * 10;
    
    this.shine.style.opacity = '1';
    this.shine.style.background = `radial-gradient(
      circle at ${x}px ${y}px,
      rgba(255, 255, 255, 0.2),
      transparent 40%
    )`;
    
    this.element.style.transform = `perspective(1000px) rotateX(${-angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  }
  
  resetElement() {
    this.element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    this.shine.style.opacity = '0';
  }
}

// Aceternity-style moving gradient background
class MovingGradient {
  constructor(element) {
    this.element = element;
    this.element.classList.add('moving-gradient');
    
    this.handleMouseMove = this.handleMouseMove.bind(this);
    document.addEventListener('mousemove', this.handleMouseMove);
  }
  
  handleMouseMove(e) {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);
    
    this.element.style.background = `radial-gradient(circle at ${x}% ${y}%, 
      rgba(138, 43, 226, 0.8), 
      rgba(75, 0, 130, 0.8), 
      rgba(106, 5, 114, 0.8), 
      rgba(49, 2, 66, 0.8))`;
  }
}

// Aceternity-style HoverCard
class HoverCard {
  constructor(trigger, content) {
    this.trigger = trigger;
    this.content = content;
    
    this.showCard = this.showCard.bind(this);
    this.hideCard = this.hideCard.bind(this);
    
    this.trigger.addEventListener('mouseenter', this.showCard);
    this.trigger.addEventListener('mouseleave', this.hideCard);
  }
  
  showCard() {
    this.content.style.opacity = '1';
    this.content.style.transform = 'translateY(0)';
    this.content.style.pointerEvents = 'auto';
  }
  
  hideCard() {
    this.content.style.opacity = '0';
    this.content.style.transform = 'translateY(10px)';
    this.content.style.pointerEvents = 'none';
  }
}

// Sparkles effect similar to Aceternity UI
class SparklesEffect {
  constructor(container) {
    this.container = container;
    this.sparklesCount = 15;
    this.sparkles = [];
    
    this.createSparkles();
    this.animateSparkles();
  }
  
  createSparkles() {
    for (let i = 0; i < this.sparklesCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random() * 2}s`;
      sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`;
      
      this.container.appendChild(sparkle);
      this.sparkles.push(sparkle);
    }
  }
  
  animateSparkles() {
    setInterval(() => {
      this.sparkles.forEach(sparkle => {
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
      });
    }, 3000);
  }
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  // Initialize floating cards
  const floatingCards = document.querySelectorAll('.floating-card');
  floatingCards.forEach(card => new FloatingCard(card));
  
  // Initialize moving gradients
  const movingGradients = document.querySelectorAll('.moving-gradient-bg');
  movingGradients.forEach(gradient => new MovingGradient(gradient));
  
  // Initialize hover cards
  document.querySelectorAll('[data-hover-trigger]').forEach(trigger => {
    const contentId = trigger.getAttribute('data-hover-trigger');
    const content = document.getElementById(contentId);
    if (content) {
      new HoverCard(trigger, content);
    }
  });
  
  // Initialize sparkles
  const sparklesContainers = document.querySelectorAll('.sparkles-container');
  sparklesContainers.forEach(container => new SparklesEffect(container));
  
  // Add CSS for these components if not already added
  if (!document.getElementById('aceternity-styles')) {
    const style = document.createElement('style');
    style.id = 'aceternity-styles';
    style.textContent = `
      .card-shine {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        border-radius: inherit;
        transition: opacity 0.2s ease;
        pointer-events: none;
        z-index: 1;
      }
      
      .moving-gradient {
        background-size: 200% 200%;
        transition: background 0.5s ease;
      }
      
      .sparkle {
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: white;
        opacity: 0;
        animation: sparkle-fade-in-out 2s ease-in-out infinite;
      }
      
      @keyframes sparkle-fade-in-out {
        0%, 100% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
      }
      
      .floating-card {
        transform-style: preserve-3d;
        transform: perspective(1000px);
        transition: transform 0.2s ease;
      }
    `;
    
    document.head.appendChild(style);
  }
}); 