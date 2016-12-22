var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// test1
context.beginPath();
context.moveTo(300, 150);
context.save();
context.strokeStyle = 'black';
context.lineTo(200, 150);
context.stroke();
context.closePath();
context.restore();

context.strokeStyle = 'skyblue';
// context.arc(200, 150, 100, Math.PI, -0.5*Math.PI, false);
// context.stroke();
// context.closePath();
function drawCircle(beginAngle, endAngle) {
    context.beginPath();
    context.arc(300,150,100,beginAngle, endAngle, false);
    context.stroke();
    context.closePath();
}

function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

// var count = 1;
// var time = setInterval(function() {
//     (function(j){
//         drawCircle(Math.PI, count*Math.PI);
//     }(count));
//     count = count + 0.02;
//     if (count > 3.02) {
//         clearInterval(time);
//     }
// }, 50);


context.moveTo(300 - 100 * Math.sin(1 / 6 * Math.PI), 150 - 100 * Math.sin(1 / 3 * Math.PI));
context.lineTo(300, 150);
context.stroke();

var lineLength = 0;
setInterval(function() {
    (function(j) {
        var x = 300 - (100 - j) * Math.sin(1 / 6 * Math.PI);
        var y = 150 - (100 - j) * Math.sin(1 / 3 * Math.PI);
        drawLine( 300, 150);
    }(lineLength));
    lineLength = lineLength + 10;
}, 50);