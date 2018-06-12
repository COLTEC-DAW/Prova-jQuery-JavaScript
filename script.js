var str_cardIds = "#oitava_01, #oitava_02, #oitava_03, #oitava_04, #oitava_05, #oitava_06, #oitava_07, #oitava_08, #oitava_09, #oitava_10, #oitava_11, #oitava_12, #oitava_13, #oitava_14, #oitava_15, #oitava_16, #quarta_01, #quarta_02, #quarta_03, #quarta_04, #quarta_05, #quarta_06, #quarta_07, #quarta_08, #semi_01, #semi_02, #semi_03, #semi_04, #final_01, #final_02, #vencedor";
var array_cardIds = ["#quarta_01", "#quarta_02", "#quarta_03", "#quarta_04", "#quarta_05", "#quarta_06", "#quarta_07", "#quarta_08", "#semi_01", "#semi_02", "#semi_03", "#semi_04", "#final_01", "#final_02", "#vencedor"];
$(document).ready(function(){

  $(document).ready(function(){
    $( document ).on( "click touchend",str_cardIds, function() {
        var nome_trio = $(this).parent().get(0).getAttribute("class");
        var winnerId = "#"+nome_trio;
        //limpa_bracket($(winnerId).get(0).getAttribute("class"));//remove de todas as chaves qualquer um que tenha a antiga classe
        $(winnerId).removeClass();
        $(winnerId).addClass($(this).get(0).getAttribute("class") );
      });
      
    });
    /*var limpa_bracket=function(id){
      
    }*/



});