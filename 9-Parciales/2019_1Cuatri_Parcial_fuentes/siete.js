function mostrar()
{
    var altura =[];
    var sexo = [];
    var promedio = 0;
    var acumuladorF = 0;
    var primeraVez = true;
    var alturaMin;
    var sexoMin;
    
    for (var i=0; i<5; i++) {
        for (altura[i]; isNaN(altura[i])|| altura[i]<0 || altura[i]>250;) {
            altura[i]= parseFloat(prompt("ingrese altura de jugador en cm"));
        }
        for (sexo[i];sexo[i]!="f" && sexo[i]!="m";) {
            sexo[i] = prompt("ingrese sexo de jugador (m/f)").toLowerCase();
        }
        promedio = promedio + altura[i];
        if (altura[i]>190 && sexo[i]=="f") {
            acumuladorF++
        }
        if (primeraVez == true) {
            primeraVez == false;
            alturaMin = altura[i];
            sexoMin = sexo[i];
        }
        for (altura[i]; i>0 && altura[i]<alturaMin;) {
            alturaMin = altura[i];
            sexoMin = sexo[i];
            
        }
    }
    promedio = promedio / i;
    
    alert("promedio de alturas: "+promedio+" cm");
    alert("cantidad de mujeres que miden mas de 190cm: "+acumuladorF);
    alert("altura más baja y sexo de la persona: "+alturaMin + " " +sexoMin)
}
