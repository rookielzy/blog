function clockRunning() {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();

    var secNiddle = document.getElementById('secNiddle');
    var minNiddle = document.getElementById('minNiddle');
    var hourNiddle = document.getElementById('hourNiddle');

    var secDegrees = sec * 6 + 90;
    secNiddle.style.transform = `rotate(${secDegrees}deg)`;
    var minDegrees = min * 6 + 90;
    minNiddle.style.transform = `rotate(${minDegrees}deg)`;
    var hourDegrees = hour * 30 + 90;
    hourNiddle.style.transform = `rotate(${hourDegrees}deg)`;    
    
}

setInterval(clockRunning, 1000);