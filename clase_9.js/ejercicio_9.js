// ● Ejercicio 9:
// Define una constante PI con el valor de pi (3.14159).
// Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI.

const prompt = require("prompt-sync")({ sigint: true });

const PI = 3.14159;
let radioCirculo = parseFloat(prompt("🔵 Ingrese el radio de un círculo: "));

// Fórmulas:
// Área = PI * radio^2
// Perímetro = 2 * PI * radio

let calculoArea = PI * (radioCirculo ** 2);// Uso radioCirculo ** 2 porque ** es el operador de potencia en JavaScript, y así calculo radio al cuadrado (radio * radio), tal como pide la fórmula del área.
let calculoPerimetro = 2 * PI * radioCirculo;

console.log(`📐 El área del círculo es: ${calculoArea.toFixed(2)}`);
console.log(`📏 El perímetro del círculo es: ${calculoPerimetro.toFixed(2)}`);