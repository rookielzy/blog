// The Best Way

function sumAll(arr) {
  const max = Math.max(arr[0],arr[1]);
  const min = Math.min(arr[0], arr[1]);
  return (max - min + 1) * (min + max) / 2;
}


// The Suck Way
function sumAll(arr) {
    const max = Math.max(arr[0], arr[1]);
    const min = Math.max(arr[0], arr[1]);
    var sum = 0;

    for (let i = min; i < max; i++) {
        sum += i;
    }
    return sum;
}