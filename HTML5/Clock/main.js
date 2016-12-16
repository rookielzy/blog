var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var OUTER_CIRCLE = {
    x: 200,
    y: 200,
    r: 150,
    strokeStyle: 'blue'
};


function drawCircle(x, y, r, startAngle, endAngle, strokeStyle) {
    context.beginPath();
    context.strokeStyle = strokeStyle;
    context.arc(x, y, r, startAngle, endAngle, false);
    context.stroke();
    context.closePath();
}


function drawSecond(x, y, r, startAngle, endAngle, strokeStyle) {
    // Clear the whole canvas and re-draw Circle
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(OUTER_CIRCLE.x, OUTER_CIRCLE.y, OUTER_CIRCLE.r, 0, 2 * Math.PI, OUTER_CIRCLE.strokeStyle);

    context.beginPath();
    context.strokeStyle = strokeStyle;
    context.arc(x, y, r, startAngle, endAngle, false);
    context.stroke();
    context.closePath();
}

function drawNiddle(x, y, strokeStyle, lineWidth) {
    context.beginPath();
    // move to the center
    context.moveTo(200, 200);
    context.lineWidth = lineWidth;
    context.lineTo(x, y);
    context.stroke();
    context.closePath();
}


setInterval(function() {
    var time = new Date();
    var secEndAngle = (time.getSeconds() * Math.PI / 30) - 0.5*Math.PI + 1/30*Math.PI;
    var minEndAngle = (time.getMinutes() * Math.PI / 30) - 0.5*Math.PI;
    // time.setHours(3);
    var hourEndAngle = (time.getHours()/2 * Math.PI / 6) - 0.5*Math.PI;
    // hourEndAngle = time.getHours();
    // console.log(secEndAngle);
    console.log(hourEndAngle);
    
    // drawSecond(200, 200, 140, -0.5*Math.PI, secEndAngle, 'red');
    // drawSecond(200, 200, 120, -0.5*Math.PI, minEndAngle, 'pink');    
    drawSecond(200, 200, 140, -0.5*Math.PI, hourEndAngle, 'red');    
}, 1000);