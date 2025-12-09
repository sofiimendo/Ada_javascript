// ● Ejercicio 1 -
// Declarar dos variables: Nuestra tarea será declarar dos variables: una con el nombre edad y la otra con el nombre peso.
// Después deberás asignarle un valor.
// Pista: Recordemos que para crear una variable debemos utilizar la palabra reservada "let", seguida del nombre con el cual luego le haremos referencia.

//Importo libreria
const prompt = require("prompt-sync")({ sigint: true });

// Declaración de variables usando "let"
let edad = 31;     // Edad asignada
let peso = 77;     // Peso en kg

console.log(`🧁 Tu edad es: ${edad}`);
console.log(`⚖️ Tu peso es: ${peso} kg`);