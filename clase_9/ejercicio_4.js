// ● Ejercicio 4:
// Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si el nombre ingresado es igual a tu nombre.

//Importacion de libreria
const prompt = require("prompt-sync")({ sigint: true });

// Convierto el nombre ingresado a minúsculas para evitar errores de mayúsculas.
let nombre = prompt('Ingrese su nombre: ').toLowerCase();

if (nombre === 'sofia') {  // Comparo contra la versión en minúsculas
    console.log('💗 ¡Tenés el mejor nombre del mundo!');
} else {
    console.log('⚠️ El nombre ingresado no coincide con el mejor nombre del mundo.');
}