
function convertToRoman(num) {

    // Create two particular arrays to store decimal numbers and roman number
    var numValue = [1,    4,    5,    9,   10,  40,  50,   90,  100,  400, 500,  900, 1000];
    var romanNum = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    var numTmp = num;
    var roman = '';

    // while argument is greater or equal than 1000
    while (numTmp >= 1000) {
        roman += 'M';
        numTmp -= 1000;
    }
    // While the argument is greater than 0,
    while (numTmp > 0) {
      // loop the numValue
        for (var i = 0; i < numValue.length; i++) {
            // eg: numTmp = 987, it is between 900 and 1000
            if (numValue[i] <= numTmp && numValue[i + 1] > numTmp) {
                roman += romanNum[i];
                // than minus 900, numTmp === 87, and break to the next loop
                numTmp -= numValue[i];
                break;
            }
        }
    }
    return roman;
}

convertToRoman(1004);