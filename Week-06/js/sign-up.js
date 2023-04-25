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

function onlyNumbers(str) {
    var hasNotNumber = true;

    for (i = 0; i < str.value.length; i++) {
        var charCode = str.value.charCodeAt(i);

        if (
            !(charCode > 47 && charCode < 58)
        )
        hasNotNumber = false;
    }
    return hasNotNumber;
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

function contLetters(str) {
    var char = 0;

    for (i = 0; i < str.value.length; i++) {
        var charCode = str.value.charCodeAt(i);

        if (
            (charCode > 64 && charCode < 91) ||
            (charCode > 96 && charCode < 123)
        )
        char += 1;
    }
    return char;
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

// VALIDATE DNI //

var dniField = document.querySelector('#dni');
var errorDNI = document.querySelector('#dni-error');

dniField.addEventListener('blur', blurValidateDNI);
dniField.addEventListener('focus', focusValidateDNI);

function blurValidateDNI() {
    if((dniField.value.length <= 7 || dniField.value.length >= 9) || onlyNumbers(dniField) === false) {
        dniField.classList.add("red-border");
        errorDNI.classList.remove("ds");
    }
}

function focusValidateDNI() {
    dniField.classList.remove("red-border");
    errorDNI.classList.add("ds");
}

// VALIDATE DATE OF BIRTH //

var dateField = document.querySelector('#dateofbirth');
var errorDate = document.querySelector('#date-error');

dateField.addEventListener('blur', blurValidateDate);
dateField.addEventListener('focus', focusValidateDate);

function lessThanCurrentDay() {
    var date = new Date();
    var currentDay = date.getDate();
    var currentmonth = (date.getMonth() + 1);
    var currentyear = date.getFullYear();

    var inputLenght = dateField.value.length;
    var inputDay = Number(dateField.value.substring((inputLenght - 2), inputLenght));
    var inputMonth = Number(dateField.value.substring((inputLenght - 3), (inputLenght - 5)));
    var inputYear = Number(dateField.value.substring(0,4));

    var lessCurrentDay = true;

    if(inputYear > currentyear) {
        lessCurrentDay = false;
    } else if (inputYear === currentyear && inputMonth > currentmonth) {
        lessCurrentDay = false;
    } else if(inputYear === currentyear &&
              inputMonth === currentmonth &&
              inputDay > currentDay) {
        lessCurrentDay = false;
    }
    return lessCurrentDay;
}

function blurValidateDate() {

    if(dateField.value === '' || lessThanCurrentDay() === false) {
        dateField.classList.add("red-border");
        errorDate.classList.remove("ds");
    }
}
function focusValidateDate() {
    dateField.classList.remove("red-border");
    errorDate.classList.add("ds");
}

// VALIDATE PHONE NUMBER //

var phoneNumberField = document.querySelector('#phonenumber');
var errorPhoneNumber = document.querySelector('#phone-error');

phoneNumberField.addEventListener('blur', blurValidatePhoneNumber);
phoneNumberField.addEventListener('focus', focusValidatePhoneNumber);

function blurValidatePhoneNumber() {
    if(phoneNumberField.value.length != 10 ||
       onlyNumbers(phoneNumberField) === false) {
        phoneNumberField.classList.add("red-border");
        errorPhoneNumber.classList.remove("ds");
    }
}

function focusValidatePhoneNumber() {
    phoneNumberField.classList.remove("red-border");
    errorPhoneNumber.classList.add("ds");
}

// VALIDATE ADDRESS //

var addressField = document.querySelector('#address');
var errorAddress = document.querySelector('#address-error');

addressField.addEventListener('blur', blurValidateAddress);
addressField.addEventListener('focus', focusValidateAddress);

function validateSpaceBetween () {
    var spaceBetween = true;
    var addressFieldTrimed = addressField.value.trim();

    if (addressFieldTrimed.indexOf(' ') === 0 ||
        addressFieldTrimed.indexOf(' ') === -1) {
        spaceBetween = false;
    }
    return spaceBetween;
}

function blurValidateAddress() {
    if (hasNumbersAndChar(addressField) === false || addressField
    .value.length < 5 || validateSpaceBetween() === false) {
        addressField.classList.add("red-border");
        errorAddress.classList.remove("ds");
    }
}

function focusValidateAddress() {
    addressField.classList.remove("red-border");
    errorAddress.classList.add("ds");
}

// VALIDATE CITY //

var cityField = document.querySelector('#city');
var errorCity = document.querySelector('#city-error');

cityField.addEventListener('blur', blurValidateCity);
cityField.addEventListener('focus', focusValidateCity);

function blurValidateCity() {
    if (contLetters(cityField)  <= 3 || (onlyLetters(cityField) === false && onlyNumbers === false)) {
        cityField.classList.add("red-border");
        errorCity.classList.remove("ds");
    }
}

function focusValidateCity() {
    cityField.classList.remove("red-border");
    errorCity.classList.add("ds");
}

// VALIDATE ZIP CODE //

var zipCodeField = document.querySelector('#zipcode');
var errorZipCode = document.querySelector('#zipcode-error');

zipCodeField.addEventListener('blur', blurValidateZipCode);
zipCodeField.addEventListener('focus', focusValidateZipCode);

function blurValidateZipCode() {
    if((zipCodeField.value.length < 4 || zipCodeField.value.length > 5) || onlyNumbers(zipCodeField) === false) {
        zipCodeField.classList.add("red-border");
        errorZipCode.classList.remove("ds");
    }
}

function focusValidateZipCode() {
    zipCodeField.classList.remove("red-border");
    errorZipCode.classList.add("ds");
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

// VALIDATE PASSWORD //

var passField = document.querySelector("#password");
var errorPass = document.querySelector("#pass-error");

passField.addEventListener('blur', blurValidatePass);
passField.addEventListener('focus', focusValidatePass);

function blurValidatePass() {
    if (passField.value < 8 || hasNumbersAndChar(passField) === false) {
        passField.classList.add("red-border");
        errorPass.classList.remove("ds");
    }
}

function focusValidatePass() {
    passField.classList.remove("red-border");
    errorPass.classList.add("ds");
}

// VALIDATE REPEAT PASSWORD //

var repeatPassField = document.querySelector("#repeatpass");
var errorRepeatPass = document.querySelector("#repeatpass-error");

repeatPassField.addEventListener('blur', blurValidateRepeatPass);
repeatPassField.addEventListener('focus', focusValidateRepeatPass);

function blurValidateRepeatPass() {
    if (repeatPassField.value < 8 ||
        hasNumbersAndChar(repeatPassField) === false ||
        passField.value != repeatPassField.value) {
        repeatPassField.classList.add("red-border");
        errorRepeatPass.classList.remove("ds");
    }
}

function focusValidateRepeatPass() {
    repeatPassField.classList.remove("red-border");
    errorRepeatPass.classList.add("ds");
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
        arrayCorrectValue.push(nameField.value);
    }
    if(lastNameField.classList.contains('red-border') || lastNameField.value === '') {
        lastNameField.classList.add('red-border');
        errorLastName.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Last name");
    }else {
        arrayCorrectValue.push(lastNameField.value);
    }
    if(dniField.classList.contains('red-border') || dniField.value === '') {
        dniField.classList.add('red-border');
        errorDNI.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid DNI");
    }else {
        arrayCorrectValue.push(dniField.value);
    }
    if(dateField.classList.contains('red-border') || dateField.value === '') {
        dateField.classList.add('red-border');
        errorDate.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Date");
    }else {
        arrayCorrectValue.push(dateField.value);
    }
    if(phoneNumberField.classList.contains('red-border') || phoneNumberField.value === '') {
        phoneNumberField.classList.add('red-border');
        errorPhoneNumber.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Phone Number");
    }else {
        arrayCorrectValue.push(phoneNumberField.value);
    }
    if(addressField.classList.contains('red-border') || addressField.value === '') {
        addressField.classList.add('red-border');
        errorAddress.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Address");
    }else {
        arrayCorrectValue.push(addressField.value);
    }
    if(cityField.classList.contains('red-border') || cityField.value === '') {
        cityField.classList.add('red-border');
        errorCity.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid City");
    }else {
        arrayCorrectValue.push(cityField.value);
    }
    if(zipCodeField.classList.contains('red-border') || zipCodeField.value === '') {
        zipCodeField.classList.add('red-border');
        errorZipCode.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Zip Code");
    }else {
        arrayCorrectValue.push(zipCodeField.value);
    }
    if(emailField.classList.contains('red-border') || emailField.value === '') {
        emailField.classList.add('red-border');
        errorEmail.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Email");
    }else {
        arrayCorrectValue.push(emailField.value);
    }
    if(passField.classList.contains('red-border') || passField.value === '') {
        passField.classList.add('red-border');
        errorPass.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Password");
    }else {
        arrayCorrectValue.push(passField.value);
    }
    if(repeatPassField.classList.contains('red-border') || repeatPassField.value === '') {
        repeatPassField.classList.add('red-border');
        errorRepeatPass.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Repeat Password");
    }else {
        arrayCorrectValue.push(repeatPassField.value);
    }

    if (arrayIncorrectValue.length === 0) {
        return arrayCorrectValue;
    }else {
        return arrayIncorrectValue;
    }
}

var btnRegister = document.querySelector('#btn-register');

btnRegister.addEventListener('click', submitRegister);

function submitRegister(e) {
    e.preventDefault();
    return alert(validateFieldToArray());
}