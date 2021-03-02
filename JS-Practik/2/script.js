// function fun1(){
// var sel = document.getElementById('mySelect').selectedIndex;
//     options = document.getElementById('mySelect').options;
//     alert('Выбрана опция ' + options[sel].text);
// }

// function fun1(){
//   var rng = document.getElementById('r1');
//   // var p = document.getElementById('one');
//   var i1 = document.getElementById('i1');
//   // p.innerHTML = rng.value;
//   i1.value = rng.value;
// }
function fun1(){
  var rng = document.getElementById('r1');
  var div = document.getElementById('test');
  div.style.width = rng.value+'px';
}
