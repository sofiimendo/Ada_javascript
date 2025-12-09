// ● Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa
// Corporal (IMC). El IMC se calcula con la fórmula:
// Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
// Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse así:
// let imc = peso / (altura * altura);

//Importacion de libreria
const prompt = require("prompt-sync")({ sigint: true });

// 1) Pedir datos al usuario (float porque pueden tener decimales)
let peso = parseFloat(prompt("⚖️ Ingrese su peso en kg: "));
let altura = parseFloat(prompt("📏 Ingrese su altura en metros (ej: 1.65): "));

// 2) Calcular IMC
let imc = peso / (altura * altura);  // Fórmula oficial

// 3) Mostrar resultado .toFixed para redondear decimales
console.log(`💗 Tu IMC es: ${imc.toFixed(2)}`);