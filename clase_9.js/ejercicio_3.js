// ● Ejercicio 3:
// Declara dos variables booleanas condicion1 y condicion2.
// Pide al usuario que ingrese dos valores booleanos (true o false) y muestra el resultado de diversas combinaciones lógicas.

//Importacion de libreria
const prompt = require("prompt-sync")({ sigint: true });

// Convierto el texto ingresado ("true"/"false") a un booleano real.
let condicion1 = prompt("Ingrese true o false: ").toLowerCase() === "true";
let condicion2 = prompt("Ingrese true o false: ").toLowerCase() === "true";

// Resultados lógicos
console.log(`🔹 AND (&&): ${condicion1 && condicion2}`);
console.log(`🔹 OR (||): ${condicion1 || condicion2}`);
console.log(`🔹 NOT (!condicion1): ${!condicion1}`);
console.log(`🔹 NOT (!condicion2): ${!condicion2}`);