var clock = document.getElementById('clock');



function changeTimeLength(input, index) {
    // console.log(input);
    // console.log(index);
    var timeSpan = document.querySelectorAll('span');
    // console.log(timeSpan);
    if (input.value === '-') {
        input.addEventListener('click', function() {
            if (index === 0) {
                var value = parseInt(timeSpan[0].innerText);
                if (value === 0) {
                    return;
                } else {
                    value--;
                }
                timeSpan[0].innerText = value;
            } else {
                var value = parseInt(timeSpan[1].innerText);
                if (value === 0) {
                    return;
                } else {
                    value--;
                }
                timeSpan[1].innerText = value;
                timeSpan[3].innerHTML = value + ':' + '00';                
            }
            // console.log(timeSpan[index]);
        }, false);
    } else {
        input.addEventListener('click', function() {
            if (index === 1) {
                var value = parseInt(timeSpan[0].innerText);
                if (value === 0) {
                    return;
                } else {
                    value++;
                }
                timeSpan[0].innerText = value;
            } else {
                var value = parseInt(timeSpan[1].innerText);
                if (value === 0) {
                    return;
                } else {
                    value++;
                }
                timeSpan[1].innerText = value;
                timeSpan[3].innerHTML = value + ':' + '00';
            }
        }, false);
    }
}

function ClockRun() {
        // console.log(event.target);
        var overlay = document.getElementById('overlay');
        var top = 296;
        var time = parseInt(document.querySelectorAll('span')[1].innerText);
        time = (300 / (time * 60));
        var timeLeft = document.querySelectorAll('span')[3];
        // console.log(timeLeft);
        var date = new Date();
        var min = parseInt(timeLeft.innerText.substring(0,2));
        // console.log(min);
        date.setMinutes(min, 00);
        var sec = date.getSeconds();
        var run = setInterval(function() {
            if (sec != 0) {
                sec--;
            } else {
                sec = 59;
                min--;
            }
            if (sec < 10) {
                sec = '0' + sec;
            }
            timeLeft.innerHTML = min + ':' + sec;
            top = top - time; 
            overlay.style.top = top + 'px';
            if (min === 0 & sec === '00' || top == -4) {
                clearInterval(run);
            }
        }, 1000);
    }

window.onload = function() {
    var inputs = document.querySelectorAll('input');
    // console.log(inputs);
    inputs.forEach(changeTimeLength);
    // console.log(clock.classList);
    clock.addEventListener('click', ClockRun, false);
};