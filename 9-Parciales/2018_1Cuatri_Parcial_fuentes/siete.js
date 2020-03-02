function mostrar()
{   
    var acumulador = 0;
    var sexo = [];
    var nota = [];
    var primeraVez = true;
    var notaBaja;
    var sexoBajo;

for (let c=0; c<5;c++) {
    for (nota[c]; nota[c]<0 || nota[c]>10 || isNaN(nota[c]);){
        nota[c] = parseFloat(prompt("ingrese nota"));
    }
    for (sexo[c]; sexo[c] != "f" && sexo[c] != "m";) {
        sexo[c] = prompt("ingrese sexo (f/m)").toLowerCase();
    };
    if (sexo[c]== "m" && nota[c]>= 6) {
        acumulador++
    }
    if (primeraVez == true){
        primeraVez = false;
        notaBaja = nota[c]
        sexoBajo = sexo[c]
    }
    if (nota[c]>0 && nota[c] < notaBaja) {
        notaBaja = nota[c];
        sexoBajo = sexo[c];
    }
}
    var promedio = (nota[0]+nota[1]+nota[2]+nota[3]+nota[4]) / 5;

    alert("promedio de notas: " + promedio);
    alert("nota mas baja: "+notaBaja + "("+sexoBajo+")")
    alert("cantidad de varones cuya nota fue mayor o igual a seis: "+acumulador)
}
