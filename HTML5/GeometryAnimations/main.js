var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// test1
context.beginPath();
context.lineWidth = 2;
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
function drawCircle(x, y, beginAngle, endAngle) {
    context.beginPath();
    context.moveTo(x, y);
    context.closePath();    
    context.beginPath();
    context.arc(x,y,100,beginAngle, endAngle, false);
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

var count1 = 1;
var time1 = setInterval(function() {
    (function(j){
        drawCircle(300, 150, Math.PI, count1*Math.PI);
    }(count1));
    count1 = count1 + 0.02;
    if (count1 > 3.02) {
        clearInterval(time1);
        var lineLength1 = 100;
        var time2 = setInterval(function() {
            var x1 = 300 - 100 * Math.sin(1 / 6 * Math.PI);
            var y1 = 150 - 100 * Math.sin(1 / 3 * Math.PI);
            (function(j) {
                var x2 = 300 - j * Math.sin(1 / 6 * Math.PI);
                var y2 = 150 - j * Math.sin(1 / 3 * Math.PI);
                drawLine(x1, y1, x2, y2);
            }(lineLength1));
            lineLength1 = lineLength1 - 10;
            if (lineLength1 === -10) {
                clearInterval(time2);
                var count2 = 1;
                context.strokeStyle = 'pink';
                var time3 = setInterval(function(){
                    (function(j){
                        drawCircle(200, 150, Math.PI, count2*Math.PI);
                    }(count2));
                    count2 += 0.02;
                    if (count2 >=3.02) {
                        clearInterval(time3);
                        context.strokeStyle = 'yellow';
                        var lineLength2 = 100;
                        var time4 = setInterval(function() {
                            var x1 = 200;
                            var y1 = 150;
                            (function(j) {
                                var x2 = 250 - j * Math.sin(1 / 6 * Math.PI);
                                var y2 = 150 - (100 - j) * Math.sin(1 / 3 * Math.PI);
                                drawLine(x1, y1, x2, y2);
                            }(lineLength2));
                            lineLength2 = lineLength2 - 10;
                            if (lineLength2 === -10) {
                                clearInterval(time4);
                            }
                        }, 50);
                    }
                }, 30);
            }
        }, 50);
    }
}, 30);

// context.beginPath();
// context.moveTo(200, 150);
// context.strokeStyle = 'skyblue';
// context.arc(200, 150, 100, 0, 2*Math.PI, false);
// context.stroke();
// context.closePath();

// context.beginPath();
// context.moveTo(200, 150);
// context.closePath();
// context.strokeStyle = 'black';
// context.lineTo(250 - 0* Math.sin(1 / 6 * Math.PI), 150 - 100 * Math.sin(1 / 3 * Math.PI));
// context.stroke();
// context.closePath();

