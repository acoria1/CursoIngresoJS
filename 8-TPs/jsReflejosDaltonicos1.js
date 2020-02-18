/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var t0;
var t1;
var colorRandom;;
var colorPresionadoEnNumero;
var colorPresionado;

var azul = "que color soy?"; 
var amarillo = "que color soy?";
var marron = "que color soy?";
var verde = "que color soy?";
var celeste = "que color soy?";
var rojo = "que color soy?";

function comenzar()
{
    t0 = performance.now();
    colorRandom = Math.floor(Math.random()*6+1);

    switch (colorRandom) {
    case 1:
        document.getElementById("ColorElejido").value = azul
        document.getElementById("ColorElejido").style.color = "blue";
        break;
    case 2:
        document.getElementById("ColorElejido").value = amarillo
        document.getElementById("ColorElejido").style.color = "yellow";
        break;
    case 3:
        document.getElementById("ColorElejido").value = marron
        document.getElementById("ColorElejido").style.color = "brown";
        break;
    case 4:
        document.getElementById("ColorElejido").value = verde
        document.getElementById("ColorElejido").style.color = "green";
        break;
    case 5:
        document.getElementById("ColorElejido").value = celeste
        document.getElementById("ColorElejido").style.color = "skyblue";
        break;
    case 6:
        document.getElementById("ColorElejido").value = rojo
        document.getElementById("ColorElejido").style.color = "red";
        break;
    default:
        break;
    }  
}
function Responder(colorPresionado)
{   switch (colorPresionado) {
    case 'azul':
        colorPresionadoEnNumero = 1
        break;
    case 'amarillo':
        colorPresionadoEnNumero = 2
        break;
    case 'marron':
        colorPresionadoEnNumero = 3
        break;
    case 'verde':
        colorPresionadoEnNumero = 4
        break;
    case 'celeste':
        colorPresionadoEnNumero = 5
        break;
    case 'rojo':
        colorPresionadoEnNumero = 6
        break;
    default:
        break;
    }
    if (colorRandom == colorPresionadoEnNumero) {
        t1 = performance.now()
        alert("Bien hecho, lo has logrado en " + (Math.floor((t1-t0) / 1000)) + " segundos");
}   else {
        alert("eres daltonico?");
}
console.log(t1);
console.log(t0);
console.log(colorRandom);

};
