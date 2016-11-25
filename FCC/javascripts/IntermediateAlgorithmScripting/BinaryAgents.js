
function binaryAgent(str) {
  var binaryArr = str.split(' ');
  var count = 0;
  var tmp = [];
  binaryArr.forEach(function(ele) {
    for (var i = 0; i < ele.length; i++) {
      count += parseInt(ele[i]) * Math.pow(2, 7-i);
    }
    tmp.push(count);
    count = 0;
  });
  var result = '';
  tmp.forEach(function(element) {
    result += String.fromCharCode(element);
  });
  console.log(result);
  console.log(tmp);
  console.log(binaryArr);
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
