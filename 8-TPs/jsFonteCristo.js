/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var numeroPos;
var cantPair;
var cantImp;
var contador;
var primeraVez;
var contadorDos;

// declarar funcion ComenzarIngreso()

function NumerosPares ()
{   numeroPos = document.getElementById("numero").value ;
    numeroPos = Math.floor(parseInt(numeroPos));
     if (numeroPos>0) {
         cantPair = (Math.floor(numeroPos / 2))//-1+(numeroPos%2)
         alert("cantidad de numeros pares: "+cantPair)
    }   else if (isNaN(numeroPos)) {
            alert("por favor ingrese un numero")
            return;
            }   else if (numeroPos == 0) {
                alert("cantidad de numeros pares: 0")
                return;
            }       else {   alert("por favor ingrese un nuero positivo")
                    return;
        }
}
function NumerosImpares() 
{   numeroPos = document.getElementById("numero").value ;
    numeroPos = Math.floor(parseInt(numeroPos));
    if (numeroPos>0) {
        cantImp = (Math.floor(numeroPos / 2))
        alert("cantidad de numeros impares: "+cantImp)
}   else if (isNaN(numeroPos)) {
        alert("por favor ingrese un numero")
        return;
        }   else if (numeroPos == 0) {
            alert("cantidad de numeros impares: 0")
            return;
        }       else {   alert("por favor ingrese un numero positivo")
                return;
    }
    
}

function NumerosDivisibles() {
    numeroPos = document.getElementById("numero").value ;
    numeroPos = parseInt(numeroPos);
    contador = 2
    acumulador = numeroPos

    if (numeroPos>0) {
        while (contador<100) {
            if (numeroPos*contador <= 100) {
                acumulador = acumulador + ", " + numeroPos*contador
            }   contador++
        }
        alert("numeros entre 1 y 100 divisibles por el nro ingresado:"+acumulador)
    }   else if (isNaN(numeroPos)) {
        alert("por favor ingrese un numero")
        return;
        }   else if (numeroPos == 0) {
            alert("ningun numero es divisible por 0")
            return;
            }   else {   alert("por favor ingrese un numero positivo")
                return;
                }
}
function VerificarPrimo() {
    numeroPos = document.getElementById("numero").value ;
    numeroPos = parseInt(numeroPos);
    contador = numeroPos-1
    
    if (numeroPos>2) {
        while (contador>1) {
            if (numeroPos%contador == 0) {
                alert ("NO es primo")
                return;
            }  else {
                contador--
                continue
            }
        }
        alert("es primo")
    }   else if (isNaN(numeroPos)) {
        alert("por favor ingrese un numero")
        return;
        } else if (numeroPos == 0) {
        alert("el 0 no es un numero primo")
        return;
        } else if (numeroPos == 1) {
        alert("NO es primo")
        } else if (numeroPos == 2) {
        alert("es primo")
        } else {
        alert("por favor ingrese un numero positivo")
        return;
        }
}
function NumerosPrimos() {
    numeroPos = document.getElementById("numero").value ;
    numeroPos = parseInt(numeroPos);
    contador = numeroPos
    acumulador = 0
    contadorDos = contador - 1
    
    
    if (numeroPos>0) {
        while (contador>2) {
            while (contadorDos>2) {
             if (contador%contadorDos == 0) {
            break;
            } else {
            console.log(contadorDos)
            contadorDos--
            continue
            }
        } 
        if (contador%contadorDos != 0) {
            acumulador++
        }
        contador--
        console.log("CONTADOR: " +contador)
        contadorDos = contador - 1
    }
        alert("cantidad de numeros primos " + (acumulador+1))// el +1 representa al numero 2 
    }   else if (isNaN(numeroPos)) {
        alert("por favor ingrese un numero")
        return;
        }   else if (numeroPos == 0) {
            alert("ingrese un numero mayor que 0")
            return;
            }   else {   alert("por favor ingrese un numero positivo")
                return;
                }
}