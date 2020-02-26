
function mostrar()
{
for (var ancho; isNaN(ancho);) {
    ancho = parseFloat(prompt("ingrese el ancho en metros"));
}
for (var largo; isNaN(largo);) {
    largo = parseFloat(prompt("ingrese el largo en metros"))
}
var perimetro = largo*2+ancho*2
alert("el perimetro es de" + perimetro + "metros")
}
