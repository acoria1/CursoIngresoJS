function mostrar()
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

}//FIN DE LA FUNCIÓN