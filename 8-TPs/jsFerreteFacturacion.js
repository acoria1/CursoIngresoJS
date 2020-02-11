/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1;
var precio2;
var precio3;
var suma;
var promedio;
var precioFinal;

function Sumar () 
{ 
precio1=document.getElementById("PrecioUno").value;
precio2=document.getElementById("PrecioDos").value;
precio3=document.getElementById("PrecioTres").value;

suma = "la suma de los precios es: " + (parseInt(precio1)+parseInt(precio2)+parseInt(precio3));

alert(suma);	
}

function Promedio () 
{
precio1=document.getElementById("PrecioUno").value;
precio2=document.getElementById("PrecioDos").value;
precio3=document.getElementById("PrecioTres").value;

promedio = "El promedio de los precios es: " + ((parseInt(precio1)+parseInt(precio2)+parseInt(precio3))/3);

alert(promedio);
	}
function PrecioFinal () 
{
precio1=document.getElementById("PrecioUno").value;
precio2=document.getElementById("PrecioDos").value;
precio3=document.getElementById("PrecioTres").value;

precioFinal = "El total a pagar es de: " + ((parseInt(precio1)+parseInt(precio2)+parseInt(precio3))*1.21);

alert(precioFinal);
	
}