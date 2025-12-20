// Ejercicio 9: Última aparición de un modelo de auto
// Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera.
// a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.
// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
// c) Por último, es necesario tener el total de gastos realizados en el mes.
// ✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
// ✔ Posibles matrices para comprobar los resultados.

// 💰 Gastos del mes
let gastos = [
    [1135, 2500, 900, 1600, 2800, 650, 1100],   // 🗓️ Semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800],  // 🗓️ Semana 2
    [1700, 1150, 1690, 1900, 1770, 500, 2560],  // 🗓️ Semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],   // 🗓️ Semana 4
];


// 🌷 TOTAL DE UNA SEMANA
function totalSemana(gastos, semanaNumero) {
    let fila = semanaNumero - 1; // 👉 arranca a contar desde el 1 → índice
    let suma = 0;

    for (let columna = 0; columna < gastos[fila].length; columna++) {
        let valor = gastos[fila][columna];
        suma += valor; // ➕ acumulamos
    }

    return suma;
}

console.log("🗓️ Total semana 2:", totalSemana(gastos, 2));


// 🌼 TOTAL DE UN DÍA
function totalDia(gastos, diaNumero) {
    let columna = diaNumero - 1; // 👉 arranca a contar desde el 1 → índice
    let suma = 0;

    for (let fila = 0; fila < gastos.length; fila++) {
        let valor = gastos[fila][columna];
        suma += valor; // ➕ acumulamos
    }

    return suma;
}

console.log("📆 Total día 3:", totalDia(gastos, 3));


// 🌙 TOTAL DEL MES
function totalMes(gastos) {
    let suma = 0;

    for (let fila = 0; fila < gastos.length; fila++) {
        for (let columna = 0; columna < gastos[fila].length; columna++) {
            let valor = gastos[fila][columna];
            suma += valor; // ➕ sumamos todo
        }
    }

    return suma;
}

console.log("💰 Total del mes:", totalMes(gastos));


// 🧠 ¿Importa recorrer por filas o columnas?
// ✔️ No, mientras sumes TODOS los valores una sola vez.


// 🏆 SEMANA CON MÁS GASTOS
function semanaConMasGastos(gastos) {
    let maxTotal = -Infinity; // 🔽 el número más chico posible en JS
    let semanaMax = 0;

    for (let fila = 0; fila < gastos.length; fila++) {
        let sumaSemana = 0;

        for (let columna = 0; columna < gastos[fila].length; columna++) {
            sumaSemana += gastos[fila][columna];
        }

        if (sumaSemana > maxTotal) {
            maxTotal = sumaSemana;
            semanaMax = fila + 1; // 👉 cuenta desde 1 y no de 0
        }
    }

    return { semana: semanaMax, total: maxTotal };
}

console.log("🏆 Semana con más gastos:", semanaConMasGastos(gastos));


// 🔥 DÍA CON MÁS GASTOS
function diaConMasGastos(gastos) {
    let maxTotal = -Infinity;
    let diaMax = 0;

    for (let columna = 0; columna < gastos[0].length; columna++) {
        let sumaDia = 0;

        for (let fila = 0; fila < gastos.length; fila++) {
            sumaDia += gastos[fila][columna];
        }

        if (sumaDia > maxTotal) {
            maxTotal = sumaDia;
            diaMax = columna + 1; // 👉 cuenta desde 1 y no de 0
        }
    }

    return { dia: diaMax, total: maxTotal };
}

console.log("🔥 Día con más gastos:", diaConMasGastos(gastos));
