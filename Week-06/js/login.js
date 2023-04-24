// GENERAL VARIABLES //

var form = document.querySelector(".login-form");

// VALIDATE EMAIL //

var emailField = document.querySelector("#email");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var errorEmail = document.querySelector("#error-email");

emailField.addEventListener('blur', blurValidateEmail);
emailField.addEventListener('focus', focusValidateEmail);

function blurValidateEmail() {
    if(!emailExpression.test(emailField.value)) {
        emailField.classList.add("red-border");
        errorEmail.classList.remove("ds");
    }
}

function focusValidateEmail() {
    emailField.classList.remove("red-border");
    errorEmail.classList.add("ds");
}

// VALIDATE PASSWORD //

var passField = document.querySelector("#password");
var errorPass = document.querySelector("#error-pass");

passField.addEventListener('blur', blurValidatePass);
passField.addEventListener('focus', focusValidatePass);

function hasNumbersAndChar() {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var num = 0;
    var char = 0;

    for (var i = 0; i < passField.value.length; i++) {
        if (numbers.includes(passField.value[i])) {
            num += 1;
        } else {
            char += 1;
        }
        if (num > 0 && char > 0) {
            return true;
        }
    }
    return false;
}

function blurValidatePass() {
    if (passField.value === "" || hasNumbersAndChar() === false) {
        passField.classList.add("red-border");
        errorPass.classList.remove("ds");
    }
}

function focusValidatePass() {
    passField.classList.remove("red-border");
    errorPass.classList.add("ds");
}

// VALIDATE SUBMIT //

var btnLogin = document.querySelector('#btn-login');

btnLogin.addEventListener('click', submitLogin);

function submitLogin(e) {
    e.preventDefault();
    if(emailExpression.test(emailField.value) && hasNumbersAndChar) {
        alert("Email: " + emailField.value + " Password: " + passField.value);
    }else if (!emailExpression.test(emailField.value) && hasNumbersAndChar() === false) {
        emailField.classList.add("red-border");
        errorEmail.classList.remove("ds");
        passField.classList.add("red-border");
        errorPass.classList.remove("ds");
        alert("Invalid email and password");
    }
    else if(!emailExpression.test(emailField.value)) {
        emailField.classList.add("red-border");
        errorEmail.classList.remove("ds");
        alert("Invalid Email");
    }else {
        passField.classList.add("red-border");
        errorPass.classList.remove("ds");
        alert("invalid password");
    }
}