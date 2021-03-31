const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const age = document.getElementById('age');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
// Loading Event Listeners

fname.addEventListener('keyup', checkAlpha);
lname.addEventListener('keyup', checkAlpha);
age.addEventListener('keyup', checkAge);
mail.addEventListener('keyup', checkMail);
password.addEventListener('keyup', checkPassword);
submit.addEventListener('click', submitEvent);

// password.addEventListener('keyup', checkPassword);

function checkAlpha(e) {
    const alphaRE = /^[a-zA-Z]+$/i;
    if (alphaRE.exec(e.target.value) || e.target.value === '') {
        e.target.classList.remove('invalid');
    } else {
        e.target.classList.add('invalid');
    }
}

function checkAge(e) {
    if (e.target.value > 16 || e.target.value === '') {
        e.target.classList.remove('invalid');
    } else {
        e.target.classList.add('invalid');
    }
}

function checkMail(e) {
    const mailRE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mailRE.exec(e.target.value) || e.target.value === '') {
        e.target.classList.remove('invalid');
    } else {
        e.target.classList.add('invalid');
    }
}

function checkPassword(e) {
    if (e.target.value.length > 7 || e.target.value === '') {
        e.target.classList.remove('invalid');

    } else {
        e.target.classList.add('invalid');

    }
}

function submitEvent(e) {
    e.preventDefault();
    let message = validateForm();
    showPrompt(message);
}

function validateForm() {
    let form = document.querySelectorAll("input:not([type='submit'])");
    form = Array.from(form);
    for (let i = 0; i < form.length; i++) {
        if (form[i].value === '') {
            return 'Fill all the fields';
        } else if (form[i].classList.contains('invalid')) {
            return 'Form Invalid';
        }

    }
    return 'Form Submitted';
}

function showPrompt(message) {
    const prompt = document.getElementById('prompt');
    prompt.innerHTML = '';
    let div = document.createElement('div');
    div.classList = 'card';
    div.innerHTML = message;

    prompt.appendChild(div);
    setTimeout(() => prompt.innerHTML = '', 3000);
}