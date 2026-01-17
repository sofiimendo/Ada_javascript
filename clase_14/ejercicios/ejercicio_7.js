// Libros Define dos objetos libro1 y libro2 con las siguientes propiedades y valores: • título: una cadena con el título del libro. • autor: una cadena con el nombre del autor del libro. • anioPublicacion: un número con el año de publicación del libro. Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre por consola la información de cada libro en el formato especificado.


let libro1 = {
    titulo: "Gloves off",
    autor: "Stephanie Archer",
    anioPublicacion: 2025
};

let libro2 = {
    titulo: "Onix Storm",
    autor: "Rebecca Yarros",
    anioPublicacion: 2025
};

function mostrarLibro(libros) {
    for (let i = 0; i < libros.length; i++) {
        console.log(
            libros[i].titulo + " - " +
            libros[i].autor + " (" +
            libros[i].anioPublicacion + ")"
        );
    }
}

mostrarLibro([libro1, libro2]);
