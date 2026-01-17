// Clasificación de edades Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.


const prompt = require("prompt-sync")({ sigint: true });

const clasificarEdad = edad => {
    if (edad < 12) return "Niño";
    if (edad < 18) return "Adolescente";
    if (edad < 60) return "Adulto";
    return "Adulto mayor";
};

let edad = parseInt(prompt("Ingrese su edad:"));
console.log(clasificarEdad(edad));
