/*Добавляем кнопку Закрыть (крестик) в конец элемента li*/
let myNodelist = document.getElementsByTagName('li');
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement('span');
  var txt = document.createTextNode('\u00D7');
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
/*Описываем событие Закрыть элемент li*/
let close = document.getElementsByClassName('close');
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    console.log(div);
    div.style.display = 'none';
  }
}
/*Добавляем функцию checked отмечено в элемент li*/
let list = document.querySelector('ul');
list.addEventListener ('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
/*Добавляем функцию добавления нового задания, элеменn li*/
function newElement() {
  let li = document.createElement('li');
  let inputValue = document.getElementById('myInput').value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert ('Поле не может быть пустым!')
  } else {
    document.getElementById('myUl').appendChild(li);
  }
  document.getElementById('myInput').value = '';   /*возвращает пустую строку после добавления input*/

  var span = document.createElement('span');
  var txt = document.createTextNode('\u00D7');
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = 'none';
    }
  }
}
