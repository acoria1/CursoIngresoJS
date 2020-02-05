/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numero1;
    var numero2;
    var mensaje;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    console.log(numero1,numero2);

    mensaje="la suma es "+ (parseInt(numero1)+ parseInt(numero2));

    alert(mensaje);
	
}

function restar()
{   var numero1;
    var numero2;
    var mensaje;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    console.log(numero1,numero2);

    mensaje="la resta es "+ (parseInt(numero1)- parseInt(numero2));

    alert(mensaje);
	
}

function multiplicar()
{   var numero1;
    var numero2;
    var mensaje;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    console.log(numero1,numero2);

    mensaje="el producto es "+ (parseInt(numero1) * parseInt(numero2));

    alert(mensaje);
	
}

function dividir()
{   var numero1;
    var numero2;
    var mensaje;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    console.log(numero1,numero2);

    mensaje="el cociente es "+ (parseInt(numero1) / parseInt(numero2));

    alert(mensaje);
	
}

