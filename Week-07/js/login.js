// MODAL //

var modal = document.querySelector("#myModal");
var modalContent = document.querySelector('#p-modal');
var domValidation = document.querySelector('#dom-validation');
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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

// VALIDATE SUMBIT //

function validateFieldToArray() {

    var arrayIncorrectValue = [];

    if(emailField.classList.contains('red-border') || emailField.value === '') {
        emailField.classList.add('red-border');
        errorEmail.classList.remove('ds');
        arrayIncorrectValue.push("Invalid Email");
    }
    if(passField.classList.contains('red-border') || passField.value === '') {
        passField.classList.add('red-border');
        errorPass.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Password");
    }

    return arrayIncorrectValue;
}

var btnLogin = document.querySelector('#btn-login');

btnLogin.addEventListener('click', submitLogin);

function submitLogin(e) {
    e.preventDefault();
    if (validateFieldToArray().length > 0) {

        var msgValidate = validateFieldToArray();

        modalContent.classList.remove('p-modal');
        domValidation.classList.remove('dom-validation');
        modalContent.classList.add('error-title');
        domValidation.classList.add('error-text');
        modal.style.display = "flex";
        modalContent.innerHTML = 'Validation Error';
        domValidation.innerHTML = msgValidate;

    } else {

        var URL = ` https://api-rest-server.vercel.app/login?email=${emailField.value}&password=${passField.value} `;

        fetch(URL)
            .then(function (response) {
                return response.json();
            })
            .then(function (resp) {
                if(!resp.success){
                    throw new Error(JSON.stringify(resp.msg))}

                var msgValid = 'Email: ' + emailField.value + '\n' + 'Password: ' + passField.value;

                modal.style.display = "flex";
                modalContent.classList.remove('error-title');
                domValidation.classList.remove('error-text');
                modalContent.classList.add('p-modal');
                domValidation.classList.add('dom-validation');
                modalContent.innerHTML = resp.msg;
                domValidation.innerHTML = msgValid;

            })
            .catch(function (error) {

                modal.style.display = "flex";
                modalContent.classList.add('error-title');
                domValidation.classList.add('error-text');
                modalContent.classList.remove('p-modal');
                domValidation.classList.remove('dom-validation');
                modalContent.innerHTML = 'Login Error';
                domValidation.innerHTML = error;

            });
    };
};