var clock = document.getElementById('clock');

clock.addEventListener('click', function() {
    // console.log(event.target);
    var timeLeft = document.querySelectorAll('span')[3];
    // console.log(timeLeft);
    var date = new Date();
    date.setMinutes(25, 00);
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var run = setInterval(function() {
        if (sec !== 0) {
            sec--;
        } else {
            sec = 59;
            min--;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        timeLeft.innerHTML = min + ':' +sec;
        if (min === 0 & sec === '00') {
            clearInterval(run);
        }
    }, 1000);

}, false);