document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Trigger the flip animation
            card.classList.toggle('flipped');
        });
    });
});