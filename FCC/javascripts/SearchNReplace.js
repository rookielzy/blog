
function myReplace(str, before, after) {
    if (before[0].match(/[A-Z]/)) {
        var tmp = after[0];
        tmp = tmp.toUpperCase();
        after = after.replace(after[0], tmp);
    }
    str = str.replace(before, after);
    return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")