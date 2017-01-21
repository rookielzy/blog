const signupBtn = document.querySelector('#signupBtn');
const show = document.querySelector('.show');
const signup = document.querySelector('.signup');

// const showHtml = show.innerHTML;
// show.style.display = 'none';
// show.innerHTML = '';
// console.log(showHtml);
// console.log(signup.classList);
signupBtn.addEventListener('click', function() {
    signup.classList += ' active';
    signupBtn.innerHTML = '<h1>Submit</h1>'
}, false);