// Autos y más autos…

// Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista predefinida de marcas de autos:

//let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

// Quite los espacios en blanco alrededor de cada marca.

// Verifique si existe la marca "Tesla".

// Reemplace todas las marcas "Ford" por "BMW".

// Encuentre el índice de la marca "Chevrolet".

// Devuelva una cadena de marcas en orden alfabético separadas por puntos.

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

function gestionarAutos(texto) {
    // Convertimos el string en array y quitamos espacios
    let marcas = texto.split(",").map(marca => marca.trim());

    // Verificamos si existe Tesla
    let existeTesla = marcas.includes("Tesla");

    // Reemplazamos Ford por BMW
    marcas = marcas.map(marca => marca === "Ford" ? "BMW" : marca);

    // Buscamos el índice de Chevrolet
    let indiceChevrolet = marcas.indexOf("Chevrolet");

    // Ordenamos alfabéticamente y unimos con puntos
    let resultado = marcas.sort().join(".");

    return {
        existeTesla,
        indiceChevrolet,
        resultado
    };
}

console.log(gestionarAutos(entrada));
