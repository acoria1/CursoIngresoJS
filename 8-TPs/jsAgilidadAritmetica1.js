/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var randomNumber1;
var randomNumber2; 
var randomMath;

randomNumber1 = Math.floor(Math.random()*(10-1+1)+1);
randomNumber2 = Math.floor(Math.random()*(10-1+1)+1);
randomMath = 

function comenzar()
{ 
    document.getElementById("PrimerNumero").value = randomNumber1;
    document.getElementById("SegundoNumero").value = randomNumber2;
    document.getElementById("Operador").value = randomMath;
    

}//FIN DE LA FUNCIÓN
function Responder()
{
  respuesta = document.getElementById("Respuesta").value; 

  if (respuesta = randomNumber1 randoMath randomNumber2) {
      alert("correcto");
  } else { alert ("Incorrecto");
      
  }
	

}//FIN DE LA FUNCIÓN
