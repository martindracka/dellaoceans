document.addEventListener('DOMContentLoaded', () => {
    const socialCards = document.querySelectorAll('.social-card');
    const socialPreview = document.getElementById('social-preview');
    const previewDetails = document.getElementById('preview-details');
    const closeBtn = document.querySelector('.close-btn');

    const socialContent = {
        instagram: {
            title: "Join Our Instagram Community",
            content: `
                
                <h2>@della.oceans</h2>
                <p>Follow our daily journey as we work to protect our oceans from plastic pollution. See the impact of our cleanup efforts and learn how you can contribute to cleaner oceans.</p>
                <div class="stats">
                    <div>📸 Daily Updates</div>
                    <div>🌊 Ocean Facts</div>
                    <div>🤝 Community Events</div>
                </div>
                <a href="https://instagram.com" target="_blank" class="social-link">Visit Our Instagram</a>
            `
        },
        twitter: {
            title: "Follow Us on Twitter",
            content: `
                
                <h2>@DellaOceans</h2>
                <p>Get real-time updates on our ocean conservation efforts, participate in discussions, and stay informed about upcoming cleanup events.</p>
                <div class="stats">
                    <div>🌊 Live Updates</div>
                    <div>📢 Conservation News</div>
                    <div>🤝 Community Engagement</div>
                </div>
                <a href="https://twitter.com" target="_blank" class="social-link">Visit Our Twitter</a>
            `
        },
        facebook: {
            title: "Connect on Facebook",
            content: `
                
                <h2>Della Oceans Community</h2>
                <p>Join our growing community of ocean advocates. Participate in events, share your stories, and connect with fellow ocean lovers.</p>
                <div class="stats">
                    <div>👥 Community Events</div>
                    <div>📸 Photo Galleries</div>
                    <div>🎯 Impact Stories</div>
                </div>
                <a href="https://facebook.com" target="_blank" class="social-link">Visit Our Facebook</a>
            `
        },
        linkedin: {
            title: "Professional Network",
            content: `
                
                <h2>Della Oceans</h2>
                <p>Connect with our professional network, learn about partnership opportunities, and stay updated on our corporate initiatives for ocean conservation.</p>
                <div class="stats">
                    <div>💼 Business Updates</div>
                    <div>🤝 Partnerships</div>
                    <div>📊 Impact Reports</div>
                </div>
                <a href="https://linkedin.com" target="_blank" class="social-link">Visit Our LinkedIn</a>
            `
        }
    };

    socialCards.forEach(card => {
        card.addEventListener('click', () => {
            const platform = card.dataset.platform;
            const content = socialContent[platform];
            
            previewDetails.innerHTML = `
                <h3>${content.title}</h3>
                ${content.content}
            `;
            
            socialPreview.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        socialPreview.style.display = 'none';
    });

    socialPreview.addEventListener('click', (e) => {
        if (e.target === socialPreview) {
            socialPreview.style.display = 'none';
        }
    });
});

export const newsData = {
    thisWeek: [
        {
            date: '2024-02-20',
            title: 'Beach Cleanup Drive',
            description: 'Join us this Saturday for our weekly beach cleanup initiative.',
            image: 'https://source.unsplash.com/800x400/?beach-cleanup'
        },
        {
            date: '2024-02-22',
            title: 'Ocean Education Workshop',
            description: 'Learn about marine ecosystems and their protection.',
            image: 'https://source.unsplash.com/800x400/?ocean-education'
        }
    ],
    thisMonth: [
        {
            date: '2024-03-05',
            title: 'World Ocean Day Preparation',
            description: 'Planning meeting for upcoming World Ocean Day celebrations.',
            image: 'https://source.unsplash.com/800x400/?ocean-celebration'
        },
        {
            date: '2024-03-15',
            title: 'Marine Life Conservation Summit',
            description: 'Annual gathering of ocean conservation experts and advocates.',
            image: 'IMG/join.jpg'
        }
    ]
};

export function createNewsElement(news) {
    return `
        <div class="news-card" style="background-image: url('${news.image}')">
            <div class="news-content">
                <span class="news-date">${news.date}</span>
                <h3>${news.title}</h3>
                <p>${news.description}</p>
            </div>
        </div>
    `;
}