var queue = document.getElementById("queue");
var num = document.getElementById("num");
var btn = document.getElementsByTagName("input");
var l = 0;
btn[1].onclick = function() {
    var newList = document.createElement("li");
    newList.innerText = num.value;
    var theFirstChild = queue.firstChild;
    queue.insertBefore(newList, theFirstChild);
    l++;
}

btn[2].onclick = function() {
    var newList = document.createElement("li");
    newList.innerText = num.value;
    queue.appendChild(newList);
    l++;
}

btn[3].onclick =function() {
    var theFirstChild = queue.firstChild;
    queue.removeChild(theFirstChild);
    l--;
}

btn[4].onclick = function() {
    var theLastChild = queue.lastChild;
    queue.removeChild(theLastChild);
    l--;
}

function clickToDel() {
    var parent = this.parent;
    console.log(this);
    parent.removeChild(this);
}

for (var i = 0; i < l; i++){
    var list = document.getElementsByTagName("li");
    list[i].onclick = clickToDel;
}