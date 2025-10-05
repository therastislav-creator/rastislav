// Smooth scroll za navigacione linkove
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Dodajemo padding za fixed navigaciju
document.addEventListener('DOMContentLoaded', function() {
    const navHeight = document.querySelector('.navbar').offsetHeight;
    document.documentElement.style.setProperty('--nav-height', navHeight + 'px');
    
    // Dodajemo margin top sekcijama da ne bi bile iza navigacije
    document.querySelectorAll('section').forEach(section => {
        section.style.scrollMarginTop = navHeight + 'px';
    });
});

// Simple FAQ toggle (možete dodati kasnije)
document.querySelectorAll('.faq-item h4').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

// Inicijalno sakrijemo FAQ odgovore
document.querySelectorAll('.faq-item p').forEach(answer => {
    answer.style.display = 'none';
});