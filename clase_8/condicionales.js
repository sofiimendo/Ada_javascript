//Consigna

//Cree un programa que simule un sistema de calificacion basado en la nota de un estudiante.
// (Un valor del 0 al 100). El programa debe determinar si el estudiante ha reprobado.
//Aprobado o ha obtenido una calificacion excelente, segun las siguientes condiciones.

//Si la nota es menor a 60 el estudiante ha reprobado
//Si la nota esta entre 60 y 89 (inclusive) el estudiante ha aprobado
//si la nota es mayor a 90 el estudiando ha obtenido una calificacion excelente
//Usar el condicional if, else if, y else para mostrar el mensaje correspondiente.

let nota = 75;

if (nota < 60){
    console.log("Reprobado")
}else if (nota >= 60 && nota <= 89) {
    console.log("Aprobado");
} else{
    console.log("Calificacion Excelente!!");
}