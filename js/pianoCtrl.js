angular.module('app').controller('pianoCtrl', function($scope){



$(document).ready(function() {

  //
  // $('#c1').on('click', function(){
  // 		$('#c1').css({
  //       backgroundColor: 'yellow'
  //     })



    var audioElement = document.createElement('audio');

        // audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        var playnotewhite = function(note, audio){
            $(note).css({
              backgroundColor: 'red'
            });
            audioElement.play();
            setTimeout(function(){
              $(note).css({
                backgroundColor: 'transparent'
              });
            },500)
        }


        var playnoteblack = function(note, audio){
            $(note).css({
              backgroundColor: 'red'
            });
            audioElement.play();
            setTimeout(function(){
              $(note).css({
                backgroundColor: 'black'
              });
            },500)
        }



////////////////////////////////////////////////////////////////////
        $('.white-keys-container').on("click", function(event){
           var key = event.target.id;
           var audio = audioElement.setAttribute('src', 'notes/keys/'+key+'.mp3');
           playnotewhite("#"+key,audio);
        });

        $('.black-keys-container').on("click", function(event){
          // console.log(event);
           var key = event.target.id;
           var audio = audioElement.setAttribute('src', 'notes/keys/'+key+'.mp3');
           playnoteblack("#"+key,audio);
        });


        // $('#c1').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/C3.mp3');
        //   playnotewhite("#c1", audio);
        // });
        //
        // $('#csharp').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/Db3.mp3');
        //   playnoteblack("#csharp", audio);
        // });
        //
        // $('#d').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/D3.mp3');
        //   playnotewhite("#d", audio);
        // });
        //
        // $('#dsharp').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/Eb3.mp3');
        //   playnoteblack("#dsharp", audio);
        // });
        //
        // $('#e').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/E3.mp3');
        //   playnotewhite("#e", audio);
        // });
        //
        // $('#f').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/F3.mp3');
        //   playnotewhite("#f", audio);
        // });
        //
        // $('#fsharp').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/Gb3.mp3');
        //   playnoteblack("#fsharp", audio);
        // });
        //
        // $('#g').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/G3.mp3');
        //   playnotewhite("#g", audio);
        // });
        //
        // $('#gsharp').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/Ab3.mp3');
        //   playnoteblack("#gsharp", audio);
        // });
        //
        // $('#a').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/A3.mp3');
        //   playnotewhite("#a", audio);
        // });
        //
        // $('#asharp').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/Bb3.mp3');
        //   playnoteblack("#asharp", audio);
        // });
        //
        // $('#b').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/B3.mp3');
        //   playnotewhite("#b", audio);
        // });
        //
        // $('#c2').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/C4.mp3');
        //   playnotewhite("#c2", audio);
        // });



        $(document).on("keydown", function(e) {


          var key = e.which;


          if(key == "65"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/c1.mp3');
          var audio = new Audio('notes/keys/c1.mp3').play()

          playnotewhite("#c1", audio);
          }
          if(key == "87"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/csharp.mp3');
          var audio = new Audio('notes/keys/csharp.mp3').play()

          playnoteblack("#csharp", audio);
          }
          if(key == "83"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/d.mp3');
          var audio = new Audio('notes/keys/d.mp3').play()
          playnotewhite("#d", audio);
          }
          if(key == "69"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/dsharp.mp3');
          var audio = new Audio('notes/keys/dsharp.mp3').play()
          playnoteblack("#dsharp", audio);
          }
          if(key == "68"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/e.mp3');
          var audio = new Audio('notes/keys/e.mp3').play()
          playnotewhite("#e", audio);
          }
          if(key == "70"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/f.mp3');
          var audio = new Audio('notes/keys/f.mp3').play()
          playnotewhite("#f", audio);
          }
          if(key == "84"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/fsharp.mp3');
          var audio = new Audio('notes/keys/fsharp.mp3').play()
          playnoteblack("#fsharp", audio);
          }
          if(key == "71"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/g.mp3');
          var audio = new Audio('notes/keys/g.mp3').play()
          playnotewhite("#g", audio);
          }
          if(key == "89"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/gsharp.mp3');
          var audio = new Audio('notes/keys/gsharp.mp3').play()
          playnoteblack("#gsharp", audio);
          }
          if(key == "72"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/a.mp3');
          var audio = new Audio('notes/keys/a.mp3').play()
          playnotewhite("#a", audio);
          }
          if(key == "85"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/asharp.mp3');
          var audio = new Audio('notes/keys/asharp.mp3').play()
          playnoteblack("#asharp", audio);
          }
          if(key == "74"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/b.mp3');
          var audio = new Audio('notes/keys/b.mp3').play()
          playnotewhite("#b", audio);
          }
          if(key == "75"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/c2.mp3');
          var audio = new Audio('notes/keys/c2.mp3').play()
          playnotewhite("#c2", audio);
          }
        });





        // $(document).on("keydown", function(e) {
        //
        //   var key = e.which;
        //   if(key == "87"){
        //   var audio = audioElement.setAttribute('src', 'notes/keys/Db4.mp3');
        //   playnoteblack("#csharp", audio);
        //   }
        // });

        //
        // $('#csharp').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/Db4.mp3');
        //     $('#csharp').css({
        //       backgroundColor: 'pink'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#csharp').css({
        //         backgroundColor: 'black'
        //       });
        //     },1000)
        // });
        //
        // $('#d').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/D4.mp3');
        //     $('#d').css({
        //       backgroundColor: 'orange'
        //     });
        //     audioElement.play();
        //
        //     setTimeout(function(){
        //       $('#d').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        //
        // $('#dsharp').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/Eb4.mp3');
        //     $('#dsharp').css({
        //       backgroundColor: '#f9c775'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#dsharp').css({
        //         backgroundColor: 'black'
        //       });
        //     },1000)
        // });
        //
        // $('#e').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/E4.mp3');
        //     $('#e').css({
        //       backgroundColor: 'yellow'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#e').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        //
        // $('#f').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/F4.mp3');
        //     $('#f').css({
        //       backgroundColor: 'green'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#f').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        //
        // $('#fsharp').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/Gb4.mp3');
        //     $('#fsharp').css({
        //       backgroundColor: '#84ff84'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#fsharp').css({
        //         backgroundColor: 'black'
        //       });
        //     },1000)
        // });
        //
        // $('#g').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/G4.mp3');
        //     $('#g').css({
        //       backgroundColor: 'blue'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#g').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        //
        // $('#gsharp').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/Ab4.mp3');
        //     $('#gsharp').css({
        //       backgroundColor: '#84dcff'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#gsharp').css({
        //         backgroundColor: 'black'
        //       });
        //     },1000)
        // });
        //
        // $('#a').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/A4.mp3');
        //     $('#a').css({
        //       backgroundColor: '#0200a8'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#a').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        //
        // $('#b').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/B4.mp3');
        //     $('#b').css({
        //       backgroundColor: 'purple'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#b').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        //
        // $('#asharp').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/Bb4.mp3');
        //     $('#asharp').css({
        //       backgroundColor: '#c584ff'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#asharp').css({
        //         backgroundColor: 'black'
        //       });
        //     },1000)
        // });
        //
        // $('#c2').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/C5.mp3');
        //     $('#c2').css({
        //       backgroundColor: 'red'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#c2').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        // // $('.pause').click(function() {
        // //     audioElement.pause();
        // // });
        //




})

})
