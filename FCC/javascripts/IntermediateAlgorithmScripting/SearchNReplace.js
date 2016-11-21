
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

// Better Way
function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.substring(1, after.length);
    }
    str = str.replace(before, after);
    return str;
}
