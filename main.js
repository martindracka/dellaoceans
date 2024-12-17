

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


// Audio playback functionality
let isPlaying = false;
const audio = document.getElementById('storyAudio');

function toggleAudio() {
    const playBtn = document.querySelector('.play-btn i');
    
    if (isPlaying) {
        audio.pause();
        playBtn.className = 'fas fa-play';
    } else {
        audio.play();
        playBtn.className = 'fas fa-pause';
    }
    
    isPlaying = !isPlaying;
}

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

// Observe all animated elements
document.querySelectorAll('.fade-in, .slide-up, .wave-animation').forEach((el) => {
    observer.observe(el);
});

// Dynamic wave animation for stats
const stats = document.querySelectorAll('.stat-item');
stats.forEach((stat, index) => {
    stat.style.animationDelay = `${index * 0.2}s`;
});






  document.addEventListener('DOMContentLoaded', function() {
    // Donation amount selection
    const donationButtons = document.querySelectorAll('.donation-amount');
    donationButtons.forEach(button => {
        button.addEventListener('click', function() {
            donationButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            if (this.classList.contains('custom')) {
                const amount = prompt('Enter custom amount:');
                if (amount) {
                    this.textContent = `$${amount}`;
                }
            }
        });
    });

    // Smooth scroll for navigation links
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

    // Form submission handler
    const donationForm = document.querySelector('.donation-form');
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your donation! This is a demo form.');
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior for better user experience
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('.policy-section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});


