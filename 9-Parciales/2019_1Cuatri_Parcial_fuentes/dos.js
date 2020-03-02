function mostrar()
{
var peso= [];
var nombre = [];
var promedio;
var suma = 0;

for (i = 0;i<2;i++) {
    nombre[i]= prompt("ingrese su nombre");
    for (peso[i];isNaN(peso[i])|| peso[i]<0;) {
        peso[i] = parseFloat(prompt("ingrese su peso"));
    }
    suma = suma+ peso[i]
}
promedio = (peso[0]+peso[1])/i
alert("ustedes se llaman "+nombre[0]+ " y " +nombre[1]+" ,pesan "+peso[0]+" y "+peso[1]+" que sumados son "+suma+" y su promedio es "+promedio)

}
