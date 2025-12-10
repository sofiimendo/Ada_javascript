// Ejercicio 1: While
// Crea un programa que solicite al usuario ingresar números continuamente hasta
// que el usuario ingrese un número negativo. Luego, imprime la suma de todos los
// números ingresados.

// 📥 Importación de librería
const prompt = require("prompt-sync")({ sigint: true });

// ➤ Primer número ingresado por el usuario
let numero = parseInt(prompt("✨ Ingresá un número: "));

// 💗 Variable para acumular la suma
let suma = 0;

// 🔁 Mientras el número sea positivo, seguimos sumando
while (numero >= 0) {
    suma += numero; // 💫 Sumamos
    numero = parseInt(prompt("🌙 Ingresá otro número: "));
}

// 🌟 Resultado final
console.log(`💖 La suma total es: ${suma}✨`);