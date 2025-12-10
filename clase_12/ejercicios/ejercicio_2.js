// Ejercicio 2: Do While
// Escribe un programa que solicite al usuario ingresar una contraseña. Si la
// contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la
// correcta. La contraseña correcta es "1234"


// 📥 Importación de librería
const prompt = require("prompt-sync")({ sigint: true });

// 🔒 Contraseña correcta
const CONTRASEÑA = 1234;

// 💗 Variable donde guardamos lo que escribe el usuario
let contraseñaUsuario;

// 🔁 Bucle do...while
do {
    contraseñaUsuario = parseInt(prompt("✨ Ingresá tu contraseña: "));

    if (contraseñaUsuario !== CONTRASEÑA) {
        console.log("🌙 Contraseña incorrecta, intentá de nuevo…");
    }

} while (contraseñaUsuario !== CONTRASEÑA);

// 🌈 Mensaje final
console.log("💖 Contraseña correcta, bienvenida ✨");