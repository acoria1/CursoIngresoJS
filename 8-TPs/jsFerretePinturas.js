/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var far = parseFloat(document.getElementById("Temperatura").value);
var cel = (far - 32)/1.8
cel = (parseInt(cel*1000))/1000;
alert(far+ " grados fahrenheit equivalen a: "+cel+"° grados celsius");
}

function CentigradosFahrenheit () 
{
var cel = parseFloat(document.getElementById("Temperatura").value);
var far = cel*1.8+32
far = (parseInt(far*1000))/1000;
alert(cel+ "° grados celsius equivalen a: "+far+" grados fahrenheit");
}
