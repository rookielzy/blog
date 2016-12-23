var inputNum = document.getElementById('inputNum');
var queue = document.getElementById('queue');
var commit = document.getElementById('commit');

function listInsert(liHeight) {
    var li = "<li style='height:" + liHeight + "px;'></li>";
    queue.innerHTML += li;
}
var liHeight = 0;
inputNum.addEventListener('change', function() {
    if (inputNum.value < 10 || inputNum.value > 100) {
        alert('10 to 100');
        return;
    } else {
        liHeight = inputNum.value;
    }
},false);

commit.addEventListener('click', function(){
    listInsert(liHeight);
}, false);


// todo 实现算法可视化