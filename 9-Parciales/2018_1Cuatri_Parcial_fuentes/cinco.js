function mostrar()
{
var planeta = prompt("ingrese un planeta del sistema solar").toLowerCase();
console.log(planeta);
switch (planeta) {
    case 'mercurio':
    case 'venus':
    alert("acá hace mas calor");    
        break;
    case 'tierra':
    case 'la tierra':
    alert('acá vivimos')
        break;
    case 'marte':
    case 'jupiter':
    case 'júpiter':
    case 'neptuno':
    case 'saturno':
    case 'urano':
    case 'pluton':
    case 'plutón':
    alert("acá hace mas frío");
    break;
    default:
        break;
}
}
