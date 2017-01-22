const cards = document.querySelectorAll('.cards-flow div');

cards.forEach((card, index) => {
    card.addEventListener('click', function() {
        const card4 = document.querySelector('.card4');
        lastClassName = this.className;
        this.className = 'card4';
        // this.style.zIndex = 100;
        card4.className = lastClassName;
    }, false);
});

