function mostrar()
{
    var pais = [];
    var hab = [];
    var temp = [];
    var acumPar = 0;
    var acumTemp = 0;
    var primeraVez = true;
    var habMin;
    var tempMin;
    var paisTempMin;
    var paisHabMin;
    var promedio =0;
    
    for (var contador; isNaN(contador)||contador<1;) {
        contador = parseInt(prompt("cantidad de paises"));
    }
    for (var i=0; i<contador; i++) {
        pais[i]= prompt("ingrese un pais");
    
        for (hab[i];isNaN(hab[i])||hab[i]<1 || hab[i]>7000;) {
            hab[i] = parseFloat(prompt("ingrese cantidad de habitantes en millones"));
        }
        for (temp[i]; isNaN(temp[i])|| temp[i]<-50||temp[i]>50;) {
            temp[i]= parseInt(prompt("temperatura minima"))
            
        }
        if (temp[i]%2==0) {
            acumPar++
        }
        if (temp[i]>40) {
            acumTemp ++
        }
        if (primeraVez == true) {
            primeraVez = false;
            habMin = hab[i];
            paisHabMin = pais[i];
            tempMin = temp[i];
            paisTempMin  = pais[i];
        }
        if (i>0 && hab[i]<habMin) {
            habMin = hab[i];
            paisHabMin = pais[i];
        }
        if (i>0 && temp[i] <tempMin) {
            tempMin = temp[i];
            paisTempMin = pais[i];
        }
        promedio = promedio + hab[i];
    }
    promedio = promedio / contador;

    document.write("cantidad de temperaturas pares: " + acumPar+"</br>");
    document.write("pais con menos habitantes: " + paisHabMin+"</br>");
    document.write("cantidad de paises que superan los 40°C: " + acumTemp+"</br>");
    document.write("promedio de habitantes: " + promedio+"</br>");
    document.write("temperatura minima ingresada:  "+tempMin+ " en "+paisTempMin+"</br>");

}
