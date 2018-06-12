var bracket = []


window.onload = function(){
    let link = "https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text="+encodeURIComponent(window.location.href)
    let url = new URL(window.location.href);
    let nome = url.searchParams.get("name");
    let aux = url.searchParams.get("bracket").split('-');

    if(nome && nome != '')
        document.getElementById('title').innerHTML = nome + "'s bracket";

    array.map((element) => {
        bracket.push(element);
    })
    aux.map((id) => {
        bracket.push(get(id));
    })
    render();
};

function get(i){
    return array[i];
}

function render (){
    for(let i = 1; i < 6; i++){
        let elementId = 'col'+i;
        let element = document.getElementById(elementId);
        for (let j= 0; j < Math.pow(2, 5-i); j++) {

            let card = document.createElement('DIV');
            card.setAttribute( 'class', 'el'+i);
            card.id='c'+i+'l'+j;
            card.innerHTML = '<p class="z-depth-1 elementText">'+ bracket[j].nome +"</p>"
            element.appendChild(card);
        }
        bracket.splice(0, Math.pow(2, 5-i));
    }
}

function shareTwitter(){
    let link = "https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text=" +
    "My modãos bracket: " +
    encodeURIComponent(window.location.href)
    window.open(link);
}

function shareTumblr(){
            window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=bracketChallenge&caption='
            +'my bracket' +'&content='
            + encodeURIComponent(window.location.href) +'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
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
        "nome": "Arapuca",
        "audio": "assets/audio/arapuca.mp3",
        "imagem": "assets/imagem/arapuca.jpg",
        "texto": "Armei uma arapuca na beira da estrada, Pra pegar moça bonita e também mulher casada"
    },
    {
        "id": 10,
        "nome": "Ipê Florido",
        "audio": "assets/audio/ipeFlorido.mp3",
        "imagem": "assets/imagem/ipeFlorido.jpg",
        "texto": "Meu ipê florido junto à minha cela, Hoje tem altura de minha janela"
    },
    {
        "id": 11,
        "nome": "O Rei do Gado",
        "audio": "assets/audio/reiDoGado.mp3",
        "imagem": "assets/imagem/reiDoGado.jpg",
        "texto": "Sou desse chão, Onde o rei é peão, Com o laço na mão"
    },
    {
        "id": 12,
        "nome": "Majestade, o Sabia",
        "audio": "assets/audio/majestadeOSabia.mp3",
        "imagem": "assets/imagem/majestadeOSabia.jpg",
        "texto": "Tô indo agora prum lugar todinho meu Quero uma rede preguiçosa pra deitar, Em minha volta sinfonia de pardais, Cantando para a majestade, o sabiá, A majestade, o sabiá"
    },
    {
        "id": 13,
        "nome": "É o Amor",
        "audio": "assets/audio/eOAmor.mp3",
        "imagem": "assets/imagem/eOAmor.jpg",
        "texto": "É o amooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor"
    },
    {
        "id": 14,
        "nome": "Fuscão Preto",
        "audio": "assets/audio/fuscaoPreto.mp3",
        "imagem": "assets/imagem/fuscaoPreto.jpg",
        "texto": "Fuscão preto com o seu ronco maldito, Meu castelo tão bonito, Você fez desmoronar..."
    },
    {
        "id": 15,
        "nome": "Chalana",
        "audio": "assets/audio/chalana.mp3",
        "imagem": "assets/imagem/chalana.jpg",
        "texto": "Oh! Chalana sem querer, Tu aumentas minha dor, Nessas águas tão serenas Vai levando meu amor"
    }]
