/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var t0;
var t1;
var colorRandom;;
var azul
var amarillo
var marron
var verde
var celeste
var rojo


azul = "texto";
azul = azul.fontcolor("Blue");

amarillo = "texto";
amarillo = amarillo.fontcolor("Yellow");

marron = "texto";
marron = marron.fontcolor("Brown");

verde = "texto";
verde = verde.fontcolor("Green");

celeste = "texto";
celeste = celeste.fontcolor("Aqua");

rojo = "texto";
rojo = rojo.fontcolor("Red");

function comenzar()
{
    t0 = performance.now();
    colorRandom = Math.floor(Math.random()*(1-1+1)+1);

    switch (colorRandom) {
        case 1:
            document.getElementById("ColorElejido").value = azul
            break;
        case 2:
            document.getElementById("ColorElejido").value = amarillo
            break;
        case 3:
            document.getElementById("ColorElejido").value = marron
            break;
        case 4:
            document.getElementById("ColorElejido").value = verde
            break;
        case 5:
            document.getElementById("ColorElejido").value = celeste
            break;
         case 6:
            document.getElementById("ColorElejido").value = rojo
            break;
    
        default:
            break;
    }

    

    
}//Preguntar como cambio color de fuente
function Responder()// que va dentro del parentesis? es una funcion para cada color?
{if (colorRandom == 1) {
    t1 = performance.now()

    alert("Bien hecho, lo has logrado en " + (Math.floor((t1-t0) / 1000)) + " segundos");
} else {
    alert("eres daltonico?");
}

console.log(t1);
console.log(t0);
console.log(colorRandom);
	
// preguntar si este bien lo del timer


}//FIN DE LA FUNCIÓN
