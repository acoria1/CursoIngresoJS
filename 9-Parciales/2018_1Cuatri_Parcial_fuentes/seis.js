function mostrar()
{
for (var hora = -1; hora<0 || hora>24;) {
    hora = parseInt(document.getElementById("laHora").value);
    console.log(hora)
}
switch (hora) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    alert("es de mañana")
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        alert("es de tarde")
        break;
    default:
    if (hora>19) {
        alert("es de noche, a dormir")
    } else {
        alert("es de noche")
    };
        break;
}
}
