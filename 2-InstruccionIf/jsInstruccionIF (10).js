function mostrar()
{
	var random

	random = Math.floor(Math.random()*(10-1+1))+1;

	if (random >= 9) {
		alert (random + " : EXCELENTE")
	} 
		else {
		
			if (random >= 4) {
				alert (random + " : APROBO")
		} 
				else {
					alert (random + " : Better luck next time")
			
		}
		
	}
console.log(random);
	
	

}//FIN DE LA FUNCIÓN