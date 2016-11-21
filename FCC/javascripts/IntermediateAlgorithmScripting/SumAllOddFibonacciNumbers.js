function sumFibs(num) {
  // Create variable to keep Record
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;

  // Makes sure we do not go over the original number
  while (currNumber <= num) {
    // CHecks for odd fibonacci numbers
    if (currNumber % 2 !== 0) {
      // Add them to the return variable
      result += currNumber;
    }

    // Complete the fibonnaci circle by rotating values.
    var added = currNumber + prevNumber;
    prevNumber = currNumber;
    currNumber = added;
  }

  return result;
}

sumFibs(75025);