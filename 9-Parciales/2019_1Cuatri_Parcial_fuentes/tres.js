function mostrar()
{
for (var precio; isNaN(precio)|| precio<0;){
precio = parseFloat(prompt("ingrese el precio"));
};
for (var descuento; isNaN(descuento)||descuento<0||descuento>100;) {
    descuento = parseFloat(prompt("ingrese el decuento en porcentaje"));
}
document.getElementById("elPrecioFinal").value = precio - (precio*descuento/100)
}