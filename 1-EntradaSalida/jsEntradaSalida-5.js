/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	var nombre;
    var edad;
    var mensaje;

    nombre =document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;

    mensaje = "Usted se llama "+nombre+" y tiene "+edad+" años";

    alert(mensaje);
    
   /* console.log(nombre);
    console.info(edad);

    console.log(nombre,edad); 
    para saber si esta tomando mis datos bien 
    
    otra manera de hacerlo:
    
    alert("usted se llama " + document.getElementById("elNombre").value+" y tiene " + document.getElementById("laEdad").value + " años "
    
    
    */
}

