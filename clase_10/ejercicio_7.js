// ● Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y
// luego intercambiá sus valores. Muestra los valores antes y después del
// intercambio en la consola.
// Para intercambiar valores puedes usar varios métodos(usando una variable
// temporal, aritmética o asignación simultánea), eres libre de elegir el que desees,
// eso si, investiga sobre el que usarás.

// Valores iniciales
let a = 5;
let b = 10;

console.log(`🔹 Antes del intercambio → a: ${a}, b: ${b}`);

// Método 1: usando una variable temporal
let temp = a;   // temp guarda el valor original de a
a = b;          // a toma el valor de b
b = temp;       // b toma el valor almacenado en temp

console.log(`🔸 Después del intercambio → a: ${a}, b: ${b}`);