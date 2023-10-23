const hoverElement = document.getElementById('gradWrapper');


document.addEventListener('mousemove', (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;

    hoverElement.style.setProperty('background', `radial-gradient(600px at ${clientX + 'px'} ${clientY + 'px'}, rgba(234, 78, 216, 0.15), transparent 80%)`);
})

function goToLink(link) {
    window.open(link, "_blank");
}

function scrollToBottom() {
    const rightPane = document.querySelector('.rightPane');
    rightPane.scrollTop = rightPane.scrollHeight;
    rightPane.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
}

// script.js
// Feel free to add more interactivity if needed

document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector('.card-container');

    card.addEventListener('click', function() {
        card.classList.toggle('active');
    });
});
