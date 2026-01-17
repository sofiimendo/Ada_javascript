// Calcular el precio final con IVA Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.

const prompt = require("prompt-sync")({ sigint: true });

const calcularPrecioFinal = (precio, iva) => precio + (precio * iva / 100);

let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let iva = parseFloat(prompt("Ingrese el IVA:"));

console.log("Precio final:", calcularPrecioFinal(precio, iva));
