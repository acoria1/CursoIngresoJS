/*function mostrar()
{

	var contador=0;
	var acumPos=0;
	var acumNeg=1;
	var numeroIngresado;
	var respuesta=true;
	var contNeg = 0;

	while(respuesta==true){
		numeroIngresado = parseInt(prompt("ingrese un numero"))
		while(isNaN(numeroIngresado)){
		alert("el numero ingresado no es valido")
		numeroIngresado =parseInt(prompt("ingrese un numero"))}
		if (numeroIngresado >= 0) {
			acumPos += numeroIngresado
		} else { 
			acumNeg = acumNeg*numeroIngresado
			contNeg++
			}
	respuesta=confirm("desea continuar?")}

	if (contNeg == 0){
			acumNeg=0}
document.getElementById('suma').value=acumPos;
document.getElementById('producto').value=acumNeg;

}*/

function mostrar() {
	var acumPos= 0;
	var acumNeg = 1;
	var respuesta;
	var contNeg = 0

	do { var numeroIngresado = parseInt(prompt("ingrese un numero"))
		while (isNaN(numeroIngresado)) { 
			alert("numero invalido")
			numeroIngresado=parseInt(prompt("ingrese un numero valido"))
		}
		console.log(numeroIngresado)
		console.log(acumPos)
		if (numeroIngresado >=0) { 
			acumPos = acumPos + numeroIngresado
		} else { acumNeg = acumNeg * numeroIngresado	
			contNeg++
		}	
		respuesta = confirm("desea continar?")
	} while (respuesta);

	if (contNeg == 0) {
		acumNeg = 0
	}
	document.getElementById('suma').value=acumPos;
	document.getElementById('producto').value=acumNeg;
}