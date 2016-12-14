var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var OUTER_CIRCLE = {
    x: 200,
    y: 200,
    r: 150,
    strokeStyle: 'blue'
};

var INNER_CIRCLE = {
    x: 200,
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

function drawNiddle() {}

