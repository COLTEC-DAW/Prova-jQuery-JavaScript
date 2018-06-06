        //gera um vetor com números aleátorios
        function geradorDeVetor(tamanho) {
            var vetor = [];
            var numero;
            var verificacao = false;
            var quantidade;
            for (let i = 0; i < tamanho; i++) {
                while (verificacao == false) {
                    quantidade = 0;
                    numero = (Math.floor((Math.random() * (tamanho/2))) + 1);
                    for (let j = 0; j < vetor.length; j++) {
                        if (vetor[j] == numero) {
                            quantidade++;
                        }
                    }
                    if (quantidade == 1) {
                        vetor.push(numero);
                        verificacao = true;
                    }
                }
             verificacao = false;
            }
            //return vetor;
            console.log(vetor);
        }
        geradorDeVetor(32);