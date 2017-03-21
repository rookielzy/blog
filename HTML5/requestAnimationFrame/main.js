var canvas = document.querySelector('#canvas'),
    context = canvas.getContext('2d'),
    paused = true,
    discs = [
        {
            x: 150,
            y: 250,
            lastX: 150,
            lastY: 250,
            velocityX: -3.2,
            velocityY: 3.5,
            radius: 25,
            innerColor: 'rgba(255,255,0,1)',
            middleColor: 'rgba(255,255,0,0.7)',
            outerColor: 'rgba(255,255,0,0.5)',
            strokeStyle: 'gray'
        },
        {
            x: 50,
            y: 150,
            lastX: 50,
            lastY: 150,
            velocityX: 2.2,
            velocityY: 2.5,
            radius: 25,
            innerColor: 'rgba(100, 145, 230, 1.0)',
            middleColor: 'rgba(100, 145, 230, 0.7)',
            outerColor: 'rgba(100, 145, 230, 0.5)',
            strokeStyle: 'blue'
        },
        {
            x: 150,
            y: 75,
            lastX: 150,
            lastY: 75,
            velocityX: 1.2,
            velocityY: 1.5,
            radius: 25,
            innerColor: 'rgba(255, 0, 0, 1.0)',
            middleColor: 'rgba(255, 0, 0, 0.7)',
            outerColor: 'rgba(255, 0, 0, 0.5)',
            strokeStyle: 'orange'
        }
    ],

    numDiscs = discs.length,
    animateButton = document.querySelector('#animateButton');

function update() {
    var disc = null;
    for (var i = 0; i < numDiscs; ++i) {
        disc = discs[i];

        if (disc.x + disc.velocityX)
    }
}