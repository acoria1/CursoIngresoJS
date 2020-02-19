/*function mostrar()
{
var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLowerCase();
while (sexo != "m" && sexo != "f") {
    sexo = prompt("ingrese f ó m .")
    sexo = sexo.toLowerCase()
}

if (sexo == "m") {
    sexo = "Masculino"
} else { sexo = "Femenino";
}
document.getElementById('Sexo').value=sexo;

}*/
function mostrar(){
    
    do { var sexo=prompt("ingrese su sexo (m/f)").toLowerCase()
        
    } while (sexo != "m" && sexo!="f");

    if (sexo == "m") {
        document.getElementById("Sexo").value = "Masculino";
    } else { document.getElementById("Sexo").value = "Femenino";
    }
    }