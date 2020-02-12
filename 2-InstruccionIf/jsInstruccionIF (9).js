function mostrar()
{
	var random

	random = Math.floor(Math.random()*(10-1+1))+1;

	alert (random);
	
	

}
/* otra manera de hacerlo:

var random
var min
var max

min = 1
max = 10

random = Math.floor(Math.random()*(max - min)) + min;
*/