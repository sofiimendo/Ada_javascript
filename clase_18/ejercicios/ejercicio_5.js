// Servicio meteorológico

// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un objeto temperatura donde registra día —valor numérico del día—, mes —valor numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

const temperaturas = [
    { dia: 1, mes: 1, tempMax: 30, tempMin: 20 },
    { dia: 2, mes: 1, tempMax: 28, tempMin: 18 },
    { dia: 3, mes: 1, tempMax: 33, tempMin: 22 },
    { dia: 4, mes: 1, tempMax: 25, tempMin: 16 }
];

// a) Ordenar por tempMin (menor a mayor)
const ordenPorMin = [...temperaturas].sort((a, b) => a.tempMin - b.tempMin);

// b) Ordenar por tempMax (mayor a menor)
const ordenPorMax = [...temperaturas].sort((a, b) => b.tempMax - a.tempMax);

console.log("a) Por tempMin asc:", ordenPorMin);
console.log("b) Por tempMax desc:", ordenPorMax);
