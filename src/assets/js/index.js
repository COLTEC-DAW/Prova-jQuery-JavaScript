
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

// function retriveDataFromJson(tree, fun) {
//     var xmlhttp = new XMLHttpRequest();
//     var url = "./assets/js/content.json";

//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             let JSONcontentFile = JSON.parse(this.responseText);
//             fun(tree, JSONcontentFile);
//         }
//     };
//     xmlhttp.open("GET", url, true);
//     xmlhttp.send(); 
// }

function verifyingTheQueryString(tree) {
    if (window.location.search.indexOf('r=') > -1) {
        let url = new URL(window.location.href)
        var queryString = window.location.search;
        queryString = queryString.substring(3);
        console.log(queryString);
        
        let queries = queryString.split("&");
        startBracketShared(tree, queries);
    } else {
        return;
    }
}

function startBracketShared(tree, queries) {
    var level = -1;
    for (let index = 0; index < queries.length; index++) {
        let imageNode = queries[index].split("=");
        if (imageNode[0]==0) {
            level+=1;
        }

        if(new String(imageNode[1]).valueOf() != new String("n/A").valueOf()) {
            tree.setNode(level, imageNode[1]);
            setImage(imageNode[1], level, imageNode[0])
            console.log(imageNode[1], level, imageNode[0]);
        }
    }
}

function startBracket(tree, json) {
    for (let index = 0; index < json.tree.length; index++) {
        let element = json.tree[index];
        tree.setNode(element.img, element.level, element.node);
        setImage(element.img, element.level, element.node);
    }    
}

function attrSrcVideo (tree, json) {
    var video = document.getElementById("video");
    var winner = tree.getNode(0,0);
    for (let index = 0; index < json.tree.length; index++) {
        let element = json.tree[index];
        if (new String(winner).valueOf() == new String(element.img).valueOf()) {
            video.src = element.video;
            console.log(element.video);
            break;
        }
    }  
    
    $('#modal1').modal('show');
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

    imagesOfTheParent = counting(level, node, tree);
    
    node = dividingNode(node);  
    level -= 1;
    
    let imageVerifying = tree.getNode(level, node);
    
    setImage(img, level, node);
    tree.setNode(img, level, node);
    
    if(level === 0) {
        attrSrcVideo(tree, content);
        // TODO: Compartilhamento - Modal com a imagem do bracket
        // TODO: Mostrar a imagem do campeão e tocar uma música/áudio
    }

    if (imageVerifying != null && 
        new String(imageVerifying).valueOf() != new String(img).valueOf()) {
        setImageAuxiliar(imagesOfTheParent, img, level, node, tree, imageVerifying);
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

    // console.log(images);
    return images;
}

function setImageAuxiliar(imagesOfTheParent, img, level, node, tree, imageVerifying) {
    level -= 1;
    node = dividingNode(node);
    
    imageVerifying = tree.getNode(level, node);
    // console.log(level);
    
    if (imageVerifying == null) {
        return;
    }
    // console.log(imagesOfTheParent);
    // console.log(imageVerifying + imagesOfTheParent[0] + imagesOfTheParent[1]);

    if (new String(imageVerifying).valueOf() == new String(imagesOfTheParent[0]).valueOf() || 
    new String(imageVerifying).valueOf() == new String(imagesOfTheParent[1]).valueOf())  {

        if (new String(img).valueOf() != new String(imageVerifying).valueOf()) {
            setImage(img, level, node);
            tree.setNode(img, level, node);
            setImageAuxiliar(imagesOfTheParent, img, level, node, tree, imageVerifying);
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

function shareContent(tree) {
    var content = new Array();

    for (let level = 0; level < 5; level++) {
        content[level] = new Array();
        for (let node = 0; node < (1<<level); node++) {
            if (tree.getNode(level, node) == null) {
                content[level].push({name: node, value: "n/A"});
            } else {
                content[level].push({name: node, value: tree.getNode(level, node)});
            }
                          
        }
    }
    
    return content;
}

function getValue(){
    var value= $.ajax({ 
       url: './assets/js/content.json', 
       async: false
    }).responseText;
    return value;
 }

$(document).ready(function () {

    var tree = new BinaryTree();

    startBracket(tree, content);
    
    //retriveDataFromJson(tree, startBracket);

    verifyingTheQueryString(tree);

    $("#btn-modal-video").click(function() {
        $("#modal1").modal(); 
    });

    $("#btn-modal-regras").click(function () {
        $("#modal-regras").modal();
    })

    $(".games").click(function() { 
        makeWinnerChange(this, tree);
    });

    $("#btn-share").click(function() {
        
       var content=shareContent(tree);
       var recursiveDecoded = decodeURIComponent($.param(content[0])) + "&"
                            + decodeURIComponent($.param(content[1])) + "&"
                            + decodeURIComponent($.param(content[2])) + "&"
                            + decodeURIComponent($.param(content[3]));
        var log = window.location;

        window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=bracketChallenge&caption=' +'&content='
            + encodeURIComponent(window.location + "?r=" + recursiveDecoded) +'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');

        window.location.assign(log);
    });
});
