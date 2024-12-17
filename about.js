function toggleAudio() {
    const audio = document.getElementById("storyAudio");
    const playButton = document.getElementById("playButton");
    const icon = playButton.querySelector("i");

    if (audio.paused) {
        audio.play();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        playButton.textContent = " Pause Audio";
        playButton.prepend(icon);
    } else {
        audio.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        playButton.textContent = " Listen to Our Story";
        playButton.prepend(icon);
    }
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