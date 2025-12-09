// ● Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el precio
// final de un producto después de aplicar un descuento. Pide al usuario que ingrese
// el precio original y el porcentaje de descuento, y muestra el precio final.
// Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse así:
// let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

//Importacion de libreria
const prompt = require("prompt-sync")({ sigint: true });

// 1) Pedimos datos al usuario (float porque pueden tener decimales)
let precioOriginal = parseFloat(prompt("💸 Ingrese el precio original del producto: "));
let porcentajeDescuento = parseFloat(prompt("🏷️ Ingrese el porcentaje de descuento: "));

// 2) Cálculo del monto descontado
// Fórmula: montoDescuento = precioOriginal * (porcentajeDescuento / 100)
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

// 3) Cálculo del precio final
let precioFinal = precioOriginal - montoDescuento;

// 4) Mostramos el resultado
console.log(`✨ El precio final del producto es: $${precioFinal.toFixed(2)}`);