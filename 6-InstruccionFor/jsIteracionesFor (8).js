function mostrar()
{
for (var numero;isNaN(numero);) {
    numero=parseFloat(prompt("ingrese un numero")); 
}
numero= Math.sqrt(numero*numero)

if (numero == 0) {
    alert("el 0 no es primo")
} else if (numero == 1){
    alert("no es primo")}
    else if (numero == 2){
        alert("es primo")
    }
    else{
    for (var contador=numero-1;contador>1;contador--) {
     if (numero%contador!=0) {
         if (contador==2) {
         alert("es primo")
         break;
         }
     } else { 
       alert("no es primo")
       break;
     }
     }
    }
}
