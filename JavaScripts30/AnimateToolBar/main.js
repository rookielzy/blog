var button = document.querySelector('.button');
var icons = document.querySelector('.icons');

button.addEventListener('click', function() {
    button.classList.toggle('active');
    icons.classList.toggle('open');
},false);

