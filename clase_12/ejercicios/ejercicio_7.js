// Ejercicio 7: Matriz 5x5
// Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en la matriz.

// 📥 Matriz 5x5 con números enteros y positivos
let matriz = [
    [5,10,15,20,25],
    [1,3,5,7,9],
    [2,4,6,8,10],
    [7,12,19,13,15],
    [100,350,535,420,173],
];

// 🌷 Variable acumuladora
let suma = 0;

// 🌼 Recorrido total de la matriz
for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        let valor = matriz[fila][columna];
        suma += valor; // ✨ sumamos cada valor
    }
}

// 🌈 Resultado final
console.log("💖 La suma total es:", suma);

