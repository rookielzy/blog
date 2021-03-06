
// The prev way
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
//   return Object.keys(source);
  var keys = Object.keys(source);
  var values = [];
  for (var i = 0; i < keys.length; i++) {
      values[i] = source[keys[i]];
  }
  for (var m = 0; m < collection.length; m++) {
      for (var n = 0; n < values.length; n++) {
          if (!collection[m].hasOwnProperty(keys[n]) || collection[m][keys[n]] !== values[n]) {
            collection[m] = false;
          }
      }
  }
  return collection;
  // Only change code above this line
//   return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// The Best Way
function whatIsInAName(collection, source) {
  var arr = [];
  var keys = Object.keys(source);

  arr = collection.filter(function(element) {
    // loop every element in keys
    return keys.every(function(key) {
      // satisfy the condition
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return arr;
}