// Factorial de un número (Ejercicio entrevista)
// Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.
// Fórmula del factorial: n! = n x (n-1) x ... x 1

const calcularFactorial = function (numero) {
    let resultado = 1;

    for (let i = numero; i >= 1; i--) {
        resultado *= i;
    }

    return resultado;
};

console.log("🧮 Factorial:", calcularFactorial(7));
