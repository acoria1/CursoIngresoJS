function mostrar()
{
var edad;
var estadoCivil; 

edad = document.getElementById("edad").value ;
estadoCivil = document.getElementById ("estadoCivil").value ;

edad = parseInt(edad);

if (edad < 18 && estadoCivil !== "Soltero") {
    
} else {
    if (edad>17 && estadoCivil == "Soltero") {
        alert("es soltero y no es menor")
    }
    
}
	


}