const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordconfirm');

// setting the error function---------------------
function setError(input, message) {
    const formControl = input.parentElement;
    const alert = formControl.querySelector('small');

    alert.innerText = message;
    formControl.className = 'form-control error';
    formControl.classList.remove('success');
}
// setting the success function--------------------------------
function setSuccess(input) {
    formControl = input.parentElement;

    formControl.className = 'form-control success';
    formControl.classList.remove('error');
}
// check to make sure its a valid email-----------------------
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        setSuccess(input)
    }
    else {
        setError(input, 'Email is not valid')
    }
}

// checking all vals on each input -------------------------------
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if(input.value.trim() ===  '') {
            setError(input, `${labelName(input)} is required`);
        }
        else {
            setSuccess(input);
        }
    });
}

// check to make sure passwords match--------------
function checkPasswordsMatch(input1, input2) {
    if(input1.value.trim() !== input2.value.trim()) {
        setError(input2, 'Passwords do not match');
    }
}

// grabbing ID to concat a reusable string for message-------
function labelName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listener for form validation--------------------------------
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired([username, email, password, passwordConfirm]);
    checkEmail(email);
    checkPasswordsMatch(password, passwordConfirm);
});



