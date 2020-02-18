function mostrar()
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
}