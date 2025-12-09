// Ejercicio 7: Calculadora simple
// Consigna:
// Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.

// Importación de librería
const prompt = require("prompt-sync")({ sigint: true });

// Pedimos los números
let numero1 = parseFloat(prompt("🔢 Ingrese el primer número: "));
let numero2 = parseFloat(prompt("🔢 Ingrese el segundo número: "));

// Pedimos la operación
let operacion = prompt("🧮 Ingrese la operación (suma, resta, multiplicacion, division): ").toLowerCase().trim();

// Variable para guardar el resultado
let resultado;

// Lógica con switch
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        console.log(`➕ Resultado de la suma: ${resultado}`);
        break;

    case "resta":
        resultado = numero1 - numero2;
        console.log(`➖ Resultado de la resta: ${resultado}`);
        break;

    case "multiplicacion":
        resultado = numero1 * numero2;
        console.log(`✖️ Resultado de la multiplicación: ${resultado}`);
        break;

    case "division":
        if (numero2 === 0) {
            console.log("❌ No se puede dividir por cero.");
        } else {
            resultado = numero1 / numero2;
            console.log(`➗ Resultado de la división: ${resultado}`);
        }
        break;

    default:
        console.log("⚠️ Operación inválida. Ingrese suma, resta, multiplicacion o division.");
}