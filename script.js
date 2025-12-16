document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', () => {
    document.getElementById('navbar').style.background = window.scrollY > 50 ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.9)';
});

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); alert('Message sent! (Integrate EmailJS for production)'); e.target.reset();
});
