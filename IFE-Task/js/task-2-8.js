const text = document.querySelector('#input');
const search = document.querySelector('.search');
const searchStr = document.querySelector('.search-str');
const insert = document.querySelector('.insert');
const displayList = document.querySelector('.display-list')
var arrData = [];
function insertElement() {
    var str = text.value.trim();
    var arrWord = str.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(e => {
        if (e != null && e.length > 0) {
            return true;
        } else {
            return false;
        }
    });
    arrData = arrData.concat(arrWord);
    // console.log(arrData);
    var html = '';
    for (var i = 0; i < arrData.length; i++) {
        html += '<li>' + arrData[i] + '</li>';
    }
    displayList.innerHTML = html;
}

function matchStr() {
    var lists = document.querySelectorAll('li');
    // console.log(typeof lists);
    var matchTarget = searchStr.value;
    // console.log(matchTarget);
    lists.forEach(e => {
        var value = e.innerText;
        if (value.match(matchTarget)) {
            e.classList += 'match';
        }
        // console.log(value.match(matchTarget));
    }); 
}

insert.addEventListener('click', insertElement, false);

search.addEventListener('click', matchStr, false);