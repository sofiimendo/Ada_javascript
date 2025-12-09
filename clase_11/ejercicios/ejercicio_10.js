// Ejercicio 10: Adivina el número
// Consigna:
// Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.

const prompt = require("prompt-sync")({ sigint: true });

let numeroSecreto = Math.floor(Math.random() * 10) + 1;

console.log("🎲 Adivina el número entre 1 y 10. Tienes 3 intentos:");

let acierto = false;

for (let i = 1; i <= 3; i++) {
    let intento = parseInt(prompt(`Intento ${i}: `));

    if (intento === numeroSecreto) {
        console.log(`🎉 ¡Correcto! El número era ${numeroSecreto}.`);
        acierto = true;
        break;
    }
}

if (!acierto) {
    console.log(`❌ No acertaste en 3 intentos. El número secreto era ${numeroSecreto}.`);
}

// Math.random() genera un número decimal entre 0 y 1.
// Lo multiplico por 10 para obtener un número entre 0 y 10.
// Math.floor() redondea hacia abajo para obtener un entero.
// Le sumo 1 para que el rango final sea 1 a 10.
