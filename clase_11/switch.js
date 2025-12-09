//Ejemplo: determinar qe dia de la semana es segun un numero

//Importacion de la libreria
const prompt = require("prompt-sync")({ sigint: true });

//Entrada de datos
//pedimos un nro del 1 al 7. Usamos parseInt porque el switch compara valores excatos.

let numeroDia = parseInt(prompt('Ingrese un numero del 1 al 7: '));

//Estructura del switch

//El switch evalua la variable que se pone entre parentesis (numeroDia).
//Luego busca abajo el case q coincida con ese valor

switch(numeroDia){
    //si numeroDia es igual a 1..
    case 1:
        console.log("Hoy es Lunes, a trabajar!!");
        break; //El "freno de mano": Importante!!: le dice al programa q ya encontro lo q buscaba q corte el bucle
    case 2:
        console.log("Hoy es Martes, a trabajar!!");
        break;
    case 3:
        console.log("Hoy es Miercoles, dale q es mitad de semana!!");
        break;
    case 4:
        console.log("Hoy es jueves,dale q queda menos");
        break;
    case 5:
        console.log("Hoy es viernes, se termina la semana!");
        break;
    case 6:
        console.log("Hoy es sabado, dale q so vo");
        break;
    case 7:
        console.log("Hoy es domingo, se acabo la joda");
        break;

//El default funciona igual q el else final.
//si el usuario pone un numero q no sea del 1 al 7 entonces salta el default.
default:
    console.log("Error el numero que ingresaste no es correcto");
}
