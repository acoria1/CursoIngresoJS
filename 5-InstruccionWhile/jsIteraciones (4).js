
function mostrar()
{
	var numero = 99;


	while (numero < 0 || numero>9 || isNaN(numero)) {
	numero = prompt("ingresar un número entre 0 y 9.")
	numero = parseInt(numero);
	}	
	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN