const imgs = document.querySelectorAll('img');
console.log(imgs);

imgs.forEach(img => {
    console.log(img.offsetTop);
})