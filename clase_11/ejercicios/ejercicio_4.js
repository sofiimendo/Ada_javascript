// Ejercicio 4: ¿Es par o impar?
// Consigna:
// Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso.

//Importacion de libreria
const prompt = require("prompt-sync")({ sigint: true });

//Entrada de datos por el usuario
let numero = parseInt(prompt("🔢 Ingrese un número: "));

// Un número es par si el resto de dividirlo por 2 es 0
let mensaje = numero % 2 === 0 ? `✨ El número ${numero} es PAR (se puede dividir en dos partes iguales).` : `🌙 El número ${numero} es IMPAR (no se puede dividir en partes iguales).`;

console.log(mensaje);