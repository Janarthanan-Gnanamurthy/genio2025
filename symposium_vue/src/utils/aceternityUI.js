// Aceternity UI utilities for Vue.js

// Function to create floating effect for 3D cards
export function useFloatingEffect(element, options = {}) {
  if (!element) return;
  
  const config = {
    rotationIntensity: 10, // Higher values create more rotation
    scale: 1.02,
    resetOnLeave: true,
    ...options
  };
  
  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const posX = e.clientX - centerX;
    const posY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position
    const rotateY = (posX / (rect.width / 2)) * config.rotationIntensity;
    const rotateX = -((posY / (rect.height / 2)) * config.rotationIntensity);
    
    // Apply transform
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${config.scale}, ${config.scale}, ${config.scale})`;
  };
  
  const resetTransform = () => {
    if (config.resetOnLeave) {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };
  
  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', resetTransform);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', resetTransform);
  };
}

// Function to generate meteor animation elements
export function createMeteorEffect(container, options = {}) {
  const config = {
    count: 20,
    speed: 1,
    size: { min: 1, max: 3 },
    ...options
  };
  
  for (let i = 0; i < config.count; i++) {
    const meteor = document.createElement('div');
    
    // Set basic styles
    meteor.style.position = 'absolute';
    meteor.style.width = `${Math.random() * (config.size.max - config.size.min) + config.size.min}px`;
    meteor.style.height = meteor.style.width;
    meteor.style.backgroundColor = 'white';
    meteor.style.borderRadius = '50%';
    meteor.style.boxShadow = '0 0 10px 2px #8a2be2';
    meteor.style.top = `${Math.random() * 100}%`;
    meteor.style.left = `${Math.random() * 100}%`;
    
    // Set animation
    meteor.style.animation = `meteor ${Math.random() * 2 + 3 / config.speed}s linear infinite`;
    meteor.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(meteor);
  }
}

// Function to create sparkle effect
export function createSparkleEffect(container, options = {}) {
  const config = {
    count: 15,
    size: { min: 3, max: 8 },
    colors: ['#ffffff', '#d7a6ff', '#00ff99'],
    ...options
  };
  
  for (let i = 0; i < config.count; i++) {
    const sparkle = document.createElement('div');
    
    // Set basic styles
    sparkle.style.position = 'absolute';
    sparkle.style.width = `${Math.random() * (config.size.max - config.size.min) + config.size.min}px`;
    sparkle.style.height = sparkle.style.width;
    sparkle.style.backgroundColor = config.colors[Math.floor(Math.random() * config.colors.length)];
    sparkle.style.borderRadius = '50%';
    sparkle.style.opacity = '0';
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;
    
    // Set animation
    sparkle.style.animation = `sparkle ${Math.random() * 2 + 2}s ease-in-out infinite`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(sparkle);
  }
}

// Moving gradient background effect
export function createMovingGradient(element, colors = ['#8a2be2', '#4b0082', '#6a0572', '#310242']) {
  if (!element) return;
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);
    
    element.style.background = `radial-gradient(
      circle at ${x}% ${y}%, 
      ${colors[0]}80, 
      ${colors[1]}80, 
      ${colors[2]}80, 
      ${colors[3]}80
    )`;
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  
  // Return cleanup function
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };
}

// Create wave pattern
export function createWavePattern(container, options = {}) {
  const config = {
    color: '#8a2be2',
    opacity: 0.3,
    ...options
  };
  
  const wave = document.createElement('div');
  wave.classList.add('wave-container');
  wave.innerHTML = `
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="${config.color}" fill-opacity="${config.opacity}" 
        d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,192C672,160,768,96,864,90.7C960,85,1056,139,1152,160C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
      </path>
    </svg>
  `;
  
  // Set styles for wave container
  wave.style.position = 'absolute';
  wave.style.bottom = '0';
  wave.style.left = '0';
  wave.style.width = '100%';
  wave.style.overflow = 'hidden';
  wave.style.lineHeight = '0';
  wave.style.zIndex = '1';
  
  // Add wave to container
  container.appendChild(wave);
} 