/* Esto es un
comentario */

// Esto también es un comentario

console.log("Hola mundo!");

console.log("Ahora se realizará la operación 10+35:");

// Como no se trata de strings, no van entre comillas
console.log(10+35);

// También se puede usar comillas simples:

console.log('Este texto fue escrito usando comillas simples');

/* Ahora se realizarán algunas operaciones,
usando distintos tipos de datos */

// Con strings
console.log("Concatenación de Strings 'a' y 'b'");
console.log("a"+"b");

console.log("'Multiplicación' de Strings 'a' y 'b', que retornará NaN (Not a Number) porque la multiplicación es exclusiva de valores tipo Number");
console.log("a"*"b");

// Aclaración: La interpolación aún no se utiliza en ES5

// Con números
console.log("Suma entre 10 y 35");
console.log(10+35);

console.log("Resta entre 10 y 35");
console.log(10-35);

console.log("Producto entre 10 y 35");
console.log(10*35);

console.log("División entre 10 y 35");
console.log(10/35);

// Booleanos
console.log("Evaluando booleanos true y false:");
console.log(true);
console.log(false);

console.log("Operando con booleanos");
console.log(true || false); // OR
console.log(true && true); // AND