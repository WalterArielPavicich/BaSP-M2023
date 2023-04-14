// Strings

//  a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
//     (utilizar toUpperCase).

var strA = 'characters';

console.log('Exercise 2.a');
console.log(strA.toUpperCase());

//  b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
//     primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var strB = 'characters';

var cutCharacter = strB.substring(0, 5);

console.log('Exercise 2.b');
console.log(cutCharacter);

//  c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
//     últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var strC = 'characters';

var cuttCharacter = strC.substring(7);
var cutttCharacter = strC.substring(strC.length - 3);

console.log('Exercise 2.c');
console.log(cuttCharacter);
console.log(cutttCharacter);

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

var firstLetterUpperCase = longString.substring(0, 1).toUpperCase() + longString.substring(1, longString.indexOf(' '));
var secondLetterUpperCase = longString.substring(longString.indexOf(' '), longString.indexOf(' ') + 2).toUpperCase()
                            + longString.substring(longString.indexOf(' ') + 2);

var sumWords = firstLetterUpperCase + secondLetterUpperCase;

console.log('Exercise 2.f');
console.log(sumWords);