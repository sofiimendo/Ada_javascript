// Ejercicio 4: Ciclo For - Array
// Crear un programa que permita registrar las notas de varios estudiantes usando
// arrays y mostrarlas por pantalla:
// 1. Crear un array para almacenar las notas.
// 2. Define un array vacío llamado notas donde almacenaremos las notas de los
// estudiantes.
// 3. Pide al usuario que ingrese las notas de varios estudiantes una por una
// utilizando el método prompt.
// 4. Usa un bucle for para solicitar las notas y asignarlas directamente a
// posiciones específicas del array notas.
// 5. Imprime en consola las notas ingresadas usando el array notas

// 📥 Importación de librería
const prompt = require("prompt-sync")({ sigint: true });

// 🌷 Array vacío para almacenar las notas
let notas = [];

// 🌼 Cantidad de notas a ingresar
let cantidadNotas = parseInt(prompt("🌸 ¿Cuántas notas querés ingresar?: "));

// 🌙 Bucle para pedir cada nota
for (let i = 0; i < cantidadNotas; i++) {
    let nota = parseInt(prompt("✨ Ingresá una nota: "));
    notas.push(nota); // 💕 Guardamos la nota en el array
}

// 🌈 Mostrar todas las notas ingresadas
console.log("💖 Las notas ingresadas son:", notas);