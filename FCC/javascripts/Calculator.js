const btns = document.querySelectorAll('.first-part div, #one > div > div, #equal');
// console.log(btns);
const displayMain = document.querySelector('#displayMain');
const displayAll = document.querySelector('#displayAll');
btns.forEach(btn => {
    btn.addEventListener('mousedown', function() {
        btn.classList += ' pressdown';
        if (displayMain.innerText.length >= 9) {
            displayMain.innerText = '';
            displayAll.innerText = 'OUT OF LIMIT!'
        } else {
            displayMain.innerText = btn.innerText;
            displayAll.innerText += btn.innerText;
        }
    }, false);
    btn.addEventListener('mouseup', function() {
        btn.classList -= ' pressdown';
    }, false);
});