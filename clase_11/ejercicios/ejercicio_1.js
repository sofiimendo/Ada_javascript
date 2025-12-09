// Ejercicio 1: ¿Positivo, negativo o cero?
// Consigna:
// Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.

// 📥 Importación de librería para recibir datos del usuario
const prompt = require("prompt-sync")({ sigint: true });

// 🧮 Ingreso del número
let numero = parseInt(prompt("🔢 Ingrese un número: "));

// ✨ Lógica usando operador ternario (if compacto)
// Explicación: evaluamos si el número es mayor, menor o igual a 0 en una sola línea.
let mensaje = numero > 0 ? "✨ El número es POSITIVO" : numero < 0 ? "🌙 El número es NEGATIVO" : "⚪ El número es CERO";

// 📤 Mostramos el resultado
console.log(mensaje);