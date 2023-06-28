
var button = document.getElementById("hi")
var playsongbutton = document.getElementById("playsong");
var body=document.body;
var hi = document.getElementById("war")
var song = document.createElement("audio");
song.src = "./hp.mp3";
var click = 0; 

button.addEventListener("click", function(){
hi.innerHTML = " herencia de patrones";

body.setAttribute("style", "background-color: blue");

});

playsongbutton.addEventListener("click", function(){
   click++; 
   song.play();
   if (click > 2){
      song.pause();
   }


});