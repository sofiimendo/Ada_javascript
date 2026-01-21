// Gestión Compleja de Arrays

// A partir del siguiente array de productos, escriba la función ‘gestionarProductos’ que realice las siguientes tareas:

// Añada un nuevo producto al array.

// Elimine el último producto del array.

// Encuentre el índice de un producto específico.

// Verifique si existe un producto con precio mayor a 50.

// Devuelva una cadena de nombres de productos separados por comas.

const productos = [
    { nombre: "Pan", precio: 30 },
    { nombre: "Leche", precio: 60 },
    { nombre: "Queso", precio: 80 }
];

function gestionarProductos(arr) {
    arr.push({ nombre: "Manteca", precio: 45 });
    arr.pop();

    const indice = arr.findIndex(p => p.nombre === "Leche");
    const hayMayor50 = arr.some(p => p.precio > 50);
    const nombres = arr.map(p => p.nombre).join(", ");

    return {
        indice,
        hayMayor50,
        nombres
    };
}

console.log(gestionarProductos(productos));
