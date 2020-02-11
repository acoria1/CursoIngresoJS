/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var largoDeTerrenoA;
var anchoDeTerrenoA;
var radioDeTerrenoA;
var rectanguloDeAlambreTriple;
var circuloDeAlambreTriple;
var materialesParaContrapiso;
var superficieEnMetrosCuadrados;
var bolsasDeCemento;
var bolsasDeCal;


function Rectangulo () 
{
    largoDeTerrenoA = document.getElementById("Largo").value ;
    anchoDeTerrenoA = document.getElementById("Ancho").value ;

    rectanguloDeAlambreTriple = ( (parseInt(largoDeTerrenoA)*2 + parseInt(anchoDeTerrenoA)*2)*3);

    alert(rectanguloDeAlambreTriple + " metros de alambre");

}

function Circulo () 
{
    radioDeTerrenoA = document.getElementById("Radio").value;

    circuloDeAlambreTriple = parseInt(radioDeTerrenoA)* 2 * Math.PI * 3 ;

    alert(circuloDeAlambreTriple + " metros de alambre");
	
}
function Materiales () 
{
    largoDeTerrenoA = document.getElementById("Largo").value ;
    anchoDeTerrenoA = document.getElementById("Ancho").value ;

    superficieEnMetrosCuadrados = parseInt(largoDeTerrenoA)* parseInt(anchoDeTerrenoA);

    bolsasDeCemento = superficieEnMetrosCuadrados * 2;
    bolsasDeCal = superficieEnMetrosCuadrados * 3;
    
    alert("Para su superficie de " + superficieEnMetrosCuadrados + "m² va a necesitar " + bolsasDeCemento + " bolsas de cemento y " + bolsasDeCal + " bolsas de cal");
}