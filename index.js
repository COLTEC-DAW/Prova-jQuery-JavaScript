soundManager.setup({
  // where to find flash audio SWFs, as needed
  url: '/path/to/swf-files/',
  onready: function() {


      var secretaria = soundManager.createSound({
        url: 'assets/audios/secretaria.mp3'
      });
      var evidencias = soundManager.createSound({
        url: 'assets/audios/evidencias.mp3'
      });

      $( "#card1" )
          .mouseover(function() {
              secretaria.play();
          })
          .mouseout(function (){
              secretaria.stop();
          });

      $( "#card2" )
          .mouseover(function() {
              evidencias.play();
          })
          .mouseout(function (){
              evidencias.stop();
          });


  }
});
