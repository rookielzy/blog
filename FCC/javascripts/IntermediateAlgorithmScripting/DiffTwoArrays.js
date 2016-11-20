// The Best Way
function diff(arr1, arr2) {
    // concat two arrays
    let newArr = arr1.concat(arr2);
    // if newArr own the one of element of two arrays ignore it
    function check(item) {
        if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
            return item;
        }
    }
    return newArr.filter(check);
}

// The Suck Way
// 1. find the longest array
// 2. long.indexOf(short.element) if result is -1 than push into a newArr