
function mostrar(){
/*{
	var numero = 99;


	while (numero < 0 || numero>9 || isNaN(numero)) {
	numero = prompt("ingresar un número entre 0 y 9.")
	numero = parseInt(numero);
	}	
	document.getElementById("Numero").value = numero;

}*/

var numeroIngresado;

do {numeroIngresado = parseInt(prompt("ingrese un numero del 0 al 9"))
	if(numeroIngresado>9 || numeroIngresado<0 || isNaN(numeroIngresado)){
	alert("numero invalido")}
} while (numeroIngresado>9 || numeroIngresado<0 || isNaN(numeroIngresado));
alert("numero validado")
document.getElementById("Numero").value = numeroIngresado;
}