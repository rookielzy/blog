var p = document.querySelector('p');
p.addEventListener('click', function(){
    p.style.color = 'blue';
}, false);

console.log(p);

console.dir(p);

console.assert(1 === 1, 'wtf');

console.clear();

console.debug('debug what', 1===1);

console.error('error', 1===2);

console.group(p);
// console.groupCollapsed(p);
console.info('some info', 1===2);
console.info('some info', 1===1);
console.groupEnd(p);
console.info('some info', 1===3);
console.warn('you are wrong', 1===2);
console.time();
var i = 1;
var j = i + 2;
for (i; i < 10; i++) {
    j = i;
}
console.timeEnd();


