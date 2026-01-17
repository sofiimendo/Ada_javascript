// 👥 Simulador de cola de atención al cliente

// Lista inicial: ["Ana", "Carlos", "VIP", "Sofía", "Juan"]

// Mientras haya clientes, atender de a uno y mostrarlo.

// Si es "VIP", mostrar mensaje especial.

// Al final, mostrar cuántos clientes fueron atendidos.

let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let atendidos = 0;

while (clientes.length > 0) {
    let cliente = clientes.shift();
    atendidos++;

    if (cliente === "VIP") {
        console.log("⭐ Atención PRIORITARIA para:", cliente);
    } else {
        console.log("👤 Atendiendo a:", cliente);
    }
}

console.log("✅ Total de clientes atendidos:", atendidos);
