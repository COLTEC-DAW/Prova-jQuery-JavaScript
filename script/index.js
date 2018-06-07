var arrayAux = [];
var arrayE = [];
var i = 0;

$(document).ready(function(){
    round();
});

function round (){

    run(i);
}
function run (i){

    imageSetup(array[i], array[i+1]);
    soundSetup(array[i], array[i+1]);
}

function buttonClicked(btn){
    arrayAux.push(array[i+btn].id);
    arrayE.push(array[i+btn]);
    if (array.length == 2) {
        let address = window.location.href.split('').splice(0, window.location.href.length-10).join('')+'template/bracket.html?bracket='+arrayAux.join('-')
        address = address + '-' + document.getElementById('nome').value;

        window.location.href = address;

    }
    else{
        if(i < array.length - 2)
            i = i+2;
        else{
            i = 0;
            array = arrayE;
            arrayE = [];
        }
        round()
    }
}
function imageSetup(obj1, obj2){
    $('#img1').attr('src', obj1.imagem);
    $('#img2').attr('src', obj2.imagem);

    $('#cardTitle1').html(obj1.nome);
    $('#cardTitle2').html(obj2.nome);

    $('#text1').html(obj1.texto);
    $('#text2').html(obj2.texto);

}
function soundSetup (obj1, obj2){
    soundManager.setup({
      // where to find flash audio SWFs, as needed
      url: '/path/to/swf-files/',
      onready: function() {

          var m1 = soundManager.createSound({
            url: obj1.audio
          });
          var m2 = soundManager.createSound({
            url: obj2.audio
          });

          $( "#img1" )
              .mouseover(function() {
                  m1.play();
              })
              .mouseout(function (){
                  m1.stop();
              });

          $( "#img2" )
              .mouseover(function() {
                  m2.play();
              })
              .mouseout(function (){
                  m2.stop();
              });
      }
    });
}

var array = [
    {
        "id": 0,
        "nome": "Secretária",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/imagem/secretaria.jpg",
        "texto": "Secretária, as vezes penso em falar contigo mas tenho medo de ser confundido por um assédio sexual."
    },
    {
        "id": 1,
        "nome": "Evidências",
        "audio": "assets/audio/evidencias.mp3",
        "imagem": "assets/imagem/evidencias.jpg",
        "texto": "E nessa loucura de dizer que não te quero vou negando as aparências e desfarçando as evidências."
    },
    {
        "id": 2,
        "nome": "Dormi na praça",
        "audio": "assets/audio/dormiNaPraca.mp3",
        "imagem": "assets/imagem/dormiNaPraca.jpg",
        "texto": "Seu guarda eu não sou vagabundo eu não sou delinquente. Sou um cara carente. Eu dormi na praça, pensando nela."
    },
    {
        "id": 3,
        "nome": "Garçom",
        "audio": "assets/audio/garcom.mp3",
        "imagem": "assets/imagem/garcom.jpg",
        "texto": "Garçon, aqui nessa mesa de bar você já cansou de escutar centenas de casos de amor."
    },
    {
        "id": 4,
        "nome": "Sinônimos",
        "audio": "assets/audio/sinonimos.mp3",
        "imagem": "assets/imagem/sinonimos.jpg",
        "texto": "Quem ama nunca sente medo De contar o seu segredo, sinônimo de amor é amar."
    },
    {
        "id": 5,
        "nome": "Menino da Porteira",
        "audio": "assets/audio/meninoDaPorteira.mp3",
        "imagem": "assets/imagem/meninoDaPorteira.jpg",
        "texto": "Toda vez que eu viajava pela Estrada de Ouro Fino de longe eu avistava a figura de um menino que corria abrir a porteira e depois vinha me pedindo toque o berrante seu moço que é pra eu ficar ouvindo."
    },
    {
        "id": 6,
        "nome": "Boate Azul",
        "audio": "assets/audio/boateAzul.mp3",
        "imagem": "assets/imagem/boateAzul.jpg",
        "texto": "Sair de que jeito, se nem sei o rumo para onde vou muito vagamente me lembro que estou em uma boate aqui na zona sul."
    },
    {
        "id": 7,
        "nome": "Dama de Vermelho",
        "audio": "assets/audio/damaDeVermelho.mp3",
        "imagem": "assets/imagem/damaDeVermelho.jpg",
        "texto": "Garçom, olhe pelo espelho A dama de vermelho que vai se levantar note que até a orquestra fica toda em festa quando ela sai para dançar"
    },
    {
        "id": 8,
        "nome": "Galopeira",
        "audio": "assets/audio/galopeira.mp3",
        "imagem": "assets/imagem/galopeira.jpg",
        "texto": "Galopeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeira."
    },
    {
        "id": 9,
        "nome": "Fio de Cabelo",
        "audio": "assets/audio/fioDeCabelo.mp3",
        "imagem": "assets/imagem/fioDeCabelo.jpg",
        "texto": "E hoje o que encontrei me deixou mais triste um pedacinho dela que existe um fio de cabelo no meu paletó."
    },
    {
        "id": 10,
        "nome": "Ipê Florido",
        "audio": "assets/audio/ipeFlorido.mp3",
        "imagem": "assets/imagem/ipeFlorido.jpg",
        "texto": "E nessa loucura de dizer que não te quero vou negando as aparências e desfarçando as evidências."
    },
    {
        "id": 11,
        "nome": "O Rei do Gado",
        "audio": "assets/audio/reiDoGado.mp3",
        "imagem": "assets/imagem/reiDoGado.jpg",
        "texto": "E nessa loucura de dizer que não te quero vou negando as aparências e desfarçando as evidências."
    },
    {
        "id": 12,
        "nome": "Majestade o Sabia",
        "audio": "assets/audio/majestadeOSabia.mp3",
        "imagem": "assets/imagem/majestadeOSabia.jpg",
        "texto": "E nessa loucura de dizer que não te quero vou negando as aparências e desfarçando as evidências."
    },
    {
        "id": 13,
        "nome": "É o Amor",
        "audio": "assets/audio/eOAmor.mp3",
        "imagem": "assets/imagem/eOAmor.jpg",
        "texto": "E nessa loucura de dizer que não te quero vou negando as aparências e desfarçando as evidências."
    },
    {
        "id": 14,
        "nome": "Fuscão Preto",
        "audio": "assets/audio/fuscaoPreto.mp3",
        "imagem": "assets/imagem/fuscaoPreto.jpg",
        "texto": "E nessa loucura de dizer que não te quero vou negando as aparências e desfarçando as evidências."
    },
    {
        "id": 15,
        "nome": "Chalana",
        "audio": "assets/audio/chalana.mp3",
        "imagem": "assets/imagem/chalana.jpg",
        "texto": "E nessa loucura de dizer que não te quero vou negando as aparências e desfarçando as evidências."
    }]
