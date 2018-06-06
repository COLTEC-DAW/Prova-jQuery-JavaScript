$(document).ready(function(){

    $("p").click(function(){
        if($("p").css("background-color")=="black"){
            $("p").css({"background-color":"white","color":"black"});
        }else{
            $("p").css({"background-color":"black","color":"white"});

        }
    });
});