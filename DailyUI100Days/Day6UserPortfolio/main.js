const portfolio = document.querySelector('.portfolio');
setTimeout(function() {
    portfolio.classList.add('pre-enter');
    
}, 500);

setTimeout(function() {
    portfolio.classList.add('on-enter');
}, 500);

setTimeout(function() {
    portfolio.classList.remove('pre-enter', 'on-enter');
}, 3000);