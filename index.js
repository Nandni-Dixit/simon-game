 var lengthOfButtons = document.querySelectorAll(".drum").length;

 for(var i=0;i<lengthOfButtons;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonPressed = this.innerHTML;
       sound(buttonPressed);
       animate(buttonPressed);
    });
 }
 document.addEventListener("keydown",function(event){
   sound(event.key);
   animate(event.key);
 });
//  Funtion responsible for making sound
 function sound(key){
   switch(key) {
      case "W":
         var W = new Audio('./sounds/tom-1.mp3');
         W.play();
         break;
      case "A":
         var A = new Audio('./sounds/tom-2.mp3');
         A.play();
         break;
      case "S":
         var S = new Audio('./sounds/tom-3.mp3');
         S.play();
        break;
      case "D":
         var D = new Audio('./sounds/tom-4.mp3');
         D.play();
        break;
      case "J":
         var J = new Audio('./sounds/crash.mp3');
         J.play();
         break;
      case "K":
         var K = new Audio('./sounds/kick-bass.mp3');
         K.play();
         break;
      case "L":
         var L = new Audio('./sounds/snare.mp3');
         L.play();
         break;
         case "w":
         var w = new Audio('./sounds/tom-1.mp3');
         w.play();
         break;
      case "a":
         var a = new Audio('./sounds/tom-2.mp3');
         a.play();
         break;
      case "s":
         var s = new Audio('./sounds/tom-3.mp3');
         s.play();
        break;
      case "d":
         var d = new Audio('./sounds/tom-4.mp3');
         d.play();
        break;
      case "j":
         var j = new Audio('./sounds/crash.mp3');
         j.play();
         break;
      case "k":
         var k = new Audio('./sounds/kick-bass.mp3');
         k.play();
         break;
      case "l":
         var l = new Audio('./sounds/snare.mp3');
         l.play();
         break;
  
   }
 }
//  Function for animation
function animate(k){
   var keyPress = document.querySelector("."+ k );
   keyPress.classList.add("pressed");
   setTimeout(function(){
      keyPress.classList.remove("pressed");
   },100);
}
  