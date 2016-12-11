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
2. arcTo(x1, y1, x2, y2, radius); method of the Canvas 2D API adds an arc to the path with the given control points and radius, connected to the previous point by a straight line.
3. beginPath() method of the Canvas 2D API starts a new path by emptying the list of sub-paths. 
4. closePath() method of the Canvas 2D API causes the point of the pen to move back to the start of the current sub-path. It tries to add a straight line (but does not actually draw it) from the current point to the start. If the shape has already been closed or has only one point, this function does nothing.


### Line
1. moveTo(x, y); method of the Canvas 2D API moves the starting point of a new sub-path to the (x, y) coordinates.
2. lineTo(x, y);  method of the Canvas 2D API connects the last point in the sub-path to the x, y coordinates with a straight line (but does not actually draw it).
3. lineCap end point default: butt. round square
4. lineWidth
5. lineJoin default: bevel. round miter
6. miterLimit property of the Canvas 2D API sets the miter limit ratio in space units. When getting, it returns the current value (10.0 by default). When setting, zero, negative, Infinity and NaN values are ignored; otherwise the current value is set to the new value.
