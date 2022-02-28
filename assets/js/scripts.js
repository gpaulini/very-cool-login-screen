let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let button = document.querySelector('.button');
inputs.forEach(el => {
    el.addEventListener('keyup', evt => {
        if (inputs[0].value.length > 0 && inputs[1].value.length > 0) {
            button.classList.add("ready");
        } else {
            button.classList.remove('ready');
        }
    });
});

button.addEventListener('click', evt => {
    if (evt.target.classList.contains('ready')) {
        evt.preventDefault();
        form.submit();
    }
});
