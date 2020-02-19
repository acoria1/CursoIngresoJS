/* 
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/

function mostrar()
{
var acumNeg=0;
var acumPos=0;
var contPos=0;
var contNeg=0;
var contPair=0;
var contCeros = 0
var numeroIngresado;
var respuesta = true;

while (respuesta == true) {

numeroIngresado = parseInt(prompt("ingrese un numero"));
while (isNaN(numeroIngresado)) {
	alert("numero invalido")
	numeroIngresado = parseInt(prompt("ingrese un numero"))};

if (numeroIngresado > 0) {
	acumPos += numeroIngresado
	contPos++
}
if (numeroIngresado < 0) {
	acumNeg += numeroIngresado
	contNeg++
} 
if (numeroIngresado == 0){
	contCeros++}
if (numeroIngresado%2 == 0) {
	contPair++
}
var promPos = acumPos/contPos;
var promNeg = acumNeg/contNeg;
var diferencial = acumPos + acumNeg;

respuesta = confirm("desea continuar?")};

document.writeln("la suma de los positivos es: " + acumPos + "<br>");
document.writeln("la suma de los negativos es: " + acumNeg + "<br>");
document.writeln("la cantidad de numeros positivos es: " +contPos+ "<br>");
document.writeln("la cantidad de numeros negativos es: " +contNeg+ "<br>");
document.writeln("la cantidad de ceros ingresados es: " + contCeros + "<br>");
document.writeln("la cantidad de numeros pares (incluyendo a los ceros) es: " + contPair + "<br>");
document.writeln("el promedio de numeros positivos es: " + promPos + "<br>");
document.writeln("el promedio de numeros negativos es: " + promNeg + "<br>");
document.writeln("la diferencia entre los numeros positivos y los negativos (positivos - |negativos|)es: " + diferencial + "<br>");
}