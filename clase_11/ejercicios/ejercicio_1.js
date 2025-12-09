// Ejercicio 1: ¿Positivo, negativo o cero?
// Consigna:
// Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.

// Importamos la librería para pedir datos
const prompt = require("prompt-sync")({ sigint: true });

// Entrada del usuario
let numero = parseInt(prompt("Ingrese un número: "));

// Lógica con operador ternario (forma compacta de if/else)
// Evaluamos primero si es mayor a 0, luego si es menor, y si no… es cero ✨
let mensaje = numero > 0 ? "🌟 El número es POSITIVO" : numero < 0 ? "🌙 El número es NEGATIVO" : "⭕ El número es CERO";

// Mostramos el resultado
console.log(mensaje);