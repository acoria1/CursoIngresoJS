function mostrar()
{
    var edad;

    edad = document.getElementById("edad").value ;
    edad = parseInt(edad);

    if (edad > 17) {
        alert ("es adulto")
    } else { 
        if (edad < 13) {
            alert ("es niño")
        } else { 
            alert("es adolescente")
            
        }
        
    }
    
    /* Habia hecho esto pero es incorrecto porque corren 3 IFs innecesariamente
    
    if (edad > 17) {
        alert("Usted es mayor de edad")
    }
    if (edad>12 && edad<18) {
        alert("Usted es un adolescente")
    }
    if (edad < 13) {
        alert("usted es un niño")
    } */
}