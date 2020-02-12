/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precioUnidad;
    var cantidadDeLamparas;
    var marcaDeLamparas;
    var precioFinal;
    var descuento;

    cantidadDeLamparas = document.getElementById("Cantidad").value;
    marcaDeLamparas = document.getElementById("Marca").value;
    

    precioUnidad = 35;

    if (cantidadDeLamparas >= 6 ) {
        descuento = 0.5;
    } else {if (cantidadDeLamparas >= 5 && marcaDeLamparas == "ArgentinaLuz") {
        descuento = 0.4;
    }       else {if (cantidadDeLamparas >= 5) {
            descuento = 0.3;
    }           else {if (cantidadDeLamparas >= 4 && (marcaDeLamparas == "ArgentinaLuz" || marcaDeLamparas == "FelipeLamparas")) {
                    descuento = 0.25;
    }           else { if (cantidadDeLamparas >= 4) {
                    descuento = 0.2;
    }               else { if (cantidadDeLamparas>=3 && marcaDeLamparas == "ArgentinaLuz") {
                            descuento = 0.15;
    }                   else { if (cantidadDeLamparas >= 3 && marcaDeLamparas == "FelipeLamparas") {
                            descuento = 0.10;
    }                           else {if (cantidadDeLamparas >= 3) {
                                descuento = 0.05;
    } else {  descuento = 0;
        
    }}}}}}}};

    precioFinal = precioUnidad * cantidadDeLamparas * (1 - descuento);

    if (precioFinal > 120) {
       
        precioFinal = precioFinal * 1.1
        document.getElementById("precioDescuento").value = "$" + precioFinal
        alert ("IIBB Usted pago: $" + (precioFinal * (1/11)) + " de ingresos brutos");
        
    } else {
        document.getElementById("precioDescuento").value = "$" + precioFinal;
        
    }
;

    
console.log(precioUnidad);
console.log(cantidadDeLamparas);
console.log(descuento);
console.log(precioFinal);




 	
}
