/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/
var numRnd;
var contadorInt;
var numIng;

function comenzar()
{
numRnd= parseInt(Math.random()*100);
contadorInt=1;
console.log(numRnd); 
}

function verificar()
{
numIng= parseInt(document.getElementById("numero").value);
if (numIng == numRnd) {
	switch (contadorInt) {
		case 1:
		alert("usted es un psiquico");
		break;
		case 2: 
		alert("excelente percepcion");
		break;
		case 3:
		alert("esto es suerte");
		break;
		case 4: 
		alert("excelente tecnica");
		break;
		case 5:
		alert("usted esta en la media");
		break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		alert("falta tecnica");
		break;
		default:
		("unlucky")
		break;
	}
} else if (numIng<numRnd) {
	alert("te quedaste corto")
} else {
	alert("te pasaste")
}
document.getElementById("intentos").value = contadorInt
contadorInt++

}