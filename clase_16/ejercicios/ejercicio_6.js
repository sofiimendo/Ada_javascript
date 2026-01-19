// Agrega un prefijo y un sufijo a cada palabra
// Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript'].
// Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un sufijo "!".

const palabras = ["hola", "mundo", "javascript"];

const palabrasTransformadas = palabras.map(
    palabra => `¡${palabra}!`
);

console.log("✨ Palabras transformadas:", palabrasTransformadas);
