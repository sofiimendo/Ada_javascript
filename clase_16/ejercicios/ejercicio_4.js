// Calcula la suma total de los números
// Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de sumarlos todos juntos.
// Al finalizar, imprime el total en la consola.

const numeros = [1, 2, 3, 4];

const sumaTotal = numeros.reduce((acc, num) => acc + num, 0);

console.log("➕ Suma total:", sumaTotal);
