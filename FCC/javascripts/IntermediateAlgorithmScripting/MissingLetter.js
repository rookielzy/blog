
function fearNotLetter(str) {
    if (str[0] !== 'a') {
        return undefined;
    }
    else {
        var last = str.charCodeAt(str.length - 1);
        var lost;
        for (var i = 0; i < last - 97; i++) {
            if (str[i] !== String.fromCharCode(i+97)) {
                lost = String.fromCharCode(i+97);
                break;
            }
        }
        return lost;
    }
}
fearNotLetter("abcdefghjklmno");

