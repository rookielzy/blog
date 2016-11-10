
function translatePigLatin(str) {
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    if (vowel.indexOf(str[0]) === -1) {
        var newstr = str.substr(1);
        newstr += str[0] + 'ay';
        return newstr;
    }
    else {
        str = str + 'way';
        return str;
    }
    
}

translatePigLatin("eight");
