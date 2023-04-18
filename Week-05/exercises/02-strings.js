// Strings

//  a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
//     (utilizar toUpperCase).

var strA = 'characters';

console.log('Exercise 2.a');
console.log(strA.toUpperCase());

//  b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
//     primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var strB = 'characters';

var cutCharacterB = strB.substring(0, 5);

console.log('Exercise 2.b');
console.log(cutCharacterB);

//  c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
//     últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var strC = 'characters';

var cutCharacterC = strC.substring(strC.length - 3);

console.log('Exercise 2.c');
console.log(cutCharacterC);

//  d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
//     primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
//     (utilizar substring, toUpperCase, toLowerCase y el operador +).

var strD = 'characters';

var firstUpperCase = strD.substring(0,1).toUpperCase() + strD.substring(1);

console.log('Exercise 2.d');
console.log(firstUpperCase);

//  e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
//     Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var strE = 'numeric characters';

var space = strE.indexOf(' ');

console.log('Exercise 2.e');
console.log(space);

//  f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio
//     entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que
//     tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
//     (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var longString = 'software developers';

var firstLetterUpperCase = longString.substring(0, 1).toUpperCase();
var addRestLowerCaseA = longString.substring(1, longString.indexOf(' '));
var joinWordA = firstLetterUpperCase + addRestLowerCaseA;

var secondLetterUpperCase = longString.substring(longString.indexOf(' '), longString.indexOf(' ') + 2).toUpperCase();
var addRestLowerCaseB = longString.substring(longString.indexOf(' ') + 2);
var joinWordB = secondLetterUpperCase + addRestLowerCaseB;

var sumWords = joinWordA + joinWordB;

console.log('Exercise 2.f');
console.log(sumWords);