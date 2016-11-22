
function findElement(arr, func) {
  var newarr = arr.filter(func);
  if (newarr[0] !== undefined) {
      return newarr[0];
  } else {
      return undefined;
  }
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
