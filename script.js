
        //gera um vetor com números aleátorios
        function geradorDeVetor() {
            var vetor = [];
            var tamanho = 32;
            var numero;
            var verificacao = false;
            var quantidade;
            for (let i = 0; i < tamanho; i++) {
                while (verificacao == false) {
                    quantidade = 0;
                    numero = (Math.floor((Math.random() * tamanho)));
                    for (let j = 0; j < vetor.length; j++) {
                        if (vetor[j] == numero) {
                            quantidade++;
                        }
                    }
                    if (quantidade == 0) {
                        vetor.push(numero);
                        verificacao = true;
                    }
                }
             verificacao = false;
            }
            console.log(vetor);
            return vetor;
        }

        //função para sortear os confrontos dos 16avos de final
        function sorteiaConfrontos() {
            var nomes = ["Artur",
                "Fofão",
                "Bryan",
                "Caio",
                "Dener",
                "Veazey",
                "Germano",
                "Gui",
                "Futebol",
                "Paloma",
                "Ícaro",
                "Caxueira",
                "Bernola",
                "Biscoito",
                "Mari",
                "Matheus",
                "Mathias",
                "Rei",
                "Rita",
                "Will",
                "Piu-Piu",
                "Vitor",
                "Chrys",
                "Phelps",
                "Pedro",
                "Raquel",
                "Léo",
                "Ângelo",
                "Miguel",
                "Filipe",
                "Enzo",
                "Henrique"]


            var vetorAleatorio = geradorDeVetor();
            var card16avos = $(".col_16avos").find("li"); //pegar todos os "li" das 16-avos de final

            for (let i = 0; i < vetorAleatorio.length; i++) {
                $(card16avos[i]).html("" + nomes[vetorAleatorio[i]] + "");
            }
        }

        $(document).ready(function () {
            
            sorteiaConfrontos();
            var chave = [];
            chave[0] = "diferente de nada";
            chave[1] = "difente de nada";
            var champ;
            var position;

            // Atribui id //
            var listas = []

            listas[0] = $(".col_16avos").find("ul");
            listas[1] = $(".col_oitavas").find("ul");
            listas[2] = $(".col_quartas").find("ul");
            listas[3] = $(".col_semis").find("ul");
            listas[4] = $(".col_final").find("ul");
            
            for(let i=0; i<listas.length; i++){
                for (let j=0; j<listas[i].length; j++){
                    if(j>=listas[i].length/2){
                        $(listas[i][j]).attr("id", j - listas[i].length/2);
                    }else{
                        $(listas[i][j]).attr("id", j);
                    }
                }
            }



            // Clique no nome
            $(".card li").click(function(){
                chave[0] = $(this);
                chave[1] = $($(this).siblings()[0]);
                
                if(chave[1].text() != "" && chave[0].text() != ""){
                    var width100 = 100;
                    $("#confronto").css("display", "block");
                    $(".opcao img").animate({
                        "width": width100+'%',
                        "height": 480,
                    }, 1000 );
                
                    if(chave[1].text() == chave[0].next().text()){
                        $($(".opcao").children()[1]).text(chave[0].text());
                        $($(".opcao").children()[3]).text(chave[1].text());
                    }else{
                        $($(".opcao").children()[1]).text(chave[1].text());
                        $($(".opcao").children()[3]).text(chave[0].text());     
                    }
                }
           });

        //Escolha do vencedor
           $(".opcao").click(function(){
                champ =  $(this).find("h3").text() == chave[0].text() ? chave[0] : chave[1];    
                var looser = $(this).find("h3").text() != chave[0].text() ? chave[0] : chave[1];    
                var proximo;

                if ($($(champ).parents()[2]).attr("class").includes("direita")){
                        proximo = $($(champ).parents().prev()).children();
                    
                }else{
                    if ($(champ).attr("class").includes("ultimo")){ // Lembrar de por ultimo em todos
                        proximo = $(champ).parents().next()[0];
                    }else{
                        proximo = $(champ).parents().next()[1];
                    }
                }
            
                position = parseInt($(champ).parent().attr("id"));
                console.log(position);
                $($(proximo).find("li")[position]).text(champ.text());

                // Troca nome dos perdedores
                participantes = [];
                if ($($(looser).parents()[2]).attr("class").includes("col_16avos")){
                    participantes = participantes.concat($(".col_oitavas").children().find("li").toArray());
                    participantes = participantes.concat($(".col_quartas").children().find("li").toArray());
                    participantes = participantes.concat($(".col_semis").children().find("li").toArray());
                    participantes = participantes.concat($(".col_final").children().find("li").toArray());
                }else if ($($(looser).parents()[2]).attr("class").includes("col_oitavas")){
                    participantes = participantes.concat($(".col_quartas").children().find("li").toArray());
                    participantes = participantes.concat($(".col_semis").children().find("li").toArray());
                    participantes = participantes.concat($(".col_final").children().find("li").toArray());
                }else if($($(looser).parents()[2]).attr("class").includes("col_quartas")){
                    participantes = participantes.concat($(".col_semis").children().find("li").toArray());
                    participantes = participantes.concat($(".col_final").children().find("li").toArray());
                }else if($($(looser).parents()[2]).attr("class").includes("col_semis")){
                    participantes = participantes.concat($(".col_final").children().find("li").toArray());
                }
                for(let i=0; i<participantes.length; i++){
                    if($(participantes[i]).text() == $(looser).text()){
                        $(participantes[i]).text($(champ).text());
                    }
                }
                
                // Volta pro jogo
                $("#confronto").css("display", "none");
                $("#confronto .opcao img").css({"width":"10px", "height":"10px"})
           });
        });

