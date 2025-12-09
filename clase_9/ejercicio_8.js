// ● Ejercicio 8:
// Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.
// Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la formula)

const prompt = require("prompt-sync")({ sigint: true });


let lado1 = parseFloat(prompt("Ingrese la longitud del lado 1: "));
let lado2 = parseFloat(prompt("Ingrese la longitud del lado 2: "));
let lado3 = parseFloat(prompt("Ingrese la longitud del lado 3: "));

// Un triángulo es:
// 🔹 Equilátero → Todos los lados iguales
// 🔹 Isósceles → Dos lados iguales
// 🔹 Escaleno → Todos los lados diferentes

if (lado1 === lado2 && lado2 === lado3) {
    console.log("🔺 El triángulo es EQUILÁTERO (todos los lados iguales).");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("🔻 El triángulo es ISÓSCELES (dos lados iguales).");
} else {
    console.log("⚠️ El triángulo es ESCALENO (todos los lados diferentes).");
}