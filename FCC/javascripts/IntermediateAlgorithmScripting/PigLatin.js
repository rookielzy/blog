
function translatePigLatin(str) {
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    if (vowel.indexOf(str[0]) === -1) {
        var newstr = '';
        // consonant cluster
        if (str[0] === 's' || str[1] === 'r' || str[1] === 'l') {
          newstr = str.substr(0 ,2);
          newstr = str.substr(2) + newstr +'ay';
          return newstr;
        }
        // normal
        newstr = str.substr(1);
        newstr += str[0] + 'ay';
        return newstr;
    }
    // vowel first
    else {
        str = str + 'way';
        return str;
    }
    
}

translatePigLatin("glove");
