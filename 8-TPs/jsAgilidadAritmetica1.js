/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var rndNum1;
var rndNum2; 
var rndOp;
var respuestaIng;

function comenzar()
{ 
rndNum1= Math.floor(Math.random()*10+1);
rndNum2= Math.floor(Math.random()*10+1);

rndOp = Math.floor(Math.random()*4+1);

switch (rndOp) {
  case 1:
    rndOp = "+"
    break;
  case 2:
    rndOp = "-"
    break;
  case 3:
    rndOp = "/"
    break;  
  case 4:
   rndOp = "*"
  default:
    break;
}

respuesta = eval(rndNum1+rndOp+rndNum2);

console.log(rndOp)
console.log(respuesta);
    document.getElementById("PrimerNumero").value = rndNum1;
    document.getElementById("SegundoNumero").value = rndNum2;
    document.getElementById("Operador").value = rndOp;
    
}
function Responder()
{
  respuestaIng = document.getElementById("Respuesta").value; 

  if (respuestaIng == respuesta) {
    alert("correcto");
  } else { alert ("Incorrecto");
  }
};
