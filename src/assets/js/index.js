
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
    setImage("fifa12.jpg", 4, 0);
    tree.setNode("fifa15.jpg", 4, 1);
    setImage("fifa15.jpg", 4, 1);
    
    tree.setNode("ronaldinhoSoccer97.jpg", 4, 2);
    setImage("ronaldinhoSoccer97.jpg", 4, 2);
    tree.setNode("fifaMobile.jpg", 4, 3);
    setImage("fifaMobile.jpg", 4, 3);
    
    tree.setNode("fifaStreet1.jpg", 4, 4);
    setImage("fifaStreet1.jpg", 4, 4);
    tree.setNode("fifaStreet2.jpg", 4, 5);
    setImage("fifaStreet2.jpg", 4, 5);
    
    tree.setNode("fifaStreet3.jpg", 4, 6);
    setImage("fifaStreet3.jpg", 4, 6);
    tree.setNode("fifaWorldCup14.jpg", 4, 7);
    setImage("fifaWorldCup14.jpg", 4, 7);

    // Mid-Bracket
    
    // tree.setNode("internationalSuperStarSoccer.jpg", 4, 8);
    // setImage("internationalSuperStarSoccer.jpg", 4, 8);
    // tree.setNode("pes10.jpg", 4, 9);
    // setImage("pes10.jpg", 4, 9);
    
    // tree.setNode("pes13.jpg", 4, 10);
    // setImage("pes13.jpg", 4, 10);
    // tree.setNode("pes18.jpg", 4, 11);
    // setImage("pes18.jpg", 4, 11);
    
    // tree.setNode("pesMobile.jpg", 4, 12);
    // setImage("pesMobile.jpg", 4, 12);
    // tree.setNode("Ronaldinho-Soccer-97.jpg", 4, 13);
    // setImage("ronaldinhoSoccer97.jpg", 4, 13);
    
    // tree.setNode("winningEleven10.jpg", 4, 14);
    // setImage("winningEleven10.jpg", 4, 14);
    // tree.setNode("fifa12.jpg", 4, 15); // trocar imagem
    // setImage("fifa12.jpg", 4, 15);
}

function makeWinnerChange(games, tree) {
    var divID = $(games).children().children();
    divID = divID[0].id;
    var levelAndNode = divID.split("-");
    var level = parseInt(levelAndNode[0].split(":")[1]);
    let node = parseInt(levelAndNode[1].split(":")[1]);

    var img = document.getElementById(divID).src;
    img = img.split("/");
    img = img[img.length-1];

    if(level === 0) {
        // TODO: the request to share
        // TODO: Show the image that won and play an audio of it
    }

    imagesOfTheParent = counting(level, node, tree);
    
    node = dividingNode(node);  

    let imageVerifying = tree.getNode(level-1, node);
    
    setImage(img, level-1, node);
    tree.setNode(img, level-1, node);

    if (imageVerifying != null && 
        new String(imageVerifying).valueOf() != new String(img).valueOf()) {
        setImageAuxiliar(imagesOfTheParent, img, level-1, node, tree, imageVerifying);
    }
}

function counting(level, node, tree) {
    images = [];
    images.push(tree.getNode(level, node));
    if (node % 2 !== 0) {
        images.push(tree.getNode(level, node-1));
    } else {
        images.push(tree.getNode(level, node+1));
    }

    console.log(images);
    return images;
}

function setImageAuxiliar(imagesOfTheParent, img, level, node, tree, imageVerifying) {
    level-=1;
    node=dividingNode(node);
    
    imageVerifying = tree.getNode(level, node);
    console.log(level);
    
    if (imageVerifying == null) {
        return;
    }
    console.log(imagesOfTheParent);
    console.log(imageVerifying + imagesOfTheParent[0] + imagesOfTheParent[1]);

    if (new String(imageVerifying).valueOf() == new String(imagesOfTheParent[0]).valueOf() ||
        new String(imageVerifying).valueOf() == new String(imagesOfTheParent[1]).valueOf()) 
        {

        if (new String(img).valueOf() != new String(imageVerifying).valueOf()) {
            setImage(img, level, node);
            tree.setNode(img, level, node);
            setImageAuxiliar(imagesOfTheParent, img, level, node, 
                                tree, imageVerifying);
        } else {
            return;
        } 
    }
}

function dividingNode(node) {
    if (node % 2 !== 0) {
        node -= 1;
        node /= 2;
    } else {
        node /= 2;
    }

    return node;
}

function setImage(img, level, node) {
    console.log("#level:" + level.toString() + "-node:" + node.toString());
    document.getElementById("level:" + level.toString() + "-node:" + node.toString())
        .src = "./assets/images/" + img;
}

$(document).ready(function () {
    var tree = new BinaryTree();
    startBracket(tree);

    $(".games").click(function() { 
        makeWinnerChange(this, tree);
    });
});
