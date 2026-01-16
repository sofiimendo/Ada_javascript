//Área de un triángulo (función declarada) (Ejercicio entrevista)
//Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo. La función debe devolver el área del triángulo.
//Pista: Usa la fórmula: area = base * altura /2

function calcularAreaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}

console.log("🔺 Área del triángulo:", calcularAreaTriangulo(10, 5));