// Funciones

//  a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la
//     función y guardar el resultado en una variable, mostrando el valor de dicha variable en la
//     consola del navegador.

function suma(x,y) {
    return x + y;
}

console.log('Exercise 6.a');
console.log(suma(7,99));

//  b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los
//     parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los
//     parámetros tiene error y retornar el valor NaN como resultado.

function sumValidation(x,y) {
    if(typeof(x) !== 'number' || typeof(y) !== 'number') {
        alert('invalid parameter');
        return NaN;
    } else {
        return x + y;
   }
}

console.log('Exercise 6.b');
console.log(sumValidation(7, 'a'));


//  c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero
//     si es un número entero.

function validateInteger(x) {
    return x % 1 === 0;
}

console.log('Exercise 6.c');
console.log(validateInteger(8.3));


//  d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del
//     ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un
//     alert con el error y retornar el número convertido a entero (redondeado).

function sumValidations(x,y) {
    if(typeof(x) !== 'number' || typeof(y) !== 'number') {
        alert('invalid parameter');
        return NaN;
    } else if(!validateInteger(x) || !validateInteger(y)) {
        alert('the number is not integer');
        var sum = x + y;
        return Math.round(sum);
    } else {
        return x + y;
    }
   }

console.log('Exercise 6.d');
console.log(tryValidation(7, 8));
console.log(tryValidation(7, 8.1));
console.log(tryValidation(7.1, 8.1));
console.log(tryValidation(7, 'a'));


//  e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva
//     función probando que todo siga funcionando igual que en el apartado anterior.

console.log('Exercise 6.e');

function sumValidationsE(x,y) {
    if(typeof(x) !== 'number' || typeof(y) !== 'number') {
        alert('invalid parameter');
        return NaN;
    } else if(!validateInteger(x) || !validateInteger(y)) {
        alert('the number is not integer');
        var sum = x + y;
        return Math.round(sum);
    } else {
        return x + y;
    }
   }

function tryValidation(x,y) {
    var validation = sumValidationsE(x,y);

    return validation;
}

console.log(tryValidation(7, 8));
console.log(tryValidation(7, 8.1));
console.log(tryValidation(7.1, 8.1));
console.log(tryValidation(7, 'a'));