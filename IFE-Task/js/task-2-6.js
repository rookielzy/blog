var queue = document.getElementById("queue");
var num = document.getElementById("num");
var btn = document.getElementsByTagName("input");

function add(which) {
    var newList = document.createElement("li");
    if (which === 5){
        var theFirstChild = queue.firstChild;
        queue.insertBefore(newList, theFirstChild);
    }
    else {
        queue.appendChild(newList);
    }
    newList.innerText = num.value;
    console.log(btn[which]);
}

function del(which) {
    if (which === 5){
        var theFirstChild = queue.firstChild;
        queue.removeChild(theFirstChild);
    }
    else {
        var theLastChild = queue.lastChild;
        queue.removeChild(theLastChild);
    }
}

for (var i = 1; i < btn.length; i++){
    if (i < 3){
        btn[i].onclick = function(){
            var tmp = i;
            add(tmp);
        };
    }

    else {
        btn[i].onclick = function() {
            del(i);
        };
    }
}