//  ● Ejercicio 1:
// Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese
// dos números y muestra cuál es mayor o si son iguales.

const prompt = require("prompt-sync")({ sigint: true });

let numero1 = parseInt(prompt("Por favor ingrese un número: "));
let numero2 = parseInt(prompt("Por favor ingrese otro número: "));

if (numero1 > numero2) {
    console.log(`🔺 El número ${numero1} es mayor que ${numero2}.`);
} else if (numero1 === numero2) {
    console.log(`⚖️ Los números ${numero1} y ${numero2} son iguales.`);
} else {
    console.log(`🔺 El número ${numero2} es mayor que ${numero1}.`);
}

