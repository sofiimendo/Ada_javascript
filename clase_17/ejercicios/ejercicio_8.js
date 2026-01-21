// Lugar y números(Búsqueda Binaria)

// Utilizar el algoritmo de búsqueda binaria para responder las posiciones de distintos números dentro de una lista.



function busquedaBinaria(arr, valor) {
    let inicio = 0;
    let fin = arr.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        if (arr[medio] === valor) return medio;
        if (arr[medio] < valor) inicio = medio + 1;
        else fin = medio - 1;
    }
    return -1;
}

const numeros = [1, 3, 5, 6, 9, 11];
console.log(busquedaBinaria(numeros, 6));

// Desafío extra

// Ordenar la lista usando bubble sort y luego aplicar búsqueda binaria.



function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    return arr;
}

const lista = [22, 5, 12, 100, 1];
const ordenada = bubbleSort([...lista]);

console.log("Posición del 12:", busquedaBinaria(ordenada, 12));
console.log("Posición del 5:", busquedaBinaria(ordenada, 5));
console.log("Posición del 22:", busquedaBinaria(ordenada, 22));
console.log("Posición del 100:", busquedaBinaria(ordenada, 100));