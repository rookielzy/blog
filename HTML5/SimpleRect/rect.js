var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


// Simple Rect
// context.lineJoin = 'round';
// context.lineWidth = 30;

// context.font = '24px Helvetica';
// context.fillText('Click anuwhere to erase', 175, 40);

// context.strokeStyle = 'goldenrod';
// context.fillStyle = 'rgba(0, 0, 255, 0.5)';

// context.strokeRect(75, 100, 200, 200);
// context.fillRect(325, 100, 200, 200);

// context.canvas.onmousedown = function(e) {
//     context.clearRect(0, 0, canvas.width, canvas.height);
// };

// Gradient
// var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
// var gradient = context.createRadialGradient(canvas.width/2, canvas.height, 10, canvas.width/2, 0, 100);
// gradient.addColorStop(0, 'blue');
// gradient.addColorStop(0.25, 'white');
// gradient.addColorStop(0.5, 'purple');
// gradient.addColorStop(0.75, 'red');
// gradient.addColorStop(1, 'yellow');

// context.fillStyle = gradient;
// context.fillRect(0, 0, canvas.width, canvas.height);

// Repeat
// image = new Image();
// image.src = "icon1.gif"
// image.onload = function() {
//     var pattern = context.createPattern(image, 'repeat-x');
//     context.fillStyle = pattern;
//     context.fillRect(0, 0, canvas.width, canvas.height);
//     context.fill();
// };

// Shadow
// context.fillStyle = "black";
// context.strokeStyle = "black";
// context.lineWidth = 5;
// context.fillRect(220, 220, 200, 200);
// context.strokeRect(10, 10, 200, 200);
// context.shadowColor = "red";
// context.shadowBlur = 20;
// context.shadowOffsetX = 15;
// context.shadowOffsetY = 15;

context.beginPath();

context.fillRect(10, 10, 100, 100);
context.closePath();
// context.beginPath();
context.fillRect(50, 50, 100, 100);