// Palíndromo

// Escribe una función que determine si una cadena dada es un palíndromo. Un palíndromo es una palabra, frase, número o secuencia de caracteres que se lee igual hacia adelante que hacia atrás, ignorando espacios, signos de puntuación y mayúsculas/minúsculas.

function esPalindromo(cadena) {
    const limpio = cadena
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""); // esto deja solo letras y números

    const invertido = limpio.split("").reverse().join("");
    return limpio === invertido;
}

console.log(esPalindromo("Neuquen"));
console.log(esPalindromo("Hola mundo"));

