document.addEventListener('DOMContentLoaded', () => {
    // Flip card logic
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents triggering the ripple effect when a card is clicked
            card.classList.toggle('flipped');
        });
    });

 });