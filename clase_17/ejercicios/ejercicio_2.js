// Análisis y Modificación de Cadenas de Texto

// Pide al usuario que ingrese una oración. Luego, escribe la función “procesarOracion” que haga lo siguiente:

// Quite los espacios en blanco al principio y al final.

// Divida la oración en palabras.

// Reemplace todas las vocales 'a' por '@'.

// Encuentre la posición de la primera aparición de la palabra "javascript". De no aparecer retornar -1

// Convierta la oración a una cadena de palabras separadas por guiones.

function procesarOracion(oracion) {
    let limpia = oracion.trim();
    let palabras = limpia.split(" ");
    let reemplazo = limpia.replace(/a/g, "@");
    let posicion = limpia.toLowerCase().indexOf("javascript");
    let conGuiones = palabras.join("-");

    return {
        reemplazo,
        posicion,
        conGuiones
    };
}

console.log(procesarOracion("  amo aprender javascript cada dia  "));
