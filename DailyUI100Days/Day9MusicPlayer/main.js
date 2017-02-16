const love = document.querySelector('#love');
const loveIcon = document.querySelector('#love > i');
love.addEventListener('click', function() {
    loveIcon.classList.toggle('fa-heart-o');
    loveIcon.classList.toggle('fa-heart');    
}, false);







const play = document.querySelector('#play');
const musician = document.querySelector('.musician');
const playIcon = document.querySelector('#play > i');
play.addEventListener('click', function() {
    playIcon.classList.toggle('fa-pause-circle');
    musician.classList.toggle('playing');
}, false);