var inputNum = document.getElementById('inputNum');
var queue = document.getElementById('queue');
var typeClick = document.querySelectorAll('input[type=button]');

// console.log(type);

function leftIn() {
    var li = document.createElement('li');
    var value = inputNum.value;
    li.innerText = value;
    if (!queue.firstChild) {
        queue.appendChild(li);
    } else {
        var firstChild = queue.firstChild;
        queue.insertBefore(li, firstChild);
    }
}

function leftOut() {
    if (!queue.firstChild) {
        return;
    } else {
        var firstChild = queue.firstChild;
        queue.removeChild(firstChild);
    }
}

function rightIn() {
    var li = document.createElement('li');
    var value = inputNum.value;    
    li.innerText = value;
    queue.appendChild(li);
}

function rightOut() {
    if (!queue.firstChild) {
        return;
    } else {
        var lastChild = queue.lastChild;
        queue.removeChild(lastChild);
    }
}

function Opration() {
    typeClick[0].addEventListener('click', leftIn, false);
    typeClick[1].addEventListener('click', rightIn, false);
    typeClick[2].addEventListener('click', leftOut, false);
    typeClick[3].addEventListener('click', rightOut, false);    
}

Opration();