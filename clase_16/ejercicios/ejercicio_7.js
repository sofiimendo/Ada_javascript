// Filtra nombres que empiecen con la letra 'A'
// Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'],
// queremos quedarnos solo con los nombres que comiencen con la letra 'A'.

const nombres = ["Ana", "Luis", "Andrea", "María"];

const nombresConA = nombres.filter(
    nombre => nombre.startsWith("A")
);

console.log("🅰️ Nombres con A:", nombresConA);
