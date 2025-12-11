// Ejercicio 5: Uso de Arrays y Condicionales
// Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su desarrollo)


// 📥 Importación de librería
const prompt = require("prompt-sync")({ sigint: true });

// 🌷 Array vacío para almacenar los nombres
let nombres = [];

// 🌼 Pedimos los nombres separados por comas
let pedidoNombres = prompt("🌸 Ingresá 5 nombres separados por comas (ej: ana, lola, pepa): ");

// 🌙 Convertimos el string en un array y limpiamos espacios
nombres = pedidoNombres.split(",").map(nombre => nombre.trim());

// 🌈 Mostramos el array
console.log("💫 Los nombres ingresados son:", nombres);

// 🌼 Verificación
let nombre = prompt("✨ Ingresá un nombre para buscar: ");

if (nombres.includes(nombre)) {
    console.log(`💖 El nombre "${nombre}" SÍ está en la lista ✨`);
} else {
    console.log(`🌙 El nombre "${nombre}" NO está en la lista 💭`);
}