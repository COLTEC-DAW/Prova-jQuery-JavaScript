/* CASAS DO JOGO
   1 2 3 
   4 5 6 
   7 8 9 */ 

var jogo = [];
var casa, i;

function clicandoJogo(){
	


	
}

function jogodavelha(){
	i=0;
	console.log("Ola jogadores! O jogo da velha segue a seguinte configuração para as casas:");
	console.log("1 2 3");
	console.log("4 5 6");
	console.log("7 8 9");
	for(var c=1;c<=9;c++){
		jogo[c] = null;
	}

	do{
		if(i%2==0 || i==0){ //jogador 1
			casa = prompt ("Jogador 1, qual casa deseja marcar?"); //recebe casa do jogador
			if(jogo[casa]==null){
				jogo[casa] = "x"; 
				i++;
			}
			
			
		}
		else{ //jogador 2
			casa = prompt ("Jogador 2, qual casa deseja marcar?"); //recebe casa do jogador
			if(jogo[casa]==null){
				jogo[casa] = "o"; 
				i++;
			}

		}
		if(confereSeGanhou(jogo)==1){
			return 1;
		}
		else if(confereSeGanhou(jogo)==2){
			return 2;
		}
		if(i==9){//tudo preenchido deu velha bocó
			return 0;
		}
	}while(i<=9); 
}

function confereSeGanhou(vetordaparada){
	//DIAGONAL
	if(vetordaparada[1]=="x" && vetordaparada[5]=="x" && vetordaparada[9]=="x" || vetordaparada[3]=="x" && vetordaparada[5]=="x" && vetordaparada[7]=="x"){
		return 1; //jog 1 ganhou
	}
	else if(vetordaparada[1]=="o" && vetordaparada[5]=="o" && vetordaparada[9]=="o" || vetordaparada[3]=="o" && vetordaparada[5]=="o" && vetordaparada[7]=="o") {
		return 2; //jog 2 ganhou
	}

	//HORIZONTAL
	for(var i=1;i<=9;i+=3){
		if(vetordaparada[i]=="x"  && vetordaparada[i+1]=="x" && vetordaparada[i+2]=="x")
			return 1;
		else if (vetordaparada[i]=="x"  && vetordaparada[i+1]=="x" && vetordaparada[i+2]=="x")
			return 2;

	}

	//VERTICAL
	for(var i=1;i<=9;i+=3){
		if(vetordaparada[i]=="x"  && vetordaparada[i+3]=="x" && vetordaparada[i+6]=="x")
			return 1;
		else if (vetordaparada[i]=="x"  && vetordaparada[i+3]=="x" && vetordaparada[i+6]=="x")
			return 2;

	}
	return 0;
	

}



