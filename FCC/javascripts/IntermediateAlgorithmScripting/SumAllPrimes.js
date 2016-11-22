
function sumPrimes(num) {
  // use a small trick make sure the input number will be checked
  var numCopy = num + 1;
  var i = 2;
  var primeArr = [];
  // set i -> 2 to n true
  for (; i < numCopy; i++) {
    primeArr[i] = true;
  }
  // use Sieve of Eratosthenes Algorithm
  // i -> 2 to sqrt(n)[not include]
  for (i = 2; i < Math.sqrt(numCopy); i++) {
    // j -> pow(i,2) to pow(i,2) + i, pow(i,2) + 2i, ...... not include n
    // set primeArr[j] false
    if (primeArr[i] === true) {
      for (var j = Math.pow(i,2); j < numCopy; j = j + i){
        primeArr[j] = false;
        continue;
      }
    }
  }
  var result = 0;
  primeArr.forEach(function(element, index) {
    if (element === true) {
      result += index;
    }
  });
  return result;

}

sumPrimes(977);
