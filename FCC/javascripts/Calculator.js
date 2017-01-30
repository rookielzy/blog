const test = document.querySelectorAll('.first-part div');
// console.log(test);
test.forEach(btn => {
    btn.addEventListener('mousedown', function() {
        btn.classList += ' pressdown';
    }, false);
    btn.addEventListener('mouseup', function() {
        btn.classList -= ' pressdown';
    }, false);
});