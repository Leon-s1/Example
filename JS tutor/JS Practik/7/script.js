function myMove() {
  let elem = document.getElementById('myAnimation');
  let pos = 0;
  let id = setInterval(frame, 10);

// Движение красного квадрата вперед
  function frame () {
    if (pos >= 350) {
      clearInterval(id);
      // reverse();
    } else {
      pos++;
          elem.style.top = pos + 'px';
          elem.style.left = pos + 'px';
    }
  }
}
// Движение красного квадрата назад
function Reverse(){
 var elem = document.getElementById("myAnimation");
 var pos = 350;
 var id = setInterval(frame, 10);
 function frame(){
  if(pos <= 0){
     clearInterval(id);
   // myMove();
  }else{
   pos--;
   elem.style.top = pos + 'px';
   elem.style.left = pos + 'px';
  }
 }
}
