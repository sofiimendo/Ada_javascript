// Manipulación Completa de un Objeto Literal y Arrays

// Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes propiedades: nombre, edad y un array de notas (con 5 notas).
// Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas:

// Agregar una nueva nota al array de notas.

// Eliminar la primera nota del array.

// Calcular el promedio de las notas restantes.

// Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el método “toUpperCase()”

// Devuelve un objeto con el nombre en mayúsculas y el promedio de las notas.

const estudiante = {
    nombre: "Sofia",
    edad: 32,
    notas: [7, 8, 9, 6, 10]
};

function procesarEstudiante(est) {
    est.notas.push(8);
    est.notas.shift();

    const promedio =
        est.notas.reduce((acc, nota) => acc + nota, 0) / est.notas.length;

    return {
        nombre: est.nombre.toUpperCase(),
        promedio: promedio
    };
}

console.log(procesarEstudiante(estudiante));
