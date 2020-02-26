function mostrar()
{
for (var precio; isNaN(precio);) {
    precio = parseFloat(prompt("ingrese el precio en pesos"));
}
for (var descuento; isNaN(descuento);) {
    descuento = parseFloat(prompt("ingrese el descuento en porcentaje"))
}

document.getElementById("elPrecioFinal").value = "$ " + (precio - (precio*descuento/100))
}
