
function mostrar()
{
var lado=[];
var e;
var primeraVez = true


for (i=0; i<3; i++) {
    for (lado[i]; isNaN(lado[i])||lado[i]<=0;)
    lado[i]= parseFloat(prompt("longitud de lado"));
    if (primeraVez == true) {
        primeraVez = false;
        e = lado[i];
    }
    if (lado[i]!=e) {
        alert("los lados deben ser iguales");
        lado[i]= NaN;
        i--
    }
}
var perimetro = lado[0]+lado[1]+lado[2]
alert("perimetro del triangulo: "+perimetro);
}
