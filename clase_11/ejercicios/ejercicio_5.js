// Ejercicio 5: Encuentra los números pares entre dos valores
// Consigna:
// Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.

//Importacion de libreria
const prompt = require("prompt-sync")({ sigint: true });

//Ingreso de datos por el usuario
let inicio = parseInt(prompt("🔹 Ingrese el número inicial: "));
let fin = parseInt(prompt("🔹 Ingrese el número final: "));

if (inicio > fin) {
    console.log("❌ Los valores son inválidos: el inicio no puede ser mayor que el fin.");
} else {
    console.log(`✨ Números pares entre ${inicio} y ${fin}:`);

    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            console.log(`➡️ ${i}`);
        }
    }
}