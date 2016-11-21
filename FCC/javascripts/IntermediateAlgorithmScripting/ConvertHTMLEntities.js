function convertHTML(str) {
    var htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };
    var newstr = str.split('').map(function(element) {
        return htmlEntities[element] || element;
    }).join('');
    return newstr;
}