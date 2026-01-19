// Cuenta la cantidad total de letras
// Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella'].
// Queremos saber cuántas letras hay en total entre todas las palabras.

const palabras = ["sol", "luna", "estrella"];

const totalLetras = palabras.reduce(
    (acc, palabra) => acc + palabra.length,
    0
);

console.log("🔠 Total de letras:", totalLetras);
