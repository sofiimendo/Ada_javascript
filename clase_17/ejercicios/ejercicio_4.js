// Transformación y Análisis de Cadenas

// Pide al usuario que ingrese una lista de nombres separados por comas.
// Luego, escribe la función “transformarYAnalizarNombres” que realice las siguientes tareas:

// Quite los espacios en blanco alrededor de cada nombre.

// Verifique si existe el nombre "Juan".

// Reemplace todos los nombres "María" por "Ana".

// Encuentre el índice del nombre "Pedro".

// Devuelva una cadena de nombres en orden alfabético separados por puntos.

function transformarYAnalizarNombres(texto) {
    let nombres = texto.split(",").map(n => n.trim());
    let existeJuan = nombres.includes("Juan");

    nombres = nombres.map(n => n === "Maria" ? "Ana" : n);
    let indicePedro = nombres.indexOf("Pedro");

    let ordenados = nombres.sort().join(".");

    return {
        existeJuan,
        indicePedro,
        ordenados
    };
}

console.log(transformarYAnalizarNombres("Julian, Maria, Malena, Andrea, Pablo, Pedro"));
