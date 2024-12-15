

import { setupIntersectionObserver } from './js/animations.js';
import { setupSmoothScroll } from './js/navigation.js';
import { applyNow } from './js/careers.js';

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    setupIntersectionObserver();
    setupSmoothScroll();
    
    // Make applyNow available globally for the onclick handlers
    window.applyNow = applyNow;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add active class to navigation links based on scroll position
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });