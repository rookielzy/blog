var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    image = new Image(),

    scaleOutput = document.getElementById('scaleOutput'),
    scaleSlider = document.getElementById('scaleSlider'),
    scale = scaleSlider.value,
    scale = 1.0,

    MINIMUM_SCALE = 1.0,
    MAXIMUM_SCALE = 3.0;

function drawScaled() {
    var w = canvas.width,
        h = canvas.height,
        sw = w * scale,
        sh = h * scale;
        
    // Clear the canvas, and draw the image scaled to canvas size
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    
    // Draw the watermark on top of the image
    drawWatermark();

    // Finally, draw the canvas scaled according to the current
    // scale, back into itself. Note that the source and
    // desination canvases are the same cavnas.
    context.drawImage(canvas, 0, 0, canvas.width, canvas.height, -sw/2 + w/2, -sh/2 + h/2, sw, sh);
}

function drawScaleText(value) {
    var text = parseFloat(value).toFixed(2);
    var percent = parseFloat(value - MINIMUM_SCALE) / parseFloat(MAXIMUM_SCALE - MINIMUM_SCALE);
    scaleOutput.innerText = text;
    percent = percent < 0.35 ? 0.35 : percent;
    scaleOutput.style.fontSize = percent*MAXIMUM_SCALE/1.5 + 'em';
}

function drawWatermark() {
    var lineOne = 'Copyright',
        lineTwo = 'rookielzy',
        textMetrics ,
        FONT_HEIGHT = 128;
    context.save();
    context.font = FONT_HEIGHT + 'px Arial';
    textMetrics = context.measureText(lineOne);
    context.gloabalAlpha = 0.6;
    context.translate(canvas.width/2, canvas.height/2-FONT_HEIGHT/2);
    context.fillText(lineOne, -textMetrics.width/2, 0);
    context.strokeText(lineOne, -textMetrics.width/2, 0);
    textMetrics = context.measureText(lineTwo);
    context.fillText(lineTwo, -textMetrics.width/2, FONT_HEIGHT);
    context.strokeText (lineTwo, -textMetrics.width/2, FONT_HEIGHT);
    context.restore();
}

scaleSlider.onchange = function(e) {
    scale = e.target.value;
    if (scale < MINIMUM_SCALE) {
        scale = MINIMUM_SCALE;
    } else if (scale > MAXIMUM_SCALE) {
        scale = MAXIMUM_SCALE;
    }
    drawScaled();
    drawScaleText(scale);
}

context.fillStyle = 'cornflowerblue';
context.strokeStyle = 'yellow';
context.shadowColor = 'rgba(50, 50, 50, 1.0)';
context.shadowOffsetX = 5;
context.offSetY = 5;
context.shadowBlur = 10;
var glassSize = 150;
var scale = 1.0;
image.src = 'eminem.jpg';
image.onload = function(e) {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    drawWatermark();
    drawScaleText(scaleSlider.value);
};