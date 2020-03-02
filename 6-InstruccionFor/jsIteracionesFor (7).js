function mostrar()
{
var contador;
var acumulador;

for (var numero;isNaN(numero);) {
    numero = parseInt(prompt("ingrese un numero"));
}
var acumuladorStr = numero;

if (numero>1) {

    for (contador = numero-1, acumulador=1; contador>0;contador--) {
    if (numero%contador==0) {
        acumulador++
        acumuladorStr = acumuladorStr + ", " + contador
    }
    }
    alert("divisores: " + acumuladorStr)
    alert("cantidad de divisores: " + acumulador)
} else if (numero<1) {
    for (contador = numero+1, acumulador=1; contador<2;contador++) {
        if (numero%contador==0) {
            acumulador++
            acumuladorStr = acumuladorStr + ", " + contador
    }
    }
    alert("divisores: " + acumuladorStr)
    alert("cantidad de divisores: " + acumulador)
} else { 
    alert("divisores:1")
    alert("cantidad de divisores: 1")
}
}//FIN DE LA FUNCIÓN