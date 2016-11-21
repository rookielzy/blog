// function styleHyphenFormat(propertyName) {
//   function upperToHyphenLower(match) {
//     console.log(match.toLowerCase().replace(' ', '-'));
//   }
//   return propertyName.replace(/([^'-'^\w])/g, upperToHyphenLower);
// }

// console.log(styleHyphenFormat('This Is Spinal Tap'));


// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins
//   var re = /([^'-'^\w])/g;
//   var tmp = str.match(re);
//   var newstr = '';

//   for (var i = 0; i < tmp.length; i++) {
//           tmp[i] = tmp[i].substring(0, tmp[i].length-2) + '-' + tmp[i][tmp[i].length - 1];
//   }
//   console.log(tmp);
  
//   newstr = str.replace(/([a-z]*)([^'-'])([A-Z])/, tmp[1]);
// //   for (var i = 0; i < tmp.length; i++) {
// //       newstr += str.replace(/([a-z]*)([^'-'])([A-Z])/, tmp[i]);
// //   }
//   console.log(newstr);
//   return str;
// }

// spinalCase('This Is Spinal Tap');


function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/, '$1 $2');
  console.log(str);
  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

console.log(spinalCase('thisIsSpinalTap'));