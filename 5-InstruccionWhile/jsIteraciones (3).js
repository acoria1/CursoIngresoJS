
/*
function mostrar()
{
var clave = prompt("ingrese la clave.");
contador = 0
while (clave != "utn750" && contador<2) {
      contador++
      clave = prompt("Acceso denegado, vuelva a ingresar la clave")
      clave = clave.toLowerCase();
    
} if (clave == "utn750") {
    alert("Acceso concedido");
} else {
    alert("Ha superado el numero maximo de intentos, vuelva a cargar la pagina");
}}
*/

function mostrar(){
    var contraseña;
    do { 
        contraseña = prompt("ingrese su clave")
        contraseña = contraseña.toLowerCase();
        
        if (contraseña == "utn750") {
            alert("acceso concedido")
        } else { alert("acceso denegado")
        }  
    } while (contraseña != "utn750");
}