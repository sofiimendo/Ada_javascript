// Ejercicio 2: Do While
// Escribe un programa que solicite al usuario ingresar una contraseña. Si la
// contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la
// correcta. La contraseña correcta es "1234"


// 📥 Importación de librería
const prompt = require("prompt-sync")({ sigint: true });

// 🔒 Contraseña correcta
const PASSWORD = 1234;

// 💗 Variable donde guardamos lo que escribe el usuario
let passwordUsuario;

// 🔁 Bucle do...while
do {
    passwordUsuario = parseInt(prompt("✨ Ingresá tu contraseña: "));

    if (passwordUsuario !== PASSWORD) {
        console.log("🌙 Contraseña incorrecta, intentá de nuevo…");
    }

} while (passwordUsuario !== PASSWORD);

// 🌈 Mensaje final
console.log("💖 Contraseña correcta, bienvenida ✨");