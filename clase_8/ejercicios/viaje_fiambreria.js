// 🌟 Ejercicio 2 - ¡Viaje a la fiambrería! 🌟

//Si quisiera ir a comprar 150 gramos de queso a mi fiambrería de confianza, tendría que tener en cuenta las siguientes variables (no pensemos en ellas solo como factores externos, sino como valores de lo cotidiano a tener en cuenta)
//Primero tenemos que ver la temperatura en el exterior, eso nos va a determinar la ropa.
// 1. Temperatura (número)
// También deberíamos prestar atención a si llueve o no llueve.
// 2. ¿Está lloviendo? (booleano)
// Cuando salga de mi casa, si vivo en un edificio en algún piso, tendré que ver en qué piso se encuentra el ascensor. Si vivo en una casa, esta variable no es necesaria.
// 3. Piso del ascensor (número)
// Pensándolo bien, antes de salir a la calle, deberíamos saber si la fiambrería va a estar abierta.
// 4. Hora actual (número)
// 5. Hora de apertura de la fiambrería (número)
// 6. Hora de cierre de la fiambrería (número)
// Ahora sí, teniendo todo esto en cuenta, voy hasta la fiambrería. Mónica (mi
// fiambrera de confianza) sabe que siempre llevo 100 gr. de Queso Dambo
// (aunque, entre nosotros, sabemos que nunca es mucho queso)
// 7. Cantidad de queso (número)
// Deberemos pagarle. Sin embargo, ¡nos olvidamos la plata antes de salir! Por suerte, tenemos confianza y nos fía.
// 8. Deuda con Mónica (número)
// Ya podemos volver a casa a disfrutar de nuestro tentempié.


// ------------------------------------
// 🧊 Variables iniciales
// ------------------------------------
let temperatura = 25;          // Temperatura exterior (°C)
let llueve = false;            // ¿Está lloviendo?
let ascensor = 2;              // Piso actual del ascensor
let horaActual = 6;            // Hora actual
let cantidadQueso = 150;       // Gramos de queso a comprar
let deudaMonica = 1500;        // Deuda previa con la fiambrera
const horaApertura = 5;        // Horario de apertura de la fiambrería
const horaCierre = 9;          // Horario de cierre de la fiambrería

// ------------------------------------
// 🕰️ Disponibilidad de la fiambrería
// ------------------------------------
if (horaActual >= horaApertura && horaActual <= horaCierre) {
    console.log('🧀 La fiambrería está abierta. ¡Podés ir a comprar!');
} else {
    console.log('⛔ La fiambrería ya cerró. Tendrás que volver más tarde.');
}

// ------------------------------------
// 🌧️ Estado del clima
// ------------------------------------
if (llueve) {
    console.log('🌧️ Está lloviendo. Llevá paraguas.');
} else {
    console.log('☀️ No llueve. ¡Salí tranqui!');
}

// ------------------------------------
// 🌡️ Temperatura
// ------------------------------------
console.log(`🌡️ La temperatura actual es de ${temperatura}°C.`);

// ------------------------------------
// 🛗 Ascensor
// ------------------------------------
console.log(`🛗 El ascensor se encuentra en el piso ${ascensor}.`);

// ------------------------------------
// 🧀 Compra de queso y deuda
// ------------------------------------
console.log(`🛍️ Vas a comprar ${cantidadQueso} gramos de queso.`);
console.log(`💸 Tu deuda actual con Mónica es de $${deudaMonica}.`);

// ------------------------------------
// 🏠 Retorno a casa
// ------------------------------------
console.log('🏠 ¡Listo! Ya podés volver a casa a disfrutar de queso dambo.');