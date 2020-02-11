function mostrar()
{
var edad;
var estadoCivil;

edad = document.getElementById("edad").value ;
edad = parseInt (edad);

estadoCivil = document.getElementById("estadoCivil").value;

console.log(estadoCivil);
console.log(edad);

if (edad < 18 && estadoCivil != "Soltero") {
  alert("Es muy pequeño para no ser soltero")  
}

}