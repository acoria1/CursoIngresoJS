function mostrar()
{
var num = [];
var letra = [];
var acumPar = 0;
var acumImp = 0;
var acumCeros = 0;
var promedio=0;
var sumaNeg = 0;
var primeraVez = true
var letraMax;
var letraMin;

for (var contador; isNaN(contador)|| contador<1;)
var contador = parseInt(prompt("cantidad de ingresos"))

for (let i=0;i<contador;i++) {
    for (num[i]; isNaN(num[i])|| num[i] < -100 || num[i] > 100;){
        num[i] = parseInt(prompt("ingrese numero"))
    };
    for (letra[i];letra[i]== undefined || isNaN(parseInt(letra[i]))==false;) {
        letra[i]= prompt("ingrese una letra");
    };
    if (num[i]%2 == 0) {
    acumPar++
    } else {
    acumImp++
    };
    if (num[i]==0) {
    acumCeros++
    };
    if (num[i]>0) {
    promedio = promedio + num[i]
    } else { 
    sumaNeg = num[i] + sumaNeg
    }
    if (primeraVez == true) {
        primeraVez = false
        var max = num[i]
        var min = num[i]
        letraMin = letra[i]
        letraMax = letra[i]
    }
    if (i>0 && num[i]>max) {
        max = num[i]
        letraMax = letra[i]
    }
    if (i>0 && num[i]<min) {
        min = num[i]
        letraMin = letra[i]
    }
}
promedio = promedio / contador;

document.write("cantidad de numeros pares: " + acumPar + "</br>");
document.write("cantidad de impares: " + acumImp + "</br>");
document.write("cantidad de ceros: " + acumCeros + "</br>");
document.write("promedio de numeros positivos: " + promedio + "</br>");
document.write("suma de negativos: "+ sumaNeg + "</br>");
document.write("numero maximo y su letra: "+max + " "+ letraMax+"</br>");
document.write("numero minimo y su letra: "+ min + " "+letraMin+"</br>");
}
