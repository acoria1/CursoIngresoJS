function mostrar()
{
var continente = document.getElementById("Marca").value;

for (var dias;isNaN(dias)|| dias<1;) {
    dias = parseInt(prompt("ingrese la cantidad de días"));
}
var medio = prompt("ingrese medio de pago").toLowerCase();
var descuento;

console.log(continente);
console.log(medio);

switch (continente) {
    case 'América':
        switch (medio) {
            case 'debito':
                descuento = 0.6
                break;
            default:
                descuento = 0.5
                break;
        }
        break;
    case 'África':
        switch (medio) {
            case 'mercado pago':
                descuento = 0.75
                break;
            case 'efectivo':
                descuento = 0.75
                break;
            default:
                descuento = 0.6
                break;
        }
        break;
    case 'Europa':
        switch (medio) {
            case 'debito':
                descuento = 0.35
                break;
            case 'mercado pago':
                descuento = 0.3
                break;
            default:
                descuento = 0.25
                break;
        }
        break;
    default:
        descuento = -0.2
        break;
}
console.log(descuento);
alert("valor total del viaje: " + (100*dias - 100*dias*descuento)+" $")
    
}


