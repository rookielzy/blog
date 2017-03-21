var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

// 存储实例
var store = {};

// 实例方法
var Ball = function() {
    // 随机x坐标也就是横坐标，以及变化量moveX，以及半径r
    this.x = Math.random() * canvas.width;
    this.moveX = Math.random();
    this.r = 5 + 5 * Math.random();

    this.draw = function() {
        // 根据此时x位置重新绘制圆圈圈
        context.beginPath();
        context.fillStyle = "#369";
        context.arc(this.x, canvas.height / 2, this.r, 0, Math.PI*2);
        context.closePath();
        context.fill();
    };
};

// 假设10个圆圈圈
for (var indexBall = 0; indexBall < 10; indexBall += 1){
    store[indexBall] = new Ball();
}

// 绘制画布上10个圆圈圈
var draw = function() {
    // 位置变化
    for (var index in store) {
        store[index].x += store[index].moveX;
        if (store[index].x > canvas.width) {
            // 移动到画布外部时候从左侧开始继续位移
            store[index].x = -2 * store[index].r;
        }
        // 根据新位置绘制圆圈圈
        store[index].draw();
    }
};

// 画布渲染
var render = function() {
    // 清除画布
    context.clearRect(0, 0, canvas.width, canvas.height);
    // 绘制画布上所有的圆圈圈
    draw();
    // 继续渲染
    requestAnimationFrame(render);
};

render();