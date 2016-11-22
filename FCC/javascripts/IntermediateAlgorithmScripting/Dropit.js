
function dropElements(arr, func) {
  // Copy the arr. DONT USE arCopy = arr !
  var arrCopy = [];
  arr.forEach(function(elements) {
      arrCopy.push(elements);
  });


  var num;
  // use flag to find the right index 
  var flag = 0;
  var index = [];
  while (arrCopy[0] !== undefined) {
      num = arrCopy.shift();
      if (func(num)) {
          index.push(flag);
      }
      flag++;
  }
  console.log(index);
  var begin = index[0];
  var end = index[index.length];
  if (begin !== undefined || end !== undefined) {
    var newarr = arr.slice(begin, end);
    console.log(newarr);
    return newarr;
  } else {
      return [];
  }

}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
