//Ejemplo: programa q simula un loro: repite lo q esscucha el usuario 5 veces

const prompt = require("prompt-sync")({ sigint: true });

//entrada de datos
//le pedimos al usuario la frase q el loro va a repetir

let fraseLoro = prompt("Escribi lo que quieras que el loro repita: ")
console.log("----- el loro empieza a repetir ------")

//Estructura del for (bucle)
//el for es ideal cdo sabemos d antemano cras veces queremos q se repita
// tiene 3 partes separas x punto y coma (;)
//a. Inicio: (let i = 1): creamos un contador q empieza en 1
//b. Condicion (1<=5) el ciclo sigue mientras el contador sea menor o igual a 5
//c.Modificador incremento(i++) al final de cada vuelta le suma 1 al contador

for (let i = 1; i <= 5; i++){
    //lo q pongamos aqui adentro se va a ejecutar 5 veces.
    console.log(i + " - " + fraseLoro);
}
console.log("----- el loro termina de repetir ------")


