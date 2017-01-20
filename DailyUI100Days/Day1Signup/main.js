const signupBtn = document.querySelector('#signupBtn');
const show = document.querySelector('.show');
const signup = document.querySelector('.signup');

const showHtml = show.innerHTML;
show.style.display = 'none';
// show.innerHTML = '';
// console.log(showHtml);
// console.log(signup.classList);
signupBtn.addEventListener('click', function() {
    if (signup.classList[1]) {
        show.style.display = 'none';
        signup.classList = 'signup';
        // show.innerHTML = '';
    } else {
        // show.innerHTML = showHtml;
        show.style.display = 'block';
        signup.classList += ' active';
    }
}, false);