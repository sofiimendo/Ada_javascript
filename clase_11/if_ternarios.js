//Ejemplo verificar si una persona es mayor de edad

// 1- Importacion de la libreria

const prompt = require("prompt-sync")({ sigint: true });

// 2- Entrada de datos: ingresar la edad
let edad = parseInt(prompt('Ingrese su edad: '));

// 3- Logica con el if ternario
// El if ternario tiene una forma abreviada en solo en una sola linea
//Estructura del if ternario:
// (condicion) ? primera exprecion: segunda exprecion;
//El signo de interrogacion (?) actuca como el "if" (se cumple esto?)
//Los dos puntos (:) actuan como el "else"(si no, esto otro)

let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad";

console.log(mensaje);
