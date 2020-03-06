/* 
Crear un programa en donde el usuario ingresa 5 números. Al finalizar, el programa
imprime los números ordenados de mayor a menor.*/

function mostrar() {
	var numero = [];
	var orden;
	var primeraVez = true;

	for (var i = 0; i < 5; i++) {
		for (numero[i]; isNaN(numero[i]);) {
			numero[i] = parseFloat(prompt("ingrese un numero(" + (i + 1) + ")"))
		}
	}
	numero.sort(function (a, b) { // numero.sort(); ordena normal
		return a - b; // return se puede escribir =>
	});
	alert(numero);
}
	/*
	var miArray = [5,74,8,94,5,0,80,789,5,7];

document.write("El contenido del vector es: <br>");

	for(var i=0; i<10; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}*/
