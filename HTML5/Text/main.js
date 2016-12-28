var canvas = document.getElementById('canvas');
var cxt = canvas.getContext('2d');

var TEXT_FILL_STYLE = 'rgba(100, 130, 240, 0.5)',
    TEXT_STROKE_STYLE = 'rgba(200, 0, 0, 0.7)',
    TEXT_SIZE = 64,

    circle = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 200
    };

function drawCircularText(string, startAngle, endAngle) {
    var radius = circle.radius,
        angleDecrement = (startAngle - endAngle) / (string.length - 1),
        angle = parseFloat(startAngle),
        index = 0,
        character;
    
    cxt.save();
    cxt.fillStyle = TEXT_FILL_STYLE;
    cxt.strokeStyle = TEXT_STROKE_STYLE;
    cxt.font = TEXT_SIZE + 'px Lucida Sans';

    while (index < string.length) {
        character = string.charAt(index);

        cxt.save();
        cxt.beginPath();
        cxt.translate(circle.x + Math.cos(angle) * radius, circle.y - Math.sin(angle) * radius);
        cxt.rotate(Math.PI / 2 - angle);
        cxt.fillText(character, 0, 0);
        cxt.strokeText(character, 0, 0);

        angle -= angleDecrement;
        index++;
        cxt.restore();
    }

    cxt.restore();
}

cxt.textAlign = 'center';
cxt.textBaseline = 'middle';

drawCircularText("Clockwise around the circle", Math.PI*2, Math.PI/8);