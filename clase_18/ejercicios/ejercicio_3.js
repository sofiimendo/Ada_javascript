// Encontrar el número faltante

// Dada una matriz de n-1 números enteros únicos en el rango de 1 a n, encuentra el número que falta en la secuencia

function encontrarNumeroFaltante(arr, n) {
    const sumaTotal = (n * (n + 1)) / 2;
    const sumaArr = arr.reduce((acc, num) => acc + num, 0);
    return sumaTotal - sumaArr;
}


console.log(encontrarNumeroFaltante([1, 2, 4, 5], 5));
console.log(encontrarNumeroFaltante([2, 3, 1, 5], 5)); 
