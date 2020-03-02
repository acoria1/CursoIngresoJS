function mostrar()
{
var marca=[];
var peso =[];
var temp = [];
var acumPar = 0;
var primeraVez = true;
var pesoMax;
var pesoMin;
var marcaMax;
var promedio = 0;
var acumTemp = 0

for (var contador;isNaN(contador)|| contador<1;) {
    contador = parseInt(prompt("cantidad de productos"));
}

for (let i = 0; i<contador; i++) {
    alert("producto N°"+(i+1))
    for (marca[i]; marca[i]== undefined;) {
        marca[i] = prompt("marca");
        console.log(marca[i])
    }
    for (peso[i]; peso[i]<1 || peso[i]>100 || isNaN(peso[i]);) {
        peso[i] = parseFloat(prompt("peso en kg"));
        console.log(peso[i])
    }
    for (temp[i]; temp[i]<-30 || temp[i]>30 || isNaN(temp[i]);) {
        temp[i]= parseInt(prompt("temperatura en grados celsius"));
        console.log(temp[i]);
    }
    if (temp[i]%2==0) {
        acumPar++
    }
    if (primeraVez==true) {
        primeraVez == false;
        pesoMax = peso[i];
        pesoMin = peso[i];
        marcaMax = marca[i];
    }
    if (i>0 && peso[i]>pesoMax) {
        pesoMax = peso[i];
        marcaMax = marca[i]
    }
    if (i>0 && peso[i]<pesoMin) {
        pesoMin = peso[i]
    }
    if (temp[i]<0) {
        acumTemp++
    }
    promedio = promedio + peso[i];
}
promedio = promedio / contador

document.write("cantidad de temperaturas pares: "+acumPar + "</br>");
document.write("marca del producto mas pesado: "+marcaMax + "</br>");
document.write("cantidad de prod que se conservan a menos de cero grados: "+ acumTemp + "</br>");
document.write("promedio de pesos: "+promedio +" kg" + "</br>");
document.write("peso maximo: "+pesoMax + "||  peso minimo: "+ pesoMin + "</br>");


}
