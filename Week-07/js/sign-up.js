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
var dateValidFormat = dateField.value;

dateField.addEventListener('blur', blurValidateDate);
dateField.addEventListener('focus', focusValidateDate);

function dateValid() {
    var inputLenght = dateField.value.length;
    var inputDay = (dateField.value.substring((inputLenght - 2), inputLenght));
    var inputMonth = (dateField.value.substring((inputLenght - 5), (inputLenght - 3)));
    var inputYear = (dateField.value.substring(0,4));

    var dateValid = `${inputMonth}/${inputDay}/${inputYear}`;

    return dateValid;
}

function lessThanCurrentDay() {
    var date = new Date();
    var currentDay = date.getDate();
    var currentmonth = (date.getMonth() + 1);
    var currentyear = date.getFullYear();

    var inputLenght = dateField.value.length;
    var inputDay = Number(dateField.value.substring((inputLenght - 2), inputLenght));
    var inputMonth = Number(dateField.value.substring((inputLenght - 5), (inputLenght - 3)));
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

    if(nameField.classList.contains('red-border') || nameField.value === '') {
        nameField.classList.add('red-border');
        errorName.classList.remove('ds');
        arrayIncorrectValue.push("Invalid Name");
    }
    if(lastNameField.classList.contains('red-border') || lastNameField.value === '') {
        lastNameField.classList.add('red-border');
        errorLastName.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Last name");
    }
    if(dniField.classList.contains('red-border') || dniField.value === '') {
        dniField.classList.add('red-border');
        errorDNI.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid DNI");
    }
    if(dateField.classList.contains('red-border') || dateField.value === '') {
        dateField.classList.add('red-border');
        errorDate.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Date");
    }
    if(phoneNumberField.classList.contains('red-border') || phoneNumberField.value === '') {
        phoneNumberField.classList.add('red-border');
        errorPhoneNumber.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Phone Number");
    }
    if(addressField.classList.contains('red-border') || addressField.value === '') {
        addressField.classList.add('red-border');
        errorAddress.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Address");
    }
    if(cityField.classList.contains('red-border') || cityField.value === '') {
        cityField.classList.add('red-border');
        errorCity.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid City");
    }
    if(zipCodeField.classList.contains('red-border') || zipCodeField.value === '') {
        zipCodeField.classList.add('red-border');
        errorZipCode.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Zip Code");
    }
    if(emailField.classList.contains('red-border') || emailField.value === '') {
        emailField.classList.add('red-border');
        errorEmail.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Email");
    }
    if(passField.classList.contains('red-border') || passField.value === '') {
        passField.classList.add('red-border');
        errorPass.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Password");
    }
    if(repeatPassField.classList.contains('red-border') || repeatPassField.value === '') {
        repeatPassField.classList.add('red-border');
        errorRepeatPass.classList.remove('ds');
        arrayIncorrectValue.push("\nInvalid Repeat Password");
    }

        return arrayIncorrectValue;
}



var btnRegister = document.querySelector('#btn-register');

btnRegister.addEventListener('click', submitRegister);

function submitRegister(e) {
    e.preventDefault();
    if (validateFieldToArray().length > 0) {

        var msgValidate = validateFieldToArray();

        modalContent.classList.remove('p-modal');
        domValidation.classList.remove('dom-validation');
        modalContent.classList.add('error-title');
        domValidation.classList.add('error-text');
        modal.style.display = "flex";
        modalContent.innerHTML = ' Validation Error';
        domValidation.innerHTML = msgValidate;

    } else {
        dateValidFormat = dateValid();

        var URL = ` https://api-rest-server.vercel.app/signup?name=${nameField.value}&lastName=${lastNameField.value}&
dni=${dniField.value}&dob=${dateValidFormat}&phone=${phoneNumberField.value}&address=${addressField.value}&
city=${cityField.value}&zip=${zipCodeField.value}&email=${emailField.value}&password=${passField.value}&
password=${repeatPassField.value} `;

        fetch(URL)
            .then(function (response) {
                return response.json();
            })
            .then(function (resp) {
                if(!resp.success){
                    throw new Error(JSON.stringify(resp))}

                var msgValid = 'Name: ' + nameField.value +
                '\n' + 'Last Name: ' + lastNameField.value +
                '\n' + 'DNI: ' + dniField.value +
                '\n' + 'Date of Birth: ' + dateField.value +
                '\n' + 'Phone Number: ' + phoneNumberField.value +
                '\n' + 'Address: ' + addressField.value +
                '\n' + 'City: ' + cityField.value +
                '\n' + 'Zip Code: ' + zipCodeField.value +
                '\n' + 'Email: ' + emailField.value +
                '\n' + 'Password: ' + passField.value +
                '\n' + 'Password Repeat: ' + repeatPassField.value;

                modal.style.display = "flex";
                modalContent.classList.remove('error-title');
                domValidation.classList.remove('error-text');
                modalContent.classList.add('p-modal');
                domValidation.classList.add('dom-validation');
                modalContent.innerHTML = resp.msg;
                domValidation.innerHTML = msgValid;

                localStorage.setItem('name', nameField.value);
                localStorage.setItem('lastName', lastNameField.value);
                localStorage.setItem('dni', dniField.value);
                localStorage.setItem('dob', dateField.value);
                localStorage.setItem('phone', phoneNumberField.value);
                localStorage.setItem('address', addressField.value);
                localStorage.setItem('city', cityField.value);
                localStorage.setItem('zip', zipCodeField.value);
                localStorage.setItem('email', emailField.value);
                localStorage.setItem('password', passField.value);
                localStorage.setItem('repeatPassword', repeatPassField.value);

            })
            .catch(function (error) {

                modal.style.display = "flex";
                modalContent.classList.add('error-title');
                domValidation.classList.add('error-text');
                modalContent.classList.remove('p-modal');
                domValidation.classList.remove('dom-validation');
                modalContent.innerHTML = 'Registration Error';
                domValidation.innerHTML = error;

            });
    }
}

window.onload = function() {
    var nameStorage = localStorage.getItem('name');
    var lastNameStorage = localStorage.getItem('lastName');
    var dniStorage = localStorage.getItem('dni');
    var dobStorage = localStorage.getItem('dob');
    var phoneStorage = localStorage.getItem('phone');
    var addressStorage = localStorage.getItem('address');
    var cityStorage = localStorage.getItem('city');
    var zipStorage = localStorage.getItem('zip');
    var emailStorage = localStorage.getItem('email');
    var passwordStorage = localStorage.getItem('password');
    var repeatPasswordStorage = localStorage.getItem('repeatPassword');

    if(nameStorage != '') {
        nameField.value = nameStorage;
    }
    if(lastNameStorage != '') {
        lastNameField.value = lastNameStorage;
    }
    if(dniStorage != '') {
        dniField.value = dniStorage;
    }
    if(dobStorage != '') {
        dateField.value = dobStorage;
    }
    if (phoneStorage != '') {
        phoneNumberField.value = phoneStorage;
    }
    if(addressStorage != '') {
        addressField.value = addressStorage;
    }
    if (cityStorage != '') {
        cityField.value = cityStorage;
    }
    if (zipStorage != '') {
        zipCodeField.value = zipStorage;
    }
    if (emailStorage != '') {
        emailField.value = emailStorage;
    }
    if (passwordStorage != '') {
        passField.value = passwordStorage;
    }
    if(repeatPasswordStorage != '') {
        repeatPassField.value = repeatPasswordStorage;
       }
}