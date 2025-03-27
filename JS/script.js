// Initializing modern UI components and animations
document.addEventListener('DOMContentLoaded', function() {
  // Add scroll reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  // Observe all elements with reveal-on-scroll class
  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add hover effects to buttons
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 10px 25px -5px rgba(138, 43, 226, 0.4)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });

  // Add card tilt effect
  document.querySelectorAll('.modern-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const cardRect = card.getBoundingClientRect();
      const x = e.clientX - cardRect.left;
      const y = e.clientY - cardRect.top;
      
      const centerX = cardRect.width / 2;
      const centerY = cardRect.height / 2;
      
      const rotateY = (x - centerX) / 20;
      const rotateX = (centerY - y) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
    });
  });

  // Add navbar transparency on scroll
  const header = document.querySelector('.modern-navbar');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(13, 15, 30, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
      } else {
        header.style.backgroundColor = 'rgba(13, 15, 30, 0.8)';
        header.style.backdropFilter = 'blur(10px)';
      }
    });
  }
});
