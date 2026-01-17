// Flores Favoritas Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones: 1. Inicializa un array vacío para almacenar las flores favoritas. 2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push). 3. Pregunta al usuario por una flor específica y verifica si está entre sus favoritas. 4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).


const prompt = require("prompt-sync")({ sigint: true });

let flores = [];

flores[0] = prompt("Flor favorita 1:");
flores[1] = prompt("Flor favorita 2:");
flores[2] = prompt("Flor favorita 3:");

let florBuscada = prompt("Ingrese una flor a buscar:");
let contador = 0;

for (let i = 0; i < flores.length; i++) {
    if (flores[i] === florBuscada) {
        contador++;
    }
}

console.log("Cantidad de veces mencionada:", contador);
git 