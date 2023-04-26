// GENERAL FUNCTIONS //

function onlyLetters(str) {
    var hasNotChar = true;

    for (i = 0; i < str.value.length; i++) {
        var charCode = str.value.charCodeAt(i);

        if (
            !(charCode > 64 && charCode < 91) &&
            !(charCode > 96 && charCode < 123)
        )
        hasNotChar = false;
    }
    return hasNotChar;
}

function hasNumbersAndChar(str) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var num = 0;
    var char = 0;

    for (var i = 0; i < str.value.length; i++) {
        if (numbers.includes(str.value[i])) {
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

// VALIDATE NAME //

var nameField = document.querySelector('#name');
var errorName = document.querySelector('#name-error');

nameField.addEventListener('blur', blurValidateName);
nameField.addEventListener('focus', focusValidateName);

function blurValidateName() {
    if(nameField.value.length <= 3 || onlyLetters(nameField) === false) {
        nameField.classList.add("red-border");
        errorName.classList.remove("ds");
    }
}

function focusValidateName() {
    nameField.classList.remove("red-border");
    errorName.classList.add("ds");
}

// VALIDATE LAST NAME //

var lastNameField = document.querySelector('#lastname');
var errorLastName = document.querySelector('#lastname-error');

lastNameField.addEventListener('blur', blurValidateLastName);
lastNameField.addEventListener('focus', focusValidateLastName);

function blurValidateLastName() {
    if(lastNameField.value.length <= 3 || onlyLetters(lastNameField) === false) {
        lastNameField.classList.add("red-border");
        errorLastName.classList.remove("ds");
    }
}

function focusValidateLastName() {
    lastNameField.classList.remove("red-border");
    errorLastName.classList.add("ds");
}

// VALIDATE EMAIL //

var emailField = document.querySelector("#email");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var errorEmail = document.querySelector("#email-error");

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

// VALIDATE CONTACT REASON//

var contactSelectField = document.querySelector('#contact-reason');
var errorContactSelect = document.querySelector('#contact-error');
var defaultSelect = document.querySelector('#choose');

contactSelectField.addEventListener('blur', blurValidateContactSelect);
contactSelectField.addEventListener('focus', focusValidateContactSelect);

function blurValidateContactSelect() {
    if (contactSelectField.value === defaultSelect.value) {
        contactSelectField.classList.add("red-border");
        errorContactSelect.classList.remove("ds");
    }
}

function focusValidateContactSelect() {
    contactSelectField.classList.remove("red-border");
    errorContactSelect.classList.add("ds");
}

// VALIDATE MESSAGE//

var messageField = document.querySelector('#message');
var errorMessage = document.querySelector('#message-error');

messageField.addEventListener('blur', blurValidateMessage);
messageField.addEventListener('focus', focusValidateMessage);

function blurValidateMessage() {
    if (messageField.value.length  < 3 || hasNumbersAndChar(messageField) === false) {
        messageField.classList.add("red-border");
        errorMessage.classList.remove("ds");
    }
}

function focusValidateMessage() {
    messageField.classList.remove("red-border");
    errorMessage.classList.add("ds");
}

// VALIDATE SUBMIT //

function validateFieldToArray() {

    var arrayIncorrectValue = [];
    var arrayCorrectValue = [];

    if(nameField.classList.contains('red-border') || nameField.value === '') {
        nameField.classList.add('red-border');
        errorName.classList.remove('ds');
        arrayIncorrectValue.push("Invalid Name");
    }else {
        arrayCorrectValue.push("Name: " + nameField.value);
    }
    if(lastNameField.classList.contains('red-border') || lastNameField.value === '') {
        lastNameField.classList.add('red-border');
        errorLastName.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Last name");
    }else {
        arrayCorrectValue.push("\n" + "Last Name: " + lastNameField.value);
    }
    if(emailField.classList.contains('red-border') || emailField.value === '') {
        emailField.classList.add('red-border');
        errorEmail.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Email");
    }else {
        arrayCorrectValue.push("\n" + "Email: " + emailField.value);
    }
    if(contactSelectField.classList.contains('red-border') || contactSelectField.value === defaultSelect.value) {
        contactSelectField.classList.add('red-border');
        errorContactSelect.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Contact Reason");
    }else {
        arrayCorrectValue.push("\n" + "Contact Reason: " + contactSelectField.value);
    }
    if(messageField.classList.contains('red-border') || messageField.value === '') {
        messageField.classList.add('red-border');
        errorMessage.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Message");
    }else {
        arrayCorrectValue.push("\n" + "Message: " + messageField.value);
    }

    if (arrayIncorrectValue.length === 0) {
        return arrayCorrectValue;
    }else {
        return arrayIncorrectValue;
    }
}

var btnContact = document.querySelector('#btn-contact');

btnContact.addEventListener('click', submitContact);

function submitContact(e) {
    e.preventDefault();
    return alert(validateFieldToArray());
}