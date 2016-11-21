
function pairElement(str) {
    str = str.split('');
    var dna = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push([str[i], dna[str[i]]]);
    }
    return arr;
}

pairElement("GCG");
