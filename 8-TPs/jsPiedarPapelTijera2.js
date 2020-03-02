var numRng;
var contDraw=0;
var contWin=0;
var contLoss=0;

function comenzar()
{
	numRng = parseInt(Math.random()*3+1)
	console.log(numRng)
}
function piedra(){ 
	numRng = parseInt(Math.random()*3+1)
	switch (numRng) {
	case 1:
		alert("empate");
		contDraw++;
		break;
	case 2:
		alert("perdiste");
		contLoss++;
		break;
	default:
		alert("ganaste");
		contWin++;
		break;
	}
document.getElementById("ganadas").value = contWin
document.getElementById("perdidas").value = contLoss
document.getElementById("empatadas").value = contDraw
}
function papel(){
	numRng = parseInt(Math.random()*3+1)
	switch (numRng) {
		case 1:
			alert("ganaste");
			contWin++;
			break;
		case 2:
			alert("empate");
			contDraw++;
			break;
		default:
			alert("perdiste");
			contLoss++;
			break;
		}
	document.getElementById("ganadas").value = contWin
	document.getElementById("perdidas").value = contLoss
	document.getElementById("empatadas").value = contDraw
}
function tijera(){
	numRng = parseInt(Math.random()*3+1)
	switch (numRng) {
		case 1:
			alert("perdiste");
			contLoss++;
			break;
		case 2:
			alert("ganaste");
			contWin++;
			break;
		default:
			alert("empate");
			contDraw++;
			break;
		}
	document.getElementById("ganadas").value = contWin
	document.getElementById("perdidas").value = contLoss
	document.getElementById("empatadas").value = contDraw
}
