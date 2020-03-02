var respuesta;
var t0;
var t1;
var rngOne;
var rngTwo;
var op=['-','+','*','/']
var i;
var respuestaUsuario

function comenzar(){
    t0 = performance.now();
    rngOne = parseInt(Math.random()*10+1);
    rngTwo = parseInt(Math.random()*10+1);
    i = parseInt(Math.random()*3);
    respuesta = eval(rngOne+op[i]+rngTwo);

    document.getElementById("PrimerNumero").value = rngOne;
    document.getElementById("SegundoNumero").value = rngTwo;
    document.getElementById("Operador").value = op[i];
}
function Responder()
{   t1=performance.now()
    respuestaUsuario = parseFloat(document.getElementById("Respuesta").value);
    if ((t1-t0)/1000>5) {
    alert("tiempo excedido, vuelva a cargar la pagina")
    } else if (respuestaUsuario == respuesta) {
    alert("correcto")
    } else {
    alert("incorrecto")
}
}
