function mostrar()
{
var repetciones;

for (repeticiones = parseInt(prompt("ingrese el numero de repeticiones")); repeticiones <= 0 || isNaN(repeticiones);) {
    repeticiones = parseInt(prompt("ingrese el numero de repeticiones"))
    console.log(repeticiones);  
}
 for (repeticiones; repeticiones > 0; repeticiones--) {
     alert("hola UTN");
     
 }
}