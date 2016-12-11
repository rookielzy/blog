var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function roundedRect(cornerX, cornerY, width, height, cornerRadius) {
    if (width > 0) {
        context.moveTo(cornerX + cornerRadius, cornerY);
    } else {
        context.moveTo(cornerX - cornerRadius, cornerY);        
    }
    context.arcTo(cornerX + width, cornerY, cornerX + width, cornerY + height, cornerRadius);
}

context.beginPath();
roundedRect(50, 40, 100, 100, 10);
// context.arcTo(150, 40, 150, 140,10);
context.moveTo(50, 100);
context.lineTo(50,150);
context.strokeStyle = 'blue';
context.fillStyle = 'red';

context.stroke();