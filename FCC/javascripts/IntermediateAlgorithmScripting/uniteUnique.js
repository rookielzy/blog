
function uniteUnique(arr) {
    arr = arguments[0];
    function findUnique(element) {
      if (arr.indexOf(element) === -1) {
        arr.push(element);
      }
    }
    for (var i = 1; i < arguments.length; i++) {
      arguments[i].forEach(findUnique);
    }
    return arr;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
