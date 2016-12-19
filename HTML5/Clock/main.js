var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var date = new Date();

var OUTER_CIRCLE = {
    x: 200,
    y: 200,
    r: 150,
    strokeStyle: 'blue'
}

var HOURS_CIRCLE = {
    x: 200,
    y: 200,
    r: 100,
    strokeStyle: 'green'
}

var MIN_CIRCLE = {
    x: 200,
    y: 200,
    r: 120,
    strokeStyle: 'pink'
}

var SEC_CIRCLE = {
    x: 200,
    y: 200,
    r: 140,
    strokeStyle: 'red'
}

function drawCircle(x, y, r, startAngle, endAngle, strokeStyle) {
    context.beginPath();
    context.strokeStyle = strokeStyle;
    context.arc(x, y, r, startAngle, endAngle, false);
    context.stroke();
    context.closePath();
}



setInterval(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var date = new Date();
    var hours_end = date.getHours();
    if (hours_end > 12) {
        hours_end = hours_end - 12;
    }
    hours_end = (hours_end * Math.PI / 6) -0.5*Math.PI;
    var min_end = (date.getMinutes() * Math.PI / 30) -0.5*Math.PI + Math.PI/30;
    var sec_end = (date.getSeconds() * Math.PI / 30) -0.5*Math.PI + Math.PI/30;

    drawCircle(OUTER_CIRCLE.x, OUTER_CIRCLE.y, OUTER_CIRCLE.r, -0.5*Math.PI, 1.5*Math.PI, OUTER_CIRCLE.strokeStyle);
    drawCircle(HOURS_CIRCLE.x, HOURS_CIRCLE.y, HOURS_CIRCLE.r, -0.5*Math.PI, hours_end, HOURS_CIRCLE.strokeStyle);
    drawCircle(MIN_CIRCLE.x, MIN_CIRCLE.y, MIN_CIRCLE.r, -0.5*Math.PI, min_end, MIN_CIRCLE.strokeStyle);
    drawCircle(SEC_CIRCLE.x, SEC_CIRCLE.y, SEC_CIRCLE.r, -0.5*Math.PI, sec_end, SEC_CIRCLE.strokeStyle);
    
}, 1000);