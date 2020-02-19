/*function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	var interaciones = parseInt(prompt("¿cuantos numeros desea operar?"));

while (contador < interaciones) {
		numeroIngresado = parseInt(prompt("Ingrese un numero"))
		while (isNaN(numeroIngresado)) {
			alert("el numero no es valido")
			numeroIngresado = parseInt(prompt("Ingrese un numero"))
		}
	  acumulador = acumulador + numeroIngresado
	  contador++
	  }

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/(contador);
}*/

function mostrar(){
	var acumulador = 0;
	var respuesta;
	var contador = 0;

	do { var numeroIngresado = parseInt(prompt("ingrese un numero"))
		while (isNaN(numeroIngresado)) { alert("numero invalido")
			numeroIngresado=parseInt(prompt("ingrese un numero valido"))
		}
		acumulador += numeroIngresado
		contador++
		respuesta = confirm("desea continar?")
	} while (respuesta);

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/(contador);
}