// Ejercicio 2: Semáforo inteligente
// Consigna:
// Vamos a programar un semáforo. Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde. Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
// ● Rojo: "Alto, no puedes avanzar."
// ● Amarillo: "Precaución, prepárate para avanzar."
// ● Verde: "Avanza con seguridad."
// Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, amarillo o verde."
// Utiliza un switch para resolver este ejercicio.


// 📌 Importación de librería
const prompt = require("prompt-sync")({ sigint: true });

// 🎨 Entrada del usuario (normalizamos con lowercase + trim)
let color = prompt("Ingrese un color del semáforo (rojo, amarillo, verde): ").toLowerCase().trim();

// 🧠 Lógica con switch
switch (color) {
    case "rojo":
        console.log("🔴 Alto, no puedes avanzar.");
        break;

    case "amarillo":
        console.log("🟡 Precaución, prepárate para avanzar.");
        break;

    case "verde":
        console.log("🟢 Avanza con seguridad.");
        break;

    default:
        console.log("⚠️ Color no reconocido. Debes ingresar: rojo, amarillo o verde.");
}