$(document).ready(function(){
  $("img").hover(function(){
       console.log("hover")
   });
   $("img").click(function(){
    
    var quartas = [1,2,3,4,5,6,7,8]
    var semi = [1,2,3,4]
    var final = [1,2]
     var vencedor
        if($(this).attr('id')%8==0&&$(this).attr('id')<16){
          $("#20").attr('src',$(this).attr('src'));
          quartas[0]=$(this).attr('id')
          trocaAdiante("#30",semi[0])
          trocaAdiante("#40",final[0])
        }
        else if($(this).attr('id')%8==1&&$(this).attr('id')<16){
          $("#24").attr('src',$(this).attr('src'));
          quartas[1]=$(this).attr('id')
          trocaAdiante("#30",semi[0])
          trocaAdiante("#40",final[0])
        }
        else if($(this).attr('id')%8==2&&$(this).attr('id')<16){
          $("#21").attr('src',$(this).attr('src'));
          quartas[2]=$(this).attr('id')
          trocaAdiante("#32",semi[1])
          trocaAdiante("#40",final[0])
        }
        else if($(this).attr('id')%8==3&&$(this).attr('id')<16){
          $("#25").attr('src',$(this).attr('src'));
          quartas[3]=$(this).attr('id')
          trocaAdiante("#32",semi[1])
          trocaAdiante("#40",final[0])
        }
        else if($(this).attr('id')%8==4&&$(this).attr('id')<16){
          $("#22").attr('src',$(this).attr('src'));
          quartas[4]=$(this).attr('id')
          trocaAdiante("#31",semi[2])
          trocaAdiante("#41",final[1])
        }
        else if($(this).attr('id')%8==5&&$(this).attr('id')<16){
          $("#26").attr('src',$(this).attr('src'));
          quartas[5]=$(this).attr('id')
          trocaAdiante("#31",semi[2])
          trocaAdiante("#41",final[1])
        }
        else if($(this).attr('id')%8==6&&$(this).attr('id')<16){
          $("#23").attr('src',$(this).attr('src'));
          quartas[6]=$(this).attr('id')
          trocaAdiante("#33",semi[3])
          trocaAdiante("#41",final[1])
        }
        else if($(this).attr('id')%8==7&&$(this).attr('id')<16){
          $("#27").attr('src',$(this).attr('src'));
          quartas[7]=$(this).attr('id')
          trocaAdiante("#33",semi[3])
          trocaAdiante("#41",final[1])
        }

        if($(this).attr('id')%4==0&&$(this).attr('id')<28&&$(this).attr('id')>19){
          $("#30").attr('src',$(this).attr('src'));
          semi[0]=$(this).attr('id')
          trocaAdiante("#40",final[0])
        }
        if($(this).attr('id')%4==1&&$(this).attr('id')<28&&$(this).attr('id')>19){
          $("#32").attr('src',$(this).attr('src'));
          semi[1]=$(this).attr('id')
          trocaAdiante("#40",final[0])
        }
        if($(this).attr('id')%4==2&&$(this).attr('id')<28&&$(this).attr('id')>19){
          $("#31").attr('src',$(this).attr('src'));
          semi[2]=$(this).attr('id')
          trocaAdiante("#41",final[1])
        }
        if($(this).attr('id')%4==3&&$(this).attr('id')<28&&$(this).attr('id')>19){
          $("#33").attr('src',$(this).attr('src'));
          semi[3]=$(this).attr('id')
          trocaAdiante("#41",final[1])
        }


        if($(this).attr('id')%2==0&&$(this).attr('id')<34&&$(this).attr('id')>29){
          $("#40").attr('src',$(this).attr('src'));
          final[0]=$(this).attr('id')
          trocaAdiante("#50",vencedor)
        }
        if($(this).attr('id')%2==1&&$(this).attr('id')<34&&$(this).attr('id')>29){
          $("#41").attr('src',$(this).attr('src'));
          final[1]=$(this).attr('id')
          trocaAdiante("#50",vencedor)
        }


        if($(this).attr('id')==40&&$(this).attr('src')!=""){
          $("#50").attr('src',$("#40").attr('src'))
          vencedor=$(this).attr('id')
          console.log(quartas)
          console.log(semi)
          console.log(final)
          console.log(vencedor)
          alert("ACABOU ESSA MERDA")



        } else if($(this).attr('id')==41&&$(this).attr('src')!=""){
          $("#50").attr('src',$("#41").attr('src'))
          vencedor=$(this).attr('id')
          console.log(quartas)
          console.log(semi)
          console.log(final)
          console.log(vencedor)
          alert("ACABOU ESSA MERDA")
        }


    });
    $("#botaNome").click(function(){
      var nomeDoUsuario
      var p = document.createElement("p");
      var node = document.createTextNode("Elaborado por" + nomeDoUsuario);
      p.appendChild(node);
      var element = document.getElementById("nome");
      element.appendChild(p);
      });
});

function trocaAdiante(id, position){
  if(position!=null){
    $(id).attr('src',$(this).attr('src'));
  }
}
