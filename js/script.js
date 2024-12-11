// Trigger fade-in effect when page is fully loaded
window.onload = () => {
    document.body.classList.add('loaded');
};


// Reveal content when it enters the viewport
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    revealElements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        }
    });
});
