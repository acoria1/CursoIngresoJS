function mostrar()
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
}