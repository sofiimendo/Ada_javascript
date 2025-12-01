// 🌸 Ejercicio 1: Calculadora de Descuento
// Calcula el precio final de un producto después de aplicar un descuento.

const prompt = require("prompt-sync")({ sigint: true });

// 👉 Solicitud de datos al usuario
let precioOriginal = Number(prompt("💰 Ingrese el precio del producto: "));
let porcentajeDescuento = Number(prompt("🔻 Ingrese el porcentaje de descuento: "));

// 👉 Cálculos
let montoDescuento = (precioOriginal * porcentajeDescuento) / 100;
let precioFinal = precioOriginal - montoDescuento;

// 👉 Resultado
console.log(`✨ El precio final del producto es: $${precioFinal}`);


