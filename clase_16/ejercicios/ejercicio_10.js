// Construye una frase
// Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'],
// queremos construir una frase completa concatenando cada palabra en orden, separadas por espacios.

const palabras = ["Me", "gusta", "aprender", "JavaScript"];

const frase = palabras.reduce(
    (acc, palabra) => acc + " " + palabra
);

console.log("📝 Frase:", frase);
