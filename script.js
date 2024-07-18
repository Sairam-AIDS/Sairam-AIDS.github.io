document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('register-button');

    registerButton.addEventListener('click', () => {
        alert('Registration form coming soon!');
    });

    particlesJS.load('particles-js', 'particle.json', function() {
        console.log('particles.js config loaded');
    });
});
