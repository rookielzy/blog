const checkboxs = document.querySelectorAll('.item input[type=checkbox]');

let lastChecked;

function HandlerChange(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxs.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;

}

checkboxs.forEach(checkbox => {
    checkbox.addEventListener('click', HandlerChange, false);
})