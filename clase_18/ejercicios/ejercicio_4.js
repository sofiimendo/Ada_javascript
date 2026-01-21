// Concurso de Likes

// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

const likes = [120, 45, 300, 210, 99, 150, 8, 76, 180, 60, 250, 33, 190, 15, 270];

// Ordenar de mayor a menor (sin modificar el original)
const ordenados = [...likes].sort((a, b) => b - a);

const mayor = ordenados[0];
const segundo = ordenados[1];
const tercero = ordenados[2];
const menor = ordenados[ordenados.length - 1];

console.log("Mayor:", mayor);
console.log("Segundo:", segundo);
console.log("Tercero:", tercero);
console.log("Menor:", menor);
