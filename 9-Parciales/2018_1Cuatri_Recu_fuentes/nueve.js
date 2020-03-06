function mostrar() {
    var animal = new Array();
    var peso = new Array();
    var temp = new Array();
    var acumTemp = 0;
    var acumAnim = 0;
    var promedio = 0;
    var pesoMax;
    var primeraVez = true;
    var animMax;
    var tempMax;
    var pesoMinNeg;
    var pesoMaxNeg;
    var segundaVez = true;
    var animMaxNeg;
    var animMinNeg;

    for (var contador; isNaN(contador);) {
        contador = parseInt(prompt("cantidad de animales"));
    }

    for (var i = 0; i < contador; i++) {
        animal[i] = prompt("Animal N°" + (i + 1) + ":");

        for (peso[i]; isNaN(peso[i]) || peso[i] < 1 || peso[i] > 1000;) {
            peso[i] = parseFloat(prompt("Peso en kg:"))
        }

        for (temp[i]; isNaN(temp[i]) || temp[i] < -30 || temp[i] > 30;) {
            temp[i] = parseInt(prompt("Temperatura del hábitat:"))
        }
        if (temp[i] % 2 == 0) {
            acumTemp++;
        }
        if (temp[i] < 0) {
            acumAnim++;
        }
        if (primeraVez == true) {
            primeraVez = false;
            pesoMax = peso[i];
            animMax = animal[i];
            tempMax = temp[i];
        }
        for (peso[i]; i > 0 && peso[i] > pesoMax;) {
            pesoMax = peso[i];
            animMax = animal[i];
            tempMax = temp[i];
        }
        if (segundaVez == true && temp[i] < 0) {
            pesoMinNeg = peso[i];
            pesoMaxNeg = peso[i];
            animMaxNeg = animal[i];
            animMinNeg = animal[i];
            segundaVez = false;
        }
        if (temp[i] >= 0 && isNaN(pesoMaxNeg)) {
            pesoMaxNeg = "No hay animales cuyo habitat este a menos de 0 grados";
        }
        for (peso[i]; temp[i] < 0 && peso[i] > pesoMaxNeg;) {
            pesoMaxNeg = peso[i];
            animMaxNeg = animal[i];
        }
        for (peso[i]; temp[i] < 0 && peso[i] < pesoMinNeg;) {
            pesoMinNeg = peso[i];
            animMinNeg = animal[i];
        }

        promedio = promedio + peso[i];
    }

    console.log(animal);
    console.log(peso);
    console.log(temp);
    promedio = promedio / contador;

    if (isNaN(pesoMaxNeg)) {
        document.write("<p>" + "Cantidad de temperaturas pares: " + acumTemp + "</p>");
        document.write("<p>" + "Animal más pesado: " + animMax + ", temperatura: " + tempMax + "</p>");
        document.write("<p>" + "Cantidad de animales que viven a menos de 0 grados: " + acumAnim + "</p>");
        document.write("<p>" + "promedio de peso: " + promedio + "kg" + "</p>");
        document.write("<p>" + "<em>" + pesoMaxNeg + "</em>" + "</p>")
    } else {
        document.write("<p>" + "Cantidad de temperaturas pares: " + acumTemp + "</p>");
        document.write("<p>" + "Animal más pesado: " + animMax + ", temperatura: " + tempMax + "</p>");
        document.write("<p>" + "Cantidad de animales que viven a menos de 0 grados: " + acumAnim + "</p>");
        document.write("<p>" + "promedio de peso: " + promedio + "kg" + "</p>");
        document.write("<p>" + "peso máximo: " + pesoMaxNeg + " kg (" + animMaxNeg + ")" + "<br>" + "peso mínimo: " + pesoMinNeg + " kg (" + animMinNeg + ")" + "</p>");
    }
}
