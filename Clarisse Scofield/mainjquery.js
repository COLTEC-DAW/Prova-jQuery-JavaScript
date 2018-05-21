 /* CASAS DO JOGO
   1 2 3 
   4 5 6 
   7 8 9 */ 

var jogo = [];
var casa, i=1;
var jogador = 1;
var placarj1=0, placarj2=0;

for(var c=1;c<=9;c++){
			jogo[c] = null;
}

var estado=false;
var nome1,nome2;

function comecar(){
	estado = true;
	nome1 = $("input[name=j1name]").val();
	nome2= $("input[name=j2name]").val();
	document.getElementById("j1").innerHTML=(nome1+" "+placarj1);
	document.getElementById("j2").innerHTML=(nome2+" "+placarj1);
}

function restart(){

}

var jogadorDaVez= false;
$(document).ready(function($) {
	$("td").click(function(){ //quando clicar no td da tabela
		if(estado){
			casa = event.target.id; //pega o id do td
	    	

			if(!jogadorDaVez){ //jogador 1
				document.getElementById("player").innerHTML=("Clique "+nome1);
				if(jogo[casa]==null){ //nao foi marcado 
					$(this).text("x"); //muda o numero para marcacao x
					jogo[casa] = "x"; 
					i++;
				}
			}
			else{ //jogador 2
				document.getElementById("player").innerHTML=("Clique "+nome2);
				if(jogo[casa]==null){
					$(this).text("o"); //muda o numero para marcacao o
					jogo[casa] = "o"; 
					i++;
				}
			}

			jogadorDaVez = !jogadorDaVez;
			console.log(i);

			if(confereSeGanhou(jogo)==1){
				//document.getElementById("vencedor").innerHTML("Ganhou jogador 1!");
				document.getElementById("vencedor").innerHTML=(nome1+" ganhou ");
				placarj1++;
				document.getElementById("j1").innerHTML=(nome1+" "+placarj1);
			}
			else if(confereSeGanhou(jogo)==2){
				//document.getElementById("vencedor").innerHTML("Ganhou jogador 2!");
				document.getElementById("vencedor").innerHTML=(nome2 + " ganhou ");
				placarj2++;
				document.getElementById("j2").innerHTML=(nome2+" "+placarj2);
			}
			if(i==9){//tudo preenchido deu velha 
				document.getElementById("vencedor").innerHTML=("Deu velhaaaa!");
				
			}
		}

	});	

});


	
function jogodavelha(){
	i=0;
	console.log("Ola jogadores! O jogo da velha segue a seguinte configuração para as casas:");
	console.log("1 2 3");
	console.log("4 5 6");
	console.log("7 8 9");
	

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



