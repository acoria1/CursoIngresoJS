function mostrar()
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

}//FIN DE LA FUNCIÓN