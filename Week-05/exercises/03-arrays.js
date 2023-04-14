// Arrays

//  a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
//     "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Exercise 3.a');
console.log(months[4] + ' y ' + months[10]);

//  b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Exercise 3.b');
console.log(months.sort());

//  c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

months.unshift('meses');
months.push('meses');

console.log('Exercise 3.c');
console.log(months);

//  d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

months.shift();
months.pop();

console.log('Exercise 3.d');
console.log(months);

//  e. Invertir el orden del array (utilizar reverse).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Exercise 3.e');
console.log(months.reverse());

//  f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión
//     - (utilizar join).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Exercise 3.f');
console.log(months.join('-'));

//  g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Exercise 3.g');
console.log(months.slice(4, 11));