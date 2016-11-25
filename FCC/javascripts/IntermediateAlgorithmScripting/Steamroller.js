
// todo find the right way to solve

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  arr.forEach(function(element) {
    while (Array.isArray(element)) {
      var j = element;
      for (var i = 0; i < element.length; i++) {
        while (Array.isArray(element[i])) {
          j = element[i];
          break;
        }
      }
    }
  });

  console.log(newArr);
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
