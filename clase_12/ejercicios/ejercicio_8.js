//  Ejercicio 8: Rojo y Verde
// Para este ejercicio vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.
// Rojo: 505
// Verde: 505
// IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el método “push” en los Arrays. ¡Este método lo veremos en las próximas clases, pero si desean pueden investigarlo para resolver este desafío!

// 📦 Creo la matriz vacía
let matriz = [];
let contador = 1;

// 🌼 Genero la matriz 10x10 con números del 1 al 100
for (let fila = 0; fila < 10; fila++) {
    let filaActual = [];

    for (let columna = 0; columna < 10; columna++) {
        filaActual.push(contador); // ➕ agregamos el número
        contador++;                // 🔼 aumentamos el contador
    }

    matriz.push(filaActual); // 📥 agregamos la fila a la matriz
}

// 🖨️ Muestro la matriz
console.log("📊 Matriz generada:", matriz);

// 🔴 FUNCIÓN: Sumar diagonal roja
function sumarDiagonalRoja(matriz) {
    let suma = 0;

    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length; columna++) {

            let valor = matriz[fila][columna];

            // ❤️ Diagonal roja → fila === columna
            if (fila === columna) {
                suma += valor;
            }
        }
    }

    return suma;
}

// 🟢 FUNCIÓN: Sumar diagonal verde
function sumarDiagonalVerde(matriz) {
    let suma = 0;

    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length; columna++) {

            let valor = matriz[fila][columna];

            // 💚 Diagonal verde → columna === (length - 1 - fila)
            if (columna === matriz.length - 1 - fila) {
                suma += valor;
            }
        }
    }

    return suma;
}

// 🌈 Resultados finales
console.log("🔴 Suma diagonal roja:", sumarDiagonalRoja(matriz));   // 👉 505
console.log("🟢 Suma diagonal verde:", sumarDiagonalVerde(matriz)); // 👉 505