// Calcular descuento por cantidad Solicita al usuario la cantidad de productos comprados y el precio unitario. Usa una función flecha para calcular el total con descuento según la cantidad.


const prompt = require("prompt-sync")({ sigint: true });

const calcularTotal = (cantidad, precio) => {
    let total = cantidad * precio;

    if (cantidad >= 10) {
        total *= 0.8;
    } else if (cantidad >= 5) {
        total *= 0.9;
    }

    return total;
};

let cantidad = parseInt(prompt("Cantidad de productos:"));
let precioUnitario = parseFloat(prompt("Precio unitario:"));

console.log("Total a pagar:", calcularTotal(cantidad, precioUnitario));
