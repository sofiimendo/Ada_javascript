//Una matriz es una variable cuyo valor es un array.

//🌸 1. ¿Qué es una matriz?

//Una matriz en JavaScript es simplemente un array dentro de otro array.

//Visualmente:

let matriz = [
  [1, 2, 3],     // fila 0
  [4, 5, 6],     // fila 1
  [7, 8, 9]      // fila 2
];

//Es como una tabla de filas y columnas

// |            | Col 0 | Col 1 | Col 2 |
// | ---------- | ----- | ----- | ----- |
// | **Fila 0** | 1     | 2     | 3     |
// | **Fila 1** | 4     | 5     | 6     |
// | **Fila 2** | 7     | 8     | 9     |

// 🌸 2. Cómo acceder a un dato de la matriz

// Siempre se hace así:

// matriz[fila][columna]


// Ejemplos:

// matriz[0][1]  // → 2
// matriz[2][0]  // → 7
// matriz[1][2]  // → 6

// 🌸 3. Cómo recorrer una matriz (lo MÁS importante)

// Para recorrer todas las posiciones, se usan dos for:

// 🔁 For externo → recorre las filas
// 🔁 For interno → recorre las columnas dentro de cada fila

// Ejemplo:
for (let i = 0; i < matriz.length; i++) {          // filas
    for (let j = 0; j < matriz[i].length; j++) {   // columnas
        console.log(matriz[i][j]);
    }
}
// 📌 i = número de fila
// 📌 j = número de columna

//🌸 4. Recorrer una matriz con emojis
let matrizEmoji = [
["🍎", "🍌", "🍓"],
["🍕", "🍔", "🌭"],
["💖", "✨", "🌸"]
];

for (let fila = 0; fila < matrizEmoji.length; fila++) {
    for (let col = 0; col < matrizEmoji[fila].length; col++) {
    console.log(`Fila ${fila}, Columna ${col}: ${matrizEmoji[fila][col]}`);
    }
}

// 🌸 5. Agregar elementos a una matriz
// ➕ Agregar fila:
// matriz.push([10, 11, 12]);

// ➕ Agregar elemento dentro de una fila:
// matriz[0].push(4);

// 🌸 6. Ejemplo práctico (RE usado en ejercicios)

// Sumar todos los valores de una matriz:

let suma = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j];
    }
}

console.log(`La suma total es: ${suma}`);

// 🌸 7. Mini guía:
// | Concepto           | Significa                         |
// | ------------------ | --------------------------------- |
// | `matriz.length`    | cantidad de filas                 |
// | `matriz[i].length` | cantidad de columnas en la fila i |
// | `matriz[i][j]`     | elemento en fila i, columna j     |
// | doble for          | recorre la matriz completa        |
