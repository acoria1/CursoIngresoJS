function mostrar()
{
var acumulador;
var acumuladorStr;

for (var numero = NaN;isNaN(numero);) {
    numero = parseInt(prompt("ingrese un numero"));
}
console.log("hola")
if (numero>1){
if (numero%2 == 0) {
    acumuladorStr = numero
} else {
    acumuladorStr = numero - 1
}
for (var contador = numero-2,acumulador = 0;contador != 1;) {
    if (contador%2 == 0) {
        acumulador++
        acumuladorStr = acumuladorStr + ", " + contador
    } 
    contador--  
}
alert("numeros pares: " + acumuladorStr)
alert("cantidad de numeros pares encontrados: " + acumulador)
}
else if (numero<1){
    if (numero%2 == 0) {
        acumuladorStr = numero
    } else {
        acumuladorStr = numero+1
    }
    for (var contador = numero+2,acumulador = 0;contador != 1;) {
        if (contador%2 == 0) {
            acumulador++
            acumuladorStr = acumuladorStr + ", " + contador
        } 
        contador++  
    }
    alert("numeros pares: " + acumuladorStr)
    alert("cantidad de numeros pares encontrados: " + acumulador)
}
else {
alert("numeros pares: 0")
alert("cantidad de numeros pares encontrados: 0")
}
}