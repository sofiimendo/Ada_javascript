// Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
// Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.

const convertirCelsiusAFahrenheit = function (celsius) {
    return (celsius * 9/5) + 32;
};

console.log("🌡️ Fahrenheit:", convertirCelsiusAFahrenheit(38));