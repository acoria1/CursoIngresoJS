function mostrar()
{
for (var numUno; isNaN(numUno);) {
     numUno = parseFloat(prompt("ingrese el primer numero"))
}
for (var numDos; isNaN(numDos);) {
    numDos = parseFloat(prompt("ingrese el segundo numero"))
}
if (numUno == numDos) {
    alert(numUno +", "+numDos)
} else { if (numUno>numDos) {
    alert(numUno-numDos)
} else { if ((numUno + numDos)>10) {
    alert("la suma es: "+ (numUno+numDos) + " y supero el 10")
} else {alert(numUno+numDos)
}    
}  
}
}
