// ● Ejercicio 2:
// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores
// numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está
// dentro del rango definido por las constantes.

const prompt = require("prompt-sync")({ sigint: true });

const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 50;

let nroUsuario = parseInt(prompt("🔢 Ingrese un número: "));

if (nroUsuario >= RANGO_MINIMO && nroUsuario <= RANGO_MAXIMO) {
    console.log(`✅ El número ${nroUsuario} está dentro del rango (${RANGO_MINIMO} - ${RANGO_MAXIMO}).`);
} else {
    console.log(`❌ El número ${nroUsuario} está fuera del rango (${RANGO_MINIMO} - ${RANGO_MAXIMO}).`);
}