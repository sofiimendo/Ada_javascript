// “La Florería”

// Escribe una función "gestionarFloreria" que realice las siguientes tareas con una lista predefinida de nombres de flores:
//let entrada = "Rosa, Tulipan, Orquidea, Lirio";

// Quite los espacios en blanco alrededor de cada flor.

// Verifique si existe la flor "Margarita" y, si está presente, agregue "Azucena" al final de la lista.

// Reemplace todas las flores "Orquídea" por "Clavel".

// Encuentre el índice de la flor "Girasol" y, si no está presente, agregue "Girasol" al inicio de la lista.
// Devuelva una cadena de flores en orden alfabético separadas por puntos.


let entrada = "Rosa, Tulipan, Orquidea, Lirio";

function gestionarFloreria(texto) {
    // Convertimos el string en array y quitamos espacios
    let flores = texto.split(",").map(flor => flor.trim());

    // Verificamos si existe Margarita y agregamos Azucena al final
    if (flores.includes("Margarita")) {
        flores.push("Azucena");
    }

    // Reemplazamos Orquidea por Clavel
    flores = flores.map(flor => flor === "Orquidea" ? "Clavel" : flor);

    // Buscamos Girasol y si no existe lo agregamos al inicio
    let indiceGirasol = flores.indexOf("Girasol");
    if (indiceGirasol === -1) {
        flores.unshift("Girasol");
    }

    // Ordenamos alfabéticamente y unimos con puntos
    let resultado = flores.sort().join(".");

    return resultado;
}

console.log(gestionarFloreria(entrada));
