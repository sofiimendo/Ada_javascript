// ● Ejercicio 5:
// Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de los tres.

const prompt = require("prompt-sync")({ sigint: true });

let numeroUno = parseInt(prompt("🔢 Ingrese un número: "));
let numeroDos = parseInt(prompt("🔢 Ingrese otro número: "));
let numeroTres = parseInt(prompt("🔢 Ingrese un último número: "));

if (numeroUno > numeroDos && numeroUno > numeroTres) {
    console.log(`✨ El número mayor es: ${numeroUno}`);
} else if (numeroDos > numeroUno && numeroDos > numeroTres) {
    console.log(`✨ El número mayor es: ${numeroDos}`);
} else {
    console.log(`✨ El número mayor es: ${numeroTres}`);
}