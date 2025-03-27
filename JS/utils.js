// Function to merge Tailwind CSS classes
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Function to generate meteor animation elements
function generateMeteors(count = 20) {
  const meteors = [];
  for (let i = 0; i < count; i++) {
    const meteorStyle = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 1 + 0.6}s`
    };
    
    meteors.push(`
      <div class="meteor" style="
        top: ${meteorStyle.top};
        left: ${meteorStyle.left};
        animation-delay: ${meteorStyle.animationDelay};
        animation-duration: ${meteorStyle.animationDuration};
      "></div>
    `);
  }
  return meteors.join('');
}

// Function to create SVG wave effect
function createWavePattern(color = "#4f46e5", opacity = 0.3) {
  return `
    <div class="wave-container">
      <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="${color}" fill-opacity="${opacity}" d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,192C672,160,768,96,864,90.7C960,85,1056,139,1152,160C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  `;
}

// Function to create animated gradient background
function createAnimatedGradient(element) {
  element.classList.add('animated-gradient');
}

// Initialize the page with animations
document.addEventListener('DOMContentLoaded', () => {
  // Add meteor effect to specified elements
  const meteorContainers = document.querySelectorAll('.meteor-container');
  meteorContainers.forEach(container => {
    const count = parseInt(container.dataset.count || 20);
    container.innerHTML += generateMeteors(count);
  });

  // Add wave effect to specified elements
  const waveContainers = document.querySelectorAll('.add-wave');
  waveContainers.forEach(container => {
    const color = container.dataset.waveColor || "#4f46e5";
    const opacity = container.dataset.waveOpacity || 0.3;
    container.innerHTML += createWavePattern(color, opacity);
  });
  
  // Add animated gradients to elements with class
  const gradientElements = document.querySelectorAll('.add-gradient');
  gradientElements.forEach(createAnimatedGradient);
  
  // Add reveal animations on scroll
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  revealElements.forEach(el => observer.observe(el));
}); 