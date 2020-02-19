/*function mostrar()
{
	var contador=0;
	var acumulador=0;

	while (contador<5) {
		numeroIngresado = parseInt(prompt("Ingrese un numero cualquiera"))
		if (isNaN(numeroIngresado)) {
			alert("el numero ingresado no es compatible, aun le faltan " + (5-contador) + " numeros por ingresar")
			continue
		} else {
			acumulador += numeroIngresado
			contador++
		}
		}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}*/

function mostrar()
{
var acumulador = 0
var contador = 5

do {
	var numeroIngresado = parseInt(prompt("Ingrese un numero"))
	if (isNaN(numeroIngresado)) {
		alert("ingrese un numero valido. Aun le faltan "+contador+" numeros")
		continue
	} else {
		acumulador += numeroIngresado
		contador--
	}
	
} while (contador > 0);
document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = acumulador/5;
}