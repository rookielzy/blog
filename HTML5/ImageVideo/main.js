var canvas = document.getElementById('canvas'),
    cxt = canvas.getContext('2d'),
    image = new Image(),

    scaleSlider = document.getElementById('scaleSlider'),
    scale = 1.0,
    MINIMUM_SCALE = 1.0,
    MAXIMUM_SCALE = 3.0;

function drawImage() {
    var w = canvas.width,
        h = canvas.height,
        sw = w * scale,
        sh = h * scale;

    cxt.clearRect(0, 0, canvas.width, canvas.height);
    cxt.drawImage(image, -sw/2 + w/2, -sh/2 + h/2, sw, sh);
}

function drawScaleText(value) {
    var text = parseFloat(value).toFixed(2);
    var percent = parseFloat(value - MINIMUM_SCALE) / parseFloat(MAXIMUM_SCALE - MINIMUM_SCALE);

    scaleOutput.innerText = text;
    percent = percent < 0.35 ? 0.35 : percent;
    scaleOutput.style.fontSize = percent*MAXIMUM_SCALE/1.5 + 'em';
}

scaleSlider.onmousemove = function(e) {
    scale = e.target.value;

    if (scale < MINIMUM_SCALE) {
        scale = MINIMUM_SCALE;
    } else if (scale > MAXIMUM_SCALE) {
        scale = MAXIMUM_SCALE;
    }
    drawScaleText(scale);
    drawImage();
}

cxt.fillStyle = 'cornflowerblue';
cxt.strokeStyle = 'yellow';
cxt.shadowColor = 'rgba(50, 50, 50, 1.0)';
cxt.shadowOffsetX = 5;
cxt.shadowOffsetY = 5;
cxt.shadowBlur = 10;

image.src = 'eminem.jpg';
image.onload = function(e) {
    drawImage();
    drawScaleText(scaleSlider.value);
}
