
function addTogether() {
  if (arguments.length === 1) {
    if ((typeof arguments[0]) !== 'number') {
      return undefined;
    } else {
      var x = arguments[0];
      return function(y) {
        if ((typeof y) !== 'number') {
          return undefined;
        } else {
          return x + y;
        }
      };
    }
  } else {
    if ((typeof arguments[1]) !== 'number' || (typeof arguments[0]) !== 'number') {
      return undefined;
    } else {
      return arguments[0] + arguments[1];
    }
  }
}
console.log(addTogether(2)([3]));
addTogether(2)([3]);

