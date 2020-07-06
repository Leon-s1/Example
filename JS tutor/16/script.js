var el_1 = document.getElementById('some-block');
var el_2 = document.getElementsByTagName('div');

function changeSingle(element){
  element.innerHTML = 'Here is some content';
}
function changeCollection(elements){
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = 'We all changed'
  }
}
var element = document.getElementById('test-link');
element.href = 'https://yandex.ru';

element.style.color = 'red';
element.style.background = 'black';
element.style.fontFamily = 'Arial';
