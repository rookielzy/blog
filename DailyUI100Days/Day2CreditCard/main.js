const cards = document.querySelectorAll('.cards-flow div');

cards.forEach((card, index) => {
    card.addEventListener('click', function() {
        this.className = 'card4';
        this.style.zIndex = 100;
        var nextBro = this.nextElementSibling;
        while (nextBro) {
            console.log(typeof nextBro.className);
            if (index > 3) {
                if (index == 5) {
                    nextBro.className = 'card1';
                    nextBro.style.zIndex = -1;
                } else {
                    nextBro.className = 'card' + (index+3); 
                }
            }
            this = nextBro;
        }
    }, false);
});