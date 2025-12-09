// Ejercicio 3: ¿Sabes contar?
// Consigna:
// Crea un programa que le pida al usuario un número positivo. El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. Usa un ciclo for para realizar la tarea.

//Importacion de libreria
const prompt = require("prompt-sync")({ sigint: true });

//Entrada de datos por el usuario
let numeroPositivo = parseInt(prompt("🔢 Ingrese un número positivo: "));

// Bucle for desde 1 hasta el número ingresado
for (let i = 1; i <= numeroPositivo; i++) {
    console.log(`➡️  ${i}`);
}