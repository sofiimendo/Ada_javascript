// ● Ejercicio 7:
// Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras.
// Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462)

const prompt = require("prompt-sync")({ sigint: true });

let pesoKg = parseFloat(prompt("⚖️ Ingrese su peso en kg: "));
let pesoLibras = pesoKg * 2.20462;

//Uso el .toFixed(2) para que solo muestrre 2 decimales.
console.log(`✨ Su peso en libras es: ${pesoLibras.toFixed(2)} lb`);