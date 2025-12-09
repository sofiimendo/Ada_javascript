// ● Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que convierta
// una temperatura dada en grados Celsius a grados Fahrenheit. La fórmula de
// conversión es:
// Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en
// Fahrenheit.
// Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse asi:
// let fahrenheit = celsius * 9 / 5 + 32;

//Importacion de libreria
const prompt = require("prompt-sync")({ sigint: true });

// 1) Pedimos la temperatura en Celsius y usamos parseFloat para permitir decimales
let celsius = parseFloat(prompt("🌡️ Ingrese la temperatura en °C: "));

// 2) Fórmula de conversión → Fahrenheit = (Celsius * 9/5) + 32
let fahrenheit = celsius * 9 / 5 + 32;

// 3) Mostramos el resultado y utilizamos .toFixed para redondear los decimales
console.log(`🔥 ${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F`);