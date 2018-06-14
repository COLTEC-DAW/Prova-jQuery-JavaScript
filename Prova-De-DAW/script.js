var counter = 0;

$(document).ready(function() {
  $("img").click(function() {
    if(counter == 0) {
      if($(this).hasClass("L")) {
        $(this).animate({left: $(this).width() + "px"});
      }
      else{
        $(this).animate({left: (-1)*$(this).width() + "px"});
      }
      if($(this).hasClass("1")){
        $(this).animate({top: $(this).height() + "px"});
        $(".2").unbind("click");
        $(".2").addClass("done");
        $(".2").removeClass("2");
        $(this).removeClass("1");
      }

      if($(this).hasClass("2")){
        $(this).animate({top: $(this).height() + "px"});
        $(".1").unbind("click");
        $(".1").addClass("done");
        $(".1").removeClass("1");
        $(this).removeClass("2");
      }
      if($(this).hasClass("3")){
        $(this).animate({top: $(this).height() + "px"});
        $(".4").unbind("click");
        $(".4").addClass("done");
        $(".4").removeClass("4");
        $(this).removeClass("3");
      }
      if($(this).hasClass("4")){
        $(this).animate({top: $(this).height() + "px"});
        $(".3").unbind("click");
        $(".3").addClass("done");
        $(".3").removeClass("3");
        $(this).removeClass("4");
      }
      if($(this).hasClass("5")){
        $(this).animate({top: $(this).height() + "px"});
        $(".6").unbind("click");
        $(".6").addClass("done");
        $(".6").removeClass("6");
        $(this).removeClass("5");
      }
      if($(this).hasClass("6")){
        $(this).animate({top: $(this).height() + "px"});
        $(".5").unbind("click");
        $(".5").addClass("done");
        $(".5").removeClass("5");
        $(this).removeClass("6");
      }
      if($(this).hasClass("7")){
        $(this).animate({top: $(this).height() + "px"});
        $(".8").unbind("click");
        $(".8").addClass("done");
        $(".8").removeClass("8");
        $(this).removeClass("7");
      }
      if($(this).hasClass("8")){
        $(this).animate({top: $(this).height() + "px"});
        $(".7").unbind("click");
        $(".7").addClass("done");
        $(".7").removeClass("7");
        $(this).removeClass("8");
      }
      if($(this).hasClass("9")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".10").unbind("click");
        $(".10").addClass("done");
        $(".10").removeClass("10");
        $(this).removeClass("9");
      }
      if($(this).hasClass("10")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".9").unbind("click");
        $(".9").addClass("done");
        $(".9").removeClass("9");
        $(this).removeClass("10");
      }
      if($(this).hasClass("11")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".12").unbind("click");
        $(".12").addClass("done");
        $(".12").removeClass("12");
        $(this).removeClass("11");
      }
      if($(this).hasClass("12")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".11").unbind("click");
        $(".11").addClass("done");
        $(".11").removeClass("11");
        $(this).removeClass("12");
      }
      if($(this).hasClass("13")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".14").unbind("click");
        $(".14").addClass("done");
        $(".14").removeClass("14");
        $(this).removeClass("13");
      }
      if($(this).hasClass("14")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".13").unbind("click");
        $(".13").addClass("done");
        $(".13").removeClass("13");
        $(this).removeClass("14");
      }
      if($(this).hasClass("15")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".16").unbind("click");
        $(".16").addClass("done");
        $(".16").removeClass("16");
        $(this).removeClass("15");
      }
      if($(this).hasClass("16")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".15").unbind("click");
        $(".15").addClass("done");
        $(".15").removeClass("15");
        $(this).removeClass("16");
      }
    }
    else if(counter == 1){
      if($(this).hasClass("1") || $(this).hasClass("3") || $(this).hasClass("5") || $(this).hasClass("7")) {
        $(this).animate({left: $(this).width() + "px"});
      }
      else{
        $(this).animate({left: (-1)*$(this).width() + "px"});
      }
      if($(this).hasClass("1")){
        $(this).animate({top: $(this).height() + "px"});
        $(".2").unbind("click");
        $(".2").addClass("done");
        $(".2").removeClass("2");
        $(this).removeClass("1");
      }

      if($(this).hasClass("2")){
        $(this).animate({top: $(this).height() + "px"});
        $(".1").unbind("click");
        $(".1").addClass("done");
        $(".1").removeClass("1");
        $(this).removeClass("2");
      }
      if($(this).hasClass("3")){
        $(this).animate({top: $(this).height() + "px"});
        $(".4").unbind("click");
        $(".4").addClass("done");
        $(".4").removeClass("4");
        $(this).removeClass("3");
      }
      if($(this).hasClass("4")){
        $(this).animate({top: $(this).height() + "px"});
        $(".3").unbind("click");
        $(".3").addClass("done");
        $(".3").removeClass("3");
        $(this).removeClass("4");
      }
      if($(this).hasClass("5")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".6").unbind("click");
        $(".6").addClass("done");
        $(".6").removeClass("6");
        $(this).removeClass("5");
      }
      if($(this).hasClass("6")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".5").unbind("click");
        $(".5").addClass("done");
        $(".5").removeClass("5");
        $(this).removeClass("6");
      }
      if($(this).hasClass("7")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".8").unbind("click");
        $(".8").addClass("done");
        $(".8").removeClass("8");
        $(this).removeClass("7");
      }
      if($(this).hasClass("8")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".7").unbind("click");
        $(".7").addClass("done");
        $(".7").removeClass("7");
        $(this).removeClass("8");
      }
    }
    else if(counter == 2){
      if($(this).hasClass("1") || $(this).hasClass("3") || $(this).hasClass("5") || $(this).hasClass("7")) {
        $(this).animate({left: $(this).width() + "px"});
      }
      else{
        $(this).animate({left: (-1)*$(this).width() + "px"});
      }
      if($(this).hasClass("1")){
        $(this).animate({top: $(this).height() + "px"});
        $(".2").unbind("click");
        $(".2").addClass("done");
        $(".2").removeClass("2");
        $(this).removeClass("1");
      }

      if($(this).hasClass("2")){
        $(this).animate({top: $(this).height() + "px"});
        $(".1").unbind("click");
        $(".1").addClass("done");
        $(".1").removeClass("1");
        $(this).removeClass("2");
      }
      if($(this).hasClass("3")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".4").unbind("click");
        $(".4").addClass("done");
        $(".4").removeClass("4");
        $(this).removeClass("3");
      }
      if($(this).hasClass("4")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".3").unbind("click");
        $(".3").addClass("done");
        $(".3").removeClass("3");
        $(this).removeClass("4");
      }
    }
    else if(counter == 3){
      if($(this).hasClass("1") || $(this).hasClass("3") || $(this).hasClass("5") || $(this).hasClass("7")) {
        $(this).animate({left: $(this).width() + "px"});
      }
      else{
        $(this).animate({left: (-1)*$(this).width() + "px"});
      }
      if($(this).hasClass("1")){
        $(this).animate({top: $(this).height() + "px"});
        $(".2").unbind("click");
        $(".2").addClass("done");
        $(".2").removeClass("2");
        $(this).removeClass("1");
      }

      if($(this).hasClass("2")){
        $(this).animate({top: (-1)*$(this).height() + "px"});
        $(".1").unbind("click");
        $(".1").addClass("done");
        $(".1").removeClass("1");
        $(this).removeClass("2");
      }
    }
    var j = 0, k = 0, m = 1, l = 0;
    $("img").each(function(){
      if($(this).hasClass("done")) {
        j++;
      }
      k++;
    })
    console.log(j);
    if(j == k/2){
      counter++;
      console.log(counter);
      $("img").each(function(){
        if(!($(this).hasClass("done"))) {
          $(this).addClass((m++).toString());
          $(this).animate({left: 0 + "px"});
          $(this).animate({top: 0 + "px"});
          $("#1").remove();
          $("#2").remove();
        }
        else{
          $(this).css("display", "none");
        }
      });
    }
    else if(j == 12){
      counter++;
      console.log(counter);
      $("img").each(function(){
        if(!($(this).hasClass("done"))) {
          $(this).addClass((m++).toString());
          $(this).animate({left: 0 + "px"});
          $(this).animate({top: 0 + "px"});
          $("#3").remove();
        }
        else{
          $(this).css("display", "none");
        }
      });
    }
    else if(j == 14){
      counter++;
      console.log(counter);
      $("img").each(function(){
        if(!($(this).hasClass("done"))) {
          $(this).addClass((m++).toString());
          $(this).animate({left: 0 + "px"});
          $(this).animate({top: 0 + "px"});
          $("#3").remove();
        }
        else{
          $(this).css("display", "none");
        }
      });
    }
    else if(j == 15){

      counter++;
      console.log(counter);
      $("img").each(function(){
        if(!($(this).hasClass("done"))) {
          $(this).addClass((m++).toString());
          $(this).height("500px");
          $(this).width("600px");
          $(this).removeClass("col-1")
          $("#3").remove();
        }
        else{
          $(this).css("display", "none");
        }
      });
    }
  });
});
