# Hello Canvas

## Chapter One
1. You can not set canvas's size by using px

### Base API
1. fillStyle = ('color')
2. strokeStyle = ('color')

## Chapter Two

### Rect API
1. clearRect(double x, double y, double w, double h)
2. strokeRect(double x, double y, double w, double h)
3. fillRect(double x, double y, double w, double h)

### Gradient API
1. createLinearGradient(double x, double y, double row, double column)
2. createRedialGradient(double x0, double y0, double y0, double x1, double y1, double r1)
3. addColorStop(precent, 'color')

### Pattern API
1. createPattern(image, repeat | repeat-x | repeat-y | no-repeat);
2. image = new Image(); image.src = ' '; image.onload = function() { }

### Shadow API
1. shadowColor
2. shadowBlur
3. shadowOffsetX
4. shadowOffsetY

### Path
1. arc(x, y, radius, startAngle, endAngle, anticlockwise);
2. beginPath() method of the Canvas 2D API starts a new path by emptying the list of sub-paths. 
3. closePath() method of the Canvas 2D API causes the point of the pen to move back to the start of the current sub-path. It tries to add a straight line (but does not actually draw it) from the current point to the start. If the shape has already been closed or has only one point, this function does nothing.


### Line
1. moveTo(x, y); method of the Canvas 2D API moves the starting point of a new sub-path to the (x, y) coordinates.
2. lineTo(x, y);  method of the Canvas 2D API connects the last point in the sub-path to the x, y coordinates with a straight line (but does not actually draw it).
