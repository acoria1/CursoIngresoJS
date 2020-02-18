function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = 1;

while (respuesta != 0) {
	  respuesta = prompt("Ingrese un numero; si no desea ingresar mas numeros apriete \"Aceptar\"")
	  if (respuesta == 0) {
		break;
	  } else {
		acumulador = acumulador + parseInt(respuesta)
	  	contador++
	  }
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/(contador);
}