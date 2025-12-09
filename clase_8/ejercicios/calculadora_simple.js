// Ejercicio 4 - Calculadora Simple: Escribe un programa que pida al usuario dos números y una operación (suma, resta, multiplicación o división). Luego, realiza la operación indicada y muestra el resultado en la consola.
// Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides usar “let” para definir variables.
// Pista 2: Investiga que es parseFloat, ya que este ejercicio lo necesitaras.

// ℹ️ parseFloat convierte el texto ingresado por prompt en un número real.
const prompt = require("prompt-sync")({ sigint: true });

// 👉 Entrada de datos
let numero1 = parseFloat(prompt("🔢 Ingrese un número: "));
let numero2 = parseFloat(prompt("🔢 Ingrese otro número: "));
let operacion = prompt("🧮 Ingrese la operación (suma, resta, multiplicacion, division): ").toLowerCase().trim();
// Convierto lo que ingresa el usuario a minúsculas y sin espacios con .toLowerCase().trim().
// Esto sirve para evitar errores si escribe " SUMA ", "Resta", "Multiplicación", etc.
// Así comparo siempre contra una versión uniforme de la palabra y el programa no falla.

// 👉 Cálculos
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero2 !== 0 ? numero1 / numero2 : "❌ No se puede dividir por cero";
// (condición ? valorSiTrue : valorSiFalse) Significa: "Si se cumple la condición uso lo primero; si no, uso lo segundo".

// 👉 Lógica principal
if (operacion === "suma") {
    console.log(`✨ Resultado de la suma: ${suma}`);
} else if (operacion === "resta") {
    console.log(`✨ Resultado de la resta: ${resta}`);
} else if (operacion === "multiplicacion") {
    console.log(`✨ Resultado de la multiplicación: ${multiplicacion}`);
} else if (operacion === "division") {
    console.log(`✨ Resultado de la división: ${division}`);
} else {
    console.log("❗ Operación inválida. Intente nuevamente.");
}
