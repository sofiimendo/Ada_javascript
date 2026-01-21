// Manipulación de Arrays y Cadenas

// A partir del siguiente array de frases, escribe la función “procesarFrases” que realice las siguientes tareas:

// Convierta cada frase a minúsculas.

// Divida cada frase en palabras.

// Reemplace las palabras "malo" por "bueno".

// Combine las palabras de cada frase en una nueva cadena separada por espacios.

// Devuelva un nuevo array con las frases modificadas.

const frases = [
    "El clima es MALO hoy",
    "Este lobro es muy MALO",
    "El servicio aqui es MALO"
];

function procesarFrases(arr) {
    return arr.map(frase =>
        frase
            .toLowerCase()
            .split(" ")
            .map(p => p === "malo" ? "bueno" : p)
            .join(" ")
    );
}

console.log(procesarFrases(frases));
