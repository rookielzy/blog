var input = document.querySelectorAll('input');
// console.log(input);
var pic = document.getElementById('pic');

// input[0].addEventListener('mousemove', (function(){
//     pic.style.borderWidth = input[0].value + 'px';
// }), false);

// input[1].addEventListener('mousemove', function(){
//     pic.style.filter = 'blur(' + input[1].value + 'px)';
// }, false);

// input[2].addEventListener('change', function(){
//     pic.style.borderColor = input[2].value;
// }, false);

function handlerupdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
input.forEach(element => element.addEventListener('change', handlerupdate));
input.forEach(element => element.addEventListener('mousemove', handlerupdate));