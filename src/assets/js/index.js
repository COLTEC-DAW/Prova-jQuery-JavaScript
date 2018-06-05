
function BinaryTree(){ 
    this.btSMF=function(level,node){
        return node+(1<<level)-1;
    }
    this.Nodes = new Array();

    this.setNode = function(value,level,node){
        this.Nodes[this.btSMF(level,node)] = value; 
    }
    this.getNode = function(level,node){
        return this.Nodes[this.btSMF(level,node)];
    }
}

function startBracket(tree) {    
    tree.setNode("fifa12.jpg", 4, 0);
    setBackgroundImage("fifa12", 4, 0);
    tree.setNode("fifa15.jpg", 4, 1);
    setBackgroundImage("fifa15", 4, 0);
    
    tree.setNode("fifa18.jpg", 4, 2);
    setBackgroundImage("fifa18", 4, 0);
    tree.setNode("fifaMobile.jpg", 4, 3);
    setBackgroundImage("fifaMobile", 4, 0);
    
    tree.setNode("fifaStreet1.jpg", 4, 4);
    setBackgroundImage("fifaStreet1.", 4, 0);
    tree.setNode("fifaStreet2.jpg", 4, 5);
    setBackgroundImage("fifaStreet2", 4, 0);
    
    tree.setNode("fifaStreet3.jpg", 4, 6);
    setBackgroundImage("fifaStreet3", 4, 0);
    tree.setNode("fifaWorldCup14.jpg", 4, 7);
    setBackgroundImage("fifaWorldCup14", 4, 0);

    // Mid-Bracket
    
    tree.setNode("internationalSuperStarSoccer.jpg", 4, 8);
    setBackgroundImage("internationalSuperStarSoccer", 4, 0);
    tree.setNode("pes10.jpg", 4, 9);
    setBackgroundImage("pes10.", 4, 0);
    
    tree.setNode("pes13.jpg", 4, 10);
    setBackgroundImage("pes13", 4, 0);
    tree.setNode("pes18.jpg", 4, 11);
    setBackgroundImage("pes18", 4, 0);
    
    tree.setNode("pesMobile.jpg", 4, 12);
    setBackgroundImage("pesMobile", 4, 0);
    tree.setNode("Ronaldinho-Soccer-97.jpg", 4, 13);
    setBackgroundImage("Ronaldinho-Soccer-97", 4, 0);
    
    tree.setNode("winningEleven10.jpg", 4, 14);
    setBackgroundImage("winningEleven10", 4, 0);
    tree.setNode("fifa12.jpg", 4, 15); // trocar imagem
    setBackgroundImage("fifa12", 4, 0);
}

function makeWinnerChange(singleBracket, tree) {
    var divID = document.getElementById(singleBracket.id);
    style = window.getComputedStyle(divID, false);
    img = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    
    img = img.split("/");
    img = img[img.length-1];

    var levelAndNode = divID.split("-");
    var level = parseInt(levelAndNode[0].split(":")[1]);
    var node = parseInt(levelAndNode[1].split(":")[1]);

    if(level === 0) {
        // TODO: the request to share
        // TODO: Show the image that won and play an audio of it
    }
    
    if (node % 2 !== 0) {
        node -= 1;
        node /= 2;
    } else {
        node /= 2;
    }

    tree.setNode(img, level-1, node);
    setBackgroundImage(level-1, node);
}

function setBackgroundImage(img, level, node) {
    $("#level:" + level.toString() + "-node:" + node.toString()).css({
        "background-image" : "url(./assets/images/" + img + ".jpg)", 
        "background-size" : "cover", 
        "background-repeat" : "no-repeat",
        "background-position": "center"
    });
}

$(document).ready(function () {
    var tree = new BinaryTree();
    startBracket(tree);

    $(".single-bracket").click(function() { 
        makeWinnerChange(this, tree);
    });
});
