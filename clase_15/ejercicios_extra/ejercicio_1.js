// 🏪 Gestión de inventario de una tienda
// Inventario inicial:

// let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];

// Agregar "Impresora" al inventario usando el método adecuado.

// Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.

// Eliminar el primer producto del inventario.

// Mostrar la lista actualizada en una sola cadena separados por comas.


let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];

inventario.push("Impresora");
console.log("➕ Inventario:", inventario);

if (inventario.includes("Tablet")) {
    console.log("✅ Tablet está en inventario");
} else {
    console.log("❌ Tablet NO está en inventario");
}

let eliminado = inventario.shift();
console.log("🗑️ Eliminado:", eliminado);

let cadena = inventario.join(", ");
console.log("🧾 Inventario final:", cadena);