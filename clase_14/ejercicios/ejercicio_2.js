// Calcular promedio de calificaciones Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.

const prompt = require("prompt-sync")({ sigint: true });

const calcularPromedio = (a, b, c, d, e) => (a + b + c + d + e) / 5;

let n1 = parseFloat(prompt("Nota 1:"));
let n2 = parseFloat(prompt("Nota 2:"));
let n3 = parseFloat(prompt("Nota 3:"));
let n4 = parseFloat(prompt("Nota 4:"));
let n5 = parseFloat(prompt("Nota 5:"));

console.log("Promedio:", calcularPromedio(n1, n2, n3, n4, n5));
