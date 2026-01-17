// 📏 Clasificación de palabras según su longitud

// Oración: "JavaScript es un lenguaje poderoso y versátil"

// Dividir en palabras.

// Clasificar: cortas (<5) y largas (>=5).

// Mostrar ambas listas.

let oracion = "JavaScript es un lenguaje poderoso y versátil";
let palabras = oracion.split(" ");

let cortas = [];
let largas = [];

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length < 5) {
        cortas.push(palabras[i]);
    } else {
        largas.push(palabras[i]);
    }
}

console.log("📏 Cortas:", cortas);
console.log("📏 Largas:", largas);
