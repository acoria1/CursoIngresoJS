function mostrar()
{
	var contador=0;
	var acumMax=0;
	var acumMin=0;
	var numeroIngresado;
	var respuesta=true;
	var primeraVez = true // es para que algo pase 1 sola vez
	
/* {}
	while(respuesta==true){
		numeroIngresado = parseInt(prompt("ingrese un numero"))
		while(isNaN(numeroIngresado)){
		alert("el numero ingresado no es valido")
		numeroIngresado =parseInt(prompt("ingrese un numero"))}

		if(primeraVez== true){
			primeraVez = false
			acumMax = numeroIngresado
			acumMin = numeroIngresado}
			
		if (numeroIngresado >= acumMax) {
			acumMax = numeroIngresado
		}
		if(numeroIngresado <= acumMin){
			acumMin = numeroIngresado
		}
	respuesta=confirm("desea continuar?")}
*/

do {
	do {
	numeroIngresado = parseInt(prompt("ingrese un numero"))
	} while (isNaN(numeroIngresado));
	
	if(primeraVez== true){
		primeraVez = false
		acumMax = numeroIngresado
		acumMin = numeroIngresado}
			
	if (numeroIngresado >= acumMax) {
		acumMax = numeroIngresado
		}
	if(numeroIngresado <= acumMin){
		acumMin = numeroIngresado
		}
	
	respuesta = confirm("desea continuar?")
} while (respuesta == true);
	
document.getElementById('maximo').value=acumMax;
document.getElementById('minimo').value=acumMin;
console.log(acumMax);
console.log(acumMin);
}
